"use client";

import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const Screenshots: React.FC = () => {
  // Dynamic data array for tabs and screenshots
  const screenshotData = [
    {
      icon: "bx bx-data",
      title: "Budget Overview",
      imageSrc: "/images/software/screen1.jpg",
      alt: "screenshots 1",
    },
    {
      icon: "bx bx-add-to-queue",
      title: "Create & Adjust",
      imageSrc: "/images/software/screen2.jpg",
      alt: "screenshots 2",
    },
    {
      icon: "bx bx-file",
      title: "View Reports",
      imageSrc: "/images/software/screen3.jpg",
      alt: "screenshots 3",
    },
    {
      icon: "bx bx-bookmark-plus",
      title: "Integrations",
      imageSrc: "/images/software/screen4.jpg",
      alt: "screenshots 4",
    },
  ];

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
      <div className="screenshots-area bg-gradient ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">Screenshots</span>
            <h2>
              Easily Customize within <br />
              One Minute
            </h2>
          </div>

          <div className="screenshots-tabs">
            <Tabs>
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <TabList>
                    {screenshotData.map((item, index) => (
                      <Tab key={index}>
                        <i className={item.icon}></i>
                        {item.title}
                      </Tab>
                    ))}
                  </TabList>
                </div>

                <div className="col-lg-9 col-sm-8">
                  {screenshotData.map((item, index) => (
                    <TabPanel key={index}>
                      <div
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
                          src={item.imageSrc}
                          alt={item.alt}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="100"
                          width={1170}
                          height={748}
                          style={{
                            transform: isHovering ? "scale(1.05)" : "scale(1)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    </TabPanel>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screenshots;
