// src/pages/Home.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, removeTask } from '../store/taskslice';
import TaskFilter from '../components/TaskFilter';
import TaskList from '../components/FilteredTaskList';
import { Typography } from '@mui/material';

function Home() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleFilter = ({ searchText, dueDate, showCompleted }) => {
    let filtered = tasks;

    if (searchText) {
      filtered = filtered.filter((task) =>
        task.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (dueDate) {
      filtered = filtered.filter((task) => task.dueDate === dueDate);
    }

    if (!showCompleted) {
      filtered = filtered.filter((task) => !task.completed);
    }

    setFilteredTasks(filtered);
  };

  const handleToggleComplete = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      dispatch(updateTask({ id: taskId, completed: !task.completed }));
    }
  };

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <TaskFilter onFilter={handleFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}
export default Home;