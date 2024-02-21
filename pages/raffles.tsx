import { Flex, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { RafflesComponent } from "../components/RafflesComponent";

const Raffles = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Navbar />

      <RafflesComponent />
    </Flex>
  );
};

export default Raffles;
