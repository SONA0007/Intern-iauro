// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import io from 'socket.io-client';

const socket = io('http://localhost:5173');

function Notification() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('taskUpdate', (data) => {
      setMessage(data.message);
      setOpen(true);
    });
  }, []);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
      <Alert severity="info">{message}</Alert>
    </Snackbar>
  );
}

export default Notification;