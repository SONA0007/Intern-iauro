// src/components/TaskHistory.jsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function TaskHistory({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <List>
      {completedTasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemText
            primary={task.text}
            secondary={`Completed on: ${task.dueDate}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskHistory;