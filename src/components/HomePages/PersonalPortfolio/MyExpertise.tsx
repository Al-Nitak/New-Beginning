"use client";

import React from "react";

const communityServicesData = [
  {
    iconName: "icon fa-solid fa-heart",
    title: "Menopause Circle",
    shortText:
      "A safe space to learn, share, and support each other during menopause. Join our supportive community of women navigating this important life transition together.",
    aosDelay: "100",
  },
  {
    iconName: "icon fa-solid fa-book-quran",
    title: "Quran Learning for Women",
    shortText:
      "Female-only learning circles focused on Tajweed and reflection. Connect with sisters worldwide while deepening your spiritual journey through Quran study.",
    aosDelay: "200",
  },
  {
    iconName: "icon fa-solid fa-language",
    title: "Arabic Learning Together",
    shortText:
      "Build your Arabic language skills while connecting with sisters worldwide. Learn together in a supportive, encouraging environment designed for women.",
    aosDelay: "300",
  },
];

const MyExpertise: React.FC = () => {
  return (
    <>
      <div className="pp-expertise-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Community Circles</h2>
            <p>Join our supportive spaces designed specifically for women</p>
          </div>

          <div className="row justify-content-center">
            {communityServicesData &&
              communityServicesData.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <div
                    className="pp-expertise-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;
