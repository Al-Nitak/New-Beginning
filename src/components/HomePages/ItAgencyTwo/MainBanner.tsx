"use client";

import React, { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  // Popup Video
  const [toggler, setToggler] = useState(false);

  // rotation animation
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateY = (deltaX / (rect.width / 2)) * 15; // Max 15 degrees rotation
    const rotateX = -(deltaY / (rect.height / 2)) * 15; // Negative for correct direction

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="hero-banner it-banner overly bg-fixed"
        style={{
          backgroundImage: `url(/images/hero-banner14.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                      IT agency
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1300"
                      data-aos-delay="300"
                    >
                      <Link href="/contact-us/" className="btn btn-primary">
                        Get Started
                      </Link>

                      <button
                        className="btn btn-secondary"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    ref={imageRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transform: isHovering
                        ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                        : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                      transition: isHovering
                        ? "transform 0.1s ease-out"
                        : "transform 0.5s ease",
                    }}
                  >
                    <Image
                      src="/images/animate-banner-img2.jpg"
                      alt="Animate image"
                      width={600}
                      height={600}
                      style={{
                        transform: isHovering ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oval-shape">
          <Image
            src="/images/oval-shape.png"
            alt="Shape"
            width={5000}
            height={330}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
