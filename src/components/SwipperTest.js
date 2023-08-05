import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./swipper.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from "../assets/images/carouselImage.png"
// let slide_image_1 ='https://picsum.photos/300/300';

function SwipperTest() {
  return (
    <div className="container-slider">
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{position: "relative", textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <h3 style={{textAlign: "center"}}>Linkedin management for <br/> Alok Kosthi</h3>
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