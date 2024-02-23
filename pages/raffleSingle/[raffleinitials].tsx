import { Flex } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { RaffleSingleComponent } from "../../components/RaffleSingleComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { raffles } from "../../utils/raffles";

const RaffleInitials = () => {
  const router = useRouter();
  const [raffleObject, setRaffleObject] = useState<any>();

  useEffect(() => {
    if (router.query.raffleinitials) {
      let initials = router.query.raffleinitials as string;

      let categoryIndex = Number(initials.split("-")[0]);
      let raffleIndex = Number(initials.split("-")[1]);
      setRaffleObject(raffles[categoryIndex].raffles[raffleIndex]);
    }
  }, [router.query]);

  return (
    <Flex
      w="100%"
      flexDir="column"
      bgColor={"#000"}
      alignItems="center"
      pb={50}
    >
      <Navbar />

      {raffleObject && <RaffleSingleComponent raffleObject={raffleObject} />}
    </Flex>
  );
};

export default RaffleInitials;
