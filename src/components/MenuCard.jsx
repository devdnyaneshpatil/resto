import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MenuCard({ menuItem, restaurantId }) {
  return (
    <Link to={`/restaurant/${restaurantId}`}>
      <Box borderWidth={1} borderRadius="md" p={2} m={1} textAlign="center">
        <Image
          src={menuItem.imgSrc}
          alt={menuItem.name}
          boxSize="100px"
          objectFit="cover"
        />
        <Text fontWeight="bold">{menuItem.name}</Text>
        <Text>{menuItem.price}</Text>
      </Box>
    </Link>
  );
}

export default MenuCard;
