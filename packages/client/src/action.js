import { BrowserProvider, Contract } from "ethers";
import { Stake2ReserveAddress } from "./utils/utils";
import Stake2ReserveABI from "./utils/Stake2Reserve.json";

// import { redirect } from "react-router-dom";

export async function registrationAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const name = data["res-name"];
  const description = data["res-description"];
  const genre = data["res-genre"];
  const imageURL = data["res-image"];
  const openWeekDays = data["res-weekdays"];
  const openingTime = data["res-openingTime"];
  const closingTime = data["res-closingTime"];
  // course
  const course1 = data["res-course1"];
  const cancelFee1 = data["res-cancel1"];
  const course2 = data["res-course2"];
  const cancelFee2 = data["res-cancel2"];
  const course3 = data["res-course3"];
  const cancelFee3 = data["res-cancel3"];
  const course4 = data["res-course4"];
  const cancelFee4 = data["res-cancel4"];
  const courseImg1 = data["res-course1-img"];
  const courseImg2 = data["res-course2-img"];
  const courseImg3 = data["res-course3-img"];
  const courseImg4 = data["res-course4-img"];

  const pcourse1 = {
    name: course1,
    cancelFee: cancelFee1,
    imageURLs: courseImg1,
  };
  const pcourse2 = {
    name: course2,
    cancelFee: cancelFee2,
    imageURLs: courseImg2,
  };
  const pcourse3 = {
    name: course3,
    cancelFee: cancelFee3,
    imageURLs: courseImg3,
  };
  const pcourse4 = {
    name: course4,
    cancelFee: cancelFee4,
    imageURLs: courseImg4,
  };

  const courses = [pcourse1, pcourse2, pcourse3, pcourse4];

  console.log(
    name,
    description,
    genre,
    imageURL,
    openWeekDays,
    openingTime,
    closingTime
  );

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
      await contract.registerShopProperty(
        name,
        openWeekDays,
        openingTime,
        closingTime,
        courses,
        imageURL,
        genre,
        description
      );
      console.log("registration....");
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }

  return {};
}
