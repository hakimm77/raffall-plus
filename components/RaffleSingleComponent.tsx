import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const RaffleSingleComponent = () => {
  return (
    <Flex
      w="80%"
      bgColor="#fff"
      borderRadius={10}
      mt={100}
      flexDir="column"
      alignItems="center"
      color="#fff"
      p={5}
    >
      <Flex flexDir="row" w="100%" justifyContent="space-between" mb={10}>
        <Flex flexDir="column">
          <Text fontSize={30} fontWeight="bold" color="#000" mb={5}>
            Enter Raffle to Win Oak Scotland map clock
          </Text>

          <Image
            alt="image-raffle"
            src={require("../assets/raffle-image.png")}
            style={{ width: 600 }}
          />
        </Flex>

        <Flex
          flexDir="column"
          borderColor="#3bb82e"
          borderWidth={2}
          p={5}
          h={"fit-content"}
        >
          <Text color="#000" fontSize={23} mb={3}>
            <span style={{ color: "gray", fontWeight: "bold" }}>owner</span>{" "}
            Anuj.patel
          </Text>
          <Text color="#000" fontSize={23} mb={3}>
            <span style={{ color: "gray", fontWeight: "bold" }}>
              ticket price
            </span>{" "}
            $1.99
          </Text>
          <Text color="#000" fontSize={23} mb={5}>
            <span style={{ color: "gray", fontWeight: "bold" }}>
              ticket sold
            </span>{" "}
            200
          </Text>

          <Button
            bgColor={"#3bb82e"}
            p={5}
            color="white"
            onClick={() => {
              alert("Available soon");
            }}
          >
            ENTER RAFFLE
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        borderLeftColor={"#3bb82e"}
        borderLeftWidth={5}
        p={3}
        mb={10}
      >
        <Text color="#000" fontSize={25} fontWeight="bold" mb={3}>
          Raffle Summary
        </Text>
        <Text color="#000" fontSize={20}>
          Scotland Map wall clock. Carved from oak. Hand pained with acrylic
          paint and finished with a high grade polyurethane varnish with white
          hour, minute and second hands. Approx 250mm x 250mm x 18-20mm. Rear
          keyhole for easy hanging.
        </Text>
      </Flex>

      {/*  */}

      {/* <Flex
        flexDir="column"
        borderLeftColor={"#3bb82e"}
        borderLeftWidth={5}
        p={3}
        mb={10}
      >
        <Text color="#000" fontSize={25} fontWeight="bold" mb={3}>
          Raffle Ends
        </Text>
        <Text color="#000" fontSize={20}>
          Sunday, 1st September 2024 at 11:14 or when the last ticket is sold
          (whichever comes sooner)
        </Text>
      </Flex> */}

      <Flex
        flexDir="column"
        borderLeftColor={"#3bb82e"}
        borderLeftWidth={5}
        p={3}
        mb={10}
      >
        <Text color="#000" fontSize={25} fontWeight="bold" mb={3}>
          Raffall Guarantee
        </Text>
        <Text color="#000" fontSize={20}>
          If the host fails to provide a prize, the winners will receive a share
          of the compensation amounting to 75% of all ticket sales. All
          compensation payments are guaranteed and paid directly by Raffall.
        </Text>
      </Flex>

      <Flex
        flexDir="column"
        borderLeftColor={"#3bb82e"}
        borderLeftWidth={5}
        p={3}
        mb={10}
      >
        <Text color="#000" fontSize={25} fontWeight="bold" mb={3}>
          Raffle Ends
        </Text>
        <Text color="#000" fontSize={20}>
          Sunday, 1st September 2024 at 11:14 or when the last ticket is sold
          whichever comes sooner, Sunday, 1st September 2024 at 11:14 or when
          the last ticket is sold whichever comes sooner
        </Text>
      </Flex>
    </Flex>
  );
};
