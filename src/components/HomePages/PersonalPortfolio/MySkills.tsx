"use client";

import React from "react";
import Image from "next/image";

const joinOptionsData = [
  {
    image: "/images/personal-portfolio/skills-img1.png",
    title: "Newsletter",
    description: "Stay updated with health tips and community news",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/skills-img2.png",
    title: "WhatsApp Group",
    description: "Join our supportive community chat",
    aosDelay: "300",
  },
  {
    image: "/images/personal-portfolio/skills-img3.png",
    title: "Events Calendar",
    description: "Participate in online learning sessions",
    aosDelay: "400",
  },
  {
    image: "/images/personal-portfolio/skills-img4.png",
    title: "Free Session",
    description: "Book a one-on-one with Dr. Noha",
    aosDelay: "500",
  },
];

const MySkills: React.FC = () => {
  return (
    <>
      <div className="pp-skills-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title style-two"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>Join the Movement</h2>
            <p>
              No woman should walk this journey alone. Join our global circle today and connect with sisters worldwide.
            </p>
          </div>

          <div className="row justify-content-center align-items-center">
            {joinOptionsData &&
              joinOptionsData.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                  <div
                    className="pp-skills-box"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={164}
                      height={50}
                    />
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
