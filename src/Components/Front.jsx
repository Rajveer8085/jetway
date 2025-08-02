import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import slides video
import First_slide from "../assets/imgs/First-slide-vid.mp4"
import Second_slide from "../assets/imgs/second-slide-vid.mp4"
import Third_slide from "../assets/imgs/third-slide-vid.mp4"

export default function Front() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  };
  const Slides = [
    {
      image:First_slide,
      heading:"🌍 Discover Your Next Destination",
      Text:"Search, compare, and book flights across 300+ cities — all in real time.",
      btns:"✈️ Search Flights"
    },
    {
      image:Second_slide,
      heading:"📡 Real-Time Flight Tracker",
      Text:"Track departures, arrivals, and delays with live updates powered by AviationStack.",
      btns:"🔍 Track Now "
    },
    {
      image:Third_slide,
      heading:"🌐 Global Coverage. Local Convenience.",
      Text:"From Delhi to Dubai, we’ve got you covered. Fly smarter with our global network.",
      btns:"🚀 Explore Routes"
    },
  ]
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {Slides.map((e)=>(
            <SwiperSlide>
          <div className="hero-slide">
            <video loop autoPlay muted>
              <source src={e.image} type='video/mp4' />
            </video>
            <div className="content">
              <h1>{e.heading}</h1>
              <p>{e.Text}</p>
              <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
                {e.btns}
              </button>
            </div>
          </div>
        </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
