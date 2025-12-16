import { useState, useEffect } from 'react';
import {
  DoctorBlogAPI,
  Service,
  WorkingHour,
  Schedule,
  Appointment,
  User
} from './api';

// Service utility class for appointment management
export class AppointmentService {
  // Get all active services
  static async getActiveServices(): Promise<Service[]> {
    return await DoctorBlogAPI.getActiveServices();
  }

  // Get services by category
  static async getServicesByCategory(category: string): Promise<Service[]> {
    return await DoctorBlogAPI.getServicesByCategory(category);
  }

  // Get doctor's schedule
  static async getDoctorSchedule(): Promise<Schedule> {
    return await DoctorBlogAPI.getSchedule();
  }

  // Get working hours for a specific day
  static async getWorkingHoursForDay(day: number): Promise<WorkingHour | null> {
    const schedule = await DoctorBlogAPI.getSchedule();
    return await DoctorBlogAPI.getWorkingHoursForDay(schedule.id, day);
  }

  // Get available dates for booking
  static async getAvailableDates(startDate?: string, endDate?: string): Promise<string[]> {
    const schedule = await DoctorBlogAPI.getSchedule();
    return await DoctorBlogAPI.getAvailableDates(schedule.id, startDate, endDate);
  }

  // Get free appointment slots for a service on a specific date
  static async getFreeAppointments(serviceId: number, date: string): Promise<string[]> {
    return await DoctorBlogAPI.getFreeAppointments(serviceId, date);
  }

  // Get available time slots with detailed information
  static async getAvailableTimeSlots(serviceId: number, date: string) {
    return await DoctorBlogAPI.getAvailableTimeSlots(serviceId, date);
  }

  // Check if a specific time slot is available
  static async checkSlotAvailability(serviceId: number, startTime: string) {
    return await DoctorBlogAPI.checkSlotAvailability(serviceId, startTime);
  }

  // Book an appointment
  static async bookAppointment(data: {
    service_id: number
    start_time: string
    client_name: string
    client_email: string
    client_phone: string
    notes?: string
  }): Promise<Appointment> {
    return await DoctorBlogAPI.createAppointment(data);
  }

  // Get user's appointments
  static async getUserAppointments(userId?: number): Promise<Appointment[]> {
    return await DoctorBlogAPI.getAppointments({ user_id: userId });
  }

  // Get upcoming appointments
  static async getUpcomingAppointments(userId?: number): Promise<Appointment[]> {
    return await DoctorBlogAPI.getUpcomingAppointments(userId);
  }

  // Cancel an appointment
  static async cancelAppointment(appointmentId: number): Promise<Appointment> {
    return await DoctorBlogAPI.cancelAppointment(appointmentId);
  }

  // Get appointment details
  static async getAppointmentDetails(appointmentId: number): Promise<Appointment> {
    return await DoctorBlogAPI.getAppointment(appointmentId);
  }
}

// React hooks for appointment management
export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getActiveServices();
        setServices(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export const useServicesByCategory = (category: string) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getServicesByCategory(category);
        setServices(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchServices();
    }
  }, [category]);

  return { services, loading, error };
};

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getDoctorSchedule();
        setSchedule(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch schedule');
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return { schedule, loading, error };
};

export const useWorkingHours = (day?: number) => {
  const [workingHours, setWorkingHours] = useState<WorkingHour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkingHours = async () => {
      try {
        setLoading(true);
        if (day !== undefined) {
          const result = await AppointmentService.getWorkingHoursForDay(day);
          setWorkingHours(result);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch working hours');
      } finally {
        setLoading(false);
      }
    };

    if (day !== undefined) {
      fetchWorkingHours();
    }
  }, [day]);

  return { workingHours, loading, error };
};

export const useAvailableDates = (startDate?: string, endDate?: string) => {
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getAvailableDates(startDate, endDate);
        setAvailableDates(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch available dates');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableDates();
  }, [startDate, endDate]);

  return { availableDates, loading, error };
};

export const useFreeAppointments = (serviceId: number, date: string) => {
  const [freeAppointments, setFreeAppointments] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFreeAppointments = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getFreeAppointments(serviceId, date);
        setFreeAppointments(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch free appointments');
      } finally {
        setLoading(false);
      }
    };

    if (serviceId && date) {
      fetchFreeAppointments();
    }
  }, [serviceId, date]);

  return { freeAppointments, loading, error };
};

export const useAvailableTimeSlots = (serviceId: number, date: string) => {
  const [timeSlots, setTimeSlots] = useState<{
    time_slots: string[]
    working_hours: WorkingHour | null
    service: Service
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getAvailableTimeSlots(serviceId, date);
        setTimeSlots(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch time slots');
      } finally {
        setLoading(false);
      }
    };

    if (serviceId && date) {
      fetchTimeSlots();
    }
  }, [serviceId, date]);

  return { timeSlots, loading, error };
};

export const useAppointments = (userId?: number) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getUserAppointments(userId);
        setAppointments(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const cancelAppointment = async (appointmentId: number) => {
    try {
      const updatedAppointment = await AppointmentService.cancelAppointment(appointmentId);
      setAppointments(prev =>
        prev.map(apt => apt.id === appointmentId ? updatedAppointment : apt)
      );
      return updatedAppointment;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to cancel appointment');
    }
  };

  return { appointments, loading, error, cancelAppointment };
};

export const useUpcomingAppointments = (userId?: number) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpcomingAppointments = async () => {
      try {
        setLoading(true);
        const result = await AppointmentService.getUpcomingAppointments(userId);
        setAppointments(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch upcoming appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingAppointments();
  }, [userId]);

  return { appointments, loading, error };
};

// Utility functions for date and time handling
export const formatTimeSlot = (timeSlot: string): string => {
  const date = new Date(timeSlot);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getDayOfWeek = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getDay();
};

export const isDateAvailable = (dateString: string, availableDates: string[]): boolean => {
  return availableDates.includes(dateString);
};

export const getNextAvailableDate = (availableDates: string[]): string | null => {
  const today = new Date().toISOString().split('T')[0];
  const futureDates = availableDates.filter(date => date >= today);
  return futureDates.length > 0 ? futureDates[0] : null;
};

// Example usage component
export const AppointmentBookingExample = () => {
  const { services, loading: servicesLoading } = useServices();
  const { availableDates, loading: datesLoading } = useAvailableDates();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  const { timeSlots, loading: slotsLoading } = useAvailableTimeSlots(
    selectedService?.id || 0,
    selectedDate
  );

  const handleBookAppointment = async () => {
    if (!selectedService || !selectedTimeSlot) return;

    try {
      const appointment = await AppointmentService.bookAppointment({
        service_id: selectedService.id,
        start_time: selectedTimeSlot,
        client_name: 'John Doe',
        client_email: 'john@example.com',
        client_phone: '+1234567890',
        notes: 'Initial consultation'
      });

      console.log('Appointment booked:', appointment);
    } catch (error) {
      console.error('Failed to book appointment:', error);
    }
  };

  if (servicesLoading || datesLoading) {
    return (<div>&quot;Loading...&quot;</div> );
  }

  return (
    <div>
      <h2>Book an Appointment</h2>

      {/* Service Selection */}
      <div>
        <label>Select Service:</label>
        <select
          value={selectedService?.id || ''}
          onChange={(e) => {
            const service = services.find(s => s.id === parseInt(e.target.value));
            setSelectedService(service || null);
          }}
        >
          <option value="">Choose a service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.display_name} - {service.duration_text}
            </option>
          ))}
        </select>
      </div>

      {/* Date Selection */}
      <div>
        <label>Select Date:</label>
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          disabled={!selectedService}
        >
          <option value="">Choose a date</option>
          {availableDates.map(date => (
            <option key={date} value={date}>
              {formatDate(date)}
            </option>
          ))}
        </select>
      </div>

      {/* Time Slot Selection */}
      {timeSlots && (
        <div>
          <label>Select Time:</label>
          <select
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
            disabled={slotsLoading}
          >
            <option value="">Choose a time</option>
            {timeSlots.time_slots.map(slot => (
              <option key={slot} value={slot}>
                {formatTimeSlot(slot)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Book Button */}
      <button
        onClick={handleBookAppointment}
        disabled={!selectedService || !selectedDate || !selectedTimeSlot}
      >
        Book Appointment
      </button>
    </div>
  );
};
