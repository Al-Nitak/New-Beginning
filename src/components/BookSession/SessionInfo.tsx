import React from "react";

export default function SessionInfo() {
  return (
    <div className="pt-100 pb-70 bg-f8f9fa">
      <div className="container">
        <div className="section-title text-center">
          <h2>What to Expect in Your Session</h2>
          <p>A gentle, supportive space designed just for you</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="featured-services-box">
              <div className="icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3>30 Minutes of Focused Care</h3>
              <p>Each session is thoughtfully designed to give you dedicated time with Dr. Noha, allowing for meaningful conversation and personalized guidance tailored to your unique needs.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="featured-services-box">
              <div className="icon">
                <i className="fa-solid fa-video"></i>
              </div>
              <h3>Comfortable Online Connection</h3>
              <p>Connect from the comfort and privacy of your own space through our secure video platform, creating a safe environment for open and honest conversation.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="featured-services-box">
              <div className="icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3>Compassionate, Personalized Support</h3>
              <p>Receive gentle, understanding guidance that honors your individual journey, whether you&apos;re exploring health, faith, learning, or personal growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
