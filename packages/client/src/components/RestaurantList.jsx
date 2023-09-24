/* eslint-disable react/prop-types */
import { Wrap, WrapItem } from "@chakra-ui/react";
import RestaurantCard from "./RestaurantCard";
import { BrowserProvider, Contract } from "ethers";
import { Stake2ReserveAddress } from "../utils/utils";
import Stake2ReserveABI from "../utils/Stake2Reserve.json";
import { useEffect, useState } from "react";

export default function RestaurantList({ addresses }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function getShopsLoop() {
      const results = [];
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new Contract(
            Stake2ReserveAddress,
            Stake2ReserveABI.abi,
            signer
          );
          for (const addr of addresses) {
            const res = await contract.getShopStatus(addr);
            results.push({
              shop: res,
              address: addr,
            });
          }
          setRestaurants([...results]);
          // for (const addr of addresses) {
          //   results.push(contract.getShopStatus(addr));
          // }
          // const rests = await Promise.all(results);
          // setRestaurants([...rests]);
        } else {
          alert("Connected Wallet");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getShopsLoop();
  }, [addresses]);

  return (
    <Wrap spacing="24px">
      {restaurants.map((restaurant) => (
        <WrapItem key={restaurant.shop.name}>
          <RestaurantCard
            restaurantData={restaurant.shop}
            address={restaurant.address}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
