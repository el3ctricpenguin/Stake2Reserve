import { contractAddresses } from "@/config/constants";
import { stake2ReserveAbi } from "@/generated";
import { Td, Tr } from "@chakra-ui/react";
import NextLink from "next/link";
import { useReadContract } from "wagmi";

function getDateTimeFromUnixTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return `${month}-${day} ${hours}:${minutes}`;
}

export default function ReservationTr({ nftId }: { nftId: bigint }) {
    const { data: reservationData } = useReadContract({
        address: contractAddresses.S2R,
        abi: stake2ReserveAbi,
        functionName: "getReservationData",
        args: [nftId],
    });
    console.log("reservationData: ", reservationData);
    return (
        <>
            {reservationData && (
                <Tr>
                    <Td fontSize={16} borderColor="gray.900">
                        <NextLink href={`/reservation/${nftId.toString()}`}>{reservationData.shopName}</NextLink>
                    </Td>
                    <Td fontSize={16} borderColor="gray.900">
                        <NextLink href={`/reservation/${nftId.toString()}`}>
                            {getDateTimeFromUnixTimestamp(Number(reservationData.startingTime))}
                        </NextLink>
                    </Td>
                    <Td fontSize={16} borderColor="gray.900">
                        <NextLink href={`/reservation/${nftId.toString()}`}>{reservationData.guestCount.toString()}</NextLink>
                    </Td>
                </Tr>
            )}
        </>
    );
}
