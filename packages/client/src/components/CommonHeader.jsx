import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  VStack,
  useDisclosure,
  Link as ChackraLink,
} from "@chakra-ui/react";
import { MetaMaskIcon } from "./Icon";
import { Link } from "react-router-dom";

export default function CommonHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Heading size="md">stake2reserve</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button onClick={onOpen} colorScheme="teal">
          Connected Wallet
        </Button>
      </ButtonGroup>
      {/* Modal ----= */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect a wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody py="2">
            <Container maxW="xl" centerContent>
              <VStack>
                <Button onClick={onClose} minWidth="240px" height="60px">
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
    </Flex>
  );
}
