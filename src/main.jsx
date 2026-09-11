import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { CounterProvider } from './components/contexts/CounterContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CounterProvider>
   <App/>
   </CounterProvider>
   </BrowserRouter>
  </StrictMode>,
)
