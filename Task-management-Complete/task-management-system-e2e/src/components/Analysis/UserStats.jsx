import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function UserStats({ tasks }) {
  const tasksByDate = tasks.reduce((acc, task) => {
    const date = dayjs(task.dueDate).format('YYYY-MM-DD');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(tasksByDate), 
    datasets: [
      {
        label: 'Tasks Created',
        data: Object.values(tasksByDate), 
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
        fill: false, 
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
          text: 'Date', 
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
        text: 'User Activity Over Time', 
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        enabled: true, 
        mode: 'index', 
        intersect: false, 
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
}
export default UserStats;