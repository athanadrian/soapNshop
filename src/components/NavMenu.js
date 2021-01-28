import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from '@chakra-ui/react';

import ShopContext from '../context/ShopContext';

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <Drawer isOpen={isMenuOpen} placement='left' onClose={closeMenu} size='xs'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' textAlign='center'>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack p='2rem'>
              <Link to='/'>About us</Link>
              <Link to='/'>Learn More</Link>
              <Link to='/'>Sustainability</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign='center'>
            <Text w='100%'>© Copyright www.soap-N-shop.com</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
