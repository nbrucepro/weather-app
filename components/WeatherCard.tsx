import {
  Avatar,
  AvatarGroup,
  Badge,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
// Assets
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {BiWind} from "react-icons/bi"

import { weatherState } from "types";

export default function WeatherCard({
  temperature,
  description,
  humidity,
  windSpeed,
  icon,
}: weatherState) {
  let boxBg = useColorModeValue("# !important", "white !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");

  return (
    <Flex
      borderRadius="20px"
      bgGradient="radial(#000, gray, #6531BD)"
      p="15px"
      h="385px"
      w={{ base: "315px", md: "345px" }}
      alignItems="center"
      direction="column"
    >
      <Flex w="100%" mb="18px">
        <Flex
          w="38px"
          h="38px"
          align="center"
          justify="center"
          borderRadius="50%"
          me="12px"
          bg={iconBox}
        >
          <Image
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </Flex>
        <Text
          my="auto"
          fontWeight="600"
          color={mainText}
          textAlign="center"
          fontSize="xl"
          me="auto"
        >
          Teams
        </Text>
      </Flex>
      <Text
        maxW="100%"
        borderRadius="20px"
        mt="50px"
        color={useColorModeValue("white", "white")}
        fontSize="4xl"
      >
        {temperature}
      </Text>
      <Text color={useColorModeValue("white", "white")} fontSize="12px">
        {description}
      </Text>
      <SimpleGrid columns={2} spacingX='6' spacingY='6px' mt="20" color={useColorModeValue("white", "white")}>
        <Box>
          <Icon as={BiWind}/>
          <Text px='2' display='inline'>Visibility: {windSpeed}</Text>
        </Box>
        <Box>
          <Text px='2' display='inline'>Humidity: {humidity}</Text>
        </Box>
        <Box>
        <Icon as={BiWind}/>          
          <Text px='2' display='inline'>wind: {windSpeed}</Text>
        </Box>
        <Box>
        <Text px='2' display='inline'>Temperature: {temperature}</Text>          
        </Box>
      </SimpleGrid>
      {/* <Flex mt="auto" justify="space-between" w="100%" align="center">
        <Text>
          Temperature: {temperature}
        </Text>
       
      </Flex> */}
    </Flex>
  );
}
