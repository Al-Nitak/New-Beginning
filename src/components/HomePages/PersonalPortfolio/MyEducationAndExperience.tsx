"use client";

import React from "react";

const doctorEducationData = [
  {
    university: "Medical School",
    year: "1985-1991",
    category: "Doctor of Medicine (MD)",
    shortText:
      "Graduated with honors, specializing in internal medicine and women's health. Developed a deep understanding of the unique challenges women face throughout their life journey.",
    aosDelay: "100",
  },
  {
    university: "Residency Program",
    year: "1991-1995",
    category: "ICU & Anesthesia Specialist",
    shortText:
      "Completed intensive training in critical care medicine and anesthesia, gaining expertise in supporting patients through their most vulnerable moments.",
    aosDelay: "200",
  },
  {
    university: "Continuing Education",
    year: "1995-Present",
    category: "Women's Health & Menopause Specialist",
    shortText:
      "Ongoing education in women's health, menopause management, and holistic approaches to supporting women through life transitions.",
    aosDelay: "300",
  },
];

const doctorExperienceData = [
  {
    company: "Community Health Initiative",
    year: "2020 - Present",
    category: "Community Leader & Educator",
    shortText:
      "Leading a global community of women focused on health, faith, and knowledge. Creating safe spaces for women to learn, grow, and support each other through life's journey.",
    aosDelay: "100",
  },
  {
    company: "Hospital Practice",
    year: "1995 - 2020",
    category: "ICU & Anesthesia Consultant",
    shortText:
      "25+ years of medical practice specializing in critical care and anesthesia. Guided countless patients and families through challenging medical situations with compassion and expertise.",
    aosDelay: "200",
  },
  {
    company: "Educational Programs",
    year: "2015 - Present",
    category: "Arabic & Quran Teacher",
    shortText:
      "Teaching Arabic language and Quran studies to women worldwide, combining medical expertise with spiritual guidance to support holistic well-being.",
    aosDelay: "300",
  },
];

const MyEducationAndExperience: React.FC = () => {
  return (
    <>
      <div className="short-brief-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="short-brief-content">
                <div className="section-title style-two">
                  <h2>Medical Education</h2>
                  <p>30+ years of medical expertise</p>
                </div>

                <ul className="timeline">
                  {doctorEducationData &&
                    doctorEducationData.map((value, i) => (
                      <li
                        className="timeline-item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <div className="timeline-info">
                          <span className="sub-title">
                            {value.university} - <span>{value.year}</span>
                          </span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h3>{value.category}</h3>
                          <p>{value.shortText}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="short-brief-content">
                <div className="section-title style-two">
                  <h2>Professional Journey</h2>
                  <p>From medical practice to community leadership</p>
                </div>

                <ul className="timeline">
                  {doctorExperienceData &&
                    doctorExperienceData.map((value, i) => (
                      <li
                        className="timeline-item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <div className="timeline-info">
                          <span className="sub-title">
                            {value.company} - <span>{value.year}</span>
                          </span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h3>{value.category}</h3>
                          <p>{value.shortText}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEducationAndExperience;
