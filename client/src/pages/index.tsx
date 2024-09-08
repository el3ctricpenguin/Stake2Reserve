import RestaurantCard from "@/components/RestaurantCard";
import { contractAddresses } from "@/config/constants";
import { s2RnftAbi, stake2ReserveAbi } from "@/generated";
import { Box, HStack, Text, Image, Button, VStack, Table, TableCaption, TableContainer, Tbody, Td, Tr, Th } from "@chakra-ui/react";
import Head from "next/head";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import NextLink from "next/link";
import S2RLayout from "@/components/S2RLayout";
import { zeroAddress } from "viem";

function getDateTimeFromUnixTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return `${month}-${day} ${hours}:${minutes}`;
}

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
    const { data: nftIds } = useReadContract({
        address: contractAddresses.S2RNFT,
        abi: s2RnftAbi,
        functionName: "getTokenIdsByOwner",
        args: [address ? address : zeroAddress],
    });
    console.log("nftIds: ", nftIds);
    const { data: reservationData } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getReservationData",
        args: [nftIds ? nftIds[0] : BigInt(0)],
    });
    console.log("reservationData: ", reservationData);

    return (
        <>
            <Head>
                <title>Stake2Reserve</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <S2RLayout>
                <VStack spacing={5}>
                    <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center">
                        Restaurants
                    </Text>
                    <HStack justify="space-around">
                        {shopAddresses?.map((address, i) => (
                            <RestaurantCard key={i} restaurantAddress={address} />
                        ))}
                    </HStack>
                    <Text fontSize={32} fontWeight="bold" textDecoration="underline" textAlign="center">
                        Reservations
                    </Text>
                    {isConnected &&
                        (reservationData ? (
                            <TableContainer w="80%" mt={-2}>
                                <Table size="sm">
                                    <Tbody>
                                        <Tr>
                                            <Th fontSize={14} borderColor="gray.900">
                                                Restaurant
                                            </Th>
                                            <Th fontSize={14} borderColor="gray.900">
                                                Time
                                            </Th>
                                            <Th fontSize={14} borderColor="gray.900">
                                                Guests
                                            </Th>
                                        </Tr>
                                        <Tr>
                                            <Td fontSize={16} borderColor="gray.900">
                                                {reservationData.shopName}
                                            </Td>
                                            <Td fontSize={16} borderColor="gray.900">
                                                {getDateTimeFromUnixTimestamp(Number(reservationData.startingTime))}
                                            </Td>
                                            <Td fontSize={16} borderColor="gray.900">
                                                {reservationData.guestCount.toString()}
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <HStack>
                                <Text textAlign="center">
                                    ------------------------------
                                    <br />
                                    * No Reservation Found *
                                    <br />
                                    ------------------------------
                                </Text>
                            </HStack>
                        ))}
                </VStack>
            </S2RLayout>
        </>
    );
}
