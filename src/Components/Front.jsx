import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import first from "../assets/imgs/swipe5.jpeg"
import second from "../assets/imgs/swipe4.jpg"
import third from "../assets/imgs/swipe1.avif"
import fourth from "../assets/imgs/slide_3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Front() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className='swipe_slide1'>
          <div className="slide-content">
            <img src={first} />
            <div className="overlay-content">
              <p>Book Your Dream Flight Now</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swipe_slide1'>
          <div className="slide-content">
            <img src={second} />
            <div className="overlay-content">
              <p>Book Your Dream Flight Now</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe_slide1'>
          <div className="slide-content">
            <img src={third} />
            <div className="overlay-content">
              <p>Book Your Dream Flight Now</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swipe_slide1'>
          <div className="slide-content">
            <img src={fourth} />
            <div className="overlay-content">
              <p>Book Your Dream Flight Now</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className='swipe_slide2'>
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide className='swipe_slide2'>
          <img src={second} />
        </SwiperSlide>
        <SwiperSlide className='swipe_slide2'>
          <img src={third} />
        </SwiperSlide>
        <SwiperSlide className='swipe_slide2'>
          <img src={fourth} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}