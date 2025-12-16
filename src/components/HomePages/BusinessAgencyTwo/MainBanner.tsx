"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

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
        spaceBetween={25}
        autoHeight={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner11.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Business Agency</h1>

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

            <div className="creative-shape">
              <Image
                src="/images/curve-shape.svg"
                alt="curve Shape"
                width={600}
                height={96}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner12.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Grow Your Business</h1>

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

            <div className="creative-shape">
              <Image
                src="/images/curve-shape.svg"
                alt="curve Shape"
                width={600}
                height={96}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner13.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center">
                    <h1>Start Your Business</h1>

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

            <div className="creative-shape">
              <Image
                src="/images/curve-shape.svg"
                alt="curve Shape"
                width={600}
                height={96}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
