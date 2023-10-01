import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const appElement = document.getElementById('root')
const root = ReactDOM.createRoot(appElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
