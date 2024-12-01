import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com';

// Fetch all users
export const fetchUsers = () => axios.get(`${API_BASE}/users`);

// Fetch todos with pagination
export const fetchTodos = (page = 1, limit = 5) =>
    axios.get(`${API_BASE}/todos?_page=${page}&_limit=${limit}`);
