import { Box, Typography } from "@mui/material";
import cardDesign from "../assets/images/card design.svg";
import Image from "./Image";

const Card2 = ({front_text,back_text, rotate}) => {
  return (
    <Box sx={{ height: "310px", width: "220px", position: "relative", transform: `rotate(${rotate}deg)` }}>
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
  );
};

export default Card2;

