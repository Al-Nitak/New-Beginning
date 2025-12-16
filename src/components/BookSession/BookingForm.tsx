"use client";

import React, { useState } from "react";
import ProgressSteps from "./ProgressSteps";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { AppointmentService } from "@/services/appointmentService";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  serviceId?: number;
  preferredDate: string;
  preferredTime: string;
  startTime?: string; // ISO datetime string
  message: string;
  isNewUser: boolean;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    serviceId: undefined,
    preferredDate: "",
    preferredTime: "",
    startTime: undefined,
    message: "",
    isNewUser: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.serviceId || !formData.startTime) {
      setSubmitError("Please select a service, date, and time.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await AppointmentService.bookAppointment({
        service_id: formData.serviceId,
        start_time: formData.startTime!,
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        notes: formData.message || undefined,
      });

      setSubmitSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          sessionType: "",
          serviceId: undefined,
          preferredDate: "",
          preferredTime: "",
          startTime: undefined,
          message: "",
          isNewUser: false
        });
        setCurrentStep(1);
      }, 3000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to book appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="col-lg-8">
      <div className="section-title text-center">
        <h2>Book Your Free One-on-One Session</h2>
        <p>Take a gentle step forward in your journey. Dr. Noha is here to provide compassionate guidance, whether you&apos;re navigating health changes, deepening your faith, or exploring new learning paths.</p>
      </div>

      <ProgressSteps currentStep={currentStep} />

      {submitSuccess && (
        <div className="alert alert-success" role="alert" style={{ marginBottom: '20px' }}>
          Your session has been booked successfully! Dr. Noha will contact you soon to confirm the details.
        </div>
      )}

      {submitError && (
        <div className="alert alert-danger" role="alert" style={{ marginBottom: '20px' }}>
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        {currentStep === 1 && (
          <StepOne
            formData={formData}
            onInputChange={handleInputChange}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            onInputChange={handleInputChange}
            onNext={handleNext}
            onPrev={handlePrev}
            setFormData={setFormData}
          />
        )}

        {currentStep === 3 && (
          <StepThree
            formData={formData}
            onInputChange={handleInputChange}
            onPrev={handlePrev}
            submitting={submitting}
          />
        )}
      </form>
    </div>
  );
}
