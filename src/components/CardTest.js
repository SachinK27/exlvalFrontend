import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function CardTest() {
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
          align:"center"  
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="300"
          image="https://picsum.photos/id/1/200/300"
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
          <Typography sx={{ color: "#F45050" }}><strong>Nov 21 2023</strong></Typography>
          <Typography gutterBottom variant="h5" component="div" mt={2}>
            Why is local SEO important for your business growth
          </Typography>
          <Typography variant="body2">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        marginTop: 2,
        padding: 0,
        color: "darkblue",
        textDecoration: "underline",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "right"
      }}>
      <Link href="#">Read more <TrendingFlatIcon sx={{
      }}/></Link>
      </CardActions>
    </Card>
  );
}
