"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo.png";
import NewsletterForm from "./NewsletterForm";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <Link href="/" className="logo">
                  <Image src={logo} alt="image" width={150} height={40} />
                </Link>

                <h2>We Are Launching Soon!</h2>
                <ul
                  id="timer"
                  className="coming-soon-countdown flex-wrap d-flex"
                >
                  <li
                    id="days"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="days">{countdown.days}</span> Days
                  </li>
                  <li
                    id="hours"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="hours">{countdown.hours}</span> Hours
                  </li>
                  <li
                    id="minutes"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="minutes">{countdown.minutes}</span> Minutes
                  </li>
                  <li
                    id="seconds"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="seconds">{countdown.seconds}</span> Seconds
                  </li>
                </ul>

                {/* NewsletterForm */}
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
