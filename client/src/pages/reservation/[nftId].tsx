import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Box, HStack, Text, Image, Button, VStack, Table, TableContainer, Tbody, Th, Tr, Td, Skeleton } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAccount, useReadContract } from "wagmi";
import NextLink from "next/link";
import S2RLayout from "@/components/S2RLayout";
import { getDateTimeFromUnixTimestamp } from "@/components/ReservationTr";
import { getAddress, zeroAddress } from "viem";

export default function ShopDetail() {
    const { isConnected, address } = useAccount();

    const router = useRouter();
    const nftId = BigInt(Number(router.query.nftId ? router.query.nftId : 0).toString());

    const { data: reservationData } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getReservationData",
        args: [nftId],
    });
    console.log("reservationData: ", reservationData);

    const { data: shopData, isLoading } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopStatus",
        args: [getAddress(reservationData?.shopAddress ? reservationData?.shopAddress : zeroAddress)],
    });
    console.log("shopData: ", shopData);

    const { data: course } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getCourse",
        args: [getAddress(reservationData?.shopAddress ? reservationData?.shopAddress : zeroAddress), BigInt(0)],
    });

    return (
        <>
            <Head>
                <title>Stake2Reserve</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <S2RLayout>
                <VStack px={10} py={6} spacing={5}>
                    <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center">
                        {reservationData ? reservationData.shopName : "***"}
                    </Text>
                    <Box w="33%" borderRadius={10} border="3px solid black">
                        <Skeleton isLoaded={!isLoading} aspectRatio={1 / 1}>
                            <Image alt={shopData?.name + " image"} src={shopData?.imageURL} />
                        </Skeleton>
                    </Box>

                    <Text fontSize={21} fontWeight="bold" textDecoration="underline" textAlign="center">
                        Course Information
                    </Text>
                    {course && (
                        <VStack>
                            <Text>{course?.name}</Text>
                            <HStack>
                                {course?.imageURLs.map((url, i) => (
                                    <Image src={url} key={i} alt="" h={120} />
                                ))}
                            </HStack>
                        </VStack>
                    )}

                    <Text fontSize={21} fontWeight="bold" textDecoration="underline" textAlign="center">
                        Reservation Information
                    </Text>
                    {reservationData && (
                        <TableContainer w="100%" mt={-2}>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Th fontSize={14} borderColor="gray.900">
                                            Date
                                        </Th>
                                        <Th fontSize={14} borderColor="gray.900">
                                            Start Time
                                        </Th>
                                        <Th fontSize={14} borderColor="gray.900">
                                            End Time
                                        </Th>
                                        <Th fontSize={14} borderColor="gray.900">
                                            Guests
                                        </Th>
                                        <Th fontSize={14} borderColor="gray.900">
                                            Course
                                        </Th>
                                    </Tr>
                                    <Tr>
                                        <Td fontSize={16} borderColor="gray.900">
                                            {getDateTimeFromUnixTimestamp(Number(reservationData.startingTime)).split(" ")[0]}
                                        </Td>
                                        <Td fontSize={16} borderColor="gray.900">
                                            {getDateTimeFromUnixTimestamp(Number(reservationData.startingTime)).split(" ")[1]}
                                        </Td>
                                        <Td fontSize={16} borderColor="gray.900">
                                            {getDateTimeFromUnixTimestamp(Number(reservationData.endingTime)).split(" ")[1]}
                                        </Td>
                                        <Td fontSize={16} borderColor="gray.900">
                                            {reservationData.guestCount.toString()}
                                        </Td>
                                        <Td fontSize={16} borderColor="gray.900">
                                            {course?.name}
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                    <Button variant="darkGray" as={NextLink} href="/">
                        Go back to home
                    </Button>
                </VStack>
            </S2RLayout>
        </>
    );
}
