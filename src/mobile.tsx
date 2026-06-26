import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MobileApp from './MobileApp.tsx'

// When launched from the home screen (installed PWA) the manifest's
// display:"fullscreen" already gives a chrome-less full-screen app.
// In a regular browser tab, browsers won't auto-fullscreen on load (it needs a
// user gesture) — so request real fullscreen on the very first tap.
const displayModeFullscreen =
  window.matchMedia?.('(display-mode: fullscreen)').matches ||
  window.matchMedia?.('(display-mode: standalone)').matches ||
  // iOS standalone flag
  (navigator as unknown as { standalone?: boolean }).standalone === true

if (!displayModeFullscreen && document.documentElement.requestFullscreen) {
  const enterFullscreen = () => {
    document.documentElement.requestFullscreen?.({ navigationUI: 'hide' }).catch(() => {})
  }
  window.addEventListener('pointerdown', enterFullscreen, { once: true })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobileApp />
  </StrictMode>,
)
