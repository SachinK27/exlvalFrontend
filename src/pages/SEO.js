import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Container,
  IconButton,
  Stack,
  Typography,
  styled,
  Button,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import Image from "../components/Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import icon1 from "../assets/images/seo-icon1.svg";
import icon2 from "../assets/images/seo-icon2.svg";
import arrow from "../assets/images/arrow.svg";
import mascot1 from "../assets/images/pose_06a.png";
import mascot5 from "../assets/images/Mascot 5.svg";
import Card4 from "../components/Card4";
import UnderlinedText from "../components/UnderlinedText";
import Card from "../components/Card";
// import CardMobile from "../components/CardMobile";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContactForm from "../components/ContactForm";
import SwipperTest from "../components/SwipperTest";
import bgImage from "../assets/images/Hero bg image.png";

import "./Sticky.css";
const iconsData = [
  { icon: icon1, text: "Dedicated SEO Manager" },
  { icon: icon2, text: "Best SEO Tools" },
  { icon: icon2, text: "Timely Reports" },
  { icon: icon2, text: "Committed Results" },
  { icon: icon2, text: "Better Ranking" },
  { icon: icon2, text: "High Domain Authority" },
];
//Data for cards
const cardsData = [
  {
    title: "Technical SEO",
    content:
      "Optimizing your website's technical aspects for better search engine rankings.",
  },
  {
    title: "Local SEO",
    content:
      "Helping your business appear on local search results to attract more customers in your area.",
  },
  {
    title: "On-page SEO",
    content:
      "Enhancing your website's content and structure to make it more search engine friendly.",
  },
  {
    title: "Off-page SEO",
    content:
      "Building high-quality backlinks to your website to increase its authority and improve search rankings",
  },
];
const SEO = () => {
  const theme = useTheme();
  const isLgOrMd = useMediaQuery(theme.breakpoints.up("md"));

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
    <Box
      sx={{
        p: 0,
        m: "auto",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          height: "60vh",
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Typography variant="h1" align="center" sx={{ maxWidth: "30ch" }}>
          Search Engine Optimization
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center" fontSize="18px">
          We know the SEO game inside out. Want to hit the jackpot with our
          expert service?
        </Typography>
        <Container align="center" sx={{ mt: 5 }}>
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
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </Container>
      </Container>

      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>SEO</strong>
          </Typography>
        </Stack>
      </Container>
      <Box sx={{ my: "7ch" }} />
      <Container
        sx={{
          "@media (max-width: 959.95px)": {
            px: 3,
          },
        }}
      >
        <Grid container>
          <Grid
            item
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
            // align="center"
            //display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Image
              src={mascot1}
              sx={{
                align: "center",
                objectFit: "contain",
                width: "90%",
                maxHeight: "90vh",
                transform: "scale(1)",
              }}
            />
          </Grid>

          <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
            <Box>
              <Stack spacing={3}>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  SEO is like a magic wand for your website - it enhances
                  visibility, attracts clicks, and brings in more business.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      background: "#F45050",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                  </IconButton>
                  <Typography>
                    Are you worried about your website ranking?
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      background: "#F45050",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                  </IconButton>
                  <Typography>
                    Not satisfied with the previous SEO service?
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      background: "#F45050",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
                  </IconButton>
                  <Typography>
                    Not happy with your website’s organic result or not getting
                    relevant traffic and leads?
                  </Typography>
                </Stack>

                <Typography fontSize="18px">
                  Does this sound familiar to you?
                </Typography>
                <Typography fontSize="18px">
                  You don’t need to worry about your website ranking, traffic,
                  and leads with us.
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  Take a look at how we help you achieve success with our SEO
                  service.
                </Typography>
              </Stack>
              <Image
                style={{ margin: "3ch auto", display: "block" }}
                src={arrow}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box my={7} />

      <Container sx={{ display: isLgOrMd ? "block" : "none" }}>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
          <Stack direction="row" justifyContent="center" gap={14}>
            <Card4>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "-14%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <em>Step 1</em>
              </Typography>
              <Typography variant="body2">
                <em>
                  our SEO Specialist will take your requirements and gain a
                  solid understanding of your business needs through organic
                  search results.
                  <br />
                  BONUS - content consulting?
                  <br />
                  Get FREE Business Consulting here (covers the content and
                  marketing message audit).
                </em>
              </Typography>
            </Card4>
            <Card4>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "-14%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <em>Step 2</em>
              </Typography>
              <Typography variant="body2">
                <em>
                  We design and propose packages based on your requirements and
                  use fundamental research and analysis to create winning SEO
                  strategies that deliver organic results.
                </em>
              </Typography>
            </Card4>
            <Card4>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "-14%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <em>Step 3</em>
              </Typography>
              <Typography variant="body2">
                <em>
                  Once you go with our proposal, you'll be assigned a dedicated
                  SEO Manager who will lead your campaign. We'll create and
                  share a master plan that's tailored to your specific
                  objectives, and get to work executing that plan with precision
                  and expertise
                </em>
              </Typography>
            </Card4>
            <Card4>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "-14%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <em>Step 4</em>
              </Typography>
              <Typography variant="body2">
                <em>
                  With implementing the SEO strategy, we provide reports on a
                  weekly or monthly basis as mutually decided. With that, we
                  analyze and make improvements to our SEO campaign for better
                  results, and we will answer all your queries.
                </em>
              </Typography>
            </Card4>
          </Stack>
        </Box>
      </Container>
      <Container sx={{ display: isLgOrMd ? "none" : "block" }}>
        <Box
          align="center"
          sx={{
            display: "flex",
            position: "relative",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "20rem",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
          <Card4>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                position: "absolute",
                left: "50%",
                top: "-14%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <em>Step 1</em>
            </Typography>
            <Typography variant="body2">
              <em>
                our SEO Specialist will take your requirements and gain a solid
                understanding of your business needs through organic search
                results.
                <br />
                BONUS - content consulting?
                <br />
                Get FREE Business Consulting here (covers the content and
                marketing message audit).
              </em>
            </Typography>
          </Card4>
        </Box>
        <Box
          align="center"
          sx={{
            display: "flex",
            position: "relative",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "20rem",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
          <Card4>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                position: "absolute",
                left: "50%",
                top: "-14%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <em>Step 2</em>
            </Typography>
            <Typography variant="body2">
              <em>
                We design and propose packages based on your requirements and
                use fundamental research and analysis to create winning SEO
                strategies that deliver organic results.
              </em>
            </Typography>
          </Card4>
        </Box>
        <Box
          align="center"
          sx={{
            display: "flex",
            position: "relative",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "20rem",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
          <Card4>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                position: "absolute",
                left: "50%",
                top: "-14%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <em>Step 3</em>
            </Typography>
            <Typography variant="body2">
              <em>
                After starting the Paid Ads project, we analyze keywords and
                metrics to target your audience and drive results. We optimize
                campaigns through funnel testing and continuous improvement to
                achieve better outcomes.
              </em>
            </Typography>
          </Card4>
        </Box>
        <Box
          align="center"
          sx={{
            display: "flex",
            position: "relative",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "20rem",
              position: "absolute",
              height: "24px",
              background: "#3C486B",
              borderRadius: "11px",
              left: 0,
              top: "9.55%",
            }}
          />
          <Card4>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                position: "absolute",
                left: "50%",
                top: "-14%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <em>Step 4</em>
            </Typography>
            <Typography variant="body2">
              <em>
                With implementing the SEO strategy, we provide reports on a
                weekly or monthly basis as mutually decided. With that, we
                analyze and make improvements to our SEO campaign for better
                results, and we will answer all your queries.
              </em>
            </Typography>
          </Card4>
        </Box>
      </Container>
      <Box sx={{ my: 10 }} />

      {/* display={{ xs: "none", sm: "none", md: "block", lg: "block" }} */}
      <Container
        sx={{
          pt: 7,
          maxWidth: "100vw !important",
          fontSize: "18px",
        }}
      >
        <Grid
          ref={parentRef}
          container
          sx={{
            px: 5,
            maxWidth: "100vw",
            "@media (max-width: 959.95px)": {
              px: 0,
            },
          }}
        >
          <Grid
            item
            sm={12}
            md={4.5}
            lg={4.5}
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
          <Grid item sm={12} md={7.5} lg={7.5} sx={{ maxWidth: "100%" }}>
            <Box>
              <UnderlinedText>
                <Typography sx={{ fontSize: "2rem", fontWeight: "medium" }}>
                  SEO Services provided by us:
                </Typography>
              </UnderlinedText>
              <Box sx={{ my: 4 }} />
              <Grid
                container
                spacing={2}
                sx={{ width: "100%", align: "center", margin: "0 auto", mt: 5 }}
              >
                {cardsData.map((card, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card title={card.title} content={card.content} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box my={7} />
            <Box
              sx={{
                "@media (max-width: 959.95px)": {
                  px: 0,
                },
              }}
            >
              <UnderlinedText>Why our clients love this service</UnderlinedText>
              <Box sx={{ my: 4 }} />

              <Grid container spacing={2} sx={{ my: 5 }}>
                {iconsData.map((item, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index}
                    align="center"
                    sx={{ my: 2 }}
                  >
                    <Image src={item.icon} sx={{ width: "60%" }} />
                    <Typography variant="body2" align="center">
                      {item.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box my={10} />
            <Box>
              <UnderlinedText>Explore Our Result-driven Work</UnderlinedText>

              <SwipperTest />

              <Container align="center">
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
              </Container>
            </Box>

            <Box my={10} />
            <Container
              sx={{
                width: "90%",
                mb: 5,
                "@media (max-width: 959.95px)": {
                  width: "100%",
                },
              }}
            >
              <ContactForm />
            </Container>
            <Box my={1} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SEO;
