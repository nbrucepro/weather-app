// @src/components/Teams.js

import React from "react";
// Chakra imports
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
} from "@chakra-ui/react";
// Assets
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

function Teams() {
  let boxBg = useColorModeValue("# !important","white !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Flex
      borderRadius='20px'
    //   bg={boxBg}
    //   bgGradient='linear(to-l, #7928CA, #FF0080)'
    // bgGradient={[
    //     'linear(to-tl,   #6531BD,#000000)',
    //     'linear(to-tr, #A4A4FF, #000)',
    //     'linear(to-b, #A4A4FF, #7878F5)',
    //   ]}
    bgGradient="radial(#000, gray, #6531BD)"
      p='20px'
      h='345px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      direction='column'>
      <Flex w='100%' mb='18px'>
        <Flex
          w='38px'
          h='38px'
          align='center'
          justify='center'
          borderRadius='50%'
          me='12px'
          bg={iconBox}>
          <Icon w='24px' h='24px' as={MdPeople} color={iconColor} />
        </Flex>
        <Text
          my='auto'
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'
          me='auto'>
          Teams
        </Text>
        <Button
          w='38px'
          h='38px'
        //   align=
          alignItems={'center'}
          justifyContent={'center'}
          borderRadius='12px'
          me='12px'
          bg={iconBox}>
          <Icon
            w='24px'
            h='24px'
            as={IoEllipsisHorizontalSharp}
            color={iconColor}
          />
        </Button>
      </Flex>
      <Image
        src='https://i.ibb.co/KVwmVGW/Teams-Image.png'
        maxW='100%'
        borderRadius='20px'
        mb='10px'
      />
      <Text
        fontWeight='600'
        color={mainText}
        textAlign='start'
        fontSize='xl'
        w='100%'>
        Simmmple Web
      </Text>
      <Flex mt='auto' justify='space-between' w='100%' align='center'>
        <DarkMode>
          <Badge
            borderRadius='9px'
            size='md'
            colorScheme='green'
            color='green.400'
            textAlign='center'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            Design
          </Badge>
        </DarkMode>
        <AvatarGroup
          size='sm'
          max={4}
          color={iconColor}
          fontSize='9px'
          fontWeight='700'>
          <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
          <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
          <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
          <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
          <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
          <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
          <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
          <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
}

export default Teams;