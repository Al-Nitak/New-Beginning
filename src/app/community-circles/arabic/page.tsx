import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

export default function ArabicCircle() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Arabic Learning Together"
        homePageUrl="/"
        BGImage="/images/personal-portfolio/arabic-learning.png"
        homePageText="Home"
        activePageText="Arabic Learning"
      />

      {/* Arabic Circle Overview */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>Arabic Learning Together</h2>
                  <p>
                    Build your Arabic language skills while connecting with sisters worldwide. Learn together in a supportive, encouraging environment designed for women.
                  </p>
                  <p>
                    Whether you want to understand Quran better, connect with your cultural roots, or simply learn a beautiful language, our Arabic learning circle provides structured, patient instruction in a women-only environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/personal-portfolio/arabic-learing.png"
                  alt="Arabic Learning"
                  width={600}
                  height={400}
                  style={{ width: "100%", borderRadius: "10px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Learn */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>What We Learn</h2>
            <p>Comprehensive Arabic language learning for women</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-font"></i>
                </div>
                <h3>Arabic Alphabet</h3>
                <p>Start with the basics - learn Arabic letters, their sounds, and how to write them. Perfect for complete beginners.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-book"></i>
                </div>
                <h3>Vocabulary Building</h3>
                <p>Learn essential Arabic words and phrases for daily life, Quran study, and cultural understanding.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <h3>Conversation Practice</h3>
                <p>Practice speaking Arabic in a supportive environment with fellow learners and native speakers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Approach */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Learning Approach</h2>
            <p>Designed specifically for adult women learners</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Patient Teaching</h3>
                <p>Dr. Noha understands the challenges of learning Arabic as an adult. Her patient, encouraging approach makes learning enjoyable and stress-free.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h3>Group Learning</h3>
                <p>Learn alongside sisters from around the world. Share struggles, celebrate progress, and motivate each other in your language journey.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-book-quran"></i>
                </div>
                <h3>Cultural Context</h3>
                <p>Learn Arabic with cultural understanding, connecting language learning to Islamic traditions and cultural heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Levels */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>Learning Levels</h2>
            <p>We welcome women at all stages of Arabic learning</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h3>Complete Beginner</h3>
                <p>Never studied Arabic before? Start with letters, basic sounds, and simple words. No prior knowledge required.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-tree"></i>
                </div>
                <h3>Basic Knowledge</h3>
                <p>Know some Arabic letters or words? Build on your foundation with grammar, vocabulary, and reading practice.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-mountain"></i>
                </div>
                <h3>Intermediate</h3>
                <p>Already reading Arabic? Focus on fluency, advanced grammar, and understanding Quranic and classical texts.</p>
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
            <p>Start your Arabic learning journey with us</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h3>WhatsApp Group</h3>
                <p>Join our Arabic learning WhatsApp group for daily practice, vocabulary sharing, and getting help with pronunciation from Dr. Noha and fellow learners.</p>
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
                <h3>Weekly Classes</h3>
                <p>Participate in our weekly online Arabic classes with structured lessons, interactive exercises, and group practice sessions.</p>
                <div className="mt-3">
                  <a href="#events" className="default-btn">
                    View Class Schedule
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
            <p>Real experiences from women in our Arabic learning circle</p>
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
                  &quot;I never thought I could learn Arabic at my age, but this community made it possible. The supportive environment and Dr. Noha&apos;s patient teaching style helped me progress beyond my expectations.&quot;
                </p>
                <div className="info">
                  <h3>Aisha Johnson</h3>
                  <span>Arabic Learning Circle</span>
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
                  &quot;Learning Arabic with sisters from different countries has been amazing. We help each other, share cultural insights, and celebrate each other&apos;s progress. It&apos;s more than language learning - it&apos;s building friendships.&quot;
                </p>
                <div className="info">
                  <h3>Maryam Ali</h3>
                  <span>Arabic Learning Circle</span>
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
