import VCApp from './components/VCApp'

// Frame-less shell for real mobile use (served at /vcapp/mobile/).
// Fills the viewport height; on wide screens it caps to a phone-width column.
export default function MobileApp() {
  return (
    <div
      style={{
        height: '100dvh',
        width: '100%',
        maxWidth: 520,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        background: '#FBFBFD',
        overscrollBehavior: 'none',
      }}
    >
      <VCApp />
    </div>
  )
}
