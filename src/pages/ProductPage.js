import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Image,
  Text,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react';

import ShopContext from '../context/ShopContext';
import AppButton from '../components/AppButton';

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckOut, product } = useContext(
    ShopContext
  );
  const { description, images, title, variants } = product;
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchProductWithHandle(handle);
    }
    return () => {
      mounted = false;
    };
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;
  return (
    <Box p='2rem'>
      <Grid templateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']} m='auto'>
        <Flex justifyContent='center' alignItems='center'>
          <Image src={images[0].src} />
        </Flex>
        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          px='2rem'
        >
          <Heading pb='2rem'>{title}</Heading>
          <Text fontWeight='bold' pb='2rem'>
            {variants[0].price}
          </Text>
          <Text color='gray.500' pb='2rem'>
            {description}
          </Text>
          <AppButton
            onClick={() => addItemToCheckOut(variants[0].id, 1)}
            label='Add to Cart'
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
