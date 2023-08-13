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
  { icon: icon1, text: "Performance Marketing Expertise" },
  { icon: icon2, text: "Measuring Results" },
  { icon: icon2, text: "Timely Reports" },
  { icon: icon2, text: "Timely Reports" },
  { icon: icon2, text: "Relevant Reach" },
  { icon: icon2, text: "Audience Building" },
];
//Data for cards
const cardsData = [
  {
    title: "YouTube Advertising",
    content:
      "Reach your target audience with engaging video ads on the world's biggest video-sharing platform.",
  },
  {
    title: "Instagram Ads",
    content:
      "Capture the attention of your audience with visually stunning ads on the most popular social media platform.",
  },
  {
    title: "Facebook Ads",
    content:
      "Maximize your brand's exposure and drive conversions with highly targeted ads on the world's largest social media network.",
  },
  {
    title: "Twitter Ads",
    content:
      "Amplify your message and boost engagement with Twitter's powerful advertising tools.",
  },
  {
    title: "LinkedIn Ads",
    content:
      "Connect with decision-makers and professionals in your industry with targeted advertising on LinkedIn.",
  },
  {
    title: "Google Ads",
    content:
      "Show up at the top of Google search results and reach potential customers with Google Ads.",
  },
  {
    title: "Analytics and Research",
    content:
      "Get every insight and make informed decisions with our advanced analytics and research tools.",
  },
];
const PerformanceMarketingService = () => {
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
        <Typography variant="h1" align="center" maxWidth={"20ch"}>
          Performance Marketing
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center" fontSize="18px">
          We reach your “ready to buy” buyers to convert them into your paying
          leads.
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
            <strong>Performance Marketing</strong>
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
                  Performance marketing is like playing darts. You need
                  precision to hit your target audience and find the right
                  strategies and tools to continuously improve your aim.
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
                    Do you want to scale your business fast?
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
                    Have you tried another agency and didn’t get results?
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
                    Cost to acquire a customer (CAC) is higher than expected?
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
                  <Typography>Looking to hit your sales target?</Typography>
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
                    Your ads are not reaching your relevant audience and not
                    converting?
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
                    Looking for Performance Marketing + SEO for aggressive
                    growth?
                  </Typography>
                </Stack>

                <Typography fontSize="18px">
                  Relevant reach + Better conversion + Cost-effectiveness = ROI
                  driven results.
                </Typography>
                <Typography fontSize="18px">
                  We have the right expertise in performance marketing and
                  utilize tactics that maximize your reach while driving
                  cost-effective leads and sales.
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  We just don’t track the numbers, but we make them work.
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  How? Let’s see:
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
                  Our performance marketing specialist will comprehend your
                  goals, audience, and desired outcome(s) for your
                  advertisements
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
                  Once we understand your objective, we will provide you with a
                  proposal tailored to your needs, which will help us move on to
                  the next stage.
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
                  After starting the Paid Ads project, we analyze keywords and
                  metrics to target your audience and drive results. We optimize
                  campaigns through funnel testing and continuous improvement to
                  achieve better outcomes.
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
                  We provide a comprehensive report that showcases the results
                  of the campaign based on your goals. Using the insights from
                  the report, we optimize the campaign to improve the ROI while
                  keeping the cost low.
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
                Our performance marketing specialist will comprehend your goals,
                audience, and desired outcome(s) for your advertisements
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
                Once we understand your objective, we will provide you with a
                proposal tailored to your needs, which will help us move on to
                the next stage.
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
                We provide a comprehensive report that showcases the results of
                the campaign based on your goals. Using the insights from the
                report, we optimize the campaign to improve the ROI while
                keeping the cost low.
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
                  Performance Marketing Services provided by us:
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

export default PerformanceMarketingService;
