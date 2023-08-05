import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

const CCard = styled(Card)({
  border: "1px solid #F45050",
  borderRadius: "20px",
  marginBottom: "1ch",
});

const Carousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box display="flex" justifyContent="flex-star">
      <Box>
        <CCard>
          <CardContent>
            <CardMedia
              component="img"
              alt={`Card ${
                currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1
              }`}
              height="250"
              image={
                cards[
                  currentCardIndex === 0
                    ? cards.length - 1
                    : currentCardIndex - 1
                ].image
              }
              onClick={goToPreviousCard}
            />
          </CardContent>
        </CCard>
        <Typography variant="body2" align="center" sx={{ width: "80%" }}>
          Linkedin Management for Alok Koshti
        </Typography>
      </Box>
      <Box sx={{ transform: "scale(1.3)" }}>
        <CCard>
          <CardContent>
            <CardMedia
              component="img"
              alt={`Card ${currentCardIndex + 1}`}
              height="250"
              image={cards[currentCardIndex].image}
            />
          </CardContent>
        </CCard>
        <Typography
          variant="body2"
          align="center"
          sx={{ width: "80%", fontWeight: "bold" }}
        >
          Linkedin Management for Alok Koshti
        </Typography>
      </Box>
      <Box>
        <CCard>
          <CardContent>
            <CardMedia
              component="img"
              alt={`Card ${
                currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1
              }`}
              height="250"
              image={
                cards[
                  currentCardIndex === cards.length - 1
                    ? 0
                    : currentCardIndex + 1
                ].image
              }
              onClick={goToNextCard}
            />
          </CardContent>
        </CCard>
        <Typography variant="body2" align="center" sx={{ width: "80%" }}>
          Linkedin Management for Alok Koshti
        </Typography>
      </Box>
    </Box>
  );
};

export default Carousel;
