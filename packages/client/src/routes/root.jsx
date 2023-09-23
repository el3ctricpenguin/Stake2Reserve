import { Container } from "@chakra-ui/react";
import CommonHeader from "../components/CommonHeader";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Root() {
  const { hasConnected, account } = useLoaderData();

  // console.log("Conn: ", hasConnected, account);

  return (
    <>
      <CommonHeader hasConnected={hasConnected} checkAccount={account} />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </>
  );
}
