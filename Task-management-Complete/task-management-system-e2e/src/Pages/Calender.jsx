// src/pages/Calendar.jsx
import React from 'react';
import { Typography } from '@mui/material';
import TaskCalendar from '../components/TaskCalender';

function Calender() {
  return (
    <div>
      <Typography variant="h8" sx={{ marginBottom: 2 }}>Calendar View</Typography>
      <TaskCalendar />
    </div>
  );
}

export default Calender;