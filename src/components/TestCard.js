import React, { useState } from 'react';
import "./testCard.css";
import Image from "./Image";
import { Box, Typography } from "@mui/material";
import cardDesign from "../assets/images/card design.svg";
const TestCard = ({front_text,back_text,rotate}) => {
  return (
    <div className="page-container" style={{cursor:'pointer',transform: `rotate(${rotate}deg)`}}>
      <BlogCard front_text={front_text} back_text={back_text} />
    </div>
  );
};

const BlogCard = ({front_text,back_text}) => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      // onClick={flip}
      onMouseEnter={flip}
      onMouseLeave={flip}
      
      className={`card-container${flipped ? ' flipped' : ''}`}
    >
      <Front front_text={front_text}/>
      <Back back_text={back_text}/>
    </div>
  );
};

const Front = ({front_text}) => {
  return (
    <div className="front">
       
       <Box sx={{ height: "310px", width: "220px", position: "relative" }}>
      <Box
        sx={{
          background: "#F0F0F0",
          position: "absolute",
          height: "90%",
          width: "71%",
          zIndex: 22,
          left: "54%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          padding: "0 0.7ch"
        }}
      >
        <Typography variant="body2">{front_text}</Typography>
      </Box>
      <Image style={{ position: "absolute" }} src={cardDesign} />
    </Box>
    </div>
  );
};

const Back = ({back_text}) => {
  return (
    <div className="back">
       <Box sx={{ height: "310px", width: "220px", position: "relative" }}>
      <Box
        sx={{
          background: "#F0F0F0",
          position: "absolute",
          height: "90%",
          width: "71%",
          zIndex: 22,
          left: "54%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          padding: "0 0.7ch"
        }}
      >
        <Typography variant="body2">{back_text}</Typography>
      </Box>
      <Image style={{ position: "absolute" }} src={cardDesign} />
    </Box>
    </div>
  );
};



export default TestCard;
