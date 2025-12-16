import React from "react";
import Image from "next/image";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";

export default function AboutDr() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Dr. Noha"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Dr."
      />

      {/* Doctor's Story Section */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>My Journey</h2>
                  <p>
                    As an ICU & Anesthesia Consultant for over 30 years, I&apos;ve walked with women through their most vulnerable moments. Today, I dedicate my time to empowering women through menopause support, and teaching Arabic & Quran to help us stay connected spiritually and culturally.
                  </p>
                  <p>
                    This community was born from a simple belief: no woman should walk her journey alone. Whether you&apos;re navigating menopause, seeking spiritual growth through Quran study, or wanting to connect with your cultural roots through Arabic learning, you have a sisterhood here.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/personal-portfolio/banner-profile.jpg"
                  alt="Dr. Noha"
                  width={600}
                  height={800}
                  style={{ width: "100%", borderRadius: "10px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Credentials Section */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>Medical Credentials</h2>
                <p>30+ years of medical expertise dedicated to women&apos;s health</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h3>Medical Education</h3>
                <p>Doctor of Medicine (MD) with honors, specializing in internal medicine and women&apos;s health.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
                <h3>ICU & Anesthesia Specialist</h3>
                <p>Completed intensive training in critical care medicine and anesthesia, supporting patients through vulnerable moments.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Women&apos;s Health Focus</h3>
                <p>Ongoing education in women&apos;s health, menopause management, and holistic approaches to life transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2>My Mission</h2>
                <p>
                  To create a safe, supportive space where women can grow in health, faith, and knowledge.
                  Through medical expertise, spiritual guidance, and sisterhood, I aim to help every woman
                  navigate her unique journey with confidence and grace.
                </p>
                <div className="mt-4">
                  <a href="/join-us/" className="default-btn">
                    Join Our Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
