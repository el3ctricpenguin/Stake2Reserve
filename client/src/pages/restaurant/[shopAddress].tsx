import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import {
    Box,
    HStack,
    Text,
    Image,
    Button,
    VStack,
    Skeleton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
    TableCaption,
    SkeletonText,
    FormControl,
    Input,
    FormLabel,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from "@chakra-ui/react";
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
                        <Skeleton isLoaded={!isLoading} aspectRatio={1 / 1}>
                            <Image alt={shopStatus?.name + " image"} src={shopStatus?.imageURL} />
                        </Skeleton>
                    </Box>
                    <SkeletonText isLoaded={!isLoading} noOfLines={4} spacing="4" skeletonHeight="3">
                        {shopStatus?.description}
                    </SkeletonText>
                    <TableContainer w="80%" mt={-5}>
                        <Table size="sm">
                            <TableCaption placement="top" fontSize="lg" color="gray.900" m={0} textDecoration="underline" mt={2}>
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
                    <FormControl as={VStack} spacing={4}>
                        <HStack w="full" justify="space-around">
                            <VStack align="start" spacing={0}>
                                <FormLabel m={0} w="20%">
                                    Date
                                </FormLabel>
                                <Input
                                    type="date"
                                    border="2px solid black"
                                    borderRadius={10}
                                    _hover={{ borderColor: "black" }}
                                    _focusVisible={{ borderColor: "black", outline: "none" }}
                                />
                            </VStack>
                            <VStack align="start" spacing={0} w="30%">
                                <FormLabel m={0}>Start Time</FormLabel>
                                <Input
                                    type="time"
                                    border="2px solid black"
                                    borderRadius={10}
                                    _hover={{ borderColor: "black" }}
                                    _focusVisible={{ borderColor: "black", outline: "none" }}
                                />
                            </VStack>
                            <VStack align="start" spacing={0} w="30%">
                                <FormLabel m={0}>End Time</FormLabel>
                                <Input
                                    type="time"
                                    border="2px solid black"
                                    borderRadius={10}
                                    _hover={{ borderColor: "black" }}
                                    _focusVisible={{ borderColor: "black", outline: "none" }}
                                />
                            </VStack>
                            <VStack align="start" spacing={0} w="20%">
                                <FormLabel m={0}>Guest count</FormLabel>
                                <NumberInput defaultValue={1} min={1} max={10} w="full">
                                    <NumberInputField
                                        border="2px solid black"
                                        borderRadius={10}
                                        _hover={{ borderColor: "black" }}
                                        _focusVisible={{ borderColor: "black", outline: "none" }}
                                    />
                                    <NumberInputStepper borderColor="black">
                                        <NumberIncrementStepper borderColor="black" />
                                        <NumberDecrementStepper borderColor="black" />
                                    </NumberInputStepper>
                                </NumberInput>
                            </VStack>
                        </HStack>
                        <HStack justify="center">
                            <Button variant="red">Reserve</Button>
                        </HStack>
                    </FormControl>
                    <Button variant="darkGray" as={NextLink} href="/">
                        Go back to home
                    </Button>
                </VStack>
            </S2RLayout>
        </>
    );
}
