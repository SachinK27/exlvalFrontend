import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import bgImage from "../assets/images/Hero bg image.png";
import logo1 from "../assets/images/GIBG.png";
import logo2 from "../assets/images/Team Aviation.png";
import logo3 from "../assets/images/Trived Pharma.png";
import logo4 from "../assets/images/SDECOR Leminates.png";
import logo5 from "../assets/images/CG Logistics.png";
import logo6 from "../assets/images/Relitrade.png";
import logo7 from "../assets/images/Growing Mafia.png";
import logo8 from "../assets/images/KeyCMS.png";
import mascot from "../assets/images/pose_01.gif";
import mascot2 from "../assets/images/Mediamodifier-Design.svg";
import Card from "../components/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Carousel from "../components/Carousel";
import Image from "../components/Image";
import Card2 from "../components/Card2";
import Carousel2 from "../components/Carousel2";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";

const Homepage = () => {
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
          backgroundImage: { xs: "none", md: `url("${bgImage}")` },
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <Box>
          <Stack direction="row">
            <Typography variant="h1">Drive</Typography>&nbsp;&nbsp;&nbsp;
            <UnderlinedText small>
              <Typography variant="h1">growth</Typography>
            </UnderlinedText>
            &nbsp;&nbsp;&nbsp;
            <Typography variant="h1">and expand with</Typography>
          </Stack>
          <Typography variant="h1" sx={{ mt: -5 }}>
            360&deg; Digital Marketing Services.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }} />
        <Typography variant="body2" align="center">
          Our team of experts tailor creative, technical, strategic, and
          data-driven solutions for you <br /> that unlock your business’s full
          potential
        </Typography>
        <Box sx={{ my: 2 }} />
        <Button
          sx={{
            backgroundColor: "#3C486B",
            borderRadius: 4,
            padding: "1ch 2ch",
            "&:hover": {
              backgroundColor: "#3C487E",
            },
          }}
        >
          Contact us
        </Button>
      </Container>
      <Box sx={{ my: "10ch" }} />
      <Box>
        <Stack
          direction="row"
          sx={{ height: "50px", justifyContent: "space-between" }}
        >
          <Image src={logo1} alt={"Logo"} />
          <Image src={logo2} alt={"Logo"} />
          <Image src={logo3} alt={"Logo"} />
          <Image src={logo4} alt={"Logo"} />
          <Image src={logo5} alt={"Logo"} />
          <Image src={logo6} alt={"Logo"} />
          <Image src={logo7} alt={"Logo"} />
          <Image src={logo8} alt={"Logo"} />
        </Stack>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={mascot} style={{ height: "70vh" }} />
        </Box>
      </Box>
      <Container sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}>
        <Grid container>
          <Grid item xs={4.2} sx={{ position: "sticky", top: 0, left: 2 }}>
            <Image src={mascot2} style={{ width: "100%" }} />
          </Grid>
          <Grid
            item
            xs={7.8}
            sx={{
              overflowY: "scroll",
              maxHeight: "90vh",
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box>
              <UnderlinedText>Services that unlock potential</UnderlinedText>
              <Box sx={{ my: 4 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Box>
            </Box>
            <Box sx={{ my: 7 }} />
            <Box align="center">
              <UnderlinedText>
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: "medium",
                  }}
                >
                  Why our clients love this service
                </Typography>
              </UnderlinedText>
              <Box sx={{ my: 10 }} />
              <Carousel
                cards={[
                  {
                    image: "https://picsum.photos/id/1/200/300",
                  },
                  { image: "https://picsum.photos/id/2/200/300" },
                  { image: "https://picsum.photos/id/3/200/300" },
                ]}
              />
              <Box sx={{ my: 10 }} />
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
            </Box>
            <Box sx={{ my: 7 }} />
            <Box>
              <UnderlinedText>Tap to find the solutions</UnderlinedText>
              <Box sx={{ my: 10 }} />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: 5,
                  p: 1,
                }}
              >
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
                  rotate={-2}
                />
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
                  rotate={3}
                />
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
                  rotate={0}
                />
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
                  rotate={3}
                />
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
                  rotate={0}
                />
                <Card2
                  text="What is the solution if my website's keywords and audience need to be
        targeted correctly?"
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
                    image: "https://picsum.photos/id/3/200/300",
                    text1: "",
                    text2: "",
                    text3: "",
                  },
                ]}
              />
            </Box>
            <Box sx={{ my: 10 }} />
            <Container sx={{ pr: 20 }}>
              <ContactForm />
            </Container>
            <Box sx={{ my: 1 }} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Homepage;
