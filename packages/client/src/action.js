import { BrowserProvider, Contract } from "ethers";
import { Stake2ReserveAddress } from "./utils/utils";
import Stake2ReserveABI from "./utils/Stake2Reserve.json";

import { redirect } from "react-router-dom";

/**
 * [MEMO]
 * これはトランザクションのサイズが大きすぎて失敗する
 * 画像のURLを送るときはIPFSなどの静的なサイズで扱う必要がある。
 */

export async function registrationAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const name = data["res-name"];
  const description = data["res-description"];
  const genre = data["res-genre"];
  const imageURL = data["res-image"];
  const openWeekDays = data["res-weekdays"]
    .split(",")
    .map((v) => (v === "true" ? true : false));
  const openingTime = data["res-openingTime"];
  const closingTime = data["res-closingTime"];
  // course
  const course1 = data["res-course1"];
  const cancelFee1 = data["res-cancel1"];
  const courseImg1 = data["res-course1-img"];

  const course2 = data["res-course2"];
  const cancelFee2 = data["res-cancel2"];
  const courseImg2 = data["res-course2-img"];

  const course3 = data["res-course3"];
  const cancelFee3 = data["res-cancel3"];
  const courseImg3 = data["res-course3-img"];

  const course4 = data["res-course4"];
  const cancelFee4 = data["res-cancel4"];
  const courseImg4 = data["res-course4-img"];

  const pcourse1 = {
    name: course1,
    cancelFee: Number(cancelFee1),
    imageURLs: [courseImg1],
  };
  const pcourse2 = {
    name: course2,
    cancelFee: Number(cancelFee2),
    imageURLs: [courseImg2],
  };
  const pcourse3 = {
    name: course3,
    cancelFee: Number(cancelFee3),
    imageURLs: [courseImg3],
  };
  const pcourse4 = {
    name: course4,
    cancelFee: Number(cancelFee4),
    imageURLs: [courseImg4],
  };

  const courses = [pcourse1, pcourse2, pcourse3, pcourse4].filter(
    (v) => v.name !== ""
  );

  console.log("NAME", name);
  console.log("OW", openWeekDays);
  console.log("OT", openingTime);
  console.log("CT", closingTime);
  console.log("COUR", courses);
  console.log("IMG", imageURL.slice(0, 10));
  console.log("DESC", description.slice(0, 10));
  console.log("genre", genre);

  // WEB3 ====================
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(
        Stake2ReserveAddress,
        Stake2ReserveABI.abi,
        signer
      );
      console.log(provider, signer, contract);
      console.log("sendTransaction");
      const tx = await contract.registerShopProperty(
        name,
        openWeekDays,
        openingTime,
        closingTime,
        courses,
        imageURL,
        genre,
        description
      );
      console.log(tx);
      const receipt = await tx.wait();
      console.log(receipt);
      console.log("registration....");
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }

  return redirect("/");
}
