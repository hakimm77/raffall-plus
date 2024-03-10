import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { HostRaffleComponent } from "../components/HostRaffleComponent";
import Head from "next/head";

const HostRaffle = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Head>
        <title>Raffle Ticket | Host</title>
      </Head>
      <Navbar />

      <HostRaffleComponent />
    </Flex>
  );
};

export default HostRaffle;
