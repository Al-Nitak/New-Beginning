import React, { useEffect, useState } from "react";
import { FormData } from "./BookingForm";
import Calendar from "./Calendar";
import { useServices, useAvailableTimeSlots } from "@/services/appointmentService";
import { Service } from "@/services/api";

interface StepTwoProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
  onPrev: () => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function StepTwo({ formData, onInputChange, onNext, onPrev, setFormData }: StepTwoProps) {
  const { services, loading: servicesLoading } = useServices();
  const { timeSlots, loading: slotsLoading } = useAvailableTimeSlots(
    formData.serviceId || 0,
    formData.preferredDate
  );

  const [availableDates, setAvailableDates] = useState<string[]>([]);

  // Map session types to service IDs (you may need to adjust this based on your actual service structure)
  const getServiceIdFromSessionType = (sessionType: string): number | undefined => {
    const service = services.find((s: Service) => {
      const category = s.category?.toLowerCase() || "";
      if (sessionType.includes("menopause") && category.includes("menopause")) return true;
      if (sessionType.includes("quran") && category.includes("quran")) return true;
      if (sessionType.includes("arabic") && category.includes("arabic")) return true;
      return false;
    });
    return service?.id;
  };

  useEffect(() => {
    if (formData.sessionType && services.length > 0) {
      const serviceId = getServiceIdFromSessionType(formData.sessionType);
      if (serviceId) {
        setFormData(prev => ({ ...prev, serviceId }));
      }
    }
  }, [formData.sessionType, services, setFormData, getServiceIdFromSessionType]);

  // Generate available dates (next 30 days as example - you can fetch from API)
  useEffect(() => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Only include weekdays (Monday to Friday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    setAvailableDates(dates);
  }, []);

  const handleDateSelect = (date: string) => {
    const event = {
      target: {
        name: 'preferredDate',
        value: date
      }
    } as React.ChangeEvent<HTMLSelectElement>;
    onInputChange(event);
  };

  const handleTimeSelect = (timeSlot: string) => {
    // Convert time slot to ISO datetime string
    if (formData.preferredDate && timeSlot) {
      const [time, period] = timeSlot.split(' ');
      const [hours, minutes] = time.split(':');
      let hour24 = parseInt(hours);
      if (period === 'PM' && hour24 !== 12) hour24 += 12;
      if (period === 'AM' && hour24 === 12) hour24 = 0;

      const dateTime = new Date(`${formData.preferredDate}T${hour24.toString().padStart(2, '0')}:${minutes}:00`);
      const isoString = dateTime.toISOString();

      setFormData(prev => ({
        ...prev,
        preferredTime: timeSlot,
        startTime: isoString
      }));
    } else {
      const event = {
        target: {
          name: 'preferredTime',
          value: timeSlot
        }
      } as React.ChangeEvent<HTMLSelectElement>;
      onInputChange(event);
    }
  };

  return (
    <div className="booking-step">
      <h3>Step 2: Choose Your Session Details</h3>
      <p style={{ color: 'var(--text-light)', fontFamily: 'Lora, serif', marginBottom: '25px', fontSize: '16px' }}>
        Select the type of support that resonates with you, and choose a time that feels comfortable for your schedule.
      </p>

      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Session Type *</label>
            <select
              name="sessionType"
              value={formData.sessionType}
              onChange={onInputChange}
              className="form-control"
              required
            >
              <option value="">Choose the support that speaks to you</option>
              <option value="menopause-support">Gentle Menopause Support & Guidance</option>
              <option value="quran-guidance">Quran Learning & Spiritual Growth</option>
              <option value="arabic-learning">Arabic Language Learning Support</option>
              <option value="general-health">Holistic Health & Wellness Consultation</option>
              <option value="spiritual-guidance">Spiritual Journey & Faith Guidance</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Preferred Time *</label>
            {slotsLoading ? (
              <p>Loading available times...</p>
            ) : timeSlots && timeSlots.time_slots && timeSlots.time_slots.length > 0 ? (
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => handleTimeSelect(e.target.value)}
                className="form-control"
                required
                disabled={!formData.preferredDate || !formData.serviceId}
              >
                <option value="">Select a time</option>
                {timeSlots.time_slots.map((slot: string) => {
                  const date = new Date(slot);
                  const timeString = date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  });
                  return (
                    <option key={slot} value={timeString}>
                      {timeString}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => handleTimeSelect(e.target.value)}
                className="form-control"
                required
                disabled={!formData.preferredDate || !formData.serviceId}
              >
                <option value="">Select a date first</option>
              </select>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label>Choose Your Preferred Date *</label>
            <Calendar
              selectedDate={formData.preferredDate}
              onDateSelect={handleDateSelect}
              availableDates={availableDates}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Timezone</label>
            <select className="form-control" defaultValue="UTC+0">
              <option value="UTC-12">UTC-12 (Baker Island)</option>
              <option value="UTC-8">UTC-8 (Pacific Time)</option>
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC+0">UTC+0 (GMT)</option>
              <option value="UTC+1">UTC+1 (Central European)</option>
              <option value="UTC+3">UTC+3 (Moscow Time)</option>
              <option value="UTC+5">UTC+5 (Pakistan)</option>
              <option value="UTC+8">UTC+8 (Malaysia)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <button type="button" onClick={onPrev} className="default-btn">
            Previous
          </button>
        </div>
        <div className="col-6 text-right">
          <button type="button" onClick={onNext} className="default-btn">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
