import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Task from './Pages/Task.jsx';
import Profile from './Pages/Profile.jsx';
import SideBar from './components/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import './App.css';
import Calender from './Pages/Calender.jsx';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Suspense } from 'react';


const RemoteLogin = React.lazy(() => import('remote-login/Login'));

function App() {

  const [darkmode, setDarkMode] = React.useState(false);
  const theme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <div className="sidebar">
            <SideBar />
            <Button onClick={() => setDarkMode(!darkmode)}><DarkModeIcon /></Button>
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={
                <Suspense fallback={<div>Loading...</div>}> <RemoteLogin/></Suspense>} />
              <Route path="/tasks" element={<Task />} />
              <Route path="/profile" element={<Profile />} />console.log('App component rendered');
console.log('Dark mode:', darkmode);
console.log('Theme:', theme);
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </div>
        </div>
        </Router>
      </ThemeProvider>
  );
}
export default App;