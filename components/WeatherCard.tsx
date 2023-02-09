import {
  Flex,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { ImSpinner8 } from "react-icons/im";

import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { useState } from "react";
// Assets

export default function WeatherCard({ loading, data }: any) {
  // set the icon according to the weather
  let icon;

  switch (data?.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }
  // date object
  const date = new Date();
  const [tempa,setTempa] = useState(data?.main?.temp);
  const [unit,setunit] = useState('c');
  const [clicked,setclicked] = useState(false);
  const handleTempereture = () => {
    if(unit == 'c'){
      setTempa(((data?.main?.temp)*9/5)+32);
      setunit('f');
      setclicked(true);
    }
    if(unit == 'f'){
      setTempa(((data?.main?.temp)-32)*5/9);
      setunit('c');
      setclicked(true);
     }
  }
  return (
    <>
    <Box
      w="100%"
      maxWidth="450px"
      background="blackAlpha.500"
      minH="584px"
      color="white"
      backdropBlur="32px"
      borderRadius="32px"
      py="12"
      px="6"
    >
      {loading ? (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </Flex>
      ) : (
        <Box>
          {/* card top */}
          <Flex alignItems="center" gap="5">
            {/* icon */}
            <Box fontSize="87px">{icon}</Box>
            <Box>
              {/* country name */}
              <Box fontSize="2xl" fontWeight="semibold">
                {data.name}, {data.sys.country}
              </Box>
              {/* date */}
              <Box>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                {date.getUTCFullYear()}
              </Box>
            </Box>
          </Flex>
          {/* card body */}
          <Box my="20">
            <Flex justifyContent="center" alignItems="center">
              {/* temp */}
              <div className="text-[144px] leading-none font-light">
<!--                  {parseInt(tempa)}  -->
                {parseInt(clicked?(tempa):(data.main.temp))}
              </div>
              {/* celsius icon */}
              <Box fontSize="4xl">
                {
                  unit == 'c' ?(
                    <TbTemperatureCelsius />                     
                  ):(                       
                    <TbTemperatureFahrenheit/>           
                  )
                }
              </Box>
            </Flex>
            {/* weather description */}
            <Box textTransform="capitalize" textAlign="center">
              {data.weather[0].description}
            </Box>
          </Box>
          {/* card bottom */}
          <Flex maxW="378px" mx="auto" flexDirection="column" rowGap="6">
            <Flex justifyContent="space-between">
              <Flex alignItems="center" gap="2">
                {/* icon */}
                <Box fontSize="20px">
                  <BsEye />
                </Box>
                <Box>
                  Visibility{" "}
                  <Text ml="2" display="inline">
                    {data.visibility / 1000} km
                  </Text>
                </Box>
              </Flex>
              <Flex alignItems="center" gap="2">
                {/* icon */}
                <Box fontSize="20px">
                  <BsThermometer />
                </Box>
                <Flex>
                  Feels like
                  <Flex ml="2">
                    {parseInt(data.main.feels_like)}
                    <TbTemperatureCelsius />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between">
              <Flex alignItems="center" gap="2">
                {/* icon */}
                <Box fontSize="20px">
                  <BsWater />
                </Box>
                <Box>
                  Humidity
                  <Text display="inline" ml="2">
                    {data.main.humidity} %
                  </Text>
                </Box>
              </Flex>
              <Flex alignItems="center" gap="2">
                {/* icon */}
                <Box fontSize="20px">
                  <BsWind />
                </Box>
                <Box>
                  Wind{" "}
                  <Text display="inline" ml="2">
                    {data.wind.speed} m/s
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
    <Box
    my='5'
    >

      <Button
      onClick={handleTempereture}
      >Change T° unit</Button>
    </Box>
    </>
  );
}
