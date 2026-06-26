import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MobileApp from './MobileApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobileApp />
  </StrictMode>,
)
