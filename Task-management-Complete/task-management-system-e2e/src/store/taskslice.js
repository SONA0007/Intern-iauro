// src/store/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
        state.tasks.push({
          id: Date.now(),
          text: action.payload.text,
          dueDate: action.payload.dueDate, 
          completed: false,
        });
      },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed; // Update the completed status
      }
    },
  },
});

export const { addTask, removeTask, selectTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;