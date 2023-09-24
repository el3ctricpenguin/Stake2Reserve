import { Heading } from "@chakra-ui/react";
import RestaurantList from "../components/RestaurantList";

export default function Index() {
  return (
    <>
      <Heading as="em">
        <u>Find a restaurant</u>
      </Heading>
      <RestaurantList />
    </>
  );
}
