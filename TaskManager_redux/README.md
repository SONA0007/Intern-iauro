# Redux Toolkit Task Manager
![image](https://github.com/user-attachments/assets/fcac1fdf-21cb-4d7b-a50f-f9ced83492ca)

## 🚀 Overview
This project is a **Task Manager** built using **React & Redux Toolkit**. It implements essential Redux concepts, including **slice, actions, reducers, store, and dispatch**, while integrating **Material UI** for UI components.

## 📚 Concepts Learned
### **1. Key Redux Toolkit Concepts:**
- **Slice**: Defines state and reducers in one place.
- **Actions & Reducers**: Modify state via dispatched actions.
- **Store**: Centralized state management.
- **Dispatch**: Triggers state updates.
- **useSelector & useDispatch**: Access and modify the Redux store in React components.

### **2. React Hooks Used:**
- `useSelector()` → Selects data from the Redux store.
- `useDispatch()` → Dispatches actions to update the state.

### **3. Material UI Integration:**
- Used **Checkbox, List, Typography, and IconButton** for UI elements.

---
## 🛠️ Challenges Faced & Fixes

### **1. "Cannot read properties of undefined (reading 'map')"**
**Error:** Redux state was `undefined`, causing `tasks.map()` to break.
**Fix:**
- Ensured Redux initial state was correctly structured:
  ```js
  const initialState = { tasks: [] };
  ```
- Used **optional chaining** and a fallback value in `useSelector()`:
  ```js
  const tasks = useSelector((state) => state.tasks?.tasks || []);
  ```

---
### **2. "MUI: A component is changing the uncontrolled checked state..."**
**Error:** The Checkbox component switched from uncontrolled to controlled.
**Fix:**
- Ensured `task.completed` always had a default value:
  ```js
  <Checkbox checked={task.completed ?? false} />
  ```
- Modified Redux reducer to ensure every task includes `completed`:
  ```js
  state.tasks.push({ ...action.payload, completed: action.payload.completed ?? false });
  ```

---
### **3. Module Not Found Errors (taskSlice & store)**
**Error:** Import paths were incorrect or Redux files were missing.
**Fix:**
- Ensured correct relative import paths:
  ```js
  import { removeTask, updateTask } from "../redux/taskSlice";
  ```
- Confirmed the Redux `store.js` was correctly configured:
  ```js
  import { configureStore } from "@reduxjs/toolkit";
  import taskReducer from "./taskSlice";
  
  const store = configureStore({ reducer: { tasks: taskReducer } });
  export default store;
  ```

---
## 📂 Project Structure
```
redux-work/
│-- src/
│   │-- component/
│   │   │-- TaskForm.jsx
│   │   │-- TaskList.jsx
│   │-- redux/
│   │   │-- taskSlice.js
│   │   │-- store.js
│   │-- index.js
│-- package.json
│-- README.md
```

---
## 📌 Key Takeaways
- Always **define an initial state** properly to prevent `undefined` errors.
- **Use optional chaining** (`?.`) and fallback values (`|| []`) to prevent runtime crashes.
- **Ensure controlled components** in Material UI always have default values.
- **Verify import paths** to avoid `Module Not Found` errors.

---
## ✅ Next Steps
- Implement **local storage** persistence for tasks.
- Add **filtering options** (e.g., completed, pending tasks).
- Improve **UI/UX** using Material UI components.
- Convert project to **TypeScript** for better type safety.

---
