import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import infographic from "../assets/images/infographic.svg";
import mascot2 from "../assets/images/pose_01.svg";
import mascot from "../assets/images/pose_06a.png";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonCard from "../components/PersonCard";
import bgImage from "../assets/images/Hero bg image.png";

import team from "../team.json";

import "./Sticky.css";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const parentRef = useRef(null);
  const mascotRef = useRef(null);

  const matches = useMediaQuery("min-width(700px)");

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
    <Container
      sx={{
        p: 0,
        m: "auto",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval: Trusted by Businesses Worldwide</title>
        <meta
          name="description"
          content="Discover excellence with EXLVAL, your premier digital marketing partner. We craft compelling strategies to elevate your online presence. Join us for innovative solutions and measurable success in the digital realm. and contact us at 📞+91 9166549902"
        />
        <meta
          name="keywords"
          content="SEO Company in Ahmedabad, Best Digital Marketing Company in Ahmedabad, Top Digital Marketing Company Ahmedabad , India Digital Marketing agency in Ahmedabad"
        />
      </Helmet>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          position: "relative",
          minHeight: "40vh",
          p: "2ch 2ch",
          height: { xs: "auto", md: "60vh" },
          backgroundImage: { xs: "none", md: `url("${bgImage}")` },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box align="center">
          <Typography variant="h1">Real people delivering real</Typography>
          <Typography variant="h1" sx={{ mt: -1 }}>
            results
          </Typography>
        </Box>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center" fontSize="18px">
          Digital Wizards are wielding our expertise to help businesses thrive
          in the ever-evolving digital landscape
          <br /> while delivering value.
        </Typography>
      </Container>
      <Box sx={{ my: "10ch" }} />
      <Container sx={{ pl: 5 }}>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>About Us</strong>
          </Typography>
        </Stack>
      </Container>
      <Box sx={{ my: "7ch" }} />
      <Box sx={{ maxWidth: "100vw !important" }} ref={parentRef}>
        <Grid container>
          <Grid
            item
            sm={12}
            md={5.2}
            lg={5.2}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
          >
            <Image
              src={mascot}
              sx={{ width: "33vw", objectFit: "contain", align: "center" }}
              className="mascot-image"
              ref={mascotRef}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6.8}
            lg={6.8}
            sx={{
              "@media (max-width: 959.95px)": {
                p: 5,
                width: "100vw",
              },
            }}
          >
            <Box>
              <UnderlinedText small>Who are we</UnderlinedText>
              <Box sx={{ my: 4 }} />
              <Stack spacing={2}>
                <Typography fontSize="18px">
                  We have always believed in excellence and values.
                </Typography>
                <Typography fontSize="18px">
                  We are everything you think of a Digital Marketing Company:{" "}
                  <strong>
                    Technical, Flexible, Focused, Creative, and Committed, with
                    a sprinkle of magic.
                  </strong>
                </Typography>
                <Typography fontSize="18px">
                  We are a team of experts who are committed to giving services
                  which help clients stand tall in the market.
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ my: 7 }} />
            <Box>
              <UnderlinedText small>What we do</UnderlinedText>
              <Box sx={{ my: 4 }} />
              <Stack spacing={2} sx={{ "@media (max-width: 959.95px)": {} }}>
                <Typography fontSize="18px">
                  As the Digital Marketing landscape is complex and
                  ever-changing, many businesses struggle to keep up with it.{" "}
                </Typography>
                <Typography fontSize="18px">
                  With a strong focus on quality, value, customer satisfaction,
                  and results-driven strategies, Exlval aims to be a valuable
                  partner to businesses looking to enhance their online
                  presence.
                </Typography>
                <Typography fontSize="18px">
                  We work closely with each client to ensure they achieve their
                  desired outcomes and are committed to delivering exceptional
                  services.
                </Typography>
                <Image src={infographic} />
                <Box sx={{ my: 4 }} />
                <Grid
                  sx={{ p: 0, m: 0 }}
                  display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
                >
                  <Stack direction="row">
                    <Box>
                      <UnderlinedText small>Our Vision</UnderlinedText>
                      <Typography>
                        Delivering value and strength to businesses with our
                        services in a strategic, technical, and creative way
                        that reaches the best digital marketing solutions.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Image
                        style={{ transform: "scale(0.7)", margin: "0 -1ch" }}
                        src={"/images/rocket.png"}
                      />
                    </Box>
                    <Box sx={{ mt: "25%" }}>
                      <Typography>
                        <UnderlinedText small>Our Mission</UnderlinedText>
                        We strive to create a world which grows as we provide
                        our digital marketing services and knowledge globally
                        which gives us a chance to grow and expand with you.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid
                  container
                  display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
                >
                  <Grid item xs={12} sm={12}>
                    <UnderlinedText small>Our Vision</UnderlinedText>
                    <Typography>
                      Delivering value and strength to businesses with our
                      services in a strategic, technical, and creative way that
                      reaches the best digital marketing solutions.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: "2rem" }}>
                    <UnderlinedText small>Our Mission</UnderlinedText>
                    <Typography>
                      Delivering value and strength to businesses with our
                      services in a strategic, technical, and creative way that
                      reaches the best digital marketing solutions.
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
            <Box sx={{ my: 7 }} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: "7ch" }} />
      <Box sx={{ maxWidth: "100vw !important" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ px: 5 }}>
            <UnderlinedText small>Meet our team</UnderlinedText>
          </Box>
          <Box
            width={"100%"}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={2}
          >
            <Box
              gridColumn={"span 1"}
              sx={{
                backgroundImage: `url("${mascot2}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Image
                sx={{
                  height: "180px",
                  // objectFit: "cover",
                  // transform: "scale(2.5)",
                  // mt: 6,
                  // ml: 4,
                  // "@media (max-width: 959.95px)": {
                  //   display: "none",
                  // },
                }}
                src={mascot2}
              /> */}
            </Box>
            {team.team.map((it, i) => (
              <Box gridColumn={"span 1"}>
                <PersonCard
                  key={i}
                  img={it.img}
                  name={it.name}
                  role={it.role}
                  // sx={{
                  //   mb: "4ch !important",
                  //   ml: i === 0 ? "3ch !important" : "7ch !important",
                  //   "@media (max-width: 959.95px)": {
                  //     ml: "13ch !important",
                  //   },
                  // }}
                />
              </Box>
            ))}
            <Box gridColumn={"span 1"}>
              <Stack
                sx={{
                  mx: "auto",
                  width: "180px",
                  height: "220px",
                  border: "2px solid #F45050",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  // "@media (max-width: 959.95px)": {
                  //   ml: "7ch !important",
                  // },
                }}
                spacing={2}
              >
                <Typography
                  align="center"
                  variant="body1"
                  sx={{
                    color: "#F45050",
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  Want to be an Exlvalion
                </Typography>
                <Typography>Start a career</Typography>
                <Typography
                  component={Link}
                  href="/career"
                  sx={{
                    backgroundColor: "#F9D949",
                    p: "0.3ch 2ch",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#F9E949",
                    },
                    color: "#2B2B2B",
                  }}
                >
                  Join us
                </Typography>
              </Stack>
            </Box>
          </Box>
          {/* <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              mt: 2,
            }}
            spacing={7}
          > */}

          {/* </Stack> */}
        </Box>
        <Box sx={{ my: 7 }} />
        <Grid container>
          <Grid
            item
            xl={5.5}
            lg={5.5}
            md={5.5}
            sm={12}
            xs={12}
            align="center"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Image
              src={mascot}
              style={{ height: "70vh", maxWidth: "80vw", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xl={6.5} lg={6.5} md={6.5} sm={12} xs={12}>
            <Container sx={{ width: "100%" }}>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
