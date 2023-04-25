import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';

// const theme = createTheme({
//     typography: {
//         fontFamily: 'monospace, sans-serif' 
//     },
// });

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
    // <ThemeProvider theme={theme}>
        <App />
    // </ThemeProvider>
);

// During an update, there is no need to pass the container again
root.render(<App name="Saeloun testimonials" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
