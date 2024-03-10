import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { raffles } from "../utils/raffles";

export const RafflesComponent = () => {
  const { push } = useRouter();

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
        {raffles.map((category, categoryIndex) => (
          <Flex flexDir="column" key={categoryIndex} mb={10}>
            <Text color="#000" fontSize={30} mb={5} fontWeight="bold">
              {category.name}
            </Text>

            <Flex flexDir="row" alignItems="flex-start" flexWrap="wrap">
              {category.raffles.map((raffle, raffleIndex) => (
                <Flex
                  position="relative"
                  height="450px"
                  cursor="pointer"
                  key={raffleIndex}
                  flexDir="column"
                  minW={"30%"}
                  p={5}
                  mr={10}
                  mb={5}
                  borderColor={"#000"}
                  borderWidth={2}
                  borderRadius={10}
                  onClick={() => {
                    push(`/raffleSingle/${categoryIndex}-${raffleIndex}`);
                  }}
                >
                  <Text fontSize={25} color="#000">
                    {raffle.title}
                  </Text>
                  <Text fontSize={20} color="#3bb82e" fontWeight="bold" mb={3}>
                    {raffle.host}
                  </Text>

                  <Flex flexDir="column" bottom={5} position="absolute">
                    <Image
                      alt="image-raffle"
                      src={raffle.picture}
                      style={{
                        marginBottom: 10,
                        width: "400px",
                        height: "250px",
                        objectFit: "contain",
                      }}
                    />

                    <Flex
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text fontSize={23} color="#000">
                        Ends in{" "}
                        <span style={{ fontWeight: "bold" }}>9 days</span>
                      </Text>
                      <Text fontSize={23} color="#3bb82e" fontWeight="bold">
                        {raffle.price}
                      </Text>
                    </Flex>
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
