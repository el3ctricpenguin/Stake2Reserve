import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RestaurantCard() {
  return (
    <LinkBox>
      <Card maxW="sm">
        <CardBody>
          <Image src="/nyc01.jpg" alt="Restaurant Name" borderRadius="lg" />
          <Stack mt="6" spacing="2">
            <Tag maxW="fit-content">Restaurant Genre</Tag>
            <LinkOverlay as={Link} to="/restaurant/1">
              <Heading size="lg">Restaurant Name Great rolePaaris</Heading>
            </LinkOverlay>
            <Text>Restaurant Description</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter padding="3">
          <Text fontWeight="semibold" color="red">
            Reserve
          </Text>
        </CardFooter>
      </Card>
    </LinkBox>
  );
}
