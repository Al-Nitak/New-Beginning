import React from "react";

interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="booking-steps mb-5">
      <div className="row">
        <div className="col-4">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-title">Sign Up</div>
          </div>
        </div>
        <div className="col-4">
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-title">Choose Date & Time</div>
          </div>
        </div>
        <div className="col-4">
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-title">Confirm Booking</div>
          </div>
        </div>
      </div>
    </div>
  );
}
