import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Card, CardBody, VStack, Button, Text, Image, Skeleton } from "@chakra-ui/react";
import { Address } from "viem";
import { useReadContract } from "wagmi";

export default function RestaurantCard({ restaurantAddress }: { restaurantAddress: Address }) {
    const {
        data: shopStatus,
        isLoading,
        error,
    } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopStatus",
        args: [restaurantAddress],
    });
    console.log("shopStatus: ", shopStatus, error);
    return (
        <Card w={200} borderRadius={10} bgColor="white" border="3px solid black">
            <Skeleton isLoaded={!isLoading}>
                <Image src={shopStatus && shopStatus.imageURL} w="full" borderTopRadius={7} />
            </Skeleton>
            <CardBody p={3}>
                <VStack spacing={1}>
                    <Text color="gray.900" fontSize={20} fontWeight="bold">
                        {shopStatus?.name}
                    </Text>
                    <Button variant="red">Reserve!</Button>
                </VStack>
            </CardBody>
        </Card>
    );
}
