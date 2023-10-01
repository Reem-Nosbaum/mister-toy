import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import pop from "../assets/pop_green_ranger.png";
import PopList from "./PopList";

function PopCard() {
  return (
    <SimpleGrid
      width={250}
      spacing="4"
      margin={2}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card>
        <CardBody>
          <Image src={pop} borderRadius="lg" />
          <Stack mt="6" spacing="4">
            <Heading size="md">POWER RANGERS</Heading>
            <Text>POP! GREEN RANGER (30TH ANNIVERSARY)</Text>
            <Text color="black" fontSize="xl">
              $12.0
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="solid" colorScheme="gray" mx={8}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default PopCard;
