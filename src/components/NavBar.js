import React, { useContext } from 'react';
import { Badge, Flex, Icon, Image, Box } from '@chakra-ui/react';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ShopContext from '../context/ShopContext';

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      borderBottom='0.25pt white solid'
      background='#FFA8E2'
      flexDir='row'
      justifyContent='space-between'
      alignItems='center'
      p='1.5rem'
    >
      <Icon
        cursor='pointer'
        fill='white'
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />
      <Link to='/'>
        <Image
          src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540'
          w={100}
          h={100}
        />
      </Link>
      <Box>
        <Icon
          cursor='pointer'
          fill='white'
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge background='#ff38bd' borderRadius='50%'>
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
