import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/TaskSlice";
import { List, ListItem, IconButton, Typography, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <>
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Checkbox
            checked={task.completed ?? false} 
            onChange={() => dispatch(updateTask({ id: task.id, completed: !task.completed }))}/>
          <Typography sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </Typography>
          <IconButton onClick={() => dispatch(removeTask(task.id))} color="error">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default TaskList;
