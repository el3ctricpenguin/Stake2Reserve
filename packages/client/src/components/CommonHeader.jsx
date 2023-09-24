import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Heading,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectModal from "./ConnectModal";
import { useAccount, useDisconnect, useEnsName, useNetwork } from "wagmi";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/prop-types
export default function CommonHeader({ hasConnected, checkAccount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { chain, chains } = useNetwork();
  console.log(chain, chains);
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
    if (isConnected) return ensName ?? compactAddress(address);
    if (hasConnected) return ensName ?? compactAddress(checkAccount);
    return "Connect Wallet";
  }

  return (
    <Flex gap="2" py="8">
      <Link to="/">
        <Heading size="md">stake2reserve</Heading>
      </Link>
      {/* <Image border="1px" maxH="50" src="/Stake2Reserve.png" /> */}

      <Spacer />

      {isConnected || hasConnected ? (
        <Menu>
          <MenuButton width="180px" as={Button} rightIcon={<ChevronDownIcon />}>
            {renderButtonText()}
          </MenuButton>
          <MenuList width="180px" minWidth="180px">
            <MenuItem onClick={moveMyPage}>MyPage</MenuItem>
            <MenuItem onClick={disconnectWallet}>Disconnected</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button width="180px" onClick={onOpen}>
          {renderButtonText()}
        </Button>
      )}

      {/* Modal Modal Modal */}
      <ConnectModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
