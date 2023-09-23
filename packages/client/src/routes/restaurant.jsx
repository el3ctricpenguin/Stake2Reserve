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
import { Form } from "react-router-dom";

export default function Restaurant() {
  return (
    <>
      <Stack>
        <Container maxW="container.md">
          <Image objectFit="cover" src="/nyc01.jpg" alt="Restaurant Name" />
        </Container>
        <Container maxW="container.md">
          <Heading>Restaurant Name</Heading>
          <Tag maxW="fit-content">Restaurant Genre</Tag>
          <Stack spacing="2" py="4">
            <Text>Owner Address</Text>
            <Text>Restaurant Address</Text>
            <Text>Restaurant Description</Text>
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
