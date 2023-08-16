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
import testimonials from "../testimonials.json";

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

        {testimonials.testimonials.map((testimonial) => (
          <SwiperSlide>
            <Box>
              <CCard>
                <CardContent sx={{ height: "62%" }}>
                  <Typography
                    sx={{
                      color: "#3C486B",
                      lineHeight: "20px",
                      fontSize: "14px",
                    }}
                  >
                    <strong>"</strong>
                    {testimonial.quote}
                    <strong>"</strong>
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
                  {/* <Avatar
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: "3px solid #F9D949",
                    }}
                    variant="circular"
                    sizes="width: 200px; height: 200px"
                    src={testimonial.img}
                  /> */}
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "10rem",
                      border: "3px solid #F9D949",
                      overflow: "hidden",
                      zIndex: "99",
                    }}
                  >
                    <img
                      src={testimonial.img}
                      alt="profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      position: "relative",
                      fontWeight: "600",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    {testimonial.work}
                  </Typography>
                </CardContent>
              </CCard>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Imagecarousel;
