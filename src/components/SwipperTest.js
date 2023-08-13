import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swipper.css";

import slide_image_1 from "../assets/images/carouselImage.png";
import { Box, useMediaQuery } from "@mui/material";
// let slide_image_1 ='https://picsum.photos/300/300';

function SwipperTest() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="container-slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={matches ? 3 : 1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #F45050",
                borderRadius: "1rem",
                backgroundColor: "white",
                width: "20rem",
              }}
            >
              <img src={slide_image_1} alt="slide_image" />
            </Box>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Linkedin management for <br /> Alok Kosthi
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #F45050",
                borderRadius: "1rem",
                backgroundColor: "white",
                width: "20rem",
              }}
            >
              <img src={slide_image_1} alt="slide_image" />
            </Box>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Linkedin management for <br /> Alok Kosthi
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #F45050",
                borderRadius: "1rem",
                backgroundColor: "white",
                width: "20rem",
              }}
            >
              <img src={slide_image_1} alt="slide_image" />
            </Box>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Linkedin management for <br /> Alok Kosthi
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #F45050",
                borderRadius: "1rem",
                backgroundColor: "white",
                width: "20rem",
              }}
            >
              <img src={slide_image_1} alt="slide_image" />
            </Box>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Linkedin management for <br /> Alok Kosthi
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #F45050",
                borderRadius: "1rem",
                backgroundColor: "white",
                width: "20rem",
              }}
            >
              <img src={slide_image_1} alt="slide_image" />
            </Box>
            <h3 style={{ position: "relative", textAlign: "center" }}>
              Linkedin management for <br /> Alok Kosthi
            </h3>
          </Box>
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default SwipperTest;
