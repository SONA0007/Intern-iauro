// src/components/TaskCalendar.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector } from 'react-redux';

function TaskCalendar() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const events = tasks.map((task) => ({
    id: task.id,
    title: task.text,
    date: task.dueDate, 
    backgroundColor: task.completed ? '#4caf50' : '#f44336',
  }));

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => {
          alert(`Task: ${info.event.title}`);
        }}
      />
    </div>
  );
}

export default TaskCalendar;