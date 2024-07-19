import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import customTheme from './Theme/CustomTheme.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App /> 
    </ThemeProvider>
  </React.StrictMode>
)
