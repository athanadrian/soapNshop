import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

import ShopContext from '../context/ShopContext';
import Hero from '../components/Hero';
import ImageWithSection from '../components/ImageWithSection';
import HeroText from '../components/HeroText';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchAllProducts();
    }
    return () => {
      mounted = false;
    };
  }, [fetchAllProducts]);

  if (!products) return <div>Loading....</div>;
  return (
    <>
      <Box>
        <Hero />
        <HeroText
          heading='The relaxation you’ve been waiting for.'
          text='Our Bath bombs guarantee a fun, relaxing, and colorful night.'
        />
        <Grid templateColumns='repeat(3,1fr)'>
          {products.map(({ id, images, title, handle, variants }) => (
            <Link to={`products/${handle}`} key={id}>
              <Box
                _hover={{ opacity: '80%' }}
                textAlign='center'
                position='relative'
              >
                <Image src={images[0].src} />
                <Text
                  fontWeight='bold'
                  position='absolute'
                  bottom='15%'
                  w='100%'
                >
                  {title}
                </Text>
                <Text color='gray.500' position='absolute' bottom='5%' w='100%'>
                  € {variants[0].price}
                </Text>
              </Box>
            </Link>
          ))}
        </Grid>
        <HeroText heading='Treat yourself!' />
        <ImageWithSection
          button
          image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
          heading='Some Heading'
          text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        />
        <ImageWithSection
          //button
          reverse
          image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
          heading='Another Heading'
          text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        />
      </Box>
    </>
  );
};

export default Home;
