// src/components/TaskList.jsx
import React from 'react';
import { List, ListItem, ListItemText, Checkbox, Button } from '@mui/material';

function FilteredTaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <List style={{ width: '90%', marginTop: '50px', marginLeft: '20px' }}>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <ListItemText
            primary={task.text}
            secondary={`Due: ${task.dueDate}`}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
          <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
   
  );
}

export default FilteredTaskList;