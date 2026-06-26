import type { CSSProperties } from 'react'

// Inline SVG icons, paths copied verbatim from the design. Stroke icons default
// to currentColor so a parent's `color` drives them (matches the nav usage).

interface IcoProps {
  size?: number
  sw?: number
  color?: string
  style?: CSSProperties
}

const base = (size: number) => ({ width: size, height: size, viewBox: '0 0 24 24' })
const strokeProps = (sw: number, color: string) => ({
  fill: 'none' as const,
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export function Check({ size = 15, sw = 3, color = 'currentColor', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ChevronRight({ size = 18, sw = 2.4, color = '#C7C6CF', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}

export function ChevronLeft({ size = 13, sw = 2.6, color = '#6B6B76', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  )
}

export function ChevronDown({ size = 16, sw = 2.4, color = '#8A8A95', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ChevronUp({ size = 16, sw = 2.4, color = '#8A8A95', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="m6 15 6-6 6 6" />
    </svg>
  )
}

export function Camera({ size = 17, sw = 2, color = 'currentColor', r = 3.2, style }: IcoProps & { r?: number }) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M3 8a2 2 0 0 1 2-2h1.5L8 4h8l1.5 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="12.5" r={r} />
    </svg>
  )
}

export function Instagram({ size = 22, sw = 2, color = '#fff', dotFill = false, style }: IcoProps & { dotFill?: boolean }) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      {dotFill ? (
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
      ) : (
        <circle cx="17.5" cy="6.5" r="1.1" />
      )}
    </svg>
  )
}

export function NavHome({ size = 22, sw = 2, color = 'currentColor', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  )
}

export function NavBars({ size = 22, sw = 2.2, color = 'currentColor', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M6 21V12" />
      <path d="M12 21V4" />
      <path d="M18 21v-6" />
    </svg>
  )
}

export function Star({ size = 22, sw = 2, color = 'var(--vc-accent,#FF6A1A)', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="m12 3 2.4 5.2 5.6.5-4.2 3.7 1.3 5.6L12 20.5 6.9 18.6l1.3-5.6L4 9.7l5.6-.5z" />
    </svg>
  )
}

export function Users({ size = 22, sw = 2, color = '#18181B', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 7a3 3 0 0 1 0 5.5" />
      <path d="M18.5 19a5 5 0 0 0-3-4.6" />
    </svg>
  )
}

export function House({ size = 22, sw = 2, color = '#18181B', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export function Chat({ size = 22, sw = 2, color = 'var(--vc-accent,#FF6A1A)', dots = true, style }: IcoProps & { dots?: boolean }) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
      {dots && <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />}
    </svg>
  )
}

export function Link({ size = 17, sw = 2, color = '#18181B', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  )
}

export function ContactUser({ size = 20, sw = 2, color = '#18181B', style }: IcoProps) {
  return (
    <svg {...base(size)} {...strokeProps(sw, color)} style={style}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3-5.5 7-5.5s7 1.9 7 5.5" />
    </svg>
  )
}

export function WhatsApp({ size = 15, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" style={style}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6-.1 1Z" />
    </svg>
  )
}

export function Crown({ size = 22, color = 'var(--vc-accent,#FF6A1A)', style }: { size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
      <path d="M5 16 3 5l5.5 4L12 4l3.5 5L21 5l-2 11Z" />
    </svg>
  )
}
