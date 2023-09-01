import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import mascot from "../assets/images/pose_03a.svg";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import bgImage from "../assets/images/Hero bg image.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./Sticky.css";
import { Helmet } from "react-helmet";
const ContactUs = () => {
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
    <Container
      sx={{
        p: 0,
        m: "auto",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval Digital Marketing Get in Touch</title>
        <meta
          name="description"
          content="Connect us EXLVAL Digital Marketing for expert solutions that boost your online presence. Reach us now for tailored strategies and exceptional results. Let's elevate your brand together. contact us at 📞+91 9166549902"
        />
        <meta
          name="keywords"
          content="Best Digital Marketing Company in Ahmedabad, Top Digital Marketing Company in Ahmedabad ,Digital marketing company in Ahmedabad, India"
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
        <Typography variant="h1" align="center" maxWidth={"30ch"}>
          Let’s take your business to new heights
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7 }} />
        <Typography variant="body2" align="center" fontSize="18px">
          Ready to take the next step in your business? No request is big or
          small for us. Get in touch with us today!
        </Typography>
      </Container>
      <Box sx={{ my: "7ch" }} />
      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Contact Us</strong>
          </Typography>
        </Stack>
      </Container>
      <Box sx={{ my: "7ch" }} />
      <Container sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}>
        <Grid
          container
          ref={parentRef}
          sx={
            {
              // px: 5,
              // maxWidth: "100vw",
              // "@media (max-width: 959.95px)": {
              //   px: 0,
              // },
            }
          }
        >
          <Grid
            item
            sm={12}
            md={5.5}
            lg={5.5}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
          >
            <Image
              src={mascot}
              sx={{ width: "35vw", objectFit: "contain", align: "center" }}
              className="mascot-image-width"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={6.5} lg={6.5}>
            <Container sx={{}}>
              <ContactForm />
            </Container>
            <Box sx={{ my: 7 }} />
            <Stack
              sx={{
                px: 5,
                "@media (max-width: 959.95px)": {
                  px: 0,
                },
              }}
              spacing={3}
            >
              <Stack
                sx={{
                  px: 15,
                  py: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  "@media (max-width: 959.95px)": {
                    px: 5,
                  },
                }}
                spacing={2}
              >
                <Stack direction="row" alignItems="center">
                  <LocationOnIcon fontSize="large" sx={{ color: "#F45050" }} />
                  <Typography variant="h3">Address</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  // sx={{ textDecoration: "underline" }}
                >
                  204 (VM-014), SF, Corporate House Anubhuti Commercial Complex
                  Opp: Torrent Pharma, Off Ashram Road, Ahmedabad, Gujarat -
                  380009, India
                </Typography>
              </Stack>
              <Stack
                sx={{
                  py: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#F9D949",
                  borderRadius: "40px",
                }}
                spacing={2}
              >
                <Stack direction="row" alignItems="center">
                  <PermContactCalendarIcon
                    fontSize="large"
                    sx={{ color: "#F45050" }}
                  />
                  <Typography variant="h3">Contact</Typography>
                </Stack>
                <Typography>(+91) 9166549902</Typography>
                <Typography>value@exlval.com</Typography>
              </Stack>
              <Stack
                sx={{
                  py: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                spacing={2}
              >
                <Stack direction="row" alignItems="center">
                  <AccessTimeFilledIcon
                    fontSize="large"
                    sx={{ color: "#F45050" }}
                  />
                  <Typography variant="h3">Business Hours</Typography>
                </Stack>
                <Typography>Monday to Friday 10 am to 7:30pm</Typography>
                <Typography>Saturday 10am to 2pm</Typography>
              </Stack>
            </Stack>
            <Box align="center" sx={{ my: 7 }} />
            <Box align="center" sx={{ borderRadius: "40px" }}>
              <iframe
                align="center"
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.05051531200576!2d77.61873465912323!3d12.945972624538841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685564812132!5m2!1sen!2sin"
                width="90%"
                height="450"
                style={{ border: 0, borderRadius: "40px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <Box sx={{ my: 7 }} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ContactUs;
