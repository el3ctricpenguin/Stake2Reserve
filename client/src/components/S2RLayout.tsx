import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement } from "react";
import { useConnect, useDisconnect, useAccount } from "wagmi";

export default function S2RLayout({ children }: { children: ReactElement }) {
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { isConnected, address } = useAccount();
    return (
        <Box w="full">
            <Box margin="0 auto" w={{ base: 600, md: "80%" }}>
                <HStack justify="space-between" mt={10} mb={4}>
                    <NextLink href="/">
                        <Image src="/img/Stake2Reserve.svg" alt="Stake2Reserve logo" h={50} />
                    </NextLink>
                    <Box
                        bgColor="white"
                        border="4px solid black"
                        borderRadius={15}
                        px={5}
                        py={1}
                        onClick={() => disconnect()}
                        cursor={isConnected ? "pointer" : "auto"}
                    >
                        <Text fontSize={22} fontWeight="bold" p={0} m={0}>
                            {isConnected
                                ? address
                                    ? address.slice(0, 6) + "..." + address.slice(-6)
                                    : "Unknown Address"
                                : "0x0000...000000"}
                        </Text>
                    </Box>
                </HStack>
                <Box bgColor="white" border="4px solid black" borderRadius={15} px={10} py={6}>
                    {children}
                    {!isConnected && (
                        <HStack justify="center" my={4}>
                            <Button variant="red" onClick={!isConnected ? () => connect({ connector: connectors[0] }) : () => disconnect()}>
                                Connect Wallet
                            </Button>
                        </HStack>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
