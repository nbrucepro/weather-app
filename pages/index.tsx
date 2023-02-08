import React, { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import axios from "axios";

import { Box, Flex } from "@chakra-ui/react";

import Layout from "components/Layout";
import WeatherCard from "components/WeatherCard";
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";

const APIkey = "bcf2048bc3be154bded8f277f580ba2e";

const Home: NextPage = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState("New york");
  const [inputValue, setInputValue] = useState("");
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setErrorMsg("");
    console.log(e);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    // if input value is not empty
    if (inputValue !== "") {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector("input");
    // if input value is empty
    if (input?.value === "") {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
    // clear input
    input?input.value = "":''
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
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setErrorMsg("");
//     }, 2000);
//     // clear timer
//     return () => clearTimeout(timer);
//   }, [errorMsg]);

  // if data is false show the loader
  if (!data) {
    return (
    <Loader/>
    );
  }

  return (
    <Layout>
      <Flex
        width="100%"
        height={{
          base: "48.5em", // 0-48em
          md: "50em", // 48em-80em,
          lg: "50vw", // 80em+
        }}
        flexDirection="column"
        bgGradient="linear(to-r, gray.500, indigo)"
        alignItems="center"
        justifyContent="center"
        px="4"
      >
        {errorMsg && (
          <Box
            width="100%"
            maxW="120px"
            h='10'
            color="white"
            background="#ff208c"
            pos="absolute"
            top="2"
            py='2'
            textAlign='center'
            borderRadius='4'
          >{`${errorMsg.response.data.message}`}</Box>
          
        )}
        {/* form */}
        <SearchBar handleInput={handleInput} handleSubmit={handleSubmit} />
        {/* card */}
        {
            !errorMsg ? (
        <WeatherCard data={data} loading={loading} />
            ):(
                <Box
                // w="100%"
                // maxWidth="450px"
                // background="blackAlpha.500"
                // minH="584px"
                // color="white"
                // backdropBlur="32px"
                // borderRadius="32px"
                // py="12"
                // px="6"
                >
                
                </Box>
            )
        }
      </Flex>
    </Layout>
  );
};

export default Home;
