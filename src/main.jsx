import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { CounterProvider } from './components/contexts/CounterContext.jsx';
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MantineProvider>
    <CounterProvider>
   <App/>
   </CounterProvider>
   </MantineProvider>
   </BrowserRouter>
  </StrictMode>,
)
