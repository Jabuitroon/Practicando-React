import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    {/* Este es el punto de entrada, desde donde se contruye nuestra aplicación */}
    <App />
  </StrictMode>
)
