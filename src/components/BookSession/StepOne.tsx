import React from "react";
import { FormData } from "./BookingForm";

interface StepOneProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
}

export default function StepOne({ formData, onInputChange, onNext }: StepOneProps) {
  return (
    <div className="booking-step">
      <h3>Step 1: Let&apos;s Get to Know You</h3>
      <p style={{ color: 'var(--text-light)', fontFamily: 'Lora, serif', marginBottom: '25px', fontSize: '16px' }}>
        We&apos;d love to learn a bit about you so Dr. Noha can provide the most meaningful support during your session.
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Are you new to our community?</label>
            <select
              name="isNewUser"
              value={formData.isNewUser ? "yes" : "no"}
              onChange={(e) => onInputChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'isNewUser',
                  value: e.target.value === "yes"
                }
              } as any)}
              className="form-control"
            >
              <option value="no">I&apos;m already part of this beautiful community</option>
              <option value="yes">I&apos;m new and excited to join</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button type="button" onClick={onNext} className="default-btn">
          Next Step
        </button>
      </div>
    </div>
  );
}
