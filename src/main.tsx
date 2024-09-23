import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css'

if (import.meta.env.DEV && __TIMEZONE__) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).TZ = __TIMEZONE__;
  globalThis.console.log(
    `%cTimezone: %c${__TIMEZONE__}`,
    'color: #f00;',
    'color: #f00;font-weight: bold;'
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
