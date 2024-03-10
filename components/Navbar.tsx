import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { push } = useRouter();

  return (
    <Flex
      zIndex={100}
      w="90%"
      flexDir="row"
      alignItems={"center"}
      justifyContent="space-between"
      pt={5}
      borderBottomWidth={1}
      borderBottomColor="#fff"
      pb={3}
    >
      <Flex
        onClick={() => {
          push("/");
        }}
        cursor="pointer"
      >
        <Image
          alt="icon"
          src={require("../assets/raffle-icon.png")}
          style={{ width: 250 }}
        />
      </Flex>

      <Flex
        onClick={() => {
          push("/raffles");
        }}
        cursor="pointer"
      >
        <Text fontSize={23} color={"white"}>
          Discover
        </Text>
      </Flex>

      <Flex flexDir="row" alignItems="center">
        <Button bgColor={"#3bb82e"} p={5} color="white" mr={5}>
          GET STARTED
        </Button>
        <Button bgColor={"green"} p={5} color="white">
          SIGN IN
        </Button>
      </Flex>
    </Flex>
  );
};
