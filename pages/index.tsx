import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { CenterComponent } from "../components/CenterComponent";
import Image from "next/image";
import { VideoComponent } from "../components/VideoComponent";

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
    >
      <Image
        alt="bg-image"
        src={require("../assets/background-image.png")}
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100vh",
          opacity: 0.7,
        }}
      />
      <Navbar />
      <CenterComponent />
    </Flex>
  );
}
