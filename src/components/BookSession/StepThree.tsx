import React from "react";
import { FormData } from "./BookingForm";

interface StepThreeProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onPrev: () => void;
  submitting?: boolean;
}

export default function StepThree({ formData, onInputChange, onPrev, submitting = false }: StepThreeProps) {
  return (
    <div className="booking-step">
      <h3>Step 3: Almost There - Let&apos;s Confirm Your Session</h3>
      <p style={{ color: 'var(--text-light)', fontFamily: 'Lora, serif', marginBottom: '25px', fontSize: '16px' }}>
        Please review your details below. Dr. Noha looks forward to connecting with you and providing the support you need.
      </p>

      <div className="booking-summary">
        <h4>Session Details</h4>
        <div className="summary-item">
          <strong>Name:</strong> {formData.name}
        </div>
        <div className="summary-item">
          <strong>Email:</strong> {formData.email}
        </div>
        <div className="summary-item">
          <strong>Phone:</strong> {formData.phone || 'Not provided'}
        </div>
        <div className="summary-item">
          <strong>Session Type:</strong> {formData.sessionType}
        </div>
        <div className="summary-item">
          <strong>Date:</strong> {formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : ''}
        </div>
        <div className="summary-item">
          <strong>Time:</strong> {formData.preferredTime}
        </div>
      </div>

      <div className="form-group">
        <label>Additional Message (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onInputChange}
          rows={4}
          className="form-control"
          placeholder="Tell Dr. Noha about any specific questions or concerns you&apos;d like to discuss..."
        />
      </div>

      <div className="booking-note">
        <p><strong>With love and care:</strong> This is a complimentary 30-minute session designed to provide you with gentle guidance and support. Dr. Noha will reach out to you within 24 hours to confirm your appointment and share the meeting details with you.</p>
      </div>

      <div className="row">
        <div className="col-6">
          <button type="button" onClick={onPrev} className="default-btn">
            Previous
          </button>
        </div>
        <div className="col-6 text-right">
          <button type="submit" className="default-btn" disabled={submitting}>
            {submitting ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </div>
    </div>
  );
}
