import RestaurantCard from "@/components/RestaurantCard";
import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Box, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import NextLink from "next/link";
import S2RLayout from "@/components/S2RLayout";

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
                </VStack>
            </S2RLayout>
        </>
    );
}
