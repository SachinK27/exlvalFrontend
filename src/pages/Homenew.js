import React, {
  // useState,
  useEffect,
  useRef,
} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  // Stack,
  Typography,
  Link,
} from "@mui/material";
import bgImage from "../assets/images/Hero bg image.png";
// import logo1 from "../assets/images/TSRF.png";
// import logo2 from "../assets/images/Team Aviation.png";
// import logo3 from "../assets/images/Trived Pharma.png";
// import logo4 from "../assets/images/SDECOR Leminates.png";
// import logo5 from "../assets/images/CG Logistics.png";
// import logo6 from "../assets/images/Relitrade.png";
// import logo7 from "../assets/images/Growing Mafia.png";
// import logo8 from "../assets/images/lastCompany.png";
import mascot from "../assets/images/output-onlinegiftools.gif";
import mascot6 from "../assets/images/pose_06a.png";
import bubble1 from "../assets/images/bubble1.svg";
import bubble2 from "../assets/images/bubble2.svg";
import bubble3 from "../assets/images/bubble3.svg";
import Card from "../components/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import Carousel from "../components/Carousel";
import Image from "../components/Image";
// import Card2 from "../components/Card2";
// import Carousel2 from "../components/Carousel2";
import ContactForm from "../components/ContactForm";
import UnderlinedText from "../components/UnderlinedText";
// import UnderlinedGrowth from "../components/UnderlinedGrowth";
import TestCard from "../components/TestCard";
import CompanySlider from "../components/CompanySlider";
import GrowthGraph from "../assets/images/growth graph - homepage.svg";
import Imagecarousel from "../components/Imagecarousel";
import "./Sticky.css";
import "./bubble.css";
import SwipperTest from "../components/SwipperTest";
import TypingAnimationMain from "../components/TypingAnimationMain";
import { Helmet } from "react-helmet";
const Homefixed = () => {
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

  // Growth animation delay
  // const [animateGrowthID, setAnimateGrowthID] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAnimateGrowthID(true);
  //   }, 500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  //Data for cards
  const cardsData = [
    {
      link: "services-seo",
      title: "Search Engine Optimization",
      content:
        "Want to outrank your competitors? Our SEO service is the secret sauce to help you get there. Lets make your website",
    },
    {
      link: "services-contentMarketing",
      title: "Online Reputation Management",
      content:
        "Keep your business image spotless with our online reputation management service. We'll help you charm your customers with confidence.",
    },
    {
      link: "services-contentMarketing",
      title: "Content Marketing",
      content:
        "We give users precisely what they want to find with the help of our content that captures attention, drives traffic and adds a dash of charisma to your message.",
    },
    {
      link: "services-performanceMarketing",
      title: "Performance Marketing",
      content:
        "Tired of throwing your marketing budget down the drain? Our performance marketing service turns your clicks into conversions!",
    },
    {
      link: "services-socialMarketing",
      title: "Social Media Marketing",
      content:
        "We'll give your brand an authentic voice that connects and entertains. And yes, our creativity is the icing on the cake!",
    },
    {
      link: "services-influencerMarketing",
      title: "Influencer Marketing",
      content:
        "Looking for a game-changing marketing strategy? Expand your reach and boost engagement through influencers, while maintaining your brand's personality.",
    },
    {
      link: "services-branding",
      title: "Branding",
      content:
        "Forge a magnetic brand with our branding services. We'll help you stand out, connect with your audience, and grow your business.",
    },
    {
      link: "services-graphicDesign",
      title: "Graphic Design",
      content:
        "Willing to bring your visions to life? Our team has got you covered. With our design expertise, your brand is sure to stand out from the competition.",
    },
    {
      link: "services-webDesign",
      title: "Website Design",
      content:
        "Our website design is like a tailor-made suit for your online presence - perfectly fitted, stylish, and sure to impress. Be the go-to destination for users with us.",
    },
    {
      link: "services-webDevelopment",
      title: "Website Development",
      content:
        "Your website is the heart of your online presence. Let our expert developers bring it to life with a touch of magic.",
    },
  ];

  return (
    <Grid container sx={{ overflowX: "hidden" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval: Your Partner for Success in the Digital Age</title>
        <meta
          name="description"
          content="Exlval is a digital marketing company that delivers results. We help businesses increase website traffic, generate leads, and boost sales. Contact us today to get started! contact us at 📞+91 9166549902"
        />
        <meta
          name="keywords"
          content="Best Digital Marketing Company in Ahmedabad ,Top Digital Marketing Company in Ahmedabad,Digital marketing company in Ahmedabad, India"
        />
      </Helmet>

      {/* <CardTemp2/> */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          height: "70vh",
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Container
          align="center"
          sx={{ textAlign: "center", width: "85%", margin: "0 auto" }}
        >
          <Grid
            container
            spacing={1.5}
            direction="row"
            wrap="wrap"
            align="center"
            justifyContent="center"
            sx={{ textAlign: "center" }}
          >
            <Grid item>
              <Typography variant="h1">Drive</Typography>
            </Grid>

            <Grid
              item
              sx={{
                width: "16rem",
                "@media (max-width: 959.95px)": {
                  width: "10rem",
                },
              }}
            >
              <Grid container>
                <TypingAnimationMain />
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="h1">and</Typography>
            </Grid> */}
            <Grid item>
              <Typography variant="h1">and expand</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">with</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">360&deg;</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">Digital Marketing</Typography>
            </Grid>
            {/* <Grid item>
              <Typography variant="h1">Marketing</Typography>
            </Grid> */}
            <Grid item>
              <Typography variant="h1">Services.</Typography>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ my: 2 }} />
        <Typography variant="body1" align="center">
          Our team of experts tailor creative, technical, strategic, and
          data-driven solutions for you <br /> that unlock your business’s full
          potential
        </Typography>
        <Container sx={{ mt: 5 }} align="center">
          <Button
            sx={{
              backgroundColor: "#3C486B",
              borderRadius: 4,
              cursor: "pointer",
              padding: "1ch 4ch",
              fontSize: "2ch",
              "&:hover": {
                backgroundColor: "#3C487E",
              },
            }}
          >
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </Container>
      </Container>

      <Grid>
        <CompanySlider />
      </Grid>

      {/* <Container sx={{ my: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={mascot} style={{ height: "70vh" }} />
        </Box>
      </Container> */}

      <Grid container mb={30} sx={{ my: 10 }}>
        <Grid lg={12} md={12} sm={12}>
          <div className="bubble_div">
            <img src={bubble1} className="first_bubble" alt="first_bubble" />

            <p className="bubble_div_text1">
              Hey, wonderful humans!
              <br /> &emsp;&emsp;I’m ExlWiz.
              <br /> I’ll be your host here!
            </p>

            <img src={bubble2} className="second_bubble" alt="first_bubble" />
            <p className="bubble_div_text2">
              &ensp; I’ll be the one to guide you <br />
              &ensp; through the site of Exlval. <br />
              So, be ready to discover the <br />
              &emsp; spells for your growth, <br />
              &emsp;&emsp;&emsp;curated by us!
            </p>

            <img src={mascot} className="bubble_mascot" alt="first_bubble" />

            <img src={bubble3} className="third_bubble" alt="first_bubble" />
            <p className="bubble_div_text3">
              &emsp;A personal tip from me, keep
              <br /> your dreams and desires in mind,
              <br />
              &emsp; for they shall come true with <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;Exlval.
            </p>
          </div>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
      </Grid>

      <Box ref={parentRef} sx={{ maxWidth: "100vw !important" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={5.5}
            lg={5.5}
            xl={5.5}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            style={{ position: "relative" }}
            sx={{ pl: 6 }}
          >
            <Image
              src={mascot6}
              sx={{ width: "33vw", objectFit: "contain", align: "center" }}
              className="mascot-image"
              ref={mascotRef}
            />
          </Grid>

          <Grid
            item
            xl={6.5}
            lg={6.5}
            md={6.5}
            sm={12}
            xs={12}
            // sx={{
            //   pl: "5rem",
            //   "@media (max-width: 959.95px)": {
            //     pl: 0,
            //   },
            // }}
          >
            {/* responsive code added */}
            <Box
              sx={{
                "@media (max-width: 959.95px)": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              <UnderlinedText>Services that unlock potential</UnderlinedText>
            </Box>

            <Box sx={{ my: 4 }} />

            <Grid
              container
              spacing={2}
              sx={{
                width: "95%",
                mt: 5,
                "@media (max-width: 959.95px)": {
                  width: "80%",
                  margin: "0 auto",
                  align: "center",
                },
              }}
            >
              {cardsData.map((card, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Link href={card.link}>
                    <Card title={card.title} content={card.content} />
                  </Link>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                textAlign: "center",
                width: "70%",
                margin: "0 auto",
                my: 15,
                position: "relative",
              }}
            >
              <Box
                sx={{ position: "absolute", width: "50%", textAlign: "left" }}
              >
                <Typography
                  sx={{
                    //For making responsive
                    fontSize: {
                      xs: "2.5vh",
                      sm: "5vh",
                      md: "4vh",
                      lg: "5.5vh",
                    },
                    fontWeight: "medium",
                    lineHeight: "1.3",
                  }}
                >
                  Drive your growth with reliable
                </Typography>
              </Box>

              <Image
                src={GrowthGraph}
                sx={{ objectFit: "contain", align: "center" }}
              />
              <Button
                sx={{
                  backgroundColor: "#3C486B",
                  cursor: "pointer",
                  borderRadius: 4,
                  padding: "1ch 2ch",
                  fontSize: "2ch",
                  "&:hover": {
                    backgroundColor: "#3C487E",
                  },
                  mt: 3,
                }}
              >
                <Link href="/contact-us">Contact us</Link>
              </Button>
            </Box>

            <Box sx={{ my: 10 }} />

            <Box>
              {/* Responsive Code Added */}
              <Box
                sx={{
                  "@media (max-width: 959.95px)": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <UnderlinedText>Explore Our Result-driven Work</UnderlinedText>
              </Box>

              <SwipperTest />

              <Box
                sx={{
                  width: "95%",
                  "@media (max-width: 959.95px)": {
                    width: "100%",
                  },
                }}
                align="center"
              >
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
            </Box>

            <Box sx={{ my: 10 }} />
            {/* <CardTemp2/> */}

            <Box sx={{ mt: 3 }}>
              {/* Responsive Code Added */}
              <Box
                sx={{
                  "@media (max-width: 959.95px)": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <UnderlinedText>Tap to find the solutions</UnderlinedText>
              </Box>

              {/* <Box sx={{ my: 10 }} /> */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  gap: 5,
                  p: 1,
                  my: 5,
                  "@media (max-width: 959.95px)": {
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <TestCard
                  front_text="What is the solution if my website's keywords and audience need to be targeted correctly?"
                  back_text="We identify keywords and audiences with thorough Business & SEO Analysis which includes intensive research to find the best solutions for you.
                  "
                  rotate={-2}
                />
                <TestCard
                  front_text="My company’s online presence doesn’t have the right business and content strategy. What do I do?"
                  back_text="We can help you build a solid content and business strategy that actually works and unlocks the best potential of your business."
                  rotate={3}
                />
                <TestCard
                  front_text="What is the solution to having the right audience that is attracted by your business?
                  "
                  back_text="Building an audience with a strategy that converts into paying customers which ultimately boosts your revenue."
                  rotate={0}
                />
                <TestCard
                  front_text="Why does my website not rank on the 1st page of the search engine? 
                  "
                  back_text="We have a FREE SEO Audit to identify gaps to make an effective SEO plan to get rank and organic results that conquer the internet."
                  rotate={3}
                />
                <TestCard
                  front_text="Why am I not getting quality leads from Paid Ads and Social Media Ads?
                  "
                  back_text="Reaching the right audience at the right time converts into your customers. Our experts will help you achieve that."
                  rotate={0}
                />
                <TestCard
                  front_text="Why am I not getting the ROI and cost-effective results even though I tried different agencies?"
                  back_text="With our SEO, Content Marketing, and Paid Ads service, we focus on the results that give you the best ROI and help you win the market."
                  rotate={-3}
                />
              </Box>
            </Box>

            <Box sx={{ my: 10 }} />

            <Box>
              {/* Responsive Code Added */}
              <Box
                sx={{
                  "@media (max-width: 959.95px)": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <UnderlinedText>What our Clients have to say</UnderlinedText>
              </Box>

              <Box sx={{ my: 7 }} />

              {/* <Carousel2
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
                ]}
              /> */}

              <Imagecarousel />
            </Box>

            <Box sx={{ my: 10 }} />

            <Container sx={{ width: { sm: "100%", md: "80%" } }}>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Homefixed;
