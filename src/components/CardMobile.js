import React, { useState, useEffect, useRef } from "react";
import {
  Avatar,
  Box,
  Grid,
  Container,
  IconButton,
  Stack,
  Typography,
  styled,
  Button,
  useTheme, 
  useMediaQuery
} from "@mui/material";
import Card4 from './Card4'
const CardMobile = ({title,content}) => {
  return (
    <Box align="center" sx={{ display: "flex", position: "relative", width:"90%" , margin:"0 auto"}}>
          <Box
            sx={{
              width: "20rem",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
           <Card4>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "-14%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <em>Step 1</em>
              </Typography>
              <Typography variant="body2">
                <em>
                Our performance marketing specialist will comprehend your goals, audience, and desired outcome(s) for your advertisements
                </em>
              </Typography>
            </Card4>
  </Box>
  )
}

export default CardMobile