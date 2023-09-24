import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Form, useLoaderData } from "react-router-dom";

import { BrowserProvider, Contract } from "ethers";

import Stake2ReserveABI from "../utils/Stake2Reserve.json";
import { Stake2ReserveAddress } from "../utils/utils";
import { useContractRead } from "wagmi";
import { useState, useEffect } from "react";

export default function Restaurant() {
  const [courses, setCourses] = useState([]);
  const { address } = useLoaderData();
  const { data, isLoading, isError } = useContractRead({
    address: Stake2ReserveAddress,
    abi: Stake2ReserveABI.abi,
    functionName: "getShopStatus",
    args: [address],
  });

  console.log("SSS", data);

  const {
    name,
    imageURL,
    genre,
    description,
    openingWeekDays,
    openingTime,
    closingTime,
  } = data;

  console.log(
    name,
    imageURL,
    genre,
    description,
    openingWeekDays,
    openingTime,
    closingTime
  );

  useEffect(() => {
    async function getShopsLoop() {
      const results = [];
      const MaybeCourseCount = 4;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new Contract(
            Stake2ReserveAddress,
            Stake2ReserveABI.abi,
            signer
          );
          for (let id = 0; id < MaybeCourseCount; id++) {
            const res = await contract.getCourses(address, id);
            res
              .catch((err) => {
                console.error(err);
              })
              .then(() => {
                results.push(res);
              });
          }
          setCourses([...results]);
        } else {
          alert("Connected Wallet");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getShopsLoop();
  }, [address]);

  console.log("CCCS", courses);

  if (isLoading) return <Heading>Loading</Heading>;
  if (isError) return <Heading>Error</Heading>;

  return (
    <>
      <Stack>
        <Container maxW="container.md">
          <Image objectFit="cover" src={imageURL} alt={name} />
        </Container>
        <Container maxW="container.md">
          <Heading>{name}</Heading>
          <Tag maxW="fit-content">{genre}</Tag>
          <Stack spacing="2" py="4">
            <Text>
              Address: <b>{address}</b>
            </Text>
            {/* <Text>{address}</Text> */}
            <Text>{description}</Text>
          </Stack>
        </Container>
        <Divider />
        <Container maxW="container.md" py="5">
          <Heading as="em">
            <u>Reservation</u>
          </Heading>
          <Form method="post">
            <Flex>
              <FormControl mb="4">
                <FormLabel>Reserversion Date</FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  name="res-datetime"
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>How many people?</FormLabel>
                <NumberInput defaultValue={2} min={1} name="res-count">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>

            <FormControl mb="4">
              <FormLabel>Select a course</FormLabel>
              <RadioGroup defaultValue="1">
                <Stack spacing={4} direction="row">
                  <Radio value="0">CourseA</Radio>
                  <Radio value="1">CourseB</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Box w="100%" textAlign="right" p="4">
              <Button size="lg" colorScheme="green" type="submit">
                Reserve
              </Button>
            </Box>
          </Form>
        </Container>
      </Stack>
    </>
  );
}
