import {
  Card,
  CardBody,
  CardFooter,
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
    <LinkBox width="100%">
      <Card maxWidth="sm">
        <CardBody>
          <Image src="/nyc01.jpg" alt="Restaurant Name" borderRadius="lg" />
          <Stack mt="6" spacing="2">
            <LinkOverlay as={Link} to="/restaurant/1">
              <Heading size="lg">Restaurant Name Great rolePaaris</Heading>
            </LinkOverlay>
            <Text>Restaurant Description</Text>
          </Stack>
        </CardBody>
        <CardFooter padding="3">
          <Tag maxW="fit-content">Restaurant Genre</Tag>
        </CardFooter>
      </Card>
    </LinkBox>
  );
}
