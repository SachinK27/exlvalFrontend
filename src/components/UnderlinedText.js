
// import React, { useState } from "react";
// import { Box, styled, Typography } from "@mui/material";
// import underline from "../assets/images/underline.svg";
// import underline2 from "../assets/images/underline2.svg";

// const UnderlinedText = ({ small, children }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const typographyRef = React.useRef(null);
//   const [underlineWidth, setUnderlineWidth] = React.useState(0);

//   React.useEffect(() => {
//     const typographyElement = typographyRef.current;
//     const measureUnderlineWidth = () => {
//       const underlineWidth = typographyElement.offsetWidth;
//       setUnderlineWidth(underlineWidth);
//     };
//     measureUnderlineWidth();
//     window.addEventListener("resize", measureUnderlineWidth);
//     return () => {
//       window.removeEventListener("resize", measureUnderlineWidth);
//     };
//   }, []);

//   const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a unique ID

//   const UnderlineImg = styled("img")`
//     width: ${underlineWidth}px;
//     animation: underlineAnimation_${uniqueId} 0.5s forwards;
//     display: block;
//     transition: width 0.3s;

//     @keyframes underlineAnimation_${uniqueId} {
//       0% {
//         width: ${isHovered ? 0 : underlineWidth}px;
//       }
//       100% {
//         width: ${isHovered ? underlineWidth : 0}px;
//       }
//     }
//   `;

//   return (
//     <Box>
//       <Typography
//         variant="h3"
//         sx={{ fontWeight: 500, display: "inline-block" }}
//         ref={typographyRef}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {children}
//       </Typography>
//       <br />
//       <UnderlineImg
//         src={small ? underline2 : underline}
//         sx={{ marginBottom: small ? "22px" : 0 }}
//         alt="Underline"
//       />
//     </Box>
//   );
// };

// export default UnderlinedText;


import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import underline from "../assets/images/underline.svg";
import underline2 from "../assets/images/underline2.svg";

const UnderlinedText = ({ small, children }) => {
  const [isHovered, setIsHovered] = useState(true);
  const typographyRef = React.useRef(null);
  const [underlineWidth, setUnderlineWidth] = React.useState(0);

  React.useEffect(() => {
    const typographyElement = typographyRef.current;
    const measureUnderlineWidth = () => {
      const underlineWidth = typographyElement.offsetWidth;
      setUnderlineWidth(underlineWidth);
    };
    measureUnderlineWidth();
    window.addEventListener("resize", measureUnderlineWidth);
    return () => {
      window.removeEventListener("resize", measureUnderlineWidth);
    };
  }, []);

  const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a unique ID

  const UnderlineImg = styled("img")`
    width: ${underlineWidth}px;
    animation: ${isHovered ? `underlineAnimation_${uniqueId} 0.5s forwards` : "none"};
    display: block;
    transition: width 0.3s;

    @keyframes underlineAnimation_${uniqueId} {
      0% {
        width: 0;
      }
      100% {
        width: ${underlineWidth}px;
      }
    }
  `;

  return (

    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 500, display: "inline-block" }}
        ref={typographyRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Typography>
      <br />
      <UnderlineImg
        src={small ? underline2 : underline}
        sx={{ marginBottom: small ? "22px" : 0 }}
        alt="Underline"
      />
    </Box>
  );
};

export default UnderlinedText;
