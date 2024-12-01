import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, Switch, FormControlLabel, CircularProgress } from '@mui/material';
import UserStatistics from './components/UserStatistics';
import DataTrendsChart from './components/DataTrendsChart';
import ActivitiesTable from './components/ActivitiesTable';
import { Dashboard } from '@mui/icons-material';

const App = ({ toggleTheme, mode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Dashboard <Dashboard fontSize="large" />
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={mode === 'dark'}
                            onChange={toggleTheme}
                            color="primary"
                        />
                    }
                    label={mode === 'light' ? 'Light Mode' : 'Dark Mode'}
                />
            </Box>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <UserStatistics />

                    {/* Users by Location */}
                    <Grid container spacing={4} sx={{ marginTop: 4 }}>
                        <Grid item xs={12}>
                            <Card sx={{ padding: 3, boxShadow: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
                                    Users by Location
                                </Typography>
                                <UserStatistics showLocationOnly />
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Data Trends Charts */}
                    <Grid container spacing={4} sx={{ marginTop: 4 }}>
                        <Grid item xs={12}>
                            <DataTrendsChart />
                        </Grid>
                    </Grid>

                    {/* Activities Table */}
                    <Grid container spacing={4} sx={{ marginTop: 4 }}>
                        <Grid item xs={12}>
                            <ActivitiesTable />
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default App;
