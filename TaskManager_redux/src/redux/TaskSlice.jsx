import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [] 
  };

const taskSlice = createSlice({ 
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, completed: action.payload.completed ?? false }); // ✅ Ensures completed is always set
          },
          removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
          },
        updateTask(state, action) {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.completed = action.payload.completed;
                }
            }
        },  
    });
export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;