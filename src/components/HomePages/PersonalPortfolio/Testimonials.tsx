"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const communityVoicesData = [
  {
    name: "Sarah Ahmed",
    designation: "Community Member",
    feedbackText:
      "Being part of this circle made me feel I'm not alone. The menopause support group has been a lifeline during this challenging transition. Dr. Noha's guidance combined with sisterhood has been transformative.",
    quoteIconBg: "",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Fatima Hassan",
    designation: "Quran Circle Member",
    feedbackText:
      "The Quran classes have been life-changing. Learning Tajweed in a women-only environment with sisters from around the world has deepened my spiritual connection and built beautiful friendships.",
    quoteIconBg: "bg-ca83ff",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Aisha Johnson",
    designation: "Arabic Learning Circle",
    feedbackText:
      "I never thought I could learn Arabic at my age, but this community made it possible. The supportive environment and Dr. Noha's patient teaching style helped me progress beyond my expectations.",
    quoteIconBg: "bg-ff9f07",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    name: "Maryam Ali",
    designation: "Community Member",
    feedbackText:
      "This community has given me hope and strength. The combination of medical expertise, spiritual guidance, and sisterhood support has helped me navigate life's challenges with confidence and grace.",
    quoteIconBg: "bg-ca83ff",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Community Voices</h2>
            <p>Hear from our sisters about their journey with us</p>
          </div>

          <Swiper
            autoHeight={true}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="pp-testimonials-slides"
          >
            {communityVoicesData &&
              communityVoicesData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className={`pp-testimonials-box ${value.quoteIconBg}`}>
                    <i className="icon fa-solid fa-quote-left"></i>
                    <p>
                      <q>{value.feedbackText}</q>
                    </p>

                    <div className="rating">
                      {value.rating.map((value, i) => (
                        <i className={value.iconName} key={i}></i>
                      ))}
                    </div>

                    <div className="info">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
