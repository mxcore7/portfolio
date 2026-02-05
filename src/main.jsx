import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading resources...</div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
