// src/pages/Profile.jsx
import React from 'react';
import { Typography, Grid2} from '@mui/material';
import { useSelector } from 'react-redux';
import TaskAnalysis from '../components/Analysis/TaskAnalysis';
import UserStats from '../components/Analysis/UserStats.jsx';
import TaskHistory from '../components/Analysis/TaskHistory';
import UpcomingTasks from '../components/Analysis/UpcomingTask';

function Profile() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Profile</Typography>
      <Grid2 container spacing={2} columns={16}>
        <Grid2 item size={8} borderBottom={1} borderColor="divider" paddingRight={8} paddingBottom={4} margin={2}>
          <Typography variant="h6">Task Analysis</Typography>
          <TaskAnalysis tasks={tasks} />
        </Grid2>
        <Grid2 item size={8} borderBottom={1} borderColor="divider" paddingRight={8} paddingBottom={4} margin={2}>
          <Typography variant="h6">User Statistics</Typography>
          <UserStats tasks={tasks} />
        </Grid2>
      </Grid2>

      {/* Second Grid Container */}
      <Grid2 container spacing={2} columns={16} sx={{ marginTop: 3 }}>
      <Grid2 item size={8} borderBottom={1} borderColor="divider" paddingRight={8} paddingBottom={4} margin={2}>
      <Typography variant="h6">Task History</Typography>
          <TaskHistory tasks={tasks} />
        </Grid2>
        <Grid2 item size={8} borderBottom={1} borderColor="divider" paddingRight={8} paddingBottom={4} margin={2}>
          <Typography variant="h6">Upcoming Tasks</Typography>
          <UpcomingTasks tasks={tasks} />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Profile;