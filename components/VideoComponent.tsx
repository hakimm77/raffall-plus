import { Flex, Text } from "@chakra-ui/react";

export const VideoComponent = () => {
  return (
    <Flex flexDir="column" bgColor="#3bb82e" p={30} alignItems="center">
      <Text fontSize={35} color="white" fontWeight="bold" mb={20}>
        WHO USES RAFFALL TO HOST COMPETITIONS?
      </Text>

      <video src="https://static.raffall.com/videos/Raffall_Influencer_ad_2023_Master_60s_Deliverable.mp4" />
    </Flex>
  );
};
