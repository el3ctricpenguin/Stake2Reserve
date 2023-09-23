import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

export default function CommonHeader() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="4">
      <Box p="2">
        <Heading size="md">stake2reserve</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Connected Wallet</Button>
      </ButtonGroup>
    </Flex>
  );
}
