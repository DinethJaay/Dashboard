import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';
import { Card, Typography, Badge, Grid, Box, Chip, CircularProgress } from '@mui/material';

const UserStatistics = ({ showLocationOnly = false }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

   //spinner
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    const totalUsers = users.length;
    const activeUsers = users.filter(() => Math.random() > 0.5).length;
    const usersByLocation = users.reduce((acc, user) => {
        const city = user.address.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    // Render locations if show locations true
    if (showLocationOnly) {
        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {Object.entries(usersByLocation).map(([city, count]) => (
                    <Chip
                        key={city}
                        label={`${city}: ${count} users`}
                        sx={{
                            backgroundColor: '#3f51b5',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}
                    />
                ))}
            </Box>
        );
    }

    return (
        <Grid container spacing={4}>
            {/* Total Users */}
            <Grid item xs={12} sm={6}>
                <Card sx={{ padding: 3, boxShadow: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Total Users
                    </Typography>
                    <Badge
                        color="primary"
                        badgeContent={totalUsers}
                        sx={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginTop: 1,
                            backgroundColor: '#3f51b5',
                            color: '#fff',
                        }}
                    />
                </Card>
            </Grid>

            {/* Active Users */}
            <Grid item xs={12} sm={6}>
                <Card sx={{ padding: 3, boxShadow: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Active Users
                    </Typography>
                    <Badge
                        color="success"
                        badgeContent={activeUsers}
                        sx={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginTop: 1,
                            backgroundColor: '#4caf50',
                            color: '#fff',
                        }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserStatistics;
