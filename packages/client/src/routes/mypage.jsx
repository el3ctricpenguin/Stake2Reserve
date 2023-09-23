import { Heading, Link as ChackraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <>
      <ChackraLink as={Link} to="/restaurant/registration">
        register as restaurant
      </ChackraLink>

      <Heading>This is MyPage</Heading>
      <Heading>NFT</Heading>
    </>
  );
}
