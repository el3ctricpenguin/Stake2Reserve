import {
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";

export default function RestaurantRegistration() {
  const navigate = useNavigate();

  return (
    <>
      <Center>
        <Stack>
          <Heading>This is Sotre Registration Page</Heading>
          <Form method="post">
            <FormControl>
              <FormLabel>Restaurant Name</FormLabel>
              <Input type="text" />
            </FormControl>

            {/* <FormControl>
              <FormLabel>Restaurant Address</FormLabel>
              <Input type="text" />
            </FormControl> */}

            <FormControl>
              <FormLabel>Opening time</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Course</FormLabel>
              <Input type="text" />
            </FormControl>

            <ButtonGroup gap="2">
              <Button mt="4" colorScheme="green" type="submit">
                Submit
              </Button>

              <Button
                mt="4"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        </Stack>
      </Center>
    </>
  );
}
