import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import App from './App';

const Root = () => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode, //('light' or 'dark')
                },
            }),
        [mode]
    );

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Pass `toggleTheme` and `mode` to App */}
            <App toggleTheme={toggleTheme} mode={mode} />
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
