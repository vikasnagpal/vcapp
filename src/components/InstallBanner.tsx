import { useEffect, useState } from 'react'
import { css } from '../vc/css'

// Chrome/Edge fire `beforeinstallprompt` instead of auto-showing a banner; we
// capture it and surface our own Install button. iOS Safari has no such event,
// so we show the manual "Add to Home Screen" hint instead.
type BIPEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISS_KEY = 'vc-install-dismissed'

function isStandalone() {
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    window.matchMedia?.('(display-mode: fullscreen)').matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  )
}

export default function InstallBanner() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null)
  const [installed, setInstalled] = useState(false)
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const onBIP = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BIPEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setDeferred(null)
    }
    window.addEventListener('beforeinstallprompt', onBIP)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBIP)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (installed || dismissed || isStandalone()) return null

  const ua = navigator.userAgent || ''
  const isIOS = /iphone|ipad|ipod/i.test(ua)
  const canPrompt = !!deferred
  // Nothing useful to show (e.g. desktop browser without a deferred prompt).
  if (!canPrompt && !isIOS) return null

  const dismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  const install = async () => {
    if (!deferred) return
    await deferred.prompt()
    try {
      await deferred.userChoice
    } catch {
      /* ignore */
    }
    setDeferred(null)
  }

  return (
    <div style={css('display:flex;align-items:center;gap:11px;padding:10px 14px;background:#fff;border-bottom:1px solid #ECEAF1;flex-shrink:0;')}>
      <div style={css('width:34px;height:34px;border-radius:9px;background:var(--vc-accent,#FF6A1A);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:16px;flex-shrink:0;')}>Z</div>
      <div style={css('flex:1;min-width:0;')}>
        <div style={css('font-size:13px;font-weight:800;')}>Install Zostel VC</div>
        <div style={css('font-size:11px;color:#8A8A95;font-weight:600;')}>
          {isIOS ? 'Tap Share, then “Add to Home Screen”' : 'Full-screen access from your home screen'}
        </div>
      </div>
      {canPrompt && (
        <div onClick={install} style={css('cursor:pointer;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:11px;padding:8px 14px;font-size:12.5px;font-weight:800;flex-shrink:0;')}>
          Install
        </div>
      )}
      <div onClick={dismiss} style={css('cursor:pointer;width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:#9A9AA4;flex-shrink:0;')} aria-label="Dismiss">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </div>
    </div>
  )
}
