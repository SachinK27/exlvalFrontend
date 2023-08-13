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
          height: "300px",
          position: "relative",
        }}
      >
        <Box align="center">
          <Typography variant="h1">Let’s take your business to new</Typography>
          <Typography variant="h1" sx={{ mt: -1 }}>
            heights
          </Typography>
        </Box>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body2" align="center">
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
      <Container
        
        sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}
      >
        <Grid container ref={parentRef} 
        sx={{ 
          px: 5,
           maxWidth: "100vw",
          "@media (max-width: 959.95px)": {
          px:0
           }}}>
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
            <Container sx={{  }}>
              <ContactForm />
            </Container>
            <Box sx={{ my: 7 }} />
            <Stack sx={{ px: 5,
        "@media (max-width: 959.95px)": {
          px:0
        } }} spacing={3}>
              <Stack
                sx={{
                  px: 15,
                  py: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign:"justify",
                  "@media (max-width: 959.95px)": {
                  px:5
                   }
                }}
                spacing={2}
              >
                <Stack direction="row" alignItems="center">
                  <LocationOnIcon fontSize="large" sx={{ color: "#F45050" }} />
                  <Typography variant="h3">Address</Typography>
                </Stack>
                <Typography>
                  Lörem ipsum ärade ohektigt fastän bedonde sysit. Syvektig
                  faten uban. Multihufagel trede gagån, alltså deciprelingar.{" "}
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
                <Typography>lakshman@exlval.com</Typography>
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
                <Typography>Monday to Saturday, 10:00am - 6:00pm</Typography>
                <Typography>Sunday, 10:00am - 3:00pm</Typography>
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
