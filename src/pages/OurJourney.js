import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
  } from "@mui/material";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import UnderlinedText from "../components/UnderlinedText";
  import JourneyPageCreative from "../assets/images/Journey-page-creative.png";
  import mascot3 from "../assets/images/pose_03a.svg"
  import Image from "../components/Image";
  import ContactForm from "../components/ContactForm";
  const OurJourney = () => {
    return (
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            m: "8ch auto",
            fontWeight: 500,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Box align="center" sx={{ m: "auto 8ch" }}>
            <Typography variant="h1">
              Humble Beginnings to a Digital Powerhouse
            </Typography>
          </Box>
          <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
          <Typography variant="body2" align="center">
            Discover our journey and know how we can propel your business forward
          </Typography>
        </Container>
  
        <Container>
          <Stack direction="row">
            <Typography>Home</Typography>
            <ChevronRightIcon />
            <Typography sx={{ color: "#F45050" }}><strong>Journey</strong></Typography>
          </Stack>
        </Container>
  
        <Box align="center" sx={{ my: "80px" }}>
          <UnderlinedText>Services that unlock potential</UnderlinedText>
        </Box>
  
        <Box
          display="flex"
          justifyContent="center"
          sx={{ width: "100%", maxWidth: "100vw" }}
        >
          <Image
            src={JourneyPageCreative}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Grid
        container
        sx={{my:"80px"}}
        >
        <Grid item
        sm={12}
        xs={12}
        md={6}
        lg={6}
        align="center"
        justifyContent="center"
        // sx={{width:"100%"}}
        >
          <Image src={mascot3} objectFit="contain" sx={{mt:"8vh",width:"100%",transform: "scale(1)"}}/>
        </Grid>
        <Grid item
        sm={12}
        xs={12}
        md={6}
        lg={6}
        align="center"
        // sx={{width:"100%"}}
        >
        <Container align="center" sx={{width:"95%",justifyContent:"center"}}>
              <ContactForm />
            </Container>
        </Grid>
        </Grid>
      </Box>
    );
  };
  export default OurJourney; 