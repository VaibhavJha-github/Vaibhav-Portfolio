import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { initReveal } from './utils/reveal.js'

function Boot() {
  React.useEffect(() => {
    // run once after mount & on route changes
    initReveal();
    const observer = new MutationObserver(() => initReveal());
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return <App />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Boot />
    </BrowserRouter>
  </React.StrictMode>
)
