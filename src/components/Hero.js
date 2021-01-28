import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import AppButton from './AppButton';

const Hero = () => {
  return (
    <Box backgroundColor='#FFA8E2' w='100%' position='relative' h='70vh'>
      <Image
        className='fade-in'
        h='100%'
        m='auto'
        objectFit='contain'
        objectPosition={['top', 'center']}
        src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg'
      />
      <Text
        className='tracking-in-contract-bck-bottom'
        position='absolute'
        bottom='20%'
        color='white'
        fontWeight='bold'
        fontSize='4rem'
        textAlign='center'
        w='100%'
      >
        Introducing the Bath Bombs...
      </Text>
      <Center>
        <AppButton label='Shop Now' bottom='10%' position='absolute' />
      </Center>
    </Box>
  );
};

export default Hero;
