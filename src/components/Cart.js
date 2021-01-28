import React, { useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
  Box,
  Icon,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { MdShoppingBasket } from 'react-icons/md';

import ShopContext from '../context/ShopContext';

const Cart = () => {
  const { isCartOpen, checkout, closeCart, removeLineItem } = useContext(
    ShopContext
  );
  const { lineItems } = checkout;
  return (
    <Drawer isOpen={isCartOpen} placement='right' onClose={closeCart} size='sm'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>You shopping cart</DrawerHeader>

          <DrawerBody>
            {lineItems?.length ? (
              lineItems.map(({ id, title, variant }) => (
                <Grid key={id} templateColumns='repeat(4,1fr)' gap={1}>
                  <Flex alignItems='center' justifyContent='center'>
                    <CloseIcon
                      cursor='pointer'
                      onClick={() => removeLineItem(id)}
                    />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image src={variant.image.src} />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text fontSize='sm'>{title}</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box w='100%' h='100%'>
                <Text
                  h='100%'
                  display='flex'
                  flexDir='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Icon
                    cursor='pointer'
                    fill='#ffa8b2'
                    as={MdShoppingBasket}
                    w={100}
                    h={100}
                  />
                  Your Cart is Empty
                </Text>
              </Box>
            )}
          </DrawerBody>

          {lineItems?.length ? (
            <DrawerFooter>
              <Button w='100%'>
                <Link w='100%' href={checkout.webUrl}>
                  Checkout
                </Link>
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Cart;
