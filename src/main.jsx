import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { VehicleProvider } from './contexts/VehicleContext.jsx'
import {ThemeProvider} from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <VehicleProvider>
        <App />
      </VehicleProvider>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
