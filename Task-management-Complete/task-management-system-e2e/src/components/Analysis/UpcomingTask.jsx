import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import dayjs from 'dayjs';

function UpcomingTasks({ tasks }) {
  const upcomingTasks = tasks
    .filter((task) => !task.completed && dayjs(task.dueDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));

  return (
    <List>
      {upcomingTasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemText
            primary={task.text}

            secondary={`Due on: ${task.dueDate}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default UpcomingTasks;