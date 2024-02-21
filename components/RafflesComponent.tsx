import { Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const RafflesComponent = () => {
  const { push } = useRouter();
  const [categories, setCategories] = useState([
    {
      name: "Art",
      raffles: [
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
      ],
    },
    {
      name: "Cash",
      raffles: [
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
      ],
    },
    {
      name: "Collectables",
      raffles: [
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
        {
          title: "Example of a Raffle title",
          price: "$1.99",
        },
      ],
    },
  ]);

  return (
    <Flex w="90%" mt={100} flexDir="column" alignItems="center" color="#fff">
      <Flex
        w="90%"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb={10}
      >
        <Text fontSize={30} fontWeight="bold" color="#fff">
          Public Raffles
        </Text>
        <Flex flexDir="row">
          <Input
            _placeholder={{ color: "#fff" }}
            placeholder="Search Raffles..."
          />
          <Button bgColor={"#3bb82e"} p={5} color="white" mr={5}>
            SEARCH
          </Button>
        </Flex>
      </Flex>

      <Flex flexDir="column" bgColor="#fff" borderRadius={10} w="90%" p={5}>
        {categories.map((category, categoryIndex) => (
          <Flex flexDir="column" key={categoryIndex} mb={10}>
            <Text color="#000" fontSize={30} mb={5} fontWeight="bold">
              {category.name}
            </Text>

            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="space-around"
            >
              {category.raffles.map((raffle, raffleIndex) => (
                <Flex
                  cursor="pointer"
                  key={raffleIndex}
                  flexDir="column"
                  w={"30%"}
                  p={5}
                  borderColor={"#000"}
                  borderWidth={2}
                  borderRadius={10}
                  onClick={() => {
                    push("/raffleSingle");
                  }}
                >
                  <Text fontSize={25} color="#000">
                    {raffle.title}
                  </Text>
                  <Text fontSize={20} color="#3bb82e" fontWeight="bold" mb={3}>
                    Anuj.Patel
                  </Text>

                  <Image
                    alt="image-raffle"
                    src={require("../assets/raffle-image.png")}
                    style={{ marginBottom: 10 }}
                  />

                  <Flex
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize={23} color="#000">
                      Ends in <span style={{ fontWeight: "bold" }}>9 days</span>
                    </Text>
                    <Text fontSize={23} color="#3bb82e" fontWeight="bold">
                      {raffle.price}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};