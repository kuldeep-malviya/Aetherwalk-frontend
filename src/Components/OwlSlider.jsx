import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Importing images
import customer1 from "../assets/imgs/customer1.avif"
import customer2 from "../assets/imgs/customer2.jpg"
import customer3 from "../assets/imgs/customer3.jpg"
import customer4 from "../assets/imgs/customer4.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./owlstyles.css";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";

export default function OwlSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <div className="container">
        <div className="owl_swipe_head text-center">
          <h1 className="my-4 owl_heading">Loved by Our Customers</h1>
          <p>Our customers mean everything to us, and we love hearing what they have to say! From first-time shoppers to long-time fans, their feedback helps us grow and improve. Check out what people are saying about their experiences with us.</p>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide className="swipe_slide">
          <div className="container text-center">
            <div className="cutomers_rate">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sit amet consectetur adipisicing elit. Vero suscipit
                praesentium dolores non ipsum dignissimos aspernatur delectus
                labore impedit quasi ea aperiam laborum, iure tempore dolor
                itaque repellat! Harum, laudantium!
              </p>
              <div className="stars">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div className="text-center d-flex justify-content-center">
                {/* Added loading="lazy" for lazy loading of images */}
                <img src={customer1} alt="Customer 1" loading="lazy" />
              </div>
              <div className="name">
                <h4>romeei</h4>
                <p>manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
          <div className="container text-center">
            <div className="cutomers_rate">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sit amet consectetur adipisicing elit. Vero suscipit
                praesentium dolores non ipsum dignissimos aspernatur delectus
                labore impedit quasi ea aperiam laborum, iure tempore dolor
                itaque repellat! Harum, laudantium!
              </p>
              <div className="stars">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div className="text-center d-flex justify-content-center">
                {/* Added loading="lazy" for lazy loading of images */}
                <img src={customer2} alt="Customer 2" loading="lazy" />
              </div>
              <div className="name">
                <h4>romeei</h4>
                <p>manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
          <div className="container text-center">
            <div className="cutomers_rate">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sit amet consectetur adipisicing elit. Vero suscipit
                praesentium dolores non ipsum dignissimos aspernatur delectus
                labore impedit quasi ea aperiam laborum, iure tempore dolor
                itaque repellat! Harum, laudantium!
              </p>
              <div className="stars">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div className="text-center d-flex justify-content-center">
                {/* Added loading="lazy" for lazy loading of images */}
                <img src={customer3} alt="Customer 3" loading="lazy" />
              </div>
              <div className="name">
                <h4>romeei</h4>
                <p>manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipe_slide">
          <div className="container text-center">
            <div className="cutomers_rate">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sit amet consectetur adipisicing elit. Vero suscipit
                praesentium dolores non ipsum dignissimos aspernatur delectus
                labore impedit quasi ea aperiam laborum, iure tempore dolor
                itaque repellat! Harum, laudantium!
              </p>
              <div className="stars">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div className="text-center d-flex justify-content-center">
                {/* Added loading="lazy" for lazy loading of images */}
                <img src={customer4} alt="Customer 4" loading="lazy" />
              </div>
              <div className="name">
                <h4>romeei</h4>
                <p>manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
