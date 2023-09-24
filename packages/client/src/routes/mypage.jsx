import { Box, Heading, Link as ChackraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <>
      <Box
        bg="yellow.100"
        borderRadius="md"
        textAlign="center"
        py="4"
        mb="6"
        fontSize="2xl"
      >
        <ChackraLink as={Link} to="/restaurant/registration">
          Register your restaurant
        </ChackraLink>
      </Box>

      <Heading as="em">
        <u>ReserveNFT</u>
      </Heading>
    </>
  );
}
