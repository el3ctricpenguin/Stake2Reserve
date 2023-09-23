import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectModal from "./ConnectModal";
import { useAccount } from "wagmi";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CommonHeader({ hasConnected, checkAccount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();

  function compactAddress(addr) {
    return addr.slice(0, 4) + "..." + addr.slice(-4);
  }

  function addressOnClick() {
    navigate("users/mypage");
  }

  function renderConnectButton() {
    if (isConnected)
      return (
        <Button onClick={addressOnClick}>{compactAddress(address)}</Button>
      );
    if (hasConnected)
      return (
        <Button onClick={addressOnClick}>{compactAddress(checkAccount)}</Button>
      );
    return <Button onClick={onOpen}>Connect Wallet</Button>;
  }

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Link to="/">
          <Heading size="md">stake2reserve</Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">{renderConnectButton()}</ButtonGroup>
      {/* Modal Modal Modal */}
      <ConnectModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
