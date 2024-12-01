import React, { useState, useEffect, useCallback } from 'react';
import { fetchTodos } from '../utils/api';
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Pagination,
    Box,
} from '@mui/material';

const ActivitiesTable = () => {
    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0); //  store  total items
    const itemsPerPage = 5;

    // Fetch paginated data from the API
    const fetchPaginatedTodos = useCallback((page) => {
        fetchTodos(page, itemsPerPage)
            .then((response) => {
                setActivities(response.data);
                setTotalCount(Number(response.headers['x-total-count']));
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    // Fetch data when page changes
    useEffect(() => {
        fetchPaginatedTodos(currentPage);
    }, [currentPage, fetchPaginatedTodos]);

    const handlePageChange = (_, value) => {
        setCurrentPage(value);
    };

    return (
        <Card sx={{ padding: 3, boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                User Activities
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((activity) => (
                            <TableRow key={activity.id}>
                                <TableCell>{activity.userId}</TableCell>
                                <TableCell>{activity.title}</TableCell>
                                <TableCell>
                                    <Typography color={activity.completed ? 'green' : 'red'}>
                                        {activity.completed ? 'Completed' : 'Pending'}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={Math.ceil(totalCount / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
        </Card>
    );
};

export default ActivitiesTable;
