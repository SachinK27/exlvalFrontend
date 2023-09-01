import React, { useEffect, useRef } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import mascot5 from "../assets/images/Mascot 5.svg";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Whyusimg from "../assets/images/why us.png";
import star from "../assets/images/star.png";
import bgImage from "../assets/images/Hero bg image.png";
import { Helmet } from "react-helmet";

const WhyUs = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval: Your Digital Marketing Partner</title>
        <meta
          name="description"
          content="Discover excellence with Exlval Digital Marketing. Boost your brand's online presence with our expert strategies. Elevate your business today contact us at 📞+91 9166549902"
        />
        <meta
          name="keywords"
          content="Exlval Digital Marketing Company ,Digital Marketing Company in Ahmedabad,Best Digital Marketing Company in Ahmedabad"
        />
      </Helmet>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          p: "2ch 2ch",
          minHeight: "40vh",
          height: { xs: "auto", md: "60vh" },
          backgroundImage: { xs: "none", md: `url("${bgImage}")` },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Typography variant="h1" align="center">
          Delivering Results and Values
        </Typography>
        <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
        <Typography variant="body2" align="center" fontSize="18px">
          We make your digital success our top priority and assist you to reach
          it.
        </Typography>
      </Container>

      <Container>
        <Stack direction="row">
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Why Us</strong>
          </Typography>
        </Stack>
      </Container>

      <Container
        ref={parentRef}
        sx={{ pt: 7, maxWidth: "100vw !important", fontSize: "18px" }}
      >
        <Grid
          container
          sx={
            {
              // px: 2,
              // "@media (max-width: 959.95px)": {
              //   px: 2,
              // },
            }
          }
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
              src={mascot5}
              sx={{ width: "28vw", objectFit: "contain", align: "center" }}
              className="mascot-image-high"
              ref={mascotRef}
            />
          </Grid>

          <Grid item sm={12} md={6.5} lg={6.5}>
            <Container>
              {/* <Box sx={{ mb: "20px" }}>
                <UnderlinedText>Heading - H2 title</UnderlinedText>
              </Box> */}

              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                With globalization, traditional marketing is not sufficient
                anymore to reach modern consumers who are more connected online
                and tech-savvy than ever before.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                A business needs digital marketing services to reach its target
                audience, build brand awareness, generate leads, and ultimately
                increase revenue and that is literally everything we do.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                Our services allow businesses to leverage the power of social
                media, search engines, email, and other digital platforms to
                create compelling campaigns that engage and convert potential
                customers.
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }} fontSize="18px">
                And we have achieved the best results doing that, which makes
                our clients trust us!
              </Typography>
            </Container>

            <Box
              display="flex"
              justifyContent="center"
              sx={{
                width: "100%",
                my: 10,
                position: "relative",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mb: 2,
                  maxWidth: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "4rem",
                    "@media (max-width: 959.95px)": {
                      ml: 0,
                    },
                  }}
                >
                  Free Business Consulting
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "4rem",
                    "@media (max-width: 959.95px)": {
                      ml: 0,
                    },
                  }}
                >
                  2x Customer Retention
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "4rem",
                    "@media (max-width: 959.95px)": {
                      ml: 0,
                    },
                  }}
                >
                  Dedicated Experts
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "row",
                  left: "6rem",
                  "@media (max-width: 959.95px)": {
                    left: "1rem",
                  },
                }}
              >
                <Box sx={{ textAlign: "center", mx: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "2em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "1em",
                      },
                    }}
                  >
                    70%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "0.5em",
                      },
                    }}
                  >
                    Client Served
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center", mx: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "2em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "1em",
                      },
                    }}
                  >
                    97%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "0.5em",
                      },
                    }}
                  >
                    Satisfied Customers
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center", mx: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      align: "center",
                      width: "70%",
                      margin: "0 auto",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "2em",
                        "@media (max-width: 959.95px)": {
                          fontSize: "1em",
                        },
                      }}
                    >
                      4.9
                    </Typography>
                    <Image
                      src={star}
                      sx={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                        marginTop: "10px",
                        "@media (max-width: 959.95px)": {
                          marginTop: "0",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.9em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "0.5em",
                      },
                    }}
                  >
                    Overall Ratings
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center", mx: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "2em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "1em",
                      },
                    }}
                  >
                    150%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9em",
                      "@media (max-width: 959.95px)": {
                        fontSize: "0.5em",
                      },
                    }}
                  >
                    Growth Ratio
                  </Typography>
                </Box>
              </Box>

              <Image src={Whyusimg} style={{ width: "100%", height: "auto" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mt: 2,
                  maxWidth: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "7.5rem",
                    "@media (max-width: 959.95px)": {
                      ml: "2rem",
                    },
                  }}
                >
                  Healthy Client Servicing
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "4rem",
                    "@media (max-width: 959.95px)": {
                      ml: 0,
                    },
                  }}
                >
                  Serious Timely Reporting
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    color: "#F45050",
                    ml: "4rem",
                    "@media (max-width: 959.95px)": {
                      ml: 0,
                    },
                  }}
                >
                  Seamless Communication
                </Typography>
              </Box>
            </Box>
            <Container sx={{ width: "100%", mb: 5, px: 0 }}>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhyUs;
