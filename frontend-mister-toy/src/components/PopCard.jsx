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
function PopCard() {
  return (
    <SimpleGrid
      width={200}
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
            <Text color="blue.600" fontSize="2xl">
              $12.0
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default PopCard;
