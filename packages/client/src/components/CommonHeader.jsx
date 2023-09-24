import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectModal from "./ConnectModal";
import { useAccount, useDisconnect } from "wagmi";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CommonHeader({ hasConnected, checkAccount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  function moveMyPage() {
    navigate("/users/mypage");
  }

  function disconnectWallet() {
    disconnect();
    navigate("/");
  }

  function compactAddress(addr) {
    return addr.slice(0, 4) + "..." + addr.slice(-4);
  }

  function renderButtonText() {
    if (isConnected) return compactAddress(address);
    if (hasConnected) return compactAddress(checkAccount);
    return "Connect Wallet";
  }

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Link to="/">
          <Heading size="md">stake2reserve</Heading>
        </Link>
      </Box>
      <Spacer />
      {isConnected || hasConnected ? (
        <Menu>
          <MenuButton as={Button}>{renderButtonText()}</MenuButton>
          <MenuList>
            <MenuItem onClick={moveMyPage}>MyPage</MenuItem>
            <MenuItem onClick={disconnectWallet}>Disconnected</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={onOpen}>{renderButtonText()}</Button>
      )}
      {/* Modal Modal Modal */}
      <ConnectModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
