// src/api/socket.js
import io from 'socket.io-client';
import { store } from '../store/store';
import { updateTask } from '../store/taskslice';

const socket = io('http://localhost:5173');

socket.on('taskUpdated', (task) => {
  store.dispatch(updateTask(task));
});