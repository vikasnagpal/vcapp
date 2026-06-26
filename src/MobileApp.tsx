import VCApp from './components/VCApp'
import InstallBanner from './components/InstallBanner'
import { THEME_VARS } from './vc/helpers'

// Frame-less shell for real mobile use (served at /vcapp/mobile/).
// Fills the viewport height; on wide screens it caps to a phone-width column.
export default function MobileApp() {
  return (
    <div
      style={{
        ...THEME_VARS,
        height: '100dvh',
        width: '100%',
        maxWidth: 520,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        background: '#FBFBFD',
        overscrollBehavior: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InstallBanner />
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <VCApp chromeless />
      </div>
    </div>
  )
}
