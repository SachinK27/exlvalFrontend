// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import rect from "../assets/images/Rectangle 184.svg";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CCard = styled(Card)({
  border: "1px solid #F45050",
  borderRadius: "40px",
  padding: "3ch 1.5ch 0 1.5ch",
  maxWidth: "360px",
  height: "520px",
});

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
      <IconButton
        onClick={() => swiper.slidePrev()}
        sx={{
          background: "#eee",
          "&:hover": {
            backgroundColor: "#3C487E",
            "& svg": {
              color: "#eee",
            },
          },
        }}
      >
        <WestIcon
          sx={{
            color: "#3C486B",
          }}
        />
      </IconButton>

      <IconButton
        onClick={() => swiper.slideNext()}
        elevation={3}
        sx={{
          background: "#3C486B",
          "&:hover": {
            backgroundColor: "#3C487E",
          },
        }}
      >
        <EastIcon />
      </IconButton>
    </Box>
  );
};

const Imagecarousel = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      padding={1}
      sx={{
        "@media (max-width: 959.95px)": {
          padding: 2,
        },
        position: "relative",
      }}
    >
      <Swiper
        grabCursor={true}
        loop={true}
        slidesPerView={matches ? 2 : 1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="carousel_container"
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
          }}
        >
          <SwiperNavigation />
        </Box>

        <SwiperSlide>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    right: 0,
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                    height: "12rem",
                  }}
                  alt="img"
                  src={rect}
                />
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Daisy Lee
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    right: 0,
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                    height: "12rem",
                  }}
                  alt="img"
                  src={rect}
                />
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Daisy Lee
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    right: 0,
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                    height: "12rem",
                  }}
                  alt="img"
                  src={rect}
                />
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Daisy Lee
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    right: 0,
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                    height: "12rem",
                  }}
                  alt="img"
                  src={rect}
                />
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Daisy Lee
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    position: "relative",
                  }}
                >
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Imagecarousel;
