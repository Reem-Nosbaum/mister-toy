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
import { useSelector } from "react-redux";

function PopCard() {
  const Pops = useSelector((state) => state.Pops);
  console.log(Pops);

  return (
    <div>
      {Pops.map((pop) => (
        <div key={pop.handle}>
          <SimpleGrid
            width={250}
            spacing="4"
            margin={2}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <CardBody>
                <Image src={pop.imageName} borderRadius="lg" />
                <Stack mt="6" spacing="4">
                  <Heading size="md">{pop.handle}</Heading>
                  <Text>{pop.series}</Text>
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
        </div>
      ))}
    </div>
  );
}

export default PopCard;
