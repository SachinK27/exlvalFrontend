import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "./Image";

const PersonCard = ({ ...rest }) => {
  return (
    <Paper elevation={0} {...rest}>
      <Box>
        <Image
          src={"https://picsum.photos/200/300"}
          sx={{ borderRadius: "10px", p: 0, width: "180px", height: "220px" }}
        />
      </Box>
      <Box align="center">
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Lakshman Sharma
        </Typography>
        <Typography variant="body1">SEO Expert</Typography>
      </Box>
    </Paper>
  );
};

export default PersonCard;
