import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/PersonalPortfolio/MainBanner";
import MyExpertise from "../components/HomePages/PersonalPortfolio/MyExpertise";
import MyAllProjects from "../components/HomePages/PersonalPortfolio/MyAllProjects";
import MyEducationAndExperience from "../components/HomePages/PersonalPortfolio/MyEducationAndExperience";
import Testimonials from "../components/HomePages/PersonalPortfolio/Testimonials";
import MyBestClient from "../components/HomePages/PersonalPortfolio/MyBestClient";
import LatestBlogPost from "../components/HomePages/PersonalPortfolio/LatestBlogPost";
import MySkills from "../components/HomePages/PersonalPortfolio/MySkills";
import ContactForm from "../components/HomePages/PersonalPortfolio/ContactForm";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <MainBanner />

      {/* Community Circles */}
      <MyExpertise />

      {/* Why This Community? */}
      <MyAllProjects />

      <div className="separate-border" />

      {/* About the Doctor */}
      <MyEducationAndExperience />

      {/* Community Voices */}
      <Testimonials />



      <div className="separate-border" />

      {/* Blog & Resources */}
      <LatestBlogPost />

      <div className="separate-border" />

      {/* Join the Movement */}
      <MySkills />

      <div className="separate-border" />

      {/* Contact */}
      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
