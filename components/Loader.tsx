
import React from "react";
import { Flex,Box } from "@chakra-ui/react";
import { ImSpinner8 } from "react-icons/im";

export default function Loader() {

  return (
    <Flex
    w="100%"
    height={{
      base: "48.5em",
      md: "50em",
      lg: "50vw",
    }}
    bgGradient="linear(to-r, gray.500, indigo)"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box>
      <ImSpinner8 className="text-5xl animate-spin text-white" />
    </Box>
  </Flex>
  );
}