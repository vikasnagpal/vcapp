import { css } from '../vc/css'
import type { Vals } from '../vc/derive'
import type { Actions } from '../vc/actions'
import { Instagram, NavBars, NavHome } from './Icons'

// "Soft chips dark" nav (the locked default navStyle).
export default function BottomNav({ vals, actions }: { vals: Vals; actions: Actions }) {
  const chip = (bg: string, color: string) =>
    css(`width:100%;max-width:66px;height:46px;border-radius:15px;display:flex;align-items:center;justify-content:center;background:${bg};color:${color};transition:all .2s;`)
  const cell = css('cursor:pointer;flex:1;display:flex;justify-content:center;')

  return (
    <div style={css('flex-shrink:0;padding:8px 16px 26px;')}>
      <div style={css('background:#2A2B33;border:1px solid rgba(255,255,255,0.07);border-radius:24px;display:flex;align-items:center;padding:8px 10px;box-shadow:0 16px 34px rgba(18,18,26,0.34);')}>
        <div onClick={actions.goHome} style={cell}>
          <div style={chip(vals.navHomeDarkBg, vals.navHomeDarkColor)}>
            <NavHome />
          </div>
        </div>
        <div onClick={actions.goSocial} style={cell}>
          <div style={chip(vals.navSocialDarkBg, vals.navSocialDarkColor)}>
            <Instagram color="currentColor" />
          </div>
        </div>
        <div onClick={actions.goLeaderboard} style={cell}>
          <div style={chip(vals.navLbDarkBg, vals.navLbDarkColor)}>
            <NavBars />
          </div>
        </div>
      </div>
    </div>
  )
}
