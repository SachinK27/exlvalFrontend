// import * as React from "react";
// import { Box, styled, Typography } from "@mui/material";
// import underline from "../assets/images/underline.svg";
// import underline2 from "../assets/images/underline2.svg";

// const UnderlinedGrowth = ({ small, children }) => {
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

//   const UnderlineImg = styled("img")`
//     width: ${underlineWidth}px;
//     animation: underlineAnimation 4s forwards;
//     display: "block"

//     @keyframes underlineAnimation {
//       0% {
//         width: 0;
//       }
//       100% {
//         width: ${small ? "10px" : `${underlineWidth}px`};
//       }
//     }
//   `;

//   return (
//     <Box>
//       <Typography
//         variant="h3"
//         sx={{ fontWeight: 500, display: "inline-block" }}
//         ref={typographyRef}
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

// export default UnderlinedGrowth;




import * as React from "react";
import { Box, styled, Typography } from "@mui/material";
import underline from "../assets/images/underline.svg";
import underline2 from "../assets/images/underline2.svg";

const UnderlinedGrowth = ({ small, children }) => {
  const [animateUnderline, setAnimateUnderline] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateUnderline(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const UnderlineImg = styled("img")`
    width: 100px;
    animation: underlineAnimation 4s forwards;
    display: block;
    transition: width 0.3s;

    @keyframes underlineAnimation {
      0% {
        width: 0;
      }
      100% {
        width: 200px;
      }
    }
  `;

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 500, display: "inline-block" }}
      >
        {children}
      </Typography>
      <br />
      
      <Box
        sx={{
          visibility: animateUnderline ? "visible" : "hidden",
          overflow: "hidden",
          height: "10px",
          position: "relative",
        }}
      >
        <UnderlineImg
          src={small ? underline2 : underline}
          sx={{ marginBottom: small ? "22px" : 0 }}
          alt="Underline"
        />
      </Box>

    </Box>
  );
};

export default UnderlinedGrowth;
