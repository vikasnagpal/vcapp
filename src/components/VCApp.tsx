import { useEffect, useMemo, useReducer } from 'react'
import { css } from '../vc/css'
import { THEME_VARS } from '../vc/helpers'
import { initialState, reducer } from '../vc/state'
import { buildActions } from '../vc/actions'
import { deriveVals } from '../vc/derive'
import HomeScreen from './screens/HomeScreen'
import SocialScreen from './screens/SocialScreen'
import LeaderboardScreen from './screens/LeaderboardScreen'
import ProfileScreen from './screens/ProfileScreen'
import BottomNav from './BottomNav'
import BottomSheet from './sheets/BottomSheet'
import Celebration from './overlays/Celebration'
import Toast from './overlays/Toast'

const ROOT =
  "position:relative;height:100%;display:flex;flex-direction:column;overflow:hidden;background:#FBFBFD;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#18181B;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-variant-numeric:tabular-nums;"

export default function VCApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMemo(() => buildActions(dispatch), [])
  const vals = deriveVals(state, actions)

  // Auto-dismiss transient overlays (mirrors the design's _toast / _celebrate timers).
  useEffect(() => {
    if (!state.toast) return
    const t = setTimeout(() => dispatch({ type: 'clearToast' }), 2400)
    return () => clearTimeout(t)
  }, [state.toastSeq, state.toast])

  useEffect(() => {
    if (!state.celebrate) return
    const t = setTimeout(() => dispatch({ type: 'clearCelebrate' }), 1700)
    return () => clearTimeout(t)
  }, [state.celebrateSeq, state.celebrate])

  return (
    <div style={{ ...css(ROOT), ...THEME_VARS }}>
      <div className="vcScroll" style={css('flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;')}>
        <div style={css('padding:80px 18px 16px;')}>
          {vals.tabHome && <HomeScreen vals={vals} actions={actions} />}
          {vals.tabSocial && <SocialScreen vals={vals} actions={actions} />}
          {vals.tabLeaderboard && <LeaderboardScreen vals={vals} actions={actions} />}
          {vals.tabProfile && <ProfileScreen vals={vals} actions={actions} />}
        </div>
      </div>

      {vals.showNav && <BottomNav vals={vals} actions={actions} />}
      {vals.celebrateShow && <Celebration xp={vals.celebrateXp ?? 0} />}
      {vals.toastShow && <Toast text={vals.toast ?? ''} />}
      {vals.sheetOpen && <BottomSheet vals={vals} actions={actions} />}
    </div>
  )
}
