// import React, { useEffect, useRef } from "react";
// import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
// import bgImage from "../assets/images/Hero bg image.png";
// import logo1 from "../assets/images/GIBG.png";
// import logo2 from "../assets/images/Team Aviation.png";
// import logo3 from "../assets/images/Trived Pharma.png";
// import logo4 from "../assets/images/SDECOR Leminates.png";
// import logo5 from "../assets/images/CG Logistics.png";
// import logo6 from "../assets/images/Relitrade.png";
// import logo7 from "../assets/images/Growing Mafia.png";
// import logo8 from "../assets/images/KeyCMS.png";
// import mascot from "../assets/images/output-onlinegiftools.gif";
// import mascot2 from "../assets/images/Mediamodifier-Design.svg";
// import bubble1 from "../assets/images/bubble1.svg";
// import bubble2 from "../assets/images/bubble2.svg";
// import bubble3 from "../assets/images/bubble3.svg";
// import mascot6 from "../assets/images/pose_06a.png";
// import Card from "../components/Card";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import Carousel from "../components/Carousel";
// import Image from "../components/Image";
// import Card2 from "../components/Card2";
// import Carousel2 from "../components/Carousel2";
// import ContactForm from "../components/ContactForm";
// import UnderlinedText from "../components/UnderlinedText";
// import TestCard from "../components/TestCard";
// import CardTemp2 from "../components/CardTemp2";
// import "./Sticky.css";
// import "./bubble.css";
// import SwipperTest from "../components/SwipperTest";

// const Homepage = () => {
//   const parentRef = useRef(null);
//   const mascotRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const parentContainer = parentRef.current;
//       const mascotImage = mascotRef.current;

//       const parentTop = parentContainer.offsetTop;
//       const mascotHeight = mascotImage.offsetHeight;
//       const parentBottom =
//         parentContainer.offsetTop + parentContainer.offsetHeight - mascotHeight;
//       const scrollPosition = window.pageYOffset;

//       if (scrollPosition >= parentTop && scrollPosition < parentBottom) {
//         mascotImage.classList.add("sticky");
//       } else {
//         mascotImage.classList.remove("sticky");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <Grid container>
//       {/* <CardTemp2/> */}
//       <Container
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           flexDirection: "column",
//           m: "8ch auto",
//           fontWeight: 500,
//           backgroundImage: `url("${bgImage}")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//         }}
//       >
//         <Container
//           align="center"
//           sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}
//         >
//           <Grid
//             container
//             spacing={1.5}
//             direction="row"
//             wrap="wrap"
//             align="center"
//             justifyContent="center"
//             sx={{ textAlign: "center" }}
//           >
//             <Grid item>
//               <Typography variant="h1">Drive</Typography>
//             </Grid>
//             <Grid item sx={{ mb: -5 }}>
//               <UnderlinedText small>
//                 <Typography variant="h1">growth</Typography>
//               </UnderlinedText>
//             </Grid>

//             <Grid item>
//               <Typography variant="h1">and</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">expand</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">with</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">360&deg;</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">Digital</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">Marketing</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h1">Services.</Typography>
//             </Grid>
//           </Grid>
//         </Container>

//         <Box sx={{ my: 2 }} />
//         <Typography variant="body2" align="center">
//           Our team of experts tailor creative, technical, strategic, and
//           data-driven solutions for you <br /> that unlock your business’s full
//           potential
//         </Typography>
//         <Container sx={{ mt: 5 }} align="center">
//           <Button
//             sx={{
//               backgroundColor: "#3C486B",
//               borderRadius: 4,
//               padding: "1ch 2ch",
//               "&:hover": {
//                 backgroundColor: "#3C487E",
//               },
//             }}
//           >
//             Contact us
//           </Button>
//         </Container>
//       </Container>

//       <Box sx={{ width: "90%", margin: "0 auto" }}>
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           spacing={2}
//           sx={{ my: 2, height: "50px", justifyContent: "space-between" }}
//         >
//           <Grid item>
//             <Image
//               src={logo1}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo2}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo3}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo4}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo5}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo6}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo7}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//           <Grid item>
//             <Image
//               src={logo8}
//               alt="Logo"
//               sx={{ height: "50px", objectFit: "contain" }}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       <Grid container mb={30} sx={{ my: 10 }}>
//         <Grid lg={12} md={12} sm={12}>
//           <div className="bubble_div">
//             <img src={bubble1} className="first_bubble" alt="first_bubble" />

//             <p className="bubble_div_text1">
//               Hey, wonderful humans!
//               <br /> &emsp;&emsp;I’m ExlWiz.
//               <br /> I’ll be your host here!
//             </p>

//             <img src={bubble2} className="second_bubble" alt="first_bubble" />
//             <p className="bubble_div_text2">
//               &ensp; I’ll be the one to guide you <br />
//               &ensp; through the site of Exlval. <br />
//               So, be ready to discover the <br />
//               &emsp; spells for your growth, <br />
//               &emsp;&emsp;&emsp;curated by us!
//             </p>

//             <img src={mascot} className="bubble_mascot" alt="first_bubble" />

//             <img src={bubble3} className="third_bubble" alt="first_bubble" />
//             <p className="bubble_div_text3">
//               &emsp;A personal tip from me, keep
//               <br /> your dreams and desires in mind,
//               <br />
//               &emsp; for they shall come true with <br />
//               &emsp;&emsp;&emsp;&emsp;&emsp;Exlval.
//             </p>
//           </div>
//         </Grid>

//         <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
//       </Grid>

//       <Box ref={parentRef} sx={{ maxWidth: "100vw !important" }}>
//         <Grid container sx={{ px: 5 }}>
//           <Grid item sm={12} md={5} lg={5}>
//             <Image
//               src={mascot6}
//               sx={{ width: "400px" }}
//               className="mascot-image"
//               ref={mascotRef}
//             />
//           </Grid>
//           <Grid item sm={12} md={7} lg={7}>
//             <Box>
//               <UnderlinedText>Services that unlock potential</UnderlinedText>
//               <Box sx={{ my: 4 }} />
//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//               </Box>
//             </Box>

//             <Box sx={{ my: 7 }} />
//             <Box>
//               <UnderlinedText>Explore Our Result-driven Work</UnderlinedText>

//               <SwipperTest />

//               <Container align="center">
//                 <Button
//                   sx={{
//                     backgroundColor: "#3C486B",
//                     borderRadius: 4,
//                     padding: "1ch 2ch",
//                     "&:hover": {
//                       backgroundColor: "#3C487E",
//                     },
//                     align: "center",
//                   }}
//                   endIcon={<ArrowRightAltIcon fontSize="large" />}
//                 >
//                   View all projects
//                 </Button>
//               </Container>
//             </Box>

//             <Box sx={{ my: 7 }} />
//             {/* <CardTemp2/> */}
//             <Box>
//               <UnderlinedText>Tap to find the solutions</UnderlinedText>
//               <Box sx={{ my: 10 }} />
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   width: "100%",
//                   gap: 5,
//                   p: 1,
//                 }}
//               >
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 1"
//                   rotate={-2}
//                 />
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 2"
//                   rotate={3}
//                 />
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 3"
//                   rotate={0}
//                 />
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 4"
//                   rotate={3}
//                 />
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 5"
//                   rotate={0}
//                 />
//                 <TestCard
//                   front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
//                   back_text="Back text 6"
//                   rotate={-3}
//                 />
//               </Box>
//             </Box>
//             <Box sx={{ my: 10 }} />
//             <Box>
//               <UnderlinedText>What our Clients have to say</UnderlinedText>
//               <Box sx={{ my: 7 }} />

//               <Carousel2
//                 cards={[
//                   {
//                     image:
//                       "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//                     text1: `“Exlval has a friendly team — they do what is required and
//                 deliver quality work on time. 1”`,
//                     text2: `Exlval developed and designed my website, and they’re working on
//                 creating content for it. In addition, most of the online tasks
//                 are handled by them, including social media management, SEO, and
//                 paid ads.`,
//                     text3: `Exlval has assigned us different team members for all the
//                 services they’re providing, including for content, SEO, design,
//                 and social media. Their project management is good; Exlval is
//                 always available when I need them.`,
//                   },
//                   {
//                     image:
//                       "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//                     text1: `“222222Their personal attention and fast delivery
// were Impressive.”`,
//                     text2: `I have Opted. Exlval for A neat and clean
// website on time. As the owner of Exlval,
// Lakshman Sharma was in known of me. Then
// we started for Website Development and
// secondly we started for Search Engine
// Optimization.`,
//                     text3: `Must say very nice research and execution and
// also very professional and good coordination in
// between different teams. Their personal
// attention and fast delivery were impressive.
// Keep it up Exlval!`,
//                   },
//                   {
//                     image:
//                       "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//                     text1: `“3333Exlval has a friendly team — they do what is required and
//                 deliver quality work on time.”`,
//                     text2: `Exlval developed and designed my website, and they’re working on
//                 creating content for it. In addition, most of the online tasks
//                 are handled by them, including social media management, SEO, and
//                 paid ads.`,
//                     text3: `Exlval has assigned us different team members for all the
//                 services they’re providing, including for content, SEO, design,
//                 and social media. Their project management is good; Exlval is
//                 always available when I need them.`,
//                   },
//                   {
//                     image:
//                       "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//                     text1: `“4444Their personal attention and fast delivery
// were Impressive.”`,
//                     text2: `I have Opted. Exlval for A neat and clean
// website on time. As the owner of Exlval,
// Lakshman Sharma was in known of me. Then
// we started for Website Development and
// secondly we started for Search Engine
// Optimization.`,
//                     text3: `Must say very nice research and execution and
// also very professional and good coordination in
// between different teams. Their personal
// attention and fast delivery were impressive.
// Keep it up Exlval!`,
//                   },
//                 ]}
//               />
//             </Box>

//             <Box sx={{ my: 10 }} />
//             <Container sx={{ width: "90%", mb: 5 }}>
//               <ContactForm />
//             </Container>
//           </Grid>
//         </Grid>
//       </Box>
//     </Grid>
//   );
// };

// export default Homepage;

import React, {
  // useState,
  useEffect,
  useRef,
} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  // Stack,
  Typography,
  Link,
} from "@mui/material";
import bgImage from "../assets/images/Hero bg image.png";
// import logo1 from "../assets/images/TSRF.png";
// import logo2 from "../assets/images/Team Aviation.png";
// import logo3 from "../assets/images/Trived Pharma.png";
// import logo4 from "../assets/images/SDECOR Leminates.png";
// import logo5 from "../assets/images/CG Logistics.png";
// import logo6 from "../assets/images/Relitrade.png";
// import logo7 from "../assets/images/Growing Mafia.png";
// import logo8 from "../assets/images/lastCompany.png";
import mascot from "../assets/images/output-onlinegiftools.gif";
import mascot6 from "../assets/images/pose_06a.png";
import bubble1 from "../assets/images/bubble1.svg";
import bubble2 from "../assets/images/bubble2.svg";
import bubble3 from "../assets/images/bubble3.svg";
import Card from "../components/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import Carousel from "../components/Carousel";
import Image from "../components/Image";
// import Card2 from "../components/Card2";
import Carousel2 from "../components/Carousel2";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
import TestCard from "../components/TestCard";
import CompanySlider from "../components/CompanySlider";
import GrowthGraph from "../assets/images/growth graph - homepage.svg";
import "./Sticky.css";
import "./bubble.css";
import SwipperTest from "../components/SwipperTest";
import TypingAnimationMain from "../components/TypingAnimationMain";
const Homefixed = () => {
  const parentRef = useRef(null);
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parentContainer = parentRef.current;
      const mascotImage = mascotRef.current;

      const parentTop =
        parentContainer.offsetTop - (15 * window.innerHeight) / 100; // Adding 15vh
      const mascotHeight = mascotImage.offsetHeight;
      const parentBottom =
        parentContainer.offsetTop +
        parentContainer.offsetHeight -
        mascotHeight -
        (15 * window.innerHeight) / 100; // Adding 15vh;
      const scrollPosition = window.pageYOffset;
      // mascotImage.classList.add("stickyBottom");
      if (scrollPosition >= parentTop && scrollPosition < parentBottom) {
        mascotImage.classList.remove("stickyBottom");
        mascotImage.classList.add("stickyTop");
      } else if (scrollPosition >= parentBottom) {
        mascotImage.classList.remove("stickyTop");
        mascotImage.classList.add("stickyBottom");
      } else {
        mascotImage.classList.remove("stickyBottom");
        mascotImage.classList.remove("stickyTop");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid container>
      {/* <CardTemp2/> */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          m: "8ch auto",
          fontWeight: 500,
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container
          align="center"
          sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}
        >
          <Grid
            container
            spacing={1.5}
            direction="row"
            wrap="wrap"
            align="center"
            justifyContent="center"
            sx={{ textAlign: "center" }}
          >
            <Grid item>
              <Typography variant="h1">Drive</Typography>
            </Grid>
            <Grid item sx={{ mb: -5 }}>
              <TypingAnimationMain />
            </Grid>

            <Grid item>
              <Typography variant="h1">and</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">expand</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">with</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">360&deg;</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">Digital</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">Marketing</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">Services.</Typography>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ my: 2 }} />

        <Typography variant="body1" align="center">
          Our team of experts tailor creative, technical, strategic, and
          data-driven solutions for you <br /> that unlock your business’s full
          potential
        </Typography>

        <Container sx={{ mt: 5 }} align="center">
          <Button
            sx={{
              backgroundColor: "#3C486B",
              borderRadius: 4,
              cursor: "pointer",
              padding: "1ch 2ch",
              "&:hover": {
                backgroundColor: "#3C487E",
              },
            }}
          >
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </Container>
      </Container>

      <Grid>
        <CompanySlider />
      </Grid>

      {/* <Container sx={{ my: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={mascot} style={{ height: "70vh" }} />
        </Box>
      </Container> */}

      <Grid container mb={30} sx={{ my: 10 }}>
        <Grid lg={12} md={12} sm={12}>
          <div className="bubble_div">
            <img src={bubble1} className="first_bubble" alt="first_bubble" />

            <p className="bubble_div_text1">
              Hey, wonderful humans!
              <br /> &emsp;&emsp;I’m ExlWiz.
              <br /> I’ll be your host here!
            </p>

            <img src={bubble2} className="second_bubble" alt="first_bubble" />
            <p className="bubble_div_text2">
              &ensp; I’ll be the one to guide you <br />
              &ensp; through the site of Exlval. <br />
              So, be ready to discover the <br />
              &emsp; spells for your growth, <br />
              &emsp;&emsp;&emsp;curated by us!
            </p>

            <img src={mascot} className="bubble_mascot" alt="first_bubble" />

            <img src={bubble3} className="third_bubble" alt="first_bubble" />
            <p className="bubble_div_text3">
              &emsp;A personal tip from me, keep
              <br /> your dreams and desires in mind,
              <br />
              &emsp; for they shall come true with <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;Exlval.
            </p>
          </div>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
      </Grid>

      <Box ref={parentRef} sx={{ maxWidth: "100vw !important" }}>
        <Grid container sx={{ pl: 8, pr: 3 }}>
          <Grid
            item
            sm={12}
            md={4.5}
            lg={4.5}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
          >
            <Image
              src={mascot6}
              sx={{ width: "33vw", objectFit: "contain", align: "center" }}
              className="mascot-image"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={7.5} lg={7.5}>
            <Box>
              <UnderlinedText>Services that unlock potential</UnderlinedText>
              <Box sx={{ my: 4 }} />
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: "30px", mt: 5 }}
              >
                <Card
                  title="Search Engine Optimization"
                  content="Want to outrank your competitors? Our SEO service is the secret sauce to help you get there. Lets make your website"
                />

                <Card
                  title="Online Reputation Management"
                  content="Keep your business image spotless with our online reputation management service. We'll help you charm your customers with confidence."
                />
                <Card
                  title="Content Marketing"
                  content="We give users precisely what they want to find with the help of our content that captures attention, drives traffic and adds a dash of charisma to your message."
                />
                <Card
                  title="Performance Marketing"
                  content="Tired of throwing your marketing budget down the drain? Our performance marketing service turns your clicks into conversions!
"
                />
                <Card
                  title="Social Media Marketing"
                  content="We'll give your brand an authentic voice that connects and entertains. And yes, our creativity is the icing on the cake!"
                />
                <Card
                  title="Influencer Marketing"
                  content="Looking for a game-changing marketing strategy? Expand your reach and boost engagement through influencers, while maintaining your brand's personality."
                />
                <Card
                  title="Branding"
                  content="Forge a magnetic brand with our branding services. We'll help you stand out, connect with your audience, and grow your business."
                />
                <Card
                  title="Graphic Design"
                  content="Willing to bring your visions to life? Our team has got you covered. With our design expertise, your brand is sure to stand out from the competition."
                />
                <Card
                  title="Website Design"
                  content="Our website design is like a tailor-made suit for your online presence - perfectly fitted, stylish, and sure to impress. Be the go-to destination for users with us."
                />
                <Card
                  title="Website Development"
                  content="Your website is the heart of your online presence. Let our expert developers bring it to life with a touch of magic."
                />
              </Box>
            </Box>
            {/* <Box sx={{ my: 10 }} /> */}
            <Box
              sx={{
                textAlign: "center",
                width: "70%",
                margin: "0 auto",
                my: 15,
                position: "relative",
              }}
            >
              <Box
                sx={{ position: "absolute", width: "300px", textAlign: "left" }}
              >
                <Typography
                  sx={{
                    fontSize: "45px",
                    fontWeight: "medium",
                    lineHeight: "1.3",
                  }}
                >
                  Drive your growth with reliable
                </Typography>
              </Box>

              <Image
                src={GrowthGraph}
                sx={{ objectFit: "contain", align: "center" }}
              />
              <Button
                sx={{
                  backgroundColor: "#3C486B",
                  cursor: "pointer",
                  borderRadius: 4,
                  padding: "1ch 2ch",
                  "&:hover": {
                    backgroundColor: "#3C487E",
                  },
                  mt: 3,
                }}
              >
                <Link href="/contact-us">Contact us</Link>
              </Button>
            </Box>

            <Box sx={{ my: 10 }} />
            <Box>
              <UnderlinedText>Explore Our Result-driven Work</UnderlinedText>

              <SwipperTest />

              <Container align="center">
                <Button
                  sx={{
                    backgroundColor: "#3C486B",
                    borderRadius: 4,
                    padding: "1ch 2ch",
                    "&:hover": {
                      backgroundColor: "#3C487E",
                    },
                    align: "center",
                  }}
                  endIcon={<ArrowRightAltIcon fontSize="large" />}
                >
                  View all projects
                </Button>
              </Container>
            </Box>

            <Box sx={{ my: 10 }} />
            {/* <CardTemp2/> */}
            <Box sx={{ mt: 3 }}>
              <UnderlinedText>Tap to find the solutions</UnderlinedText>
              {/* <Box sx={{ my: 10 }} /> */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: 5,
                  p: 1,
                  my: 5,
                }}
              >
                <TestCard
                  front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
                  back_text="We identify keywords and audiences with thorough Business & SEO Analysis which includes intensive research to find the best solutions for you.
                  "
                  rotate={-2}
                />
                <TestCard
                  front_text="My company’s online presence doesn’t have the right business and content strategy. What do I do?"
                  back_text="We can help you build a solid content and business strategy that actually works and unlocks the best potential of your business."
                  rotate={3}
                />
                <TestCard
                  front_text="What is the solution to having the right audience that is attracted by your business?
                  "
                  back_text="Building an audience with a strategy that converts into paying customers which ultimately boosts your revenue."
                  rotate={0}
                />
                <TestCard
                  front_text="Why does my website not rank on the 1st page of the search engine? 
                  "
                  back_text="We have a FREE SEO Audit to identify gaps to make an effective SEO plan to get rank and organic results that conquer the internet."
                  rotate={3}
                />
                <TestCard
                  front_text="Why am I not getting quality leads from Paid Ads and Social Media Ads?
                  "
                  back_text="Reaching the right audience at the right time converts into your customers. Our experts will help you achieve that."
                  rotate={0}
                />
                <TestCard
                  front_text="Why am I not getting the ROI and cost-effective results even though I tried different agencies?"
                  back_text="With our SEO, Content Marketing, and Paid Ads service, we focus on the results that give you the best ROI and help you win the market."
                  rotate={-3}
                />
              </Box>
            </Box>
            <Box sx={{ my: 10 }} />
            <Box>
              <UnderlinedText>What our Clients have to say</UnderlinedText>
              <Box sx={{ my: 7 }} />

              <Carousel2
                cards={[
                  {
                    image:
                      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    text1: `“Exlval has a friendly team — they do what is required and
                deliver quality work on time.”`,
                    text2: `Exlval developed and designed my website, and they’re working on
                creating content for it. In addition, most of the online tasks
                are handled by them, including social media management, SEO, and
                paid ads.`,
                    text3: `Exlval has assigned us different team members for all the
                services they’re providing, including for content, SEO, design,
                and social media. Their project management is good; Exlval is
                always available when I need them.`,
                  },
                  {
                    image:
                      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    text1: `“Their personal attention and fast delivery 
were Impressive.”`,
                    text2: `I have Opted. Exlval for A neat and clean 
website on time. As the owner of Exlval, 
Lakshman Sharma was in known of me. Then 
we started for Website Development and 
secondly we started for Search Engine 
Optimization.`,
                    text3: `Must say very nice research and execution and 
also very professional and good coordination in 
between different teams. Their personal 
attention and fast delivery were impressive. 
Keep it up Exlval!`,
                  },
                  {
                    image:
                      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    text1: `“Exlval has a friendly team — they do what is required and
                deliver quality work on time.”`,
                    text2: `Exlval developed and designed my website, and they’re working on
                creating content for it. In addition, most of the online tasks
                are handled by them, including social media management, SEO, and
                paid ads.`,
                    text3: `Exlval has assigned us different team members for all the
                services they’re providing, including for content, SEO, design,
                and social media. Their project management is good; Exlval is
                always available when I need them.`,
                  },
                  {
                    image:
                      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    text1: `“Their personal attention and fast delivery 
were Impressive.”`,
                    text2: `I have Opted. Exlval for A neat and clean 
website on time. As the owner of Exlval, 
Lakshman Sharma was in known of me. Then 
we started for Website Development and 
secondly we started for Search Engine 
Optimization.`,
                    text3: `Must say very nice research and execution and 
also very professional and good coordination in 
between different teams. Their personal 
attention and fast delivery were impressive. 
Keep it up Exlval!`,
                  },
                ]}
              />
            </Box>

            <Box sx={{ my: 10 }} />
            <Container sx={{ width: "90%", mb: 5 }}>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Homefixed;
