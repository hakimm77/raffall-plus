import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { CenterComponent } from "../components/CenterComponent";

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
    >
      <Navbar />
      <CenterComponent />
    </Flex>
  );
}
