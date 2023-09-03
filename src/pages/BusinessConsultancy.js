import React, { useEffect, useRef } from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "../components/Image";
import ConsultingForm from "../components/ConsultingForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import mascot from "../assets/images/Mascot 5.svg";
import CardTest from "../components/CardTest";
import NewsLetterForm from "../components/NewsLetterForm";

import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import bgImage from "../assets/images/Hero bg image.png";
import "./Sticky.css";
import { Helmet } from "react-helmet";
// const CustomContainer = styled(Container)(({ theme }) => ({
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

const BusinessConsultancy = () => {
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
    <Grid container padding={{ xs: 2, md: 5 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval: We Get Results</title>
        <meta
          name="description"
          content="Transform your business with our expert consultancy services at Exlval Digital Marketing. Our solutions drive growth, enhance strategies, and maximize success. Reach your goals with us today."
        />
        <meta
          name="keywords"
          content="Best Digital Marketing company in Ahmedabad, Digital Marketing Consultancy in Ahmedabad, Digital Marketing Company in Ahmedabad, India"
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
          Expertise that helps you thrive
        </Typography>
        <Box sx={{ my: 1, lineHeight: 2, fontSize: "18px" }} />
        <Typography variant="h7" align="center" fontSize={"18px"}>
          Get a competitive edge with our FREE Business Consulting.
        </Typography>
      </Container>

      <Grid
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          p: 5,
          m: 5,
          "@media (max-width: 959.95px)": {
            m: 0,
            px: 2,
          },
        }}
      >
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Business Consultancy</strong>
          </Typography>
        </Stack>
      </Grid>

      <Container>
        <Grid
          ref={parentRef}
          container
          // sx={{
          //   px: 5,
          //   maxWidth: "100vw",
          //   "@media (max-width: 959.95px)": {
          //     px: 0,
          //   },
          // }}
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
              sx={{ width: "28vw", objectFit: "contain", align: "center" }}
              className="mascot-image-high"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={6.5} lg={6.5} sx={{ maxWidth: "100%" }}>
            {/* <Container
              sx={{
                "@media (max-width: 959.95px)": {
                  width: "100%",
                  m: 0,
                  p: 2,
                },
              }}
            > */}
            <Typography
              component={"p"}
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                mb: 3,
                fontSize: "18px",
              }}
            >
              Ever felt like you have business ideas, but you can’t execute them
              due to various factors?
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              These factors can make your business stagnant, and we can help you
              look past them so you achieve what you aim for.
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              At Exlval, we're not just marketing gurus, we're business wizards!
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              Our team of experts is here to sprinkle some magic and help your
              business soar.
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              We don't believe in one-size-fits-all solutions, that's why we'll
              brew customized strategies to address your unique challenges and
              opportunities.
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              From analyzing your competitors to conjuring up a perfect brand
              positioning, we'll provide you with the insights and guidance you
              need to make your business thrive.
            </Typography>
            <Typography component={"p"} sx={{ mb: 2, fontSize: "18px" }}>
              So we bring you up to 1-hour FREE Business Consulting which will
              give you an expert perspective on problem-solving.
            </Typography>
            <Container
              sx={{
                // width: "90%",
                mt: 5,
                "@media (max-width: 959.95px)": {
                  width: "100%",
                  m: 0,
                  p: 0,
                },
              }}
            >
              <ConsultingForm />
            </Container>
            {/* </Container> */}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default BusinessConsultancy;
