import type { CSSProperties } from 'react'

/**
 * Parse a CSS declaration string (as written in the original design's
 * `style="…"` attributes) into a React style object. This lets the ported
 * components keep the design's exact inline-style strings verbatim — including
 * `var(--vc-*)` references and custom properties — which keeps the port
 * pixel-faithful and low-risk.
 *
 * Note: none of the design's style values contain a `:` inside the value
 * (gradients use commas, times like "8:00" are text content, not styles),
 * so splitting on the first `:` per declaration is safe here.
 */
export function css(s: string): CSSProperties {
  const out: Record<string, string> = {}
  for (const decl of s.split(';')) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    const prop = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!prop || !val) continue
    // Keep CSS custom properties (--vc-accent …) as-is; camelCase the rest.
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
    out[key] = val
  }
  return out as CSSProperties
}
