"use client";

import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  // Parallax
    const [bgPosition, setBgPosition] = useState(0);
    const bannerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!bannerRef.current) return;
  
        const scrollPosition = window.scrollY;
        const bannerHeight = bannerRef.current.offsetHeight;
        const speed = 0.5; // Parallax speed (0.1 to 1)
  
        // Calculate parallax offset (negative for upward movement)
        const offset = -(scrollPosition * speed);
        setBgPosition(offset);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />
      <div 
        ref={bannerRef}
        className="hero-banner overly-6"
        style={{ 
          backgroundImage: `url(/images/hero-banner7.jpg)`,
          backgroundSize: '110%', // Start slightly zoomed in
          animation: 'zoomBackground 5s infinite alternate ease-in-out'
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Digital Marketing
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <Link href="/contact-us/" className="btn btn-primary">
                    Contact Us
                  </Link>
                  <button
                    onClick={() => setToggler(!toggler)}
                    className="btn btn-secondary"
                  >
                    <i className="fa-solid fa-play me-1"></i> How it works
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for the background animation */}
      <style jsx global>{`
        @keyframes zoomBackground {
          0% {
            background-size: 110%;
            background-position: center;
          }
          100% {
            background-size: 120%;
            background-position: center;
          }
        }
      `}</style>
    </>
  )
}

export default MainBanner;