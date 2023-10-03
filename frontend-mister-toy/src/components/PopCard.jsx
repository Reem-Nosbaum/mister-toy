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
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function PopCard() {
  const Pops = useSelector((state) => state.Pops);

  return (
    <Flex>
      {Pops.map((pop) => (
        <div key={pop.handle}>
          <SimpleGrid
            maxW={250}
            maxH={500}
            spacing="4"
            margin={2}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card maxH={500} maxW={200}>
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
    </Flex>
  );
}

export default PopCard;
