import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Banner() {
    const slides = [
        {
          image: "https://i.ibb.co/NNGys1v/conference-organisers.jpg",
          label: "Corporate Conference Excellence",
          subtitle: "Elevate your corporate gatherings with our professional event management services.",
        },
        {
          image: "https://i.ibb.co/R0V0mzb/1565175301.jpg",
          label: "Dream Wedding Bliss",
          subtitle: "Turn your dream wedding into reality with our personalized wedding planning services.",
        },
        {
          image: "https://i.ibb.co/TmLnsd0/15647372979249-01.jpg",
          label: "Destination Celebration Extravaganza",
          subtitle: "Create unforgettable memories with our expertly crafted destination event experiences.",
        },
        {
          image: "https://i.ibb.co/ryKsCDH/Reunion-Festival.jpg",
          label: "Heartwarming Reunion Moments",
          subtitle: "Reconnect with loved ones and relive cherished memories at your reunion event.",
        },
        {
          image: "https://i.ibb.co/BNkh2Bq/educational-event.jpg",
          label: "Edifying Educational Symposium",
          subtitle: "Empower minds and inspire learning with our engaging educational event solutions.",
        },
        {
          image: "https://i.ibb.co/xJ4Jsg8/15647372361801-01.jpg",
          label: "Epic Party Adventures",
          subtitle: "Transform ordinary gatherings into extraordinary parties with our event planning expertise.",
        },
        {
          image: "https://i.ibb.co/D5jhmhP/15647372361866-01.jpg",
          label: "Unforgettable Music Festival Experience",
          subtitle: "Immerse yourself in the magic of music and create unforgettable memories at our music festival.",
        },
      ];      

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-[750px] text-white rounded-md"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-md bg-opacity-90 h-full space-y-4 flex flex-col justify-center items-start">
                <div className="p-8 md:p-16 max-w-xl">
                  <h1 className="font-vive text-2xl md:text-5xl lg:text-6xl text-white font-bold mb-8">
                    {slide.label}
                  </h1>
                  <p className="font-light text-lg mb-5">{slide.subtitle}</p>
                </div>
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
