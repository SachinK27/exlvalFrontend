import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { LocationOn, AccessTime } from "@mui/icons-material";
import mascot5 from "../assets/images/Mascot 5.svg";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import icon1 from "../assets/images/Career - Fun, friendly and learning-based culture.png";
import icon2 from "../assets/images/Career - Opportunity to upskill.png";
import icon3 from "../assets/images/Career - Annual leaves and holidays.png";
import icon4 from "../assets/images/Career - Gain market knowledge.png";
import bgImage from "../assets/images/Hero bg image.png";
import jobs from "../jobs.json";

import "./Sticky.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const iconsData = [
  { icon: icon1, text: "Fun, friendly and learning-based culture" },
  { icon: icon2, text: "Opportunity to upskill" },
  { icon: icon3, text: "Annual leaves and holidays" },
  { icon: icon4, text: "Gain market knowledge" },
];

const Career = () => {
  const parentRef = useRef(null);
  const mascotRef = useRef(null);
  const joinOpeningsRef = useRef(null);
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
  const handleViewOpenings = () => {
    joinOpeningsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Grid>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval : Careers in Digital Marketing, Ahmedabad</title>
        <meta
          name="description"
          content="Discover exciting career opportunities at EXLVAL, a leading digital marketing company. Join us to amplify your skills and thrive in a dynamic, innovative environment."
        />
        <meta
          name="keywords"
          content="Digital Marketing Jobs in Ahmedabad ,SEO Jobs in Ahmedabad,Digital Marketing Careers in Ahmedabad"
        />
      </Helmet>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          minHeight: "40vh",
          p: "2ch 2ch",
          height: { xs: "auto", md: "60vh" },
          backgroundImage: { xs: "none", md: `url("${bgImage}")` },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Typography variant="h1" align="center" sx={{ maxWidth: "20ch" }}>
          Join us at Exlval and get competitive pay
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center" fontSize="18px">
          Let's create some magic together!
        </Typography>
        <Button
          sx={{
            mt: "1rem",
            backgroundColor: "#3C486B",
            borderRadius: 4,
            padding: "1ch 2ch",
            "&:hover": {
              backgroundColor: "#3C487E",
            },
          }}
          onClick={handleViewOpenings}
        >
          View Openings
        </Button>
      </Container>

      <Container sx={{ mt: "5%" }}>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Career</strong>
          </Typography>
        </Stack>
      </Container>
      {/* display={{ xs: "none", sm: "none", md: "block", lg: "block" }} */}
      <Container
        ref={parentRef}
        sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}
      >
        <Grid container sx={{ px: { sm: 2, lg: 5 } }}>
          <Grid
            item
            sm={12}
            md={5}
            lg={5}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
          >
            <Image
              src={mascot5}
              sx={{ width: "28vw", objectFit: "contain", align: "center" }}
              className="mascot-image-high"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={7}>
            <Container
              sx={{
                "@media (max-width: 959.95px)": {
                  p: 0,
                },
              }}
            >
              <Box sx={{ mb: "20px" }}>
                <UnderlinedText>We're Exlvalions!</UnderlinedText>
              </Box>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                Our team is always on the lookout for top talent to join our
                team of marketing mavericks.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                We believe in fostering a dynamic and creative work environment
                that allows our team members to thrive and grow.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                We make sure to keep things fresh and exciting.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                We're not just looking for skilled professionals-we want
                individuals who are passionate, driven and want to have fun
                while working.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                After all, what's the point of all this hard work if we can't
                have some fun along the way?
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                Fresher or Experienced, if you're ready to challenge yourself,
                collaborate with a group of talented individuals, and want to
                earn some unique experience in the business, join us!
              </Typography>
            </Container>

            <Grid
              container
              spacing={2}
              sx={{
                my: 5,
                px: 5,
                "@media (max-width: 959.95px)": {
                  px: 0,
                },
              }}
            >
              {iconsData.map((item, index) => (
                <Grid item xs={6} key={index} align="center" sx={{ my: 2 }}>
                  <Image src={item.icon} sx={{ width: "40%" }} />
                  <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Container sx={{ mt: 5 }}>
              <Box ref={joinOpeningsRef} sx={{ my: 5 }}>
                <UnderlinedText>Join Openings</UnderlinedText>
              </Box>

              <Stack>
                {jobs.jobs.map((job) => {
                  return (
                    <Box
                      key={job.id}
                      sx={{
                        border: "2px solid #F9D949",
                        borderRadius: "1rem",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack spacing={2}>
                        <Typography fontWeight={"500"} fontSize="24px">
                          {job.role}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <LocationOn color={"#F45050"} />
                            <Typography>Remote</Typography>
                          </Box>
                          <Box
                            sx={{
                              ml: 2,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <AccessTime color={"#F45050"} />
                            <Typography>Full Time</Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack spacing={2}>
                        <Typography sx={{ px: 2 }}>{2} Openings</Typography>
                        <Typography
                          component={Link}
                          to={`/career/${job.id}`}
                          sx={{
                            backgroundColor: "#F9D949",
                            p: "1ch 2ch",
                            borderRadius: "10px",
                            "&:hover": {
                              backgroundColor: "#F9E949",
                            },
                            color: "#2B2B2B",
                            fontWeight: "500",
                          }}
                        >
                          Apply
                        </Typography>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Career;
