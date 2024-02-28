import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { HostRaffleComponent } from "../components/HostRaffleComponent";

const HostRaffle = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Navbar />

      <HostRaffleComponent />
    </Flex>
  );
};

export default HostRaffle;
