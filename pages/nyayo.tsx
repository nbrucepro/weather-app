import React, { useState, useEffect } from 'react';

// import axios
import axios from 'axios';

// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from 'react-icons/io';

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import { background, Box, Button, Flex, FormControl, Input,Text } from '@chakra-ui/react';
import { Console } from 'console';

// api key
const APIkey = 'bcf2048bc3be154bded8f277f580ba2e';

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Bucharest');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e) => {
    // if input value is not empty
    if (inputValue !== '') {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector('input');

    // if input value is empty
    if (input.value === '') {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    // clear input
    input.value = '';

    // prevent defaults
    e.preventDefault();
  };

  // fetch the data
  useEffect(() => {
    // set loading to true
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

    axios
      .get(url)
      .then((res) => {
        // set the data after 1500 ms
        setTimeout(() => {
          setData(res.data);
          // set loading to false
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);
    // clear timer
    return () => clearTimeout(timer);
  }, [errorMsg]);

  // if data is false show the loader
  if (!data) {
    return (
    //   <div className='w-full h-screen bg-gradientBg  bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
      <Flex 
      w='100%'
      height={{
        base: '48.5em', // 0-48em
        md: '50em', // 48em-80em,
        lg: '50vw', // 80em+
      }}
      bgGradient='linear(to-r, gray.500, indigo)'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      >
        <Box>
          <ImSpinner8 className='text-5xl animate-spin text-white' />
        </Box>
      </Flex>
    );
  }

  // set the icon according to the weather
  let icon;

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy className='text-[#31cafb]' />;
      break;
    case 'Clear':
      icon = <IoMdSunny className='text-[#ffde33]' />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className='text-[#31cafb]' />;
      break;
    case 'Snow':
      icon = <IoMdSnow className='text-[#31cafb]' />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  // date object
  const date = new Date();

  return (    
    <Flex

    width='100%'
    height={{
        base: '48.5em', // 0-48em
        md: '50em', // 48em-80em,
        lg: '50vw', // 80em+
      }}
    flexDirection='column'
    // bgGradient='linear(to-r, indigo.200, pink.500)'
    bgGradient='linear(to-r, gray.500, indigo)'
    alignItems='center'
    justifyContent='center'
    px='4'
    >

      {errorMsg && (
        <Box
        width='100%'
        maxW="100px"
        color='white'
        background='#ff208c'
        pos='absolute'
        top='2'
        >{`${errorMsg.response.data.message}`}</Box>
          )}
      {/* form */}
      <form
        className={`${
          animate ? 'animate-shake' : 'animate-none'
        } h-16 bg-black/30 w-full max-w-[450px]
      rounded-full backdrop-blur-[32px] mb-8`}
      >
        <FormControl
        h='100%'
        display='flex'
        pos='relative'
        alignItems='center'
        justifyContent='between'
        p='2'
        >
          {/* <input
            onChange={(e) => handleInput(e)}
            className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
            type='text'
            placeholder='Search by city or country'
          /> */}
          <Input
        //   display='flex'
        onChange={(e) => handleInput(e)}
        variant='unstyled'
        background='transparent'
        color='white'
        placeholder='Search by city or country'
        type='text'
        fontSize='15px'
        pl='6px'
        h='100%'
        
        />

          {/* <button
            onClick={(e) => handleSubmit(e)}
            className='bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition'
            >
            <IoMdSearch className='text-2xl text-white' />
        </button> */}
          <Button
          background='#1ab8ed'
          borderRadius='lg'
          _hover={{
              background:'#15abdd'
            }}
            w='20'
            h='12'
            display='flex'
            justifyContent='center'
            alignItems='center'
            // transition={true}
            type='submit'
            onClick={(e) => handleSubmit(e)}
            >
<IoMdSearch className='text-2xl text-white' />
          </Button>
        {/* </div> */}
        </FormControl>
      </form>
      {/* card */}
        {/* <div className='w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6'> */}
        <Box 
        w='100%'
        maxWidth='450px'
        background='blackAlpha.500'
        minH='584px'
        color='white'
        backdropBlur='32px'
        borderRadius='32px'
        py='12'
        px='6'

        >
        {loading ? (
            <Flex
            w='100%'
            h='100%'
            justifyContent='center'
            alignItems='center'
            >
                <ImSpinner8 className='text-white text-5xl animate-spin' />
            </Flex>
        ) : (
          <Box>
            {/* card top */}
            <Flex
            alignItems='center'
            gap='5'            
            >
              {/* icon */}
              <Box fontSize='87px'>{icon}</Box>
              <Box>
                {/* country name */}
                <Box fontSize='2xl' fontWeight='semibold'>
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
            <Box my='20'>
              <Flex 
              justifyContent='center'
              alignItems='center'
            >
                {/* temp */}
                <div className='text-[144px] leading-none font-light'>
                  {parseInt(data.main.temp)}
                </div>
                {/* celsius icon */}
                <Box fontSize='4xl'>
                  <TbTemperatureCelsius />
                </Box>
              </Flex>
              {/* weather description */}
              <Box 
            textTransform='capitalize'
              textAlign='center'
              >
                                {data.weather[0].description}
              </Box>
              </Box>
            {/* card bottom */}
            <Flex 
            maxW='378px'
            mx='auto'
            flexDirection='column'
            rowGap='6'
            >
              <Flex justifyContent='space-between'>
                <Flex alignItems='center' gap='2'>
                  {/* icon */}
                  <Box fontSize='20px'>
                    <BsEye />
                  </Box>
                  <Box>
                    Visibility{' '}
                    <Text ml='2' display='inline'>{data.visibility / 1000} km</Text>
                  </Box>
                </Flex>
                <Flex alignItems='center' gap='2'>
                  {/* icon */}
                  <Box fontSize='20px'>
                    <BsThermometer />
                  </Box>
                  <Flex>
                    Feels like
                    <Flex ml='2'>
                      {parseInt(data.main.feels_like)}
                      <TbTemperatureCelsius />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex 
              justifyContent='space-between'
              >
                <Flex 
                alignItems='center'
                gap='2'

                >
                  {/* icon */}
                  <Box fontSize='20px'>
                    <BsWater />
                  </Box>
                  <Box>
                    Humidity
                    <Text display='inline' ml='2'>{data.main.humidity} %</Text>
                  </Box>
                </Flex>
                <Flex 
                alignItems='center'
                gap='2'
                >
                  {/* icon */}
                  <Box fontSize='20px'>
                    <BsWind />
                  </Box>
                  <Box>
                    Wind <Text display='inline' ml='2'>{data.wind.speed} m/s</Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        )}
      </Box>
  </Flex>
  );
};

export default App;