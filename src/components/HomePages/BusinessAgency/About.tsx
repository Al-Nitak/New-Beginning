"use client";

import React, { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const About: React.FC = () => {
  // Video Popup
  const [toggler, setToggler] = useState(false);

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
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area bg-fcfbfb ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
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
                  src="/images/about-img5.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={650}
                  style={{
                    transform: isHovering ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Our Success</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Grow Business</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
