import { Box, Card, CardBody, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
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
                                0x00000...00000
                            </Text>
                        </Box>
                    </HStack>

                    <Box bgColor="white" border="4px solid black" borderRadius={15}>
                        <VStack>
                            <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center" my={5}>
                                Restaurants
                            </Text>
                            <HStack justify="space-around">
                                <Card>
                                    <CardBody>aaa</CardBody>
                                </Card>
                            </HStack>
                            <HStack justify="center" my={4}>
                                <Button
                                    bgColor="brand.red"
                                    color="white"
                                    fontSize={20}
                                    px={4}
                                    py={2}
                                    border="3px solid black"
                                    borderRadius={20}
                                    _hover={{
                                        bgColor: "brand.redHover",
                                    }}
                                    _active={{
                                        bgColor: "brand.redHover",
                                    }}
                                >
                                    Connect Wallet
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
