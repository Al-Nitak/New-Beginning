"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const communityBenefitsData = [
  {
    image: "/images/personal-portfolio/menopause-circle.jpg",
    title: "Experienced Guidance",
    description: "30+ years of medical expertise",
    detailsLink: "/about-dr/",
    aosDelay: "100",
  },
  {
    image: "/images/personal-portfolio/arabic-learning.png",
    title: "Sisterhood",
    description: "Women-only, safe, global support network",
    detailsLink: "/community-circles/",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/learn-quran.png",
    title: "Holistic Growth",
    description: "Health, faith, and knowledge in one place",
    detailsLink: "/join-us/",
    aosDelay: "300",
  },
];

const MyAllProjects: React.FC = () => {
  return (
    <>
      <div className="pp-works-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>Why This Community?</h2>
            <p>Three pillars that make our community special</p>
          </div>

          <div className="row justify-content-center">
            {communityBenefitsData &&
              communityBenefitsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6 col-md-6" key={i}>
                  <div
                    className="pp-works-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={860}
                      height={860}
                    />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                    <Link href={value.detailsLink} className="link-btn"></Link>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="pp-works-box-btn">
                <Link href="/join-us/" className="default-btn-two">
                  Join Our Community <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAllProjects;
