import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import MenuCard from './MenuCard';

function RestaurantCard({ restaurant }) {
  return (
    <Box borderWidth={1} borderRadius="lg" p={3} mt={2}>
      <Text fontWeight="bold">{restaurant.name}</Text>
      <Text>{restaurant.address}</Text>
      <Text>{restaurant.phone}</Text>
      <Text>{restaurant.description}</Text>
      <Text>Average Rating: {restaurant.averageRating}</Text>
      <Flex mt={3} wrap="wrap">
        {restaurant.menu.map((menuItem) => (
          <MenuCard
            key={menuItem.id}
            menuItem={menuItem}
            restaurantId={restaurant.id}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default RestaurantCard;
