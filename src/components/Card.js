// import { Box, Card as MuiCard, Stack, Typography } from "@mui/material";
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// const Card = ({ title, content, ...rest }) => {
//   return (
//     <MuiCard
//       elevation={2}
//       sx={{
//         ...rest,
//         p: 3,
//         borderRadius: "20px",
//         border: "1px solid #F45050",
//         maxWidth: "350px",
//         position: "relative",
//         display: "inline-block",
//         "&:hover": {
//           "&::after": {
//             transform: "scaleX(1)",
//           },
//         },
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           left: "7%",
//           bottom: "10px",
//           width: "86%",
//           height: "3px",
//           backgroundColor: "#F45050",
//           transform: "scaleX(0)",
//           transformOrigin: "left",
//           transition: "transform 0.3s ease",
//         },
//       }}
//     >
//       <Stack spacing={2} direction="row">
//         <AutoGraphIcon sx={{ fontSize: "50px", color: "#F45050" }} />
//         <Typography variant="h6" sx={{ fontWeight: 500 }}>
//           {title}
//         </Typography>
//       </Stack>
//       <Box sx={{ my: 0.5 }} />
//       <Typography variant="body1" sx={{height:"100px"}}>{content}</Typography>
//     </MuiCard>
//   );
// };

// export default Card;

import { Box, Card as MuiCard, Stack, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Sparkles from "react-sparkle";
import { useState } from "react";

const Card = ({ title, content, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <MuiCard
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      elevation={2}
      sx={{
        ...rest,
        p: 3,
        borderRadius: "20px",
        border: "1px solid #F45050",
        maxWidth: "360px",
        position: "relative",
        overflow: "visible",
        display: "inline-block",
        "&:hover": {
          boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.5)",
          "&::after": {
            transform: "scaleX(1)",
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          left: "7%",
          bottom: "10px",
          width: "86%",
          height: "3px",
          backgroundColor: "#F45050",
          transform: "scaleX(0)",
          transformOrigin: "left",
          //transition: "transform 0.3s ease",
          transition: "box-shadow 0.3s ease-out",
        },
      }}
    >
      {isHovered && (
        <Sparkles
          color="red"
          count={40}
          minSize={7}
          maxSize={12}
          overflowPx={30}
          fadeOutSpeed={10}
          flicker={false}
        />
      )}
      <Stack spacing={2} direction="row">
        <AutoGraphIcon
          sx={{
            fontSize: "50px",
            color: "#F45050",
            // animation: "sparkle 1s infinite",
            // "@keyframes sparkle": {
            //   "0%": { transform: "rotate(0deg) scale(1)" },
            //   "50%": { transform: "rotate(180deg) scale(1.2)" },
            //   "100%": { transform: "rotate(360deg) scale(1)" },
            // },
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 500, minHeight: "65px" }}>
          {title}
        </Typography>
      </Stack>
      <Box sx={{ my: 0.5 }} />
      <Typography variant="body1" sx={{ minHeight: "100px" }}>
        {content}
      </Typography>
    </MuiCard>
  );
};

export default Card;
