import { Wrap, WrapItem } from "@chakra-ui/react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  return (
    <Wrap spacing="24px">
      <WrapItem>
        <RestaurantCard />
      </WrapItem>
      <WrapItem>
        <RestaurantCard />
      </WrapItem>
      <WrapItem>
        <RestaurantCard />
      </WrapItem>
      <WrapItem>
        <RestaurantCard />
      </WrapItem>
    </Wrap>
  );
}
