import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TaskSlice";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    dispatch(addTask({ id: Date.now(), title: task }));
    setTask("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" variant="contained">Add Task</Button>
    </Box>
  );
};

export default TaskForm;
