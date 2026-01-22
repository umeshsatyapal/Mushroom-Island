import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// This connects your "App" to the "root" div in your HTML
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
