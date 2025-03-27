// src/components/TaskFilter.jsx
import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function TaskFilter({ onFilter }) {
  const [searchText, setSearchText] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleFilter = () => {
    onFilter({
      searchText,
      dueDate: dueDate ? dueDate.format('YYYY-MM-DD') : null,
      showCompleted,
    });
  };

  return (
    <div className="filter-content">
      <TextField
        label="Search Tasks"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        fullWidth
        className="filter-input"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Filter by Due Date"
          value={dueDate}
          onChange={(newValue) => setDueDate(newValue)}
          renderInput={(params) => (
            <TextField {...params} fullWidth className="filter-input" />
          )}
          sx={{ width: '300px' }}
        />
      </LocalizationProvider>
      <FormControlLabel
        control={
          <Checkbox
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            className="filter-checkbox"
          />
        }
        label="Show Completed Tasks"
        className="filter-label"
      />
      <Button variant="contained" onClick={handleFilter} className="filter-button">
        Apply Filters
      </Button>
    </div>
  );
}

export default TaskFilter;