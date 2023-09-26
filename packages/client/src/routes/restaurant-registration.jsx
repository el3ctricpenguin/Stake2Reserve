import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Image,
  Select,
  Stack,
  Textarea,
  Flex,
  Spacer,
  HStack,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";

import { encodeImageFileAsURL } from "../utils/utils";

import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function RestaurantRegistration() {
  const { hasConnected } = useLoaderData();
  const navigate = useNavigate();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const [checkedWeek, setCheckedWeek] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [restaurantImgURL, setRestaurantImgURL] = useState("");

  const [courseImgURL1, setCourseImgURL1] = useState("");
  const [courseImgURL2, setCourseImgURL2] = useState("");
  const [courseImgURL3, setCourseImgURL3] = useState("");
  const [courseImgURL4, setCourseImgURL4] = useState("");

  if (!hasConnected)
    return (
      <Box position="relative" h="200px" bg="gray.50">
        <AbsoluteCenter p="4" axis="both">
          <Heading mb="4">You must first connect to the wallet</Heading>
          <Button onClick={() => connect()} color="white" bg="teal" size="lg">
            Connect Wallet
          </Button>
        </AbsoluteCenter>
      </Box>
    );

  return (
    <>
      <Center mb="10">
        <Stack spacing="4">
          <Heading as="em">
            <u>Registration</u>
          </Heading>
          <Form method="post">
            <FormControl>
              <FormLabel>Restaurant Name</FormLabel>
              <Input
                isRequired={true}
                placeholder="Restaurant Name"
                aria-label="Restaurant Name"
                type="text"
                name="res-name"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Restaurant Description</FormLabel>
              <Textarea
                isRequired={true}
                name="res-description"
                rows={6}
                placeholder="Here is resutaurant description"
              />
            </FormControl>

            {/* <FormControl>
              <FormLabel>Restaurant address</FormLabel>
              <Input
                placeholder="Restaurant Address"
                aria-label="Restaurant Address"
                type="text"
                name="res-address"
              />
            </FormControl> */}

            <FormControl>
              <FormLabel>Restaurant Genre</FormLabel>
              <Select
                isRequired={true}
                name="res-genre"
                placeholder="Select genre"
                defaultValue="American"
              >
                <option value="Asian">Asian food</option>
                <option value="Cninese">Chinese cuisine</option>
                <option value="Frence">French cuisine</option>
                <option value="Italian">Italian cuisine</option>
                <option value="American">American cuisine</option>
                <option value="Mexican">Mexican food</option>
                <option value="Japanease">Japanease food</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Restaurant Hours</FormLabel>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[0]}
                    onChange={(e) =>
                      setCheckedWeek([
                        e.target.checked,
                        ...checkedWeek.slice(1),
                      ])
                    }
                  >
                    Sunday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    name="sun-start"
                    type="time"
                    defaultValue="07:00"
                    isDisabled={!checkedWeek[0]}
                  />
                  <Input
                    name="sum-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[0]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[1]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 1),
                        e.target.checked,
                        ...checkedWeek.slice(2),
                      ])
                    }
                  >
                    Monday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    defaultValue="07:00"
                    name="mon-start"
                    type="time"
                    isDisabled={!checkedWeek[1]}
                  />
                  <Input
                    name="mon-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[1]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[2]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 2),
                        e.target.checked,
                        ...checkedWeek.slice(3),
                      ])
                    }
                  >
                    Tuesday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    defaultValue="07:00"
                    name="tue-start"
                    type="time"
                    isDisabled={!checkedWeek[2]}
                  />
                  <Input
                    name="tue-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[2]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[3]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 3),
                        e.target.checked,
                        ...checkedWeek.slice(4),
                      ])
                    }
                  >
                    Wednesday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    defaultValue="07:00"
                    name="wed-start"
                    type="time"
                    isDisabled={!checkedWeek[3]}
                  />
                  <Input
                    name="wed-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[3]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[4]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 4),
                        e.target.checked,
                        ...checkedWeek.slice(5),
                      ])
                    }
                  >
                    Thursday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    name="thu-start"
                    defaultValue="07:00"
                    type="time"
                    isDisabled={!checkedWeek[4]}
                  />
                  <Input
                    name="thu-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[4]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[5]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 5),
                        e.target.checked,
                        ...checkedWeek.slice(6),
                      ])
                    }
                  >
                    Friday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    name="fri-start"
                    type="time"
                    defaultValue="07:00"
                    isDisabled={!checkedWeek[5]}
                  />
                  <Input
                    name="fri-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[5]}
                  />
                </HStack>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2" mb="2">
                <Box p="2">
                  <Checkbox
                    size="lg"
                    isChecked={checkedWeek[6]}
                    onChange={(e) =>
                      setCheckedWeek([
                        ...checkedWeek.slice(0, 6),
                        e.target.checked,
                        ...checkedWeek.slice(7),
                      ])
                    }
                  >
                    Saturday
                  </Checkbox>
                </Box>
                <Spacer />
                <HStack width="300px">
                  <Input
                    name="sat-start"
                    type="time"
                    defaultValue="07:00"
                    isDisabled={!checkedWeek[6]}
                  />
                  <Input
                    name="sat-end"
                    type="time"
                    defaultValue="20:00"
                    isDisabled={!checkedWeek[6]}
                  />
                </HStack>
              </Flex>
              <Input type="hidden" name="res-weekdays" value={checkedWeek} />
              <Input type="hidden" name="res-openingTime" value={25200} />
              <Input type="hidden" name="res-closingTime" value={72000} />
            </FormControl>

            <FormControl>
              <FormLabel>Restaurant Image</FormLabel>
              <Input
                isRequired={true}
                type="file"
                accept="image/jpeg, image/png"
                aria-label="Restaurant Image"
                onChange={(e) =>
                  encodeImageFileAsURL(e.target, setRestaurantImgURL)
                }
              />
              <Input type="hidden" name="res-image" value={restaurantImgURL} />
            </FormControl>

            <Box maxW="md">
              Preview
              <Image src={restaurantImgURL} />
            </Box>

            <FormControl>
              <FormLabel>Course</FormLabel>
              <Flex>
                <FormLabel>
                  name
                  <Input
                    type="text"
                    placeholder="Restaurant Course Name"
                    aria-label="Restaurant Course Name"
                    name="res-course1"
                  />
                </FormLabel>
                <FormLabel>
                  cancel fee ($)
                  <NumberInput>
                    <NumberInputField name="res-cancel1" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormLabel>
              </Flex>
              <FormControl>
                <FormLabel>Course Image</FormLabel>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  aria-label="Restaurant Image"
                  onChange={(e) =>
                    encodeImageFileAsURL(e.target, setCourseImgURL1)
                  }
                />
              </FormControl>
              <Box maxW="sm">
                <Image src={courseImgURL1} />
              </Box>

              <Flex>
                <FormLabel>
                  name
                  <Input
                    type="text"
                    placeholder="Restaurant Course Name"
                    aria-label="Restaurant Course Name"
                    name="res-course2"
                  />
                  <Image />
                </FormLabel>
                <FormLabel>
                  cancel fee ($)
                  <NumberInput>
                    <NumberInputField name="res-cancel2" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormLabel>
              </Flex>
              <FormControl>
                <FormLabel>Course Image</FormLabel>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  aria-label="Restaurant Image"
                  onChange={(e) =>
                    encodeImageFileAsURL(e.target, setCourseImgURL2)
                  }
                />
              </FormControl>
              <Box maxW="sm">
                <Image src={courseImgURL2} />
              </Box>

              <Flex>
                <FormLabel>
                  name
                  <Input
                    type="text"
                    placeholder="Restaurant Course Name"
                    aria-label="Restaurant Course Name"
                    name="res-course3"
                  />
                  <Image />
                </FormLabel>
                <FormLabel>
                  cancel fee ($)
                  <NumberInput>
                    <NumberInputField name="res-cancel3" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormLabel>
              </Flex>
              <FormControl>
                <FormLabel>Course Image</FormLabel>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  aria-label="Restaurant Image"
                  onChange={(e) =>
                    encodeImageFileAsURL(e.target, setCourseImgURL3)
                  }
                />
              </FormControl>
              <Box maxW="sm">
                <Image src={courseImgURL3} />
              </Box>

              <Flex>
                <FormLabel>
                  name
                  <Input
                    type="text"
                    placeholder="Restaurant Course Name"
                    aria-label="Restaurant Course Name"
                    name="res-course4"
                  />
                  <Image />
                </FormLabel>
                <FormLabel>
                  cancel fee ($)
                  <NumberInput>
                    <NumberInputField name="res-cancel4" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormLabel>
              </Flex>
              <FormControl>
                <FormLabel>Course Image</FormLabel>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  aria-label="Restaurant Image"
                  onChange={(e) =>
                    encodeImageFileAsURL(e.target, setCourseImgURL4)
                  }
                />
              </FormControl>
              <Box maxW="sm">
                <Image src={courseImgURL4} />
              </Box>

              <Input
                type="hidden"
                name="res-course1-img"
                value={[courseImgURL1]}
              />
              <Input
                type="hidden"
                name="res-course2-img"
                value={[courseImgURL2]}
              />
              <Input
                type="hidden"
                name="res-course3-img"
                value={[courseImgURL3]}
              />
              <Input
                type="hidden"
                name="res-course4-img"
                value={[courseImgURL4]}
              />
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
