"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Add CSS for smooth text animations
const styles = `
  .main-banner-content h1,
  .main-banner-content p,
  .main-banner-content div {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  .swiper-slide-active .main-banner-content h1 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }

  .swiper-slide-active .main-banner-content p {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  .swiper-slide-active .main-banner-content div {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }
`;

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <style jsx>{styles}</style>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper
        autoHeight={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/hero-banner5.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Digital Marketing</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Contact Us
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/hero-banner6.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Marketing Startup</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Contact Us
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly-6"
            style={{
              backgroundImage: `url(/images/hero-banner7.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Marketing agency</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Contact Us
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
