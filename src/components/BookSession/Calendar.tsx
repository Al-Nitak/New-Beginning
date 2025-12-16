import React, { useState } from "react";

interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  availableDates: string[];
}

export default function Calendar({ selectedDate, onDateSelect, availableDates }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = new Date();
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isDateAvailable = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return availableDates.includes(dateString);
  };

  const isDateSelected = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return dateString === selectedDate;
  };

  const isDateToday = (date: Date) => {
    const todayString = today.toISOString().split('T')[0];
    const dateString = date.toISOString().split('T')[0];
    return dateString === todayString;
  };

  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      const dateString = date.toISOString().split('T')[0];
      onDateSelect(dateString);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  const renderCalendarDays = () => {
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isAvailable = isDateAvailable(date);
      const isSelected = isDateSelected(date);
      const isToday = isDateToday(date);

      days.push(
        <div
          key={day}
          className={`calendar-day ${isAvailable ? 'available' : 'unavailable'} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          type="button"
          className="calendar-nav-btn"
          onClick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <h4 className="calendar-month-year">
          {monthNames[month]} {year}
        </h4>

        <button
          type="button"
          className="calendar-nav-btn"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="calendar-weekdays">
        {dayNames.map(day => (
          <div key={day} className="calendar-weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {renderCalendarDays()}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-dot available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot selected"></div>
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot today"></div>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
