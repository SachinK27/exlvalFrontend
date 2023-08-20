import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import mascot from "../assets/images/Mascot 5.svg";
import Image from "../components/Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import bgImage from "../assets/images/Hero bg image.png";
import "./Sticky.css";
import { Helmet } from "react-helmet";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import JobApplication from "../components/JobApplication";

const Opening = () => {
  const { id } = useParams();

  const parentRef = useRef(null);
  const mascotRef = useRef(null);

  const [job, setJob] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const parentContainer = parentRef.current;
      const mascotImage = mascotRef.current;

      const parentTop =
        parentContainer.offsetTop - (5 * window.innerHeight) / 100; // Adding 15vh
      const mascotHeight = mascotImage.offsetHeight;
      const parentBottom =
        parentContainer.offsetTop +
        parentContainer.offsetHeight -
        mascotHeight -
        (5 * window.innerHeight) / 100; // Adding 15vh;
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

  const getJob = (id) => {
    const isFound = jobs.jobs.filter((job) => job.id === Number(id));

    console.log(isFound);

    setJob(isFound[0]);
  };

  useEffect(() => {
    console.log(id);

    getJob(id);
  }, [id]);

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
          {job?.role}
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body2" align="center" fontSize={"18px"}>
          We appreciate your interest in a career with Exlval. Please take a
          minute to fill out the following form.
        </Typography>
        <Typography variant="body2" align="center" fontSize={"18px"}>
          Once you submit your application, an email will be sent to you.
        </Typography>
      </Container>
      <Box sx={{ my: "7ch" }} />

      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography>Career</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>{job?.role}</Typography>
        </Stack>
      </Container>
      <Box sx={{ my: "7ch" }} />

      <Container
        ref={parentRef}
        sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}
      >
        <Grid
          container
          sx={{
            px: 5,
            "@media (max-width: 959.95px)": {
              px: 2,
            },
          }}
        >
          <Grid
            item
            sm={12}
            md={5}
            lg={5}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
          >
            <Image
              src={mascot}
              sx={{ width: "28vw", objectFit: "contain", align: "center" }}
              className="mascot-image-high"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={7}>
            <Stack spacing={2}>
              <Typography variant="h5">Role & Responsibilities:</Typography>
              <Typography fontSize={"18px"}>{job?.responsibilities}</Typography>
              <Typography variant="h5">What you will do:</Typography>
              <Typography fontSize={"18px"}>{job?.youWillDo}</Typography>
              <Typography variant="h5">Qualifications:</Typography>
              <Typography fontSize={"18px"}>{job?.qualifications}</Typography>
              <Typography variant="h5">Application Process:</Typography>
              <Typography fontSize={"18px"}>
                {job?.applicationProcess}
              </Typography>
              <Typography variant="h5">Application Deadline:</Typography>
              <Typography fontSize={"18px"}>
                {job?.applicationDeadline}
              </Typography>
              <Typography fontSize={"18px"}>{job?.note}</Typography>
            </Stack>

            <Box mt={8} />

            <JobApplication />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Opening;
