import { DOW, today } from './helpers'
import type { CalView, LbMode, Sheet, VCState } from './types'

export const initialState: VCState = {
  tab: 'home',
  selMs: today().getTime(),
  actStatus: 'todo',
  introStatus: 'todo',
  tourChoice: null,
  sheet: null,
  sheetCaptured: false,
  npsScore: null,
  npsReason: '',
  npsDone: false,
  collabInput: '',
  posts: [{ day: 'Mon', label: 'Sunset point reel' }],
  collabLinks: [],
  lbMode: 'overall',
  calView: 'week',
  celebrate: null,
  celebrateSeq: 0,
  toast: null,
  toastSeq: 0,
  wxNonce: 0,
}

export type Action =
  | { type: 'setTab'; tab: VCState['tab'] }
  | { type: 'selectDate'; ms: number }
  | { type: 'selectDateWeek'; ms: number }
  | { type: 'toggleCal' }
  | { type: 'setCalView'; view: CalView }
  | { type: 'prevPeriod' }
  | { type: 'nextPeriod' }
  | { type: 'openSheet'; sheet: Exclude<Sheet, null> }
  | { type: 'closeSheet' }
  | { type: 'capture' }
  | { type: 'confirmPhoto' }
  | { type: 'chooseTour'; choice: string }
  | { type: 'logPost' }
  | { type: 'addCollab' }
  | { type: 'setCollabInput'; value: string }
  | { type: 'setLbMode'; mode: LbMode }
  | { type: 'npsSetScore'; score: number }
  | { type: 'npsToggleTag'; tag: string }
  | { type: 'npsSetReason'; value: string }
  | { type: 'submitNps' }
  | { type: 'redeem' }
  | { type: 'toast'; message: string }
  | { type: 'clearToast' }
  | { type: 'clearCelebrate' }

function celebrate(s: VCState, xp: number): Partial<VCState> {
  return { celebrate: { xp }, celebrateSeq: s.celebrateSeq + 1 }
}
function toast(s: VCState, message: string): Partial<VCState> {
  return { toast: message, toastSeq: s.toastSeq + 1 }
}

export function reducer(s: VCState, a: Action): VCState {
  switch (a.type) {
    case 'setTab':
      return { ...s, tab: a.tab }

    case 'selectDate':
      return { ...s, selMs: a.ms, wxNonce: s.wxNonce + 1 }

    case 'selectDateWeek':
      return { ...s, selMs: a.ms, wxNonce: s.wxNonce + 1, calView: 'week' }

    case 'toggleCal':
      return { ...s, calView: s.calView === 'week' ? 'month' : 'week' }

    case 'setCalView':
      return { ...s, calView: a.view }

    case 'prevPeriod':
      if (s.calView === 'month') {
        const d = new Date(s.selMs)
        d.setMonth(d.getMonth() - 1)
        return { ...s, selMs: d.getTime() }
      }
      return { ...s, selMs: s.selMs - 7 * 864e5 }

    case 'nextPeriod':
      if (s.calView === 'month') {
        const d = new Date(s.selMs)
        d.setMonth(d.getMonth() + 1)
        return { ...s, selMs: d.getTime() }
      }
      return { ...s, selMs: s.selMs + 7 * 864e5 }

    case 'openSheet':
      return { ...s, sheet: a.sheet, sheetCaptured: false }

    case 'closeSheet':
      return { ...s, sheet: null, sheetCaptured: false, npsScore: null, npsReason: '', npsDone: false }

    case 'capture':
      return { ...s, sheetCaptured: true }

    case 'confirmPhoto': {
      const t = s.sheet && s.sheet.type === 'photo' ? s.sheet.target : null
      const base: VCState = { ...s, sheet: null, sheetCaptured: false }
      if (t === 'act') return { ...base, actStatus: 'done', ...celebrate(s, 50) }
      return { ...base, introStatus: 'done', ...celebrate(s, 40) }
    }

    case 'chooseTour':
      return { ...s, tourChoice: a.choice, sheet: null, ...celebrate(s, 30) }

    case 'logPost': {
      const dow = DOW[new Date().getDay()]
      return {
        ...s,
        posts: [...s.posts, { day: dow, label: 'New Instagram post' }],
        ...toast(s, 'Post logged · +20 XP'),
      }
    }

    case 'addCollab': {
      const v = (s.collabInput || '').trim()
      if (!v) return s
      return { ...s, collabLinks: [...s.collabLinks, v], collabInput: '', ...toast(s, 'Collab post added') }
    }

    case 'setCollabInput':
      return { ...s, collabInput: a.value }

    case 'setLbMode':
      return { ...s, lbMode: a.mode }

    case 'npsSetScore':
      return { ...s, npsScore: a.score }

    case 'npsToggleTag': {
      const parts = (s.npsReason || '').split(' · ').filter(Boolean)
      const i = parts.indexOf(a.tag)
      if (i >= 0) parts.splice(i, 1)
      else parts.push(a.tag)
      return { ...s, npsReason: parts.join(' · ') }
    }

    case 'npsSetReason':
      return { ...s, npsReason: a.value }

    case 'submitNps':
      return { ...s, npsDone: true }

    case 'redeem':
      return { ...s, sheet: null, ...toast(s, 'Redemption requested') }

    case 'toast':
      return { ...s, ...toast(s, a.message) }

    case 'clearToast':
      return { ...s, toast: null }

    case 'clearCelebrate':
      return { ...s, celebrate: null }

    default:
      return s
  }
}
