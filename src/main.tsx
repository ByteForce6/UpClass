import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UpClassDashboard from './UpClassDashboard.tsx'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpClassDashboard />
  </StrictMode>
)