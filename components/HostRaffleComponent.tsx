import { Button, Flex, Input, Select, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const HostRaffleComponent = () => {
  const { push } = useRouter();
  const [categories, setCategories] = useState([
    "Art",
    "Watch",
    "Car",
    "Real Estate",
    "Travel",
    "Collectables",
    "Experiences",
    "Cash",
    "Fashion",
    "Food",
  ]);
  const inputRef: any = useRef(null);
  const [imageDataUrl, setImageDataUrl] = useState<any>(null);

  const handleFlexClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageDataUrl(event.target.files[0]);
    }
  };

  const confirmRaffle = () => {
    alert("Your raffle will be reviewed and published");
    push("/raffles");
  };

  return (
    <Flex w="80%" mt={100} flexDir="column" color="#fff">
      <Flex
        flexDir="row"
        w="80%"
        alignItems="center"
        justifyContent="space-between"
        mb={20}
      >
        <Text color="white" fontSize={30} fontWeight="bold">
          Enter competition to win
        </Text>
        <Input
          placeholder="Example, Gaming Gagdets..."
          w="60%"
          fontSize={30}
          h={50}
        />
      </Flex>

      <Flex flexDir="column" w="60%" mb={20}>
        <Text color="white" fontSize={25} mb={3}>
          Display Picture
        </Text>
        <Flex
          cursor="pointer"
          flexDir={"column"}
          alignItems="center"
          justifyContent="center"
          w="300px"
          h="200px"
          bgColor="white"
          onClick={handleFlexClick}
        >
          {imageDataUrl ? (
            <Flex w="300px" h="200px" position="relative">
              <Image
                alt="display-image"
                fill
                src={URL.createObjectURL(imageDataUrl)}
              />
            </Flex>
          ) : (
            <Image
              alt="display-image"
              src={require("../assets/camera-image.png")}
            />
          )}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleImageChange}
          />
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        mb={10}
        borderLeftWidth={5}
        borderLeftColor="#3bb82e"
        pl={3}
      >
        <Text color="white" fontSize={25} mb={3}>
          Raffle Category
        </Text>
        <Select>
          {categories.map((item, i) => (
            <option key={i} value={item} style={{ color: "black" }}>
              {item}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex
        flexDir="column"
        mb={10}
        borderLeftWidth={5}
        borderLeftColor="#3bb82e"
        pl={3}
      >
        <Text color="white" fontSize={25} mb={3}>
          Summary
        </Text>
        <Textarea placeholder="Product Summary..." fontSize={23} />
      </Flex>

      <Flex
        flexDir="column"
        borderLeftWidth={5}
        borderLeftColor="#3bb82e"
        pl={3}
        mb={10}
      >
        <Text color="white" fontSize={25} mb={3}>
          Ticket Price
        </Text>
        <Flex flexDir="row" alignItems="center">
          <Input
            mr={3}
            type="number"
            placeholder="0.99"
            w={100}
            fontSize={30}
          />
          <Text color="white" fontSize={23}>
            $
          </Text>
        </Flex>
      </Flex>

      <Flex
        mb={20}
        flexDir="column"
        borderLeftWidth={5}
        borderLeftColor="#3bb82e"
        pl={3}
      >
        <Text color="white" fontSize={25} mb={3}>
          Raffle Ends
        </Text>
        <Input
          mr={3}
          type="date"
          placeholder="dd-mm-yyyy"
          w={250}
          fontSize={30}
        />
      </Flex>

      <Button
        bgColor={"#3bb82e"}
        p={10}
        color="white"
        w="fit-content"
        alignSelf="center"
        fontSize={30}
        onClick={confirmRaffle}
      >
        UPLOAD RAFFLE
      </Button>
    </Flex>
  );
};
