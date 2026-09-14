import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/tasa-orbiter/400.css'
import '@fontsource/tasa-orbiter/500.css'
import '@fontsource/tasa-orbiter/600.css'
import '@fontsource/tasa-orbiter/700.css'
import '@fontsource/tasa-orbiter/800.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
