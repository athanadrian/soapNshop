import React from 'react';
import { Box, Text, Center, Heading } from '@chakra-ui/react';

const HeroText = ({ heading, text }) => {
  return (
    <Box py='1rem'>
      <Center display='flex' flexDir='column' textAlign='center'>
        <Heading py='2.5rem'>{heading && heading}</Heading>
        <Text p='2rem'>{text && text}</Text>
      </Center>
    </Box>
  );
};

export default HeroText;
