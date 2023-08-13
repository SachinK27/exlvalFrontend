import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "./Image";

const PersonCard = ({ img, name, role, ...rest }) => {
  return (
    <Paper elevation={0} {...rest}>
      <Box align="center">
        <Image
          src={img}
          sx={{
            borderRadius: "10px",
            width: "180px",
            height: "220px",
          }}
        />
      </Box>
      <Box align="center">
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>{role}</Typography>
      </Box>
    </Paper>
  );
};

export default PersonCard;
