import { Box, Heading } from "@chakra-ui/react";
import RestaurantList from "../components/RestaurantList";

export default function Index() {
  return (
    <>
      <Box>
        <Heading as="em">
          <u>Find a restaurant</u>
        </Heading>

        <RestaurantList />
      </Box>
    </>
  );
}
