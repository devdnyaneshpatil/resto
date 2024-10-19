import React from "react";
import {
  Box,
  Button,
  filter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { button } from "framer-motion/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { restaurantsData } from "./restaurantsData";
import RestaurantCard from "../components/RestaurantCard";

const cuisineData = [
  { id: 1, name: "Italian", reviews: [], averageRating: 4 },
  { id: 2, name: "Mexican", reviews: [], averageRating: 4 },
  { id: 3, name: "Chinese", reviews: [], averageRating: 4 },
  { id: 4, name: "Indian", reviews: [], averageRating: 4 },
];

function Main() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Food Ordering App</Heading>
      <Heading mb={5}>Select Your Cuisine:-</Heading>
      <Stack spacing={4}>
        {cuisineData.map((cuisine) => (
          <Button
            key={cuisine.id}
            onClick={() => handleCuisineClick(cuisine)}
            colorScheme={selectedCuisine === cuisine ? "green" : "red"}
          >
            {cuisine.name}
          </Button>
        ))}
      </Stack>

      {selectedCuisine && (
        <Box mt={5}>
          <Heading size="md">{selectedCuisine.name} Restaurants</Heading>
          {restaurantsData
            .filter(
              (restaurant) => restaurant.cuisine_id === selectedCuisine.id
            )
            .map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </Box>
      )}
    </Box>
  );
}

export default Main;
