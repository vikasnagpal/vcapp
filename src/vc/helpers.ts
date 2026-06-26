// Pure helpers ported from the design's Component class (renderVals + utilities).

export type WxType = 'sun' | 'partly' | 'cloud' | 'rain'

export const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const MS_DAY = 864e5

/** Today at local midnight. */
export function today(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

/** Indian-grouped number formatting (e.g. 8420 → "8,420"). */
export function fmt(n: number): string {
  return n.toLocaleString('en-IN')
}

export function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

/** Deterministic weather per calendar date (matches the design). */
export function weather(d: Date): WxType {
  const k = (d.getDate() * 3 + d.getMonth()) % 4
  return (['sun', 'partly', 'cloud', 'rain'] as const)[k]
}

export function wxData(t: WxType): { temp: string; label: string } {
  return {
    sun: { temp: '29°', label: 'Sunny' },
    partly: { temp: '26°', label: 'Partly cloudy' },
    cloud: { temp: '23°', label: 'Cloudy' },
    rain: { temp: '19°', label: 'Light rain' },
  }[t]
}

/**
 * Locked Zostel default theme — the CSS variables the design's `_theme()`
 * produced for accent="Zostel Orange", heroSky="Golden Hour", cardStyle="Soft".
 * Applied once on the app root; every inline style references these vars.
 */
export const THEME_VARS: Record<string, string> = {
  isolation: 'isolate',
  '--vc-accent': '#FF6A1A',
  '--vc-accent2': '#FF8A3D',
  '--vc-accent-soft': '#FFF1E9',
  '--vc-accent-ink': '#E1560F',
  '--vc-accent-tint': 'rgba(255,106,26,0.24)',
  '--vc-hero-bg': 'linear-gradient(140deg,#FFB24C,#FF6F61 52%,#F0457E)',
  '--vc-hero-shadow': 'rgba(240,95,100,0.34)',
  '--vc-card-radius': '22px',
}
