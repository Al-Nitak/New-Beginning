import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

export default function MenopauseCircle() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Menopause Circle"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Menopause Circle"
      />

      {/* Menopause Circle Overview */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>Menopause Circle</h2>
                  <p>
                    A safe space to learn, share, and support each other during menopause. Join our supportive community of women navigating this important life transition together.
                  </p>
                  <p>
                    Led by Dr. Noha with 30+ years of medical experience, our menopause circle provides evidence-based information, emotional support, and practical strategies for managing this natural life stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/personal-portfolio/menopause-circle.jpg"
                  alt="Menopause Support"
                  width={600}
                  height={400}
                  style={{ width: "100%", borderRadius: "10px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Cover */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>What We Cover</h2>
            <p>Comprehensive support for your menopause journey</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Physical Changes</h3>
                <p>Understanding hot flashes, sleep issues, weight changes, and other physical symptoms with medical guidance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <h3>Emotional Support</h3>
                <p>Managing mood changes, anxiety, and emotional ups and downs with understanding and practical strategies.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
                <h3>Lifestyle Strategies</h3>
                <p>Nutrition, exercise, stress management, and natural approaches to support your well-being during menopause.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Join */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>How to Join</h2>
            <p>Simple steps to become part of our menopause circle</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h3>WhatsApp Group</h3>
                <p>Join our private WhatsApp group for daily support, quick questions, and encouragement from sisters going through similar experiences.</p>
                <div className="mt-3">
                  <a href="#whatsapp" className="default-btn">
                    Join WhatsApp Group
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <h3>Monthly Sessions</h3>
                <p>Participate in our monthly online support sessions where Dr. Noha shares medical insights and answers your questions.</p>
                <div className="mt-3">
                  <a href="#events" className="default-btn">
                    View Upcoming Sessions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>What Our Sisters Say</h2>
            <p>Real experiences from women in our menopause circle</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  &quot;Being part of this circle made me feel I&apos;m not alone. The menopause support group has been a lifeline during this challenging transition. Dr. Noha&apos;s guidance combined with sisterhood has been transformative.&quot;
                </p>
                <div className="info">
                  <h3>Sarah Ahmed</h3>
                  <span>Community Member</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  &quot;The medical expertise combined with emotional support has been incredible. I finally understand what&apos;s happening to my body and have practical strategies to manage symptoms.&quot;
                </p>
                <div className="info">
                  <h3>Fatima Hassan</h3>
                  <span>Menopause Circle Member</span>
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
