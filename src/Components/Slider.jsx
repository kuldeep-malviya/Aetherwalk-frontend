import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// Importing images
import first from "../assets/imgs/1577.jpg";
import fourth from "../assets/imgs/slide1.webp";
import fifth from "../assets/imgs/slide3.webp";

// Import required modules for Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Lazy loading for images using "loading=lazy"
const LazyImage = ({ src, alt, height }) => (
  <img src={src} alt={alt} height={height} loading="lazy" />
);

export default function Slides() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={"hero-slider"}>
          {/* Lazy load the image with "loading=lazy" */}
          <LazyImage style={{width:"auto"}} src={first} className={"img-fluid"} alt="first" height="200px" />
        </SwiperSlide>
        <SwiperSlide className={"hero-slider"}>
          {/* Lazy load the image with "loading=lazy" */}
          <LazyImage style={{width:"auto"}} className={"img-fluid"} src={fourth} alt="fourth" height="200px" />
        </SwiperSlide>
        <SwiperSlide className={"hero-slider"}>
          {/* Lazy load the image with "loading=lazy" */}
          <LazyImage style={{width:"auto"}} className={"img-fluid"} src={fifth} alt="fifth" height="200px" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
