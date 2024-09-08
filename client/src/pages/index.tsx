import RestaurantCard from "@/components/RestaurantCard";
import { contractAddresses } from "@/config/constants";
import { s2RnftAbi, stake2ReserveAbi } from "@/generated";
import { HStack, Text, VStack, Table, TableContainer, Tbody, Tr, Th } from "@chakra-ui/react";
import Head from "next/head";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import S2RLayout from "@/components/S2RLayout";
import { zeroAddress } from "viem";
import ReservationTr from "@/components/ReservationTr";

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
                    {isConnected && nftIds && nftIds?.length !== 0 ? (
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
                                    {nftIds.map((nftId, i) => (
                                        <ReservationTr nftId={nftId} />
                                    ))}
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
                    )}
                </VStack>
            </S2RLayout>
        </>
    );
}
