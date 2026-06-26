import IOSDevice from './components/IOSDevice'
import VCApp from './components/VCApp'

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E9E8EE',
        padding: 20,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <IOSDevice>
        <VCApp />
      </IOSDevice>
    </div>
  )
}
