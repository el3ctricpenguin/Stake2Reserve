import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Box, HStack, Text, Image, Button, VStack, Skeleton, Table, TableContainer, Tbody, Td, Tr, TableCaption } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAddress, zeroAddress } from "viem";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import NextLink from "next/link";
import S2RLayout from "@/components/S2RLayout";

function getTimeFromBigInt(time: bigint = BigInt(0)) {
    const hour = time / BigInt(60 * 60);
    const minute = (time % BigInt(60 * 60)) / BigInt(60);
    return hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0");
}

function getAvailableDays(daysArray: readonly boolean[]) {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const openingDays = daysArray.map((isOpen, i) => (isOpen ? weekDays[i] : null)).filter(Boolean);
    return openingDays.toString();
}

export default function ShopDetail() {
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { isConnected, address } = useAccount();

    const router = useRouter();
    const shopAddresses = router.query.shopAddress ? (router.query.shopAddress as string) : zeroAddress;
    console.log("shopAddresses: ", shopAddresses);

    const {
        data: shopStatus,
        isLoading,
        error,
    } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopStatus",
        args: [getAddress(shopAddresses)],
    });
    console.log("shopStatus: ", shopStatus, error);

    return (
        <>
            <Head>
                <title>Stake2Reserve</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <S2RLayout>
                <VStack px={10} py={6} spacing={5}>
                    <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center">
                        {isLoading ? "Restaurant" : shopStatus?.name}
                    </Text>
                    <Box w="33%" borderRadius={10} border="3px solid black">
                        <Skeleton isLoaded={!isLoading}>
                            <Image alt={shopStatus?.name + " image"} src={shopStatus?.imageURL} />
                        </Skeleton>
                    </Box>
                    <Text>{shopStatus?.description}</Text>
                    <TableContainer w="80%" mt={-5}>
                        <Table size="sm">
                            <TableCaption placement="top" fontSize="lg" color="gray.900" m={0}>
                                Restaurant Infomation
                            </TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td fontSize={16}>Genre</Td>
                                    <Td fontSize={16}>{shopStatus?.genre}</Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize={16}>Opening Hours</Td>
                                    <Td fontSize={16}>
                                        {getTimeFromBigInt(shopStatus?.openingTime)}-{getTimeFromBigInt(shopStatus?.closingTime)}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize={16}>Opening Days</Td>
                                    <Td fontSize={16}>{shopStatus?.openingWeekDays && getAvailableDays(shopStatus?.openingWeekDays)}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </VStack>
            </S2RLayout>
        </>
    );
}
