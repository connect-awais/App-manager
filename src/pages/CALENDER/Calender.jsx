// src/components/Calendar.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calender.css';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Appointment Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        nowIndicator={true}
        selectable={true}
        editable={true}
        dayMaxEvents={true}
        height="auto"
      />
    </div>
  );
};

export default Calendar;
