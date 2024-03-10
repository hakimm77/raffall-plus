import { Flex, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { RafflesComponent } from "../components/RafflesComponent";
import Head from "next/head";

const Raffles = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Head>
        <title>Raffle Ticket | Raffles</title>
      </Head>
      <Navbar />

      <RafflesComponent />
    </Flex>
  );
};

export default Raffles;
