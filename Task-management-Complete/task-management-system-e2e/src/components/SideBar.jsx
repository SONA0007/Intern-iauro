import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import PersonIcon from "@mui/icons-material/Person";
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import logo from "../assets/icons8-checklist-50.png";
import { Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

function Sidebar() {
  return (
    <div>
      <div style={{display:'flex', alignItems:'flex-start', gap:8, padding:20}}>
       <img src={logo} alt="Logo" style={{ width: 50, height: 50, paddingBottom:10 }} />
      <Typography variant="h6" style={{paddingBottom:10}}>Task Manager</Typography>
      </div>
      <List>
        <ListItem  component={Link} to="/">
          <ListItemIcon>
            {" "}
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem  component={Link} to="/tasks">
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem  component={Link} to="/profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem  component={Link} to="/calender">
          <ListItemIcon>
            <CalendarViewMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItem>
      </List>
      <footer>
        <List>
          <ListItem  component={Link} to="/login">
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </footer>
    </div>
  );
}

export default Sidebar;
