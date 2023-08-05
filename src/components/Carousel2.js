import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import rect from "../assets/images/Rectangle 184.svg";
import Image from "./Image";

const CCard = styled(Card)({
  border: "1px solid #F45050",
  borderRadius: "40px",
  padding: "3ch 1.5ch 0 1.5ch",
  maxWidth: "360px",
  height: "520px",
});

const Carousel2 = ({ cards }) => {
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
    <Box>
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <IconButton
          sx={{
            background: "#eee",
            "&:hover": {
              backgroundColor: "#3C487E",
              "& svg": {
                color: "#eee",
              },
            },
          }}
          onClick={goToPreviousCard}
        >
          <WestIcon
            sx={{
              color: "#3C486B",
            }}
          />
        </IconButton>
        <IconButton
          elevation={3}
          sx={{
            background: "#3C486B",
            "&:hover": {
              backgroundColor: "#3C487E",
            },
          }}
          onClick={goToNextCard}
        >
          <EastIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="flex-start" sx={{ gap: 5 }}>
        <Box>
          <CCard>
            <CardContent>
              <Typography
                sx={{ color: "#3C486B", lineHeight: "20px", fontSize: "14px" }}
              >
                {cards[currentCardIndex].text1}
              </Typography>
              <Box sx={{ my: 1 }} />
              <Typography variant="body2">
                {cards[currentCardIndex].text2}
              </Typography>
              <Box sx={{ my: 1 }} />
              <Typography variant="body2">
                {cards[currentCardIndex].text3}
              </Typography>
            </CardContent>
            <CardContent sx={{ position: "relative", mt: "150px" }}>
              <Avatar
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "100px",
                  border: "3px solid #F9D949",
                  zIndex: 22,
                  top: "-130px",
                }}
                src={
                  cards[
                    currentCardIndex === 0
                      ? cards.length - 1
                      : currentCardIndex - 1
                  ].image
                }
              />
              <Image
                style={{
                  position: "absolute",
                  left: "-1.5ch",
                  bottom: "-20px",
                  width: "calc(100% + 3ch)",
                }}
                src={rect}
              />
            </CardContent>
            {/* <CardContent>
            <CardMedia
              component="img"
              alt={`Card ${
                currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1
              }`}
              height="250"
              onClick={goToPreviousCard}
            />
          </CardContent> */}
          </CCard>
        </Box>
        <Box>
          <CCard>
            <CardContent>
              <Typography
                sx={{ color: "#3C486B", lineHeight: "20px", fontSize: "14px" }}
              >
                {cards[currentCardIndex].text1}
              </Typography>
              <Box sx={{ my: 1 }} />
              <Typography variant="body2">
                {cards[currentCardIndex].text2}
              </Typography>
              <Box sx={{ my: 1 }} />
              <Typography variant="body2">
                {cards[currentCardIndex].text3}
              </Typography>
            </CardContent>
            <CardContent sx={{ position: "relative", mt: "150px" }}>
              <Avatar
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "100px",
                  border: "3px solid #F9D949",
                  zIndex: 22,
                  top: "-130px",
                }}
                src={cards[currentCardIndex].image}
              />
              <Image
                style={{
                  position: "absolute",
                  left: "-1.5ch",
                  bottom: "-20px",
                  width: "calc(100% + 3ch)",
                }}
                src={rect}
              />
            </CardContent>
            {/* <CardContent>
            <CardMedia
              component="img"
              alt={`Card ${
                currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1
              }`}
              height="250"
              onClick={goToPreviousCard}
            />
          </CardContent> */}
          </CCard>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel2;

// import React, { useState } from "react";
// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   IconButton,
//   styled,
//   Typography,
// } from "@mui/material";
// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';

// import rect from "../assets/images/Rectangle 184.svg";
// import Image from "./Image";

// const CCard = styled(Card)({
//   border: "1px solid #F45050",
//   borderRadius: "40px",
//   padding: "3ch 1.5ch 0 1.5ch",
//   width: "360px", // Adjust the width as desired
//   height: "520px",
//   transition: "transform 0.5s ease-in-out", // Added transition property
//   transform: "translateX(0)", // Added initial transform value
// });

// const Carousel2 = ({ cards }) => {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   const goToPreviousCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNextCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
//         <IconButton
//           sx={{
//             background: "#eee",
//             "&:hover": {
//               backgroundColor: "#3C487E",
//               "& svg": {
//                 color: "#eee",
//               },
//             },
//           }}
//           onClick={goToPreviousCard}
//         >
//           <WestIcon
//             sx={{
//               color: "#3C486B",
//             }}
//           />
//         </IconButton>
//         <IconButton
//           elevation={3}
//           sx={{
//             background: "#3C486B",
//             "&:hover": {
//               backgroundColor: "#3C487E",
//             },
//           }}
//           onClick={goToNextCard}
//         >
//           <EastIcon />
//         </IconButton>
//       </Box>
//       <Box display="flex" justifyContent="flex-start" sx={{ gap: "2ch",backgroundColor:'yellow' }}> {/* Adjust the gap as desired */}
//         {cards.map((card, index) => (
//           <Box key={index} sx={{backgroundColor:'red',width:"360px"}}>
//             <CCard
//               // sx={{
//               //   transform: `translateX(${
//               //     (index - currentCardIndex) * 100
//               //   }%)`, // Apply transform based on the difference in index
//               // }}
//             >
//               <CardContent>
//                 <Typography
//                   sx={{ color: "#3C486B", lineHeight: "20px", fontSize: "14px" }}
//                 >
//                   {card.text1}
//                 </Typography>
//                 <Box sx={{ my: 1 }} />
//                 <Typography variant="body2">{card.text2}</Typography>
//                 <Box sx={{ my: 1 }} />
//                 <Typography variant="body2">{card.text3}</Typography>
//               </CardContent>
//               <CardContent sx={{ position: "relative", mt: "150px" }}>
//                 <Avatar
//                   sx={{
//                     position: "absolute",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "100px",
//                     height: "100px",
//                     border: "3px solid #F9D949",
//                     zIndex: 22,
//                     top: "-130px",
//                   }}
//                   src={card.image}
//                 />
//                 <Image
//                   style={{
//                     position: "absolute",
//                     left: "-1.5ch",
//                     bottom: "-20px",
//                     width: "calc(100% + 3ch)",
//                   }}
//                   src={rect}
//                 />
//               </CardContent>
//             </CCard>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Carousel2;


// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./CardTemp2.css"
// import {
//   Box,
//   IconButton,
//   Typography,
//   Avatar,
//   CardContent,
//   styled,
//   Card
// } from "@mui/material";
// import { West, East } from "@mui/icons-material";
// import rect from "../assets/images/Rectangle 184.svg";
// import Image from "./Image";

// const CCard = styled(Card)({
//   border: "1px solid #F45050",
//   borderRadius: "40px",
//   padding: "3ch 1.5ch 0 1.5ch",
//   maxWidth: "360px",
//   height: "520px"
// });

// const CardSlider = () => {


//   const cards = [
//     {
//       text1: "Card 1",
//       text2: "Description 1",
//       text3: "Details 1",
//       image:
//         "https://example.com/image1.jpg",
//     },
//     {
//       text1: "Card 2",
//       text2: "Description 2",
//       text3: "Details 2",
//       image:
//         "https://example.com/image2.jpg",
//     },
//     {
//       text1: "Card 2",
//       text2: "Description 2",
//       text3: "Details 2",
//       image:
//         "https://example.com/image2.jpg",
//     },
//     {
//       text1: "Card 2",
//       text2: "Description 2",
//       text3: "Details 2",
//       image:
//         "https://example.com/image2.jpg",
//     }
//     // Add more card objects here...
//   ];

//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   const goToPreviousCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNextCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: false,
//     accessibility: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel">
//       <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
//         <IconButton
//           sx={{
//             background: "#eee",
//             "&:hover": {
//               backgroundColor: "#3C487E",
//               "& svg": {
//                 color: "#eee",
//               },
//             },
//           }}
//           onClick={goToPreviousCard}
//         >
//           <West sx={{ color: "#3C486B" }} />
//         </IconButton>
//         <IconButton
//           elevation={3}
//           sx={{
//             background: "#3C486B",
//             "&:hover": {
//               backgroundColor: "#3C487E",
//             },
//           }}
//           onClick={goToNextCard}
//         >
//           <East />
//         </IconButton>
//       </Box>
//       <Slider {...sliderSettings}>
//         {cards.map((card, index) => (
//           <div key={index}>
//             <Box>
//               <CCard>
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       color: "#3C486B",
//                       lineHeight: "20px",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {card.text1}
//                   </Typography>
//                   <Box sx={{ my: 1 }} />
//                   <Typography variant="body2">{card.text2}</Typography>
//                   <Box sx={{ my: 1 }} />
//                   <Typography variant="body2">{card.text3}</Typography>
//                 </CardContent>
//                 <CardContent sx={{ position: "relative", mt: "150px" }}>
//                   <Avatar
//                     sx={{
//                       position: "absolute",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       width: "100px",
//                       height: "100px",
//                       border: "3px solid #F9D949",
//                       zIndex: 22,
//                       top: "-130px",
//                     }}
//                     src={card.image}
//                   />
//                   <Image
//                     style={{
//                       position: "absolute",
//                       left: "-1.5ch",
//                       bottom: "-20px",
//                       width: "calc(100% + 3ch)",
//                     }}
//                     src={rect}
//                   />
//                 </CardContent>
//               </CCard>
//             </Box>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CardSlider;
