import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LiquidChrome from '../ribbon.jsx';
<div className="p-4 border shadow rounded bg-blue-100 hover:shadow-md transition">


<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  </div>
  <LiquidChrome
    baseColor={[0.1, 0.1, 0.1]}
    speed={1}
    amplitude={0.6}
    interactive={true}
  />
</div>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

