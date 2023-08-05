import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const CCard = styled(Card)({
  borderRadius: "20px",
  marginBottom: "1ch",
});

const Card3 = ({ img, color, contained, tags = [] }) => {
  return (
    <Box sx={{ maxWidth: "320px", mb: 4 }} align="center">
      <CCard sx={{ border: `1px solid ${color}` }}>
        <CardContent>
          <CardMedia component="img" height="300" image={img} />
        </CardContent>
      </CCard>
      <Stack direction="row" justifyContent={"space-around"}>
        {tags.map((it, i) => (
          <Button
            sx={{
              background: contained ? "#3C486B" : "#fff",
              borderRadius: "20px",
              fontSize: "12px",
              px: 2,
              border: "1px solid #3C486B",
              color: contained ? "#fff" : "#3C486B",
              "&:hover": {
                color: contained ? "#3C486B" : "default",
              },
            }}
            key={i}
          >
            {it}
          </Button>
        ))}
      </Stack>
      <Typography variant="h6" sx={{ width: "80%" }}>
        Linkedin Management for Alok Koshti
      </Typography>
    </Box>
  );
};

export default Card3;
