"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const globalReachData = [
  {
    image: "/images/digital-marketing/partner1.png",
    country: "United States",
  },
  {
    image: "/images/digital-marketing/partner2.png",
    country: "United Kingdom",
  },
  {
    image: "/images/digital-marketing/partner3.png",
    country: "Canada",
  },
  {
    image: "/images/digital-marketing/partner4.png",
    country: "Australia",
  },
  {
    image: "/images/digital-marketing/partner5.png",
    country: "Germany",
  },
  {
    image: "/images/digital-marketing/partner6.png",
    country: "Malaysia",
  },
  {
    image: "/images/digital-marketing/partner4.png",
    country: "UAE",
  },
];

const MyBestClient: React.FC = () => {
  return (
    <>
      <div className="pp-partner-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>Global Sisterhood</h2>
            <p>Women from around the world joining our community</p>
          </div>

          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            {globalReachData &&
              globalReachData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="partner-item text-center">
                    <Image
                      src={value.image}
                      alt="image"
                      width={155}
                      height={45}
                    />
                    <p>{value.country}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MyBestClient;
