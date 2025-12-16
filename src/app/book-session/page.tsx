import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BookingForm from "../../components/BookSession/BookingForm";
import SessionInfo from "../../components/BookSession/SessionInfo";
import "./styles.css";

export default function BookSession() {

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Book Your Gentle Support Session"
        BGImage="/images/page-banner1.jpg"
      />

      {/* Booking Process */}
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <BookingForm />
          </div>
        </div>
      </div>

      <SessionInfo />

      <Footer />
    </>
  );
}
