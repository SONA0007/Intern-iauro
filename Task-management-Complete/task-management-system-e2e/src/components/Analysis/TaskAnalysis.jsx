// src/components/TaskAnalysis.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TaskAnalysis({ tasks }) {
  
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;


  const data = {
    labels: ['Completed Tasks', 'Pending Tasks'], 
    datasets: [
      {
        label: 'Number of Tasks',
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#4caf50', '#f44336'],
        borderColor: ['#388e3c', '#d32f2f'],
        borderWidth: 1, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Task Status',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          display: false, 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Tasks', 
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        beginAtZero: true, 
        ticks: {
          stepSize: 1, 
        },
        grid: {
          color: '#e0e0e0', 
        },
      },
    },
    plugins: {
      legend: {
        position: 'top', 
      },
      title: {
        display: true,
        text: 'Task Completion Statistics', 
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        enabled: true, 
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`; 
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TaskAnalysis;