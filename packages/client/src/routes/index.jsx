import { Box, Heading } from "@chakra-ui/react";
import RestaurantList from "../components/RestaurantList";

export default function Index() {
  return (
    <>
      <Box>
        <Heading>Find Store</Heading>
        <RestaurantList />
      </Box>
    </>
  );
}
