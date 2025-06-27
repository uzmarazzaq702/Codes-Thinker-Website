import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Whatsap from "./pages/Whatsap.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Whatsap/>
    </div>
    <App />
  </StrictMode>,

)

