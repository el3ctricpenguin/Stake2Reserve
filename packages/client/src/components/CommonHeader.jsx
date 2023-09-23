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

// eslint-disable-next-line react/prop-types
export default function CommonHeader({ hasConnected, checkAccount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();

  function compactAddress(addr) {
    return addr.slice(0, 4) + "..." + addr.slice(-4);
  }

  function renderConnectButton() {
    if (isConnected) return <Button>{compactAddress(address)}</Button>;
    if (hasConnected) return <Button>{compactAddress(checkAccount)}</Button>;
    return <Button onClick={onOpen}>Connect Wallet</Button>;
  }

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Heading size="md">stake2reserve</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">{renderConnectButton()}</ButtonGroup>
      {/* Modal Modal Modal */}
      <ConnectModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
