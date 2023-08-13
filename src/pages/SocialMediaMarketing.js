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
  { icon: icon1, text: "Social Media Manager" },
  { icon: icon2, text: "Latest Tools" },
  { icon: icon2, text: "Timely Reports" },
  { icon: icon2, text: "Brand Building" },
  { icon: icon2, text: "Audience Building" },
  { icon: icon2, text: "Mass Selling" },
];
//Data for cards
const cardsData = [
  {
    title: "Social Media Page Management",
    content:
      "We'll make your social media presence shine, so you can focus on running your business.",
  },
  {
    title: "Social Media Campaigns",
    content:
      "From idea to execution, we'll help you create social media campaigns that make an impact.",
  },
];
const SocialMediaMarketing = () => {
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
          Social Media Marketing
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body1" align="center" fontSize="18px">
          Get your brand the recognition it deserves with our cutting-edge
          social media marketing techniques.
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
            <strong>Social Media Marketing</strong>
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
                  Social media marketing is the key to unlocking the door to
                  your target audience which opens the doors to success with
                  expert strategies.
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
                    Are you not getting leads and sales from your social media
                    handles?
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
                    Is your audience unaware of your brand product or service?
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
                    Are you not able to make consistent content?
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
                    Are you not getting social media performance and ROI?
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
                    Are you not getting enough business out of your social media
                    platforms?
                  </Typography>
                </Stack>

                <Typography fontSize="18px">
                  We truly understand social media platforms and how they can
                  help you reach your goals.
                </Typography>
                <Typography fontSize="18px">
                  Thus, we create social media strategies that touch your
                  audience and transform them into your raving fans.
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  We just don’t track the numbers, but we make them work.
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                  Take a look at how we do that:
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
                  Our Social Media Expert helps you stand out in the crowded
                  social media landscape. We identify your audience and
                  determine where they are most active to target them
                  effectively and achieve your goals.
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
                  We’ll prepare a proposal for you that can be sufficient enough
                  to reach your audience and convert them into your paying
                  customers.
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
                  We identify the trends and important metrics that can drive
                  the result for you by reaching your target audience. We make a
                  marketing funnel that can convert the audience and make
                  different campaigns to improve results over time.
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
                  We provide a detailed report that shows the results of our
                  work in achieving your objectives. With this information, we
                  can continuously improve your results, ensuring a
                  cost-effective approach that maximizes your ROI.
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
                Our Social Media Expert helps you stand out in the crowded
                social media landscape. We identify your audience and determine
                where they are most active to target them effectively and
                achieve your goals.
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
                We’ll prepare a proposal for you that can be sufficient enough
                to reach your audience and convert them into your paying
                customers.
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
                We identify the trends and important metrics that can drive the
                result for you by reaching your target audience. We make a
                marketing funnel that can convert the audience and make
                different campaigns to improve results over time.
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
                We provide a detailed report that shows the results of our work
                in achieving your objectives. With this information, we can
                continuously improve your results, ensuring a cost-effective
                approach that maximizes your ROI.
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
                  Social Media Services provided by us:
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

export default SocialMediaMarketing;
