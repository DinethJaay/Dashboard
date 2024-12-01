import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const DataTrendsChart = () => {
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'New Users',
                data: [10, 20, 30, 40, 50],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const barData = {
        labels: ['Razor', 'Roy', 'Brian', 'Max'],
        datasets: [
            {
                label: 'Activity Counts',
                data: [5, 10, 15, 20],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
            },
        ],
    };

    return (
        <Card sx={{ padding: 3, boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>Data Trends</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" gutterBottom>New User Registrations</Typography>
                    <Line data={lineData} height={250} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" gutterBottom>User Activity Counts</Typography>
                    <Bar data={barData} height={250} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default DataTrendsChart;
