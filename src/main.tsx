import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './themes/index.ts'
import App from './App.tsx'
import { theme } from './site.ts'

// Turn on the design picked in src/site.ts.
document.documentElement.dataset.theme = theme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
