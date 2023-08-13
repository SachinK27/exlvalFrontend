import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Link } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function CardTest({ title, short_desc, image }) {
  return (
    <Card
      sx={{
        height: 550,
        width: 400,
        borderLeft: "4px solid #E6DCDA",
        borderRight: "4px solid #E6DCDA",
        borderBottom: "4px solid #E6DCDA",
        borderRadius: 5,
        padding: 3,
        "@media (max-width: 959.95px)": {
          height: 550,
          width: 350,
          align: "center",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="300"
          image={image}
          alt="green iguana"
          sx={{
            borderRadius: 5,
          }}
        />
        <CardContent
          sx={{
            textAlign: "left",
            marginTop: 3,
            padding: 0,
          }}
        >
          <Typography sx={{ color: "#F45050" }}>
            <strong>Nov 21 2023</strong>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" mt={2}>
            {title}
          </Typography>
          <Typography variant="body2">{short_desc}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          marginTop: 2,
          padding: 0,
          color: "darkblue",
          textDecoration: "underline",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>Read more</span>
          <TrendingFlatIcon fontSize="12" sx={{ mt: ".2rem", ml: ".5rem" }} />
        </Box>
      </CardActions>
    </Card>
  );
}
