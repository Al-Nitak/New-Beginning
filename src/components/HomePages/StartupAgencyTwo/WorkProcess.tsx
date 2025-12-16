"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const workProcessData = [
  {
    title: "Our Work Process",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/man-with-mobile.png",
    circleImage: "/images/circle.png",

    list: [
      {
        iconName: "pe-7s-display1",
        title: "Surface",
        text: "Visual Design",
        aosDelay: "100",
      },
      {
        iconName: "pe-7s-display2",
        title: "Skeleton",
        text: "Wireframes",
        aosDelay: "200",
      },
      {
        iconName: "pe-7s-airplay",
        title: "Structure",
        text: "Screen Flow",
        aosDelay: "300",
      },
      {
        iconName: "pe-7s-note2",
        title: "Scope",
        text: "Requirements",
        aosDelay: "400",
      },
      {
        iconName: "pe-7s-light",
        title: "User Research",
        text: "User Research",
        aosDelay: "500",
      },
      {
        iconName: "pe-7s-sun",
        title: "Implement",
        text: "Lunch/Analyse",
        aosDelay: "600",
      },
    ],
  },
];

const WorkProcess: React.FC = () => {
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
      {workProcessData &&
        workProcessData.map((value, i) => (
          <section className="work-process-area ptb-100" key={i}>
            <div className="container">
              <div className="section-title">
                <h2>{value.title}</h2>
                <p>{value.shortText}</p>
              </div>

              <div className="work-process">
                <div
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
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
                    src={value.image}
                    alt="image"
                    width={492}
                    height={941}
                    style={{
                      transform: isHovering ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                <div className="work-process-list">
                  {value.list.slice(0, 6).map((value, i) => (
                    <div
                      className="single-work-process"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="icon">
                        <i className={value.iconName}></i>
                      </div>
                      <h3>{value.title}</h3>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>

                <Image
                  src={value.circleImage}
                  className="rotateme circle-image"
                  alt="image"
                  width={905}
                  height={908}
                />
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default WorkProcess;
