import {
  Box,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Link as ChackraLink,
} from "@chakra-ui/react";
import { MetaMaskIcon } from "./Icon";
import { Link } from "react-router-dom";

import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

// eslint-disable-next-line react/prop-types
export default function ConnectModal({ isOpen, onClose }) {
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  function connectWallet() {
    connect();
    if (!isLoading) {
      onClose();
    }
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect a wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody py="2">
          <Container maxW="xl" centerContent>
            <VStack>
              <Button onClick={connectWallet} minWidth="240px" height="60px">
                <MetaMaskIcon width="40px" height="40px" />
                <Box
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="lg"
                  ml="4"
                >
                  MetaMask
                </Box>
              </Button>
              <p>or</p>
              <ChackraLink
                as={Link}
                to="restaurant/registration"
                onClick={onClose}
              >
                <u>Register to your restaurant</u>
              </ChackraLink>
            </VStack>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
