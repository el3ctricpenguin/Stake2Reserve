/* eslint-disable react/prop-types */
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

export default function RestaurantCard({ restaurantData, address }) {
  const { name, imageURL, genre, description } = restaurantData;

  return (
    <LinkBox width="100%">
      <Card maxWidth="sm">
        <CardBody>
          <Image src={imageURL} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="2">
            <LinkOverlay as={Link} to={`/restaurant/${address}`}>
              <Heading size="lg">{name}</Heading>
            </LinkOverlay>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <CardFooter padding="3">
          <Tag maxW="fit-content">{genre}</Tag>
        </CardFooter>
      </Card>
    </LinkBox>
  );
}
