import { Box, Heading, Link as ChackraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <>
      <Box bg="gray.50" textAlign="center" py="2">
        <ChackraLink as={Link} to="/restaurant/registration" color="purple.500">
          <u>register as restaurant →</u>
        </ChackraLink>
      </Box>

      <Heading as="em">
        <u>ReserveNFT</u>
      </Heading>
    </>
  );
}
