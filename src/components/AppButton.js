import React from 'react';
import { Button } from '@chakra-ui/react';

const AppButton = ({ onClick, label, ...otherProps }) => {
  return (
    <Button
      onClick={onClick}
      _hover={{ opacity: '70%' }}
      w='10rem'
      background='#ff38bd'
      color='white'
      {...otherProps}
    >
      {label}
    </Button>
  );
};

export default AppButton;
