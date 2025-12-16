import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

export default function QuranCircle() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Quran Learning for Women"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Quran Learning"
      />

      {/* Quran Circle Overview */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>Quran Learning for Women</h2>
                  <p>
                    Female-only learning circles focused on Tajweed and reflection. Connect with sisters worldwide while deepening your spiritual journey through Quran study.
                  </p>
                  <p>
                    Our Quran circles provide a safe, supportive environment where women can learn, reflect, and grow in their faith together. Whether you&apos;re a beginner or looking to improve your recitation, you&apos;ll find a welcoming space here.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/personal-portfolio/learn-quran.png"
                  alt="Quran Learning"
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
            <p>Comprehensive Quran study in a women-only environment</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-book-quran"></i>
                </div>
                <h3>Tajweed Rules</h3>
                <p>Learn proper pronunciation and recitation rules to beautify your Quran reading and deepen your connection with the text.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Spiritual Reflection</h3>
                <p>Explore the meanings and lessons within the Quran verses, applying them to daily life and personal growth.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h3>Community Study</h3>
                <p>Study together with sisters from around the world, sharing insights and supporting each other&apos;s learning journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Levels */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>Learning Levels</h2>
            <p>We welcome women at all stages of their Quran journey</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h3>Beginner</h3>
                <p>New to Quran reading? Start with basic Arabic letters, simple words, and fundamental Tajweed rules in a supportive environment.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-tree"></i>
                </div>
                <h3>Intermediate</h3>
                <p>Already reading Quran? Improve your fluency, learn advanced Tajweed rules, and deepen your understanding of meanings.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-mountain"></i>
                </div>
                <h3>Advanced</h3>
                <p>Experienced readers can focus on memorization, advanced Tajweed, and detailed study of Quranic themes and interpretations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Join */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>How to Join</h2>
            <p>Start your Quran learning journey with us</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h3>WhatsApp Group</h3>
                <p>Join our Quran study WhatsApp group for daily practice, sharing recitations, and getting feedback from Dr. Noha and fellow sisters.</p>
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
                <h3>Weekly Sessions</h3>
                <p>Participate in our weekly online Quran study sessions with structured lessons, group recitation, and spiritual reflection.</p>
                <div className="mt-3">
                  <a href="#events" className="default-btn">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>What Our Sisters Say</h2>
            <p>Real experiences from women in our Quran circle</p>
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
                  &quot;The Quran classes have been life-changing. Learning Tajweed in a women-only environment with sisters from around the world has deepened my spiritual connection and built beautiful friendships.&quot;
                </p>
                <div className="info">
                  <h3>Fatima Hassan</h3>
                  <span>Quran Circle Member</span>
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
                  &quot;I was nervous about learning Quran as an adult, but Dr. Noha&apos;s patient teaching style and the supportive community made it so much easier. I&apos;ve progressed beyond my expectations.&quot;
                </p>
                <div className="info">
                  <h3>Aisha Johnson</h3>
                  <span>Quran Circle Member</span>
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
