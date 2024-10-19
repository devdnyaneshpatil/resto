import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantsData } from "./restaurantsData";
import CustomModal from "../components/CustomModal";
import Review from "../components/Review";

function RestaurantDetails() {
  const { id } = useParams();
  const restaurantId = parseInt(id);
  const restaurant = restaurantsData.find((res) => res.id === restaurantId);

  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleAddReview = () => {
    const newReview = {
      revName: "Anonymous",
      rating,
      comment,
      pp: "dummy.image",
    };

    restaurant.ratings.push(newReview);

    setRating(1);
    setComment("");
    setIsOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  if (!restaurant) {
    return <Box>Restaurant not found!</Box>;
  }

  return (
    <Box p={5}>
      <Heading>{restaurant.name}</Heading>
      <Text fontSize="lg">Address: {restaurant.address}</Text>
      <Text fontSize="lg">Phone: {restaurant.phone}</Text>
      <Text fontSize="md" my={3}>
        {restaurant.description}
      </Text>
      <Text fontWeight="bold">Average Rating: {restaurant.averageRating}</Text>

      <Button mt={4} colorScheme="teal" onClick={onOpen}>
        Add Review
      </Button>

      <VStack align="start" mt={5}>
        <Heading size="md">Reviews</Heading>
        <Review ratings={restaurant.ratings} />
      </VStack>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={setComment}
        handleAddReview={handleAddReview}
      />
    </Box>
  );
}

export default RestaurantDetails;
