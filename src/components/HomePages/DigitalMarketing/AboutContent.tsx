"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent: React.FC = () => {
  // Rotation for 3D effect
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
      <div className="marketing-about-area overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
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
                  src="/images/digital-marketing/about-img.png"
                  alt="image"
                  width={658}
                  height={591}
                  style={{
                    transform: isHovering ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="marketing-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span className="sub-title">ABOUT US</span>
                <h2>
                  We offer the World&apos;s Best <b>Digital Marketing</b>{" "}
                  Services!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Global Reach</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Excellence Track Record</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>High-End Anaylizing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="box">
                      <i className="fa-solid fa-check"></i>
                      <h3>Our Dedicated Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="default-btn-two">
                  Learn More <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
