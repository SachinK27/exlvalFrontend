// import React, { useState, useEffect } from 'react';
// import './Cardtemp2.scss'; // Import the SCSS file
// const slideWidth = 30;

// const _items = [
//   {
//     player: {
//       title: 'Efren Reyes',
//       desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all-around player of all time.',
//       image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
//     },
//   },
//   {
//     player: {
//       title: "Ronnie O'Sullivan",
//       desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
//       image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
//     },
//   },
//   {
//     player: {
//       title: 'Shane Van Boening',
//       desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
//       image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
//     },
//   },
//   {
//     player: {
//       title: 'Mike Sigel',
//       desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
//       image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
//     },
//   },
//   {
//     player: {
//       title: 'Willie Mosconi',
//       desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
//       image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
//     },
//   },
// ];

// const length = _items.length;
// _items.push(..._items);

// const sleep = (ms = 0) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//   const item = {
//     styles: {
//       transform: `translateX(${position * slideWidth}rem)`,
//     },
//     player: _items[idx].player,
//   };

//   switch (position) {
//     case length - 1:
//     case length + 1:
//       item.styles = { ...item.styles, filter: 'grayscale(1)' };
//       break;
//     case length:
//       break;
//     default:
//       item.styles = { ...item.styles, opacity: 0 };
//       break;
//   }

//   return item;
// };

// const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
//   const item = createItem(pos, idx, activeIdx);

//   return (
//     <li className="carousel__slide-item" style={item.styles}>
//       <div className="carousel__slide-item-img-link">
//         <img src={item.player.image} alt={item.player.title} />
//       </div>
//       <div className="carousel-slide-item__body">
//         <h4>{item.player.title}</h4>
//         <p>{item.player.desc}</p>
//       </div>
//     </li>
//   );
// };

// const CardTemp2 = () => {
//   const [items, setItems] = useState(Array.from(Array(_items.length).keys()));
//   const [isTicking, setIsTicking] = useState(false);
//   const [activeIdx, setActiveIdx] = useState(0);
//   const bigLength = items.length;

//   const prevClick = (jump = 1) => {
//     if (!isTicking) {
//       setIsTicking(true);
//       setItems((prev) =>
//         prev.map((_, i) => prev[(i + jump) % bigLength])
//       );
//     }
//   };

//   const nextClick = (jump = 1) => {
//     if (!isTicking) {
//       setIsTicking(true);
//       setItems((prev) =>
//         prev.map(
//           (_, i) => prev[(i - jump + bigLength) % bigLength]
//         )
//       );
//     }
//   };

//   const handleDotClick = (idx) => {
//     if (idx < activeIdx) prevClick(activeIdx - idx);
//     if (idx > activeIdx) nextClick(idx - activeIdx);
//   };

//   useEffect(() => {
//     if (isTicking) sleep(300).then(() => setIsTicking(false));
//   }, [isTicking]);

//   useEffect(() => {
//     setActiveIdx((length - (items[0] % length)) % length);
//   }, [items]);

//   return (
//     <div className="carousel__wrap">
//       <div className="carousel__inner">
//         <button
//           className="carousel__btn carousel__btn--prev"
//           onClick={() => prevClick()}
//         >
//           <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//         </button>
//         <div className="carousel__container">
//           <ul className="carousel__slide-list">
//             {items.map((pos, i) => (
//               <CarouselSlideItem
//                 key={i}
//                 idx={i}
//                 pos={pos}
//                 activeIdx={activeIdx}
//               />
//             ))}
//           </ul>
//         </div>
//         <button
//           className="carousel__btn carousel__btn--next"
//           onClick={() => nextClick()}
//         >
//           <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//         </button>
//         <div className="carousel__dots">
//           {items.slice(0, length).map((pos, i) => (
//             <button
//               key={i}
//               onClick={() => handleDotClick(i)}
//               className={i === activeIdx ? 'dot active' : 'dot'}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTemp2;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CardTemp2 = () => {
//   const handlePrevious = () => {
//     sliderRef.slickPrev();
//     console.log("hey");
//   };

//   const handleNext = () => {
//     sliderRef.slickNext();
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   let sliderRef;

//   return (
//     <div style={{backgroundColor:"red"}}>
//       <h2>CardTemp2</h2>
//       <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//       </Slider>
//       <div>
//         <button onClick={handlePrevious}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default CardTemp2;





import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardTemp2.css';
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  CardContent,
  styled,
  Card
} from "@mui/material";
import { West, East } from "@mui/icons-material";
import rect from "../assets/images/Rectangle 184.svg";
import Image from "./Image";

const CCard = styled(Card)({
  border: "1px solid #F45050",
  borderRadius: "40px",
  padding: "3ch 1.5ch 0 1.5ch",
  maxWidth: "360px",
  height: "520px"
});
const CardTemp2 = () => {


  const settings = {
    dots: false,
    infinite: false,
    accessibility: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      text1: "Card 1",
      text2: "Description 1",
      text3: "Details 1",
      image:
        "https://example.com/image1.jpg",
    },
    {
      text1: "Card 2",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    },
    {
      text1: "Card 3",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    },
    {
      text1: "Card 4",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    },
    {
      text1: "Card 5",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    },
    {
      text1: "Card 6",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    },
    {
      text1: "Card 7",
      text2: "Description 2",
      text3: "Details 2",
      image:
        "https://example.com/image2.jpg",
    }

  ];

  return (
    <div className="carousel">
<Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} >
            <Box sx={{width:"100%"}} className="card-container">
              <CCard>
                <CardContent>
                  <Typography
                    sx={{
                      color: "#3C486B",
                      lineHeight: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {card.text1}
                  </Typography>
                  <Box sx={{ my: 1 }} />
                  <Typography variant="body2">{card.text2}</Typography>
                  <Box sx={{ my: 1 }} />
                  <Typography variant="body2">{card.text3}</Typography>
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
                    src={card.image}
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
              </CCard>
            </Box>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardTemp2;
