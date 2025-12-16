import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";

export default function CommunityCircles() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Community Circles"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Community Circles"
      />

      {/* Community Circles Overview */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Community Circles</h2>
            <p>Join our supportive spaces designed specifically for women</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Menopause Circle</h3>
                <p>A safe space to learn, share, and support each other during menopause. Join our supportive community of women navigating this important life transition together.</p>
                <div className="mt-3">
                  <a href="/community-circles/menopause/" className="default-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-book-quran"></i>
                </div>
                <h3>Quran Learning for Women</h3>
                <p>Female-only learning circles focused on Tajweed and reflection. Connect with sisters worldwide while deepening your spiritual journey through Quran study.</p>
                <div className="mt-3">
                  <a href="/community-circles/quran/" className="default-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-language"></i>
                </div>
                <h3>Arabic Learning Together</h3>
                <p>Build your Arabic language skills while connecting with sisters worldwide. Learn together in a supportive, encouraging environment designed for women.</p>
                <div className="mt-3">
                  <a href="/community-circles/arabic/" className="default-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="section-title text-center">
            <h2>How It Works</h2>
            <p>Simple steps to join our community</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box text-center">
                <div className="icon">
                  <span className="number">1</span>
                </div>
                <h3>Choose Your Circle</h3>
                <p>Select the community circle that interests you most - menopause support, Quran learning, or Arabic study.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box text-center">
                <div className="icon">
                  <span className="number">2</span>
                </div>
                <h3>Join the Group</h3>
                <p>Connect through our WhatsApp group or newsletter to stay updated on events and resources.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box text-center">
                <div className="icon">
                  <span className="number">3</span>
                </div>
                <h3>Participate</h3>
                <p>Join online sessions, ask questions, share experiences, and support your sisters.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box text-center">
                <div className="icon">
                  <span className="number">4</span>
                </div>
                <h3>Grow Together</h3>
                <p>Build lasting friendships while growing in health, faith, and knowledge together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2>Ready to Join?</h2>
                <p>
                  No woman should walk her journey alone. Join our global sisterhood today and connect with women who understand your challenges and celebrate your victories.
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
