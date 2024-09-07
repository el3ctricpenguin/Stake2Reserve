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
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import NextLink from "next/link";
import S2RLayout from "@/components/S2RLayout";
import { wagmiConfig } from "@/config/wagmi";
import { useState } from "react";
import { waitForTransactionReceipt } from "wagmi/actions";

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

const NY_SUMMER_TIME_DIFF = -13; // 日本時間とNT夏時間の時差

export default function ShopDetail() {
    const { isConnected, address } = useAccount();

    const router = useRouter();
    const shopAddress = router.query.shopAddress ? (router.query.shopAddress as string) : zeroAddress;

    const {
        data: shopStatus,
        isLoading,
        error,
    } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getShopStatus",
        args: [getAddress(shopAddress)],
    });

    const [reservationDate, setReservationDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [guestCount, setGuestCount] = useState(1);

    const [isReserveTxWaiting, setIsReserveTxWaiting] = useState(false);
    const { writeContractAsync } = useWriteContract();

    async function reserve() {
        setIsReserveTxWaiting(true);
        try {
            const reservationStartTime = new Date(`${reservationDate}T${startTime}:00`).getTime() / 1000 + 60 * 60 * NY_SUMMER_TIME_DIFF;
            const reservationEndTime = reservationStartTime + 60 * 60;
            console.log("reservationStartTime", reservationStartTime);
            console.log("reservationEndTime", reservationEndTime);
            const courseId = 1;
            const reserveTxHash = await writeContractAsync({
                abi: stake2ReserveAbi,
                address: contractAddresses.S2R,
                functionName: "reserve",
                args: [
                    getAddress(shopAddress),
                    BigInt(reservationStartTime),
                    BigInt(reservationEndTime),
                    BigInt(guestCount),
                    BigInt(courseId),
                ],
            });
            const reserveReceipt = await waitForTransactionReceipt(wagmiConfig, { hash: reserveTxHash });
            console.log("reserveReceipt: ", reserveReceipt);
            setIsReserveTxWaiting(false);
        } catch (error) {
            console.error(error);
            setIsReserveTxWaiting(false);
        }
    }

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
                                    <Td fontSize={16} borderColor="gray.900">
                                        Genre
                                    </Td>
                                    <Td fontSize={16} borderColor="gray.900">
                                        {shopStatus?.genre}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize={16} borderColor="gray.900">
                                        Opening Hours
                                    </Td>
                                    <Td fontSize={16} borderColor="gray.900">
                                        {getTimeFromBigInt(shopStatus?.openingTime)}-{getTimeFromBigInt(shopStatus?.closingTime)}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontSize={16} borderColor="gray.900">
                                        Opening Days
                                    </Td>
                                    <Td fontSize={16} borderColor="gray.900">
                                        {shopStatus?.openingWeekDays && getAvailableDays(shopStatus?.openingWeekDays)}
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <FormControl as={VStack} spacing={4}>
                        <HStack w="full" justify="space-around" align="end">
                            <VStack align="start" spacing={0} flex={2}>
                                <FormLabel m={0}>Date</FormLabel>
                                <Input
                                    type="date"
                                    border="2px solid black"
                                    borderRadius={10}
                                    _hover={{ borderColor: "black" }}
                                    _focusVisible={{ borderColor: "black", outline: "none" }}
                                    value={reservationDate}
                                    onChange={(e) => setReservationDate(e.target.value)}
                                />
                            </VStack>
                            <VStack align="start" spacing={0} flex={2}>
                                <FormLabel m={0}>Start Time</FormLabel>
                                <Input
                                    type="time"
                                    border="2px solid black"
                                    borderRadius={10}
                                    _hover={{ borderColor: "black" }}
                                    _focusVisible={{ borderColor: "black", outline: "none" }}
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                            </VStack>
                            <VStack align="start" spacing={0} flex={1} minW="80px">
                                <FormLabel m={0}>Guest count</FormLabel>
                                <NumberInput min={1} max={10} value={guestCount} w="full">
                                    <NumberInputField
                                        border="2px solid black"
                                        borderRadius={10}
                                        _hover={{ borderColor: "black" }}
                                        _focusVisible={{ borderColor: "black", outline: "none" }}
                                        onChange={(e) => setGuestCount(Number(e.target.value))}
                                    />
                                    <NumberInputStepper borderColor="black">
                                        <NumberIncrementStepper borderColor="black" onClick={() => setGuestCount(guestCount + 1)} />
                                        <NumberDecrementStepper
                                            borderColor="black"
                                            onClick={() => setGuestCount(guestCount > 1 ? guestCount - 1 : guestCount)}
                                        />
                                    </NumberInputStepper>
                                </NumberInput>
                            </VStack>
                            <Button
                                variant="red"
                                borderRadius={10}
                                minW="150px"
                                flex={1}
                                isLoading={isReserveTxWaiting}
                                loadingText="Reserving"
                                onClick={() => reserve()}
                            >
                                Reserve
                            </Button>
                        </HStack>
                    </FormControl>
                    <Text>reservationDate: {reservationDate}</Text>
                    <Text>startTime: {startTime}</Text>
                    <Text>guestCount: {guestCount}</Text>
                    <Button variant="darkGray" as={NextLink} href="/">
                        Go back to home
                    </Button>
                </VStack>
            </S2RLayout>
        </>
    );
}
