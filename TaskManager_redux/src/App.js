import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

const App = () => {
  return (
    <Container maxWidth="md">
      <header style={{ marginTop: 50, padding: 20, backgroundColor: "#3893F4", display: "flex", justifyContent: "center" }}>
        <img src="https://img.icons8.com/ios/452/task.png" alt="Task Manager" style={{ width: 50, height: 50, marginRight: 10 }} />
        <Typography variant="h4" align="center" gutterBottom>Task Manager</Typography>
      </header>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <TaskForm />
        <TaskList />
      </Paper>
    </Container>
  );
};

export default App;
