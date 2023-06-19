import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'uno.css' // warp css
import './index.css' // includes fabric css

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
