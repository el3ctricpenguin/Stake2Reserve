import { Container } from "@chakra-ui/react";
import CommonHeader from "../components/CommonHeader";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <CommonHeader />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </>
  );
}
