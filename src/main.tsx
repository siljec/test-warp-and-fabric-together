import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // includes fabric css
import 'uno.css' // warp css

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
