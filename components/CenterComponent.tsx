import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const CenterComponent = () => {
  const { push } = useRouter();

  return (
    <Flex
      flexDir="column"
      mt={300}
      color="white"
      w="50%"
      alignItems="center"
      zIndex={100}
    >
      <Text fontSize={40} fontWeight="bold" mb={3}>
        WE MAKE IT EASY TO HOST RAFFLES ONLINE
      </Text>
      <Text fontSize={23} textAlign="center" mb={10}>
        Facilitating brands, influencers and businesses to conduct prize
        competitions, offering tickets for sale to win their products,
        experiences, or personal items as rewards
      </Text>

      <Flex flexDir="row">
        <Button
          bgColor={"#3bb82e"}
          p={10}
          color="white"
          mr={5}
          fontSize={25}
          onClick={() => {
            push("/raffles");
          }}
        >
          View Prizes and Raffles
        </Button>

        <Button
          bgColor={"#3bb82e"}
          p={10}
          color="white"
          fontSize={25}
          onClick={() => {
            push("/hostraffle");
          }}
        >
          Host Prizes and Raffles for FREE
        </Button>
      </Flex>
    </Flex>
  );
};
