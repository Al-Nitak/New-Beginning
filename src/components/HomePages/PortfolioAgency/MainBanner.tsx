"use client";

import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
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
  // Modal
  const [toggler, setToggler] = useState(false);

  // Parallax
  const [bgPosition, setBgPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const scrollPosition = window.scrollY;
      const bannerHeight = bannerRef.current.offsetHeight;
      const speed = 0.5; // Parallax speed (0.1 to 1)

      // Calculate parallax offset (negative for upward movement)
      const offset = -(scrollPosition * speed);
      setBgPosition(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div
            ref={bannerRef}
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner8.jpg)`,
              backgroundPosition: `center ${bgPosition}px`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed", // Creates parallax effect
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Portfolio Agency</h1>

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
            ref={bannerRef}
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner9.jpg)`,
              backgroundPosition: `center ${bgPosition}px`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed", // Creates parallax effect
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Web Development</h1>

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
            ref={bannerRef}
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner10.jpg)`,
              backgroundPosition: `center ${bgPosition}px`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed", // Creates parallax effect
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>React Development</h1>

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
