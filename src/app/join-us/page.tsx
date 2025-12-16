import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import "./styles.css";

export default function JoinUs() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Join Our Community"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Join Us"
      />

      {/* Join Options Section */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>How to Join Our Sisterhood</h2>
            <p>Choose the way that feels most comfortable for you</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3>Newsletter Signup</h3>
                <p>Stay updated with health tips, spiritual reflections, and Arabic learning resources delivered to your inbox.</p>
                <div className="mt-3">
                  <a href="#newsletter" className="default-btn">
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <h3>WhatsApp Community</h3>
                <p>Join our supportive WhatsApp group for daily encouragement, quick questions, and sisterhood support.</p>
                <div className="mt-3">
                  <a href="#whatsapp" className="default-btn">
                    Join Group
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <h3>Events Calendar</h3>
                <p>Participate in online learning sessions, menopause support groups, and Quran study circles.</p>
                <div className="mt-3">
                  <a href="#events" className="default-btn">
                    View Events
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="featured-services-box">
                <div className="icon">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <h3>Free One-on-One Session</h3>
                <p>Book a free 30-minute consultation with Dr. Noha for personalized guidance on your journey.</p>
                <div className="mt-3">
                  <a href="/book-session/" className="default-btn">
                    Book Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="pt-100 pb-70 bg-f8f9fa">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center">
                <h2>Our Community Guidelines</h2>
                <p>Creating a safe, supportive space for all women</p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <h3>Respect & Kindness</h3>
                    <p>Treat every sister with respect, kindness, and understanding. We're all on different journeys.</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="fa-solid fa-shield"></i>
                    </div>
                    <h3>Safe Space</h3>
                    <p>This is a women-only community. We maintain privacy and confidentiality for all members.</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="fa-solid fa-hands-helping"></i>
                    </div>
                    <h3>Support Each Other</h3>
                    <p>Share your experiences, ask questions, and offer encouragement to your sisters.</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="featured-services-box">
                    <div className="icon">
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <h3>Learning Together</h3>
                    <p>We&apos;re here to learn and grow together in health, faith, and knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2>Have Questions?</h2>
                <p>We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you soon.</p>
              </div>

              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={6}
                          placeholder="Your Message"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
