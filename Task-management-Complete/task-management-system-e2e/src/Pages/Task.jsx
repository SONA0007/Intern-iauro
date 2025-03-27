// src/pages/Tasks.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTask } from '../store/taskslice';
import { Button, Typography, List, ListItem, ListItemText, TextField, Checkbox } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Tasks() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = React.useState('');
  const [dueDate, setDueDate] = React.useState(null);

  const handleAddTask = () => {
    if (newTask.trim() && dueDate) {
      dispatch(addTask({ text: newTask, dueDate: dueDate.toISOString().split('T')[0] }));
      setNewTask('');
      setDueDate(dayjs());
    }
  };

  const handleToggleComplete = (task) => {
    dispatch(updateTask({ id: task.id, completed: !task.completed }));
  };
  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: 2 , paddingBottom:2 , paddingLeft:2, paddingTop:2}}>Tasks</Typography>
      <div className="task-input">     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextField
          label="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <DatePicker
          label="Due Date"
          value={dueDate}
          onChange={(newValue) => setDueDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth sx={{ marginBottom: 2 }} />}
        />
      </LocalizationProvider>
        <Button variant="contained" onClick={handleAddTask} style={{paddingLeft:10 }}>Add Task</Button>
      </div>
      <List className="task-list">
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            <ListItemText
              primary={task.text}
              className="task-text"
            />
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(removeTask(task.id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Tasks;