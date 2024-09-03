import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Box, Card, CardBody, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { zeroAddress } from "viem";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";

export default function Home() {
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { isConnected, address } = useAccount();

    const { data: shopAddresses } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopAddresses",
        args: [],
    });
    console.log("shopAddresses: ", shopAddresses);
    const { data: shopStatus, error } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopStatus",
        args: [shopAddresses ? shopAddresses[0] : zeroAddress],
    });
    console.log("shopStatus: ", shopStatus, error);

    return (
        <>
            <Head>
                <title>Stake2Reserve</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box w="full">
                <Box margin="0 auto" w={{ base: 600, md: "80%" }}>
                    <HStack justify="space-between" mt={10} mb={4}>
                        <Image src="/img/Stake2Reserve.svg" alt="Stake2Reserve logo" h={50} />
                        <Box bgColor="white" border="4px solid black" borderRadius={15} px={5} py={1}>
                            <Text fontSize={22} fontWeight="bold" p={0} m={0}>
                                {isConnected
                                    ? address
                                        ? address.slice(0, 6) + "..." + address.slice(-6)
                                        : "Unknown Address"
                                    : "0x0000...000000"}
                            </Text>
                        </Box>
                    </HStack>

                    <Box bgColor="white" border="4px solid black" borderRadius={15}>
                        <VStack>
                            <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center" my={5}>
                                Restaurants
                            </Text>
                            <HStack justify="space-around">
                                <Card w={200} borderRadius={10} bgColor="white" border="3px solid black">
                                    <Image src={shopStatus?.imageURL} w="full" borderTopRadius={7} />
                                    <CardBody p={3}>
                                        <VStack spacing={1}>
                                            <Text color="gray.900" fontSize={20} fontWeight="bold">
                                                {shopStatus?.name}
                                            </Text>
                                            <Button variant="red">Reserve!</Button>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                            <HStack justify="center" my={4}>
                                <Button
                                    variant="red"
                                    onClick={!isConnected ? () => connect({ connector: connectors[0] }) : () => disconnect()}
                                >
                                    {!isConnected ? "Connect Wallet" : "Disconnect"}
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
