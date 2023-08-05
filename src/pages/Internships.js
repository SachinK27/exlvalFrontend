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
import mascot5 from "../assets/images/Mascot 5.svg";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import icon1 from "../assets/images/Career - Fun, friendly and learning-based culture.png";
import icon2 from "../assets/images/Career - Opportunity to upskill.png";
import icon3 from "../assets/images/Career - Gain market knowledge.png";
import icon4 from "../assets/images/Career - Annual leaves and holidays.png";
import "./Sticky.css";
const iconsData = [
  { icon: icon1, text: "Valuable Experience" },
  { icon: icon2, text: "Networking Opportunities" },
  { icon: icon3, text: "Resume Enhancement" },
  { icon: icon4, text: "Personal & Professional Growth" },
  { icon: icon4, text: "Potential Career Opportunities" },
  { icon: icon4, text: "Job Recommendations" },
];
const Internships = () => {
  const parentRef = useRef(null);
  const mascotRef = useRef(null);
  const contactFormRef = useRef(null);
  useEffect(() => {

    // Scroll to the contact form when the page loads with a specific hash in the URL
    if (window.location.hash === "#contact-form") {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }

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

  const handleApplyNowClick = () => {
    // Scroll to the contact form when "Apply Now" button is clicked
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid>
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
        <Box align="center" sx={{ m: "auto 8ch", px: 15 }}>
          <Typography variant="h1">
            A Pathway Designed for Your Success
          </Typography>
        </Box>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center">
          Launch your digital marketing career with our immersive internships!
        </Typography>
      </Container>
      <Container align="center">
        <Button
          sx={{
            backgroundColor: "#3C486B",
            borderRadius: 4,
            padding: "1ch 2ch",
            "&:hover": {
              backgroundColor: "#3C487E",
            },
          }}
          onClick={handleApplyNowClick}
        >
          Apply Now
        </Button>
      </Container>
      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Internships</strong>
          </Typography>
        </Stack>
      </Container>

      <Container
        ref={parentRef}
        sx={{
          pt: 7,
          maxWidth: "100vw !important",
          fontSize: "18px",
        }}
      >
        <Grid container sx={{ px: 5,"@media (max-width: 959.95px)": {
              px: 0,
            },}}>
        <Grid item sm={12} md={5} lg={5} display={{ xs: "none", sm: "none", md: "block", lg: "block" }} style={{ position: "relative" }}>
            <Image
              src={mascot5}
              sx={{ width: "28vw", objectFit: "contain", align: "center" }}
              className="mascot-image-high"
              ref={mascotRef}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={7}>
            <Container>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ignite your digital marketing passion and fuel your career
                ambitions in a dynamic, fast-paced environment.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }}>
                Our extraordinary internship program is your gateway to immerse
                yourself in the captivating world of digital marketing, where
                you'll unleash your creativity and gain priceless hands-on
                experience that sets you apart from the crowd.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }}>
                Here's what you can expect:
              </Typography>
              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                <IconButton
                  sx={{ background: "#F45050", width: "24px", height: "24px" }}
                >
                  <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                </IconButton>
                <Typography>
                  <strong>Hands-On Experience:</strong> At Exival, we believe in
                  learning by doing. Here, you'll be an integral part of our
                  team, working on real client projects and contributing to
                  actual marketing campaigns. Get ready to roll up your sleeves
                  and make a tangible impact From day one.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                <IconButton
                  sx={{ background: "#F45050", width: "24px", height: "24px" }}
                >
                  <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                </IconButton>
                <Typography>
                  <strong>Mentorship and Learning Opportunities:</strong>{" "}
                  Unleash your potential with dedicated mentorship and guidance
                  throughout your internship journey. Our experienced
                  professionals will provide invaluable insights, answer your
                  questions, and help you sharpen your digital marketing skills,
                  ensuring your personal and professional growth.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                <IconButton
                  sx={{ background: "#F45050", width: "24px", height: "24px" }}
                >
                  <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                </IconButton>
                <Typography>
                  <strong>
                    Exposure to Diverse Igital Marketing Strategies:
                  </strong>{" "}
                  Digital marketing is a multifaceted discipline with various
                  strategies and tools During your internship, you'll have the
                  opportunity to explore different aspects of digital marketing.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                <IconButton
                  sx={{ background: "#F45050", width: "24px", height: "24px" }}
                >
                  <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                </IconButton>
                <Typography>
                  <strong>Collaboration and Networking:</strong> A collaborative
                  team of passionate professionals where you'll work closely
                  with experienced mentors, collaborate on exciting projects,
                  and expand your professional network, Forge valuable
                  connections, learn from industry experts, and unlock endless
                  opportunities for your future career.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ my: 2 }}>
                <IconButton
                  sx={{ background: "#F45050", width: "24px", height: "24px" }}
                >
                  <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                </IconButton>
                <Typography>
                  <strong>Career Development Opportunities:</strong> Our
                  internship program is designed to be a launching pad for your
                  digital marketing career. Alongside the hands-on experience
                  and mentorship, you'll have sessions aimed at enhancing your
                  skills and knowledge. We are invested in your growth and will
                  provide the support and resources you need to thrive.
                </Typography>
              </Stack>
            </Container>

            <Grid container spacing={2} sx={{ my: 5 }}>
              {iconsData.map((item, index) => (
                <Grid item xs={4} key={index} align="center" sx={{ my: 2 }}>
                  <Image src={item.icon} sx={{ width: "50%" }} />
                  <Typography variant="body2" align="center">
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Container ref={contactFormRef} sx={{ width: "90%", mb: 5,"@media (max-width: 959.95px)": {
              width:"100%"
            }, }}>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Internships;
