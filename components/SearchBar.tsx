import React,{ChangeEvent,useState} from 'react'
import { Button,FormControl,Input } from '@chakra-ui/react';
import {
  IoMdSearch,
} from "react-icons/io";
interface Props {
  handleInput:(e:ChangeEvent<HTMLInputElement>) => void;
  handleSubmit:(e:ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchBar({handleInput,handleSubmit}:Props) {
  return (
  <>
  <form
  className={`h-16 bg-black/30 w-full max-w-[450px]
rounded-full backdrop-blur-[32px] mb-8`} 
   >
  <FormControl
    h="100%"
    display="flex"
    pos="relative"
    alignItems="center"
    justifyContent="between"
    p="2"
  >
    <Input
      onChange={(e) => handleInput(e)}
      variant="unstyled"
      background="transparent"
      color="white"
      placeholder="Search by city or country"
      type="text"
      fontSize="15px"
      pl="6px"
      h="100%"
    />
    <Button
      background="transparent"
      borderRadius="lg"
      w="20"
      h="12"
      display="flex"
      justifyContent="center"
      alignItems="center"
      type="submit"
      onClick={(e) => handleSubmit(e)}
    >
      <IoMdSearch className="text-2xl text-white" />
    </Button>
  </FormControl>
</form>
</>  
    );
}

