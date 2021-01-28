import React from 'react';
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';
import AppButton from './AppButton';

const ImageWithSection = ({ image, heading, reverse, button, text }) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box>
      <Flex
        flexDir={['column', reverseSection]}
        //justifyContent='center'
        //alignItems='center'
        w='100%'
      >
        <Image src={image} objectFit='cover' w={['100%', '50%']} />
        <Flex
          flexDir='column'
          w={['100%', '50%']}
          justifyContent='center'
          alignItems='center'
          p='2rem'
        >
          {heading && <Heading p='2rem'>{heading}</Heading>}
          {text && <Text p='2rem'>{text}</Text>}
          {button ? <AppButton label='Buy now' /> : null}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithSection;
