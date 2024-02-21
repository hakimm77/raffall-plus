import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { RaffleSingleComponent } from "../components/RaffleSingleComponent";

const RaffleSingle = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Navbar />

      <RaffleSingleComponent />
    </Flex>
  );
};

export default RaffleSingle;
