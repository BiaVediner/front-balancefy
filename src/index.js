import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import App from './App';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';


ReactDOM.render (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LocalizationProvider dateAdapter={DateAdapter}>
      <App />
    </LocalizationProvider>
  </ThemeProvider>,
  document.getElementById('root')
);