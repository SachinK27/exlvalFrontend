// import { Box, Container, Stack, Typography, Grid } from "@mui/material";
// import { styled } from "@mui/system";
// import Image from "../components/Image";
// import ContactForm from "../components/ContactForm";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import bgImage from "../assets/images/Hero bg image.png";
// import Card3 from "../components/Card3";
// import SideNav from "../components/SideNav";
// import mascot from "../assets/images/pose_03.png";
// import TestData from "./TestData";

// // const CustomContainer = styled(Container)(({ theme }) => ({
// //   padding: 0,
// //   margin: 0,
// //   display: "flex",
// //   justifyContent: "center",
// //   alignItems: "center",
// // }));

// const TestInfographics = () => {
//   return (
//     <Grid container padding={5}>
//       <Grid container spacing={2}>
//         <Grid
//           item
//           xl={12}
//           lg={12}
//           md={12}
//           sm={12}
//           xs={12}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "column",
//             m: "8ch auto",
//             fontWeight: 500,
//             backgroundImage: { xs: "none",  md: `url("${bgImage}")` },
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "400px",
//             position: "relative",
//           }}
//         >
//           <Box align="center">
//             <Typography variant="h1">
//               Visualizing Success with the best form of
//             </Typography>
//             <Typography variant="h1" sx={{ mt: -1 }}>
//               Information
//             </Typography>
//           </Box>
//           <Box sx={{ my: 6, lineHeight: 1.7, fontSize: "18px" }} />
//           <Typography variant="body2" align="center">
//             The easy-to-digest info that will inspire you!
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid container >
//         <Grid item xl={12} lg={12} md={12} sm={12} xs={12} align={"left"} mb={10} sx={{
//               display: "flex",
//               flexDirection: "row",
//               paddingLeft: 8
//             }}>

//             <Typography>Home</Typography>
//             <ChevronRightIcon />
//             <Typography sx={{ color: "#F45050" }}>Infographics</Typography>

//         </Grid>
//       </Grid>
//       <Grid container spacing={2}>
//         <Grid container justifyContent="space-between">
//           <Grid
//             item
//             xl={3}
//             lg={3}
//             md={3}
//             sm={12}
//             xs={12}
//             align={"left"}
//             sx={{
//               paddingLeft: 10,
//             }}
//           >
//             <SideNav />
//           </Grid>
//           <Grid
//             item
//             xl={9}
//             lg={9}
//             md={9}
//             sm={12}
//             xs={12}
//             align={"center"}
//             sx={{
//               padding: 2,
//               p: "0 !important",
//               maxWidth: "100vw !important",
//               fontSize: "18px",
//             }}
//           >
//             <Grid
//               container
//               spacing={2}
//               sx={{
//                 overflowY: "scroll",
//                 maxHeight: "90vh",
//                 scrollbarWidth: "none",
//                 "::-webkit-scrollbar": { display: "none" },
//                 justifyContent: "space-between",
//                 width: "100%",
//                 flexWrap: "wrap",
//               }}
//             >
//               {TestData.map((ele, idx) => {
//                 return (
//                   <Grid item xl={4} lg={4} md={4} sm={12} xs={12} key={idx}>
//                     <Card3
//                       img={ele.img}
//                       tags={ele.tags}
//                       color={ele.color}
//                       contained
//                       key={idx}
//                     />
//                   </Grid>
//                 );
//               })}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           height: 3,
//         }}
//       ></Grid>
//       <Grid container spacing={2} padding={5} mt={5}>
//         <Grid
//           item
//           xl={6}
//           lg={6}
//           md={6}
//           sm={12}
//           xs={12}
//           align={"center"}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Image src={mascot} style={{ width: "100%", transform: "scale(1.3)" }} />
//         </Grid>
//         <Grid
//           item
//           xl={6}
//           lg={6}
//           md={6}
//           sm={12}
//           xs={12}
//           padding={5}
//           align={"center"}
//         >
//           <ContactForm />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default TestInfographics;
