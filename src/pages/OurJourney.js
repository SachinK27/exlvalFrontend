import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UnderlinedText from "../components/UnderlinedText";
// import JourneyPageCreative from "../assets/images/Journey-page-creative.png";
import mascot3 from "../assets/images/pose_03a.svg";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import bgImage from "../assets/images/Hero bg image.png";
import { Helmet } from "react-helmet";

const OurJourney = () => {
  return (
    <Box
    // sx={{
    //   p: 0,
    //   m: "auto",
    // }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Passion for Digital Marketing</title>
        <meta
          name="description"
          content="Discover the transformative journey with our premier digital marketing company. Unlock new heights of success with expert strategies and innovative solutions. Join us today."
        />
        <meta
          name="keywords"
          content="SEO Company in Ahmedabad, Best Digital Marketing Company in Ahmedabad, Top Digital Marketing Company Ahmedabad, India, Social Media Marketing in Ahmedabad ,Content Marketing in Ahmedabad"
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
        <Typography variant="h1" align="center" sx={{ maxWidth: "20ch" }}>
          Humble Beginnings to a Digital Powerhouse
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body2" align="center" fontSize="18px">
          Discover our journey and know how we can propel your business forward
        </Typography>
      </Container>

      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Journey</strong>
          </Typography>
        </Stack>
      </Container>

      <Box align="center" sx={{ my: "80px" }}>
        <UnderlinedText>Services that unlock potential</UnderlinedText>
      </Box>

      <Box
        // display="flex"
        // justifyContent="center"
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "80vh", lg: "100vh" },
          maxWidth: "100vw",
          px: "2rem",
          backgroundImage: {
            xs: "url('/images/mobile-view-journey.png')",
            lg: "url('/images/journey-page-creative.png')",
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        {/* <Typography
          fontSize={"8px"}
          sx={{
            position: "absolute",
            top: "25%",
            maxWidth: "80%",
          }}
        >
          Exival has come a long way since its humble beginnings as Exdval Our
          journey has been • powered by the commitment to delivering value to
          clients through innovation and a • dedicated beam. Today, Exival
          stands tall as a premier provider of marketing services, helping
          businesses thrive in the cutthroat world of competition
        </Typography>
        <Typography
          fontSize={"8px"}
          sx={{
            position: "absolute",
            top: "37%",
            maxWidth: "80%",
          }}
        >
          A few months after starting, Exival identified a global problem faced
          by businesses in getting affordable professional services. Businesses
          struggled to find the right company to meet their specific needs due
          to factors like budget limitations, lack of knowledge about a
          particular ideology, and the challenge of measuring work done. Exival
          saw an opportunity to address this problem and expand its services to
          a wider audience.
        </Typography>
        <Typography
          fontSize={"8px"}
          sx={{
            position: "absolute",
            top: "47%",
            maxWidth: "80%",
          }}
        >
          Exival has come a long way since its humble beginnings as Exdval Our
          journey has been • powered by the commitment to delivering value to
          clients through innovation and a • dedicated beam. Today, Exival
          stands tall as a premier provider of marketing services, helping
          businesses thrive in the cutthroat world of competition
        </Typography>
        <Typography
          fontSize={"8px"}
          sx={{
            position: "absolute",
            top: "58%",
            maxWidth: "80%",
          }}
        >
          In 2019, Exival set sail as a part-time startup, providing digital O
          marketing services to local clients. We started by offering our
          expertise in digital marketing to help businesses grow. As our O
          client bond strengthened, we aimed to provide more value through
          innovation in solutions, processes, and people
        </Typography> */}
      </Box>

      <Box sx={{ my: 7 }} />

      <Container>
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
              src={mascot3}
              style={{ height: "70vh", maxWidth: "80vw", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xl={6.5} lg={6.5} md={6.5} sm={12} xs={12}>
            <Container
            // sx={{ width: "100%" }}
            >
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default OurJourney;
