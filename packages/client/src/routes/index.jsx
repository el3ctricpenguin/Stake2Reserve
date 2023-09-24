import { Heading } from "@chakra-ui/react";
import RestaurantList from "../components/RestaurantList";
import Stake2ReserveABI from "../utils/Stake2Reserve.json";
import { Stake2ReserveAddress } from "../utils/utils";
import { useContractRead } from "wagmi";

export default function Index() {
  const {
    data: addresses,
    isLoading,
    isError,
  } = useContractRead({
    address: Stake2ReserveAddress,
    abi: Stake2ReserveABI.abi,
    functionName: "getShopAddresses",
  });

  if (isLoading) return <Heading>Loading</Heading>;
  if (isError) return <Heading>Error</Heading>;
  return (
    <>
      <Heading as="em">
        <u>Find a restaurant</u>
      </Heading>
      <RestaurantList addresses={addresses} />
    </>
  );
}
