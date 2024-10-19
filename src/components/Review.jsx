import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

function Review({ ratings }) {
  return (
    <>
      {ratings.map((review, index) => (
        <Box key={index} borderWidth={1} borderRadius="md" p={3} my={2}>
          <HStack spacing={3}>
            <Image
              src={review.pp}
              alt={review.revName}
              boxSize="50px"
              borderRadius="full"
            />
            <Box>
              <Text fontWeight="bold">{review.revName}</Text>
              <Text>Rating: {review.rating}</Text>
              <Text>{review.comment}</Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </>
  );
}

export default Review;
