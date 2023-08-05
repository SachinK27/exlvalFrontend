import card from "../assets/images/card.svg";

import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";

const Card4 = ({ children }) => {
  return (
    <Box sx={{ width: "193px", position: "relative" }}>
      <Image src={card} style={{transform: "scale(0.9)"}} />
      {/* <Image src={card} style={{width:"300px"}} /> */}
      <Box
        sx={{
          position: "absolute",
          left: "66px",
          top: "83px",
          height: "65%",
          width: "100%",
          zIndex: 22,
          p: 1,
          fontWeight: "bold",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Card4;
