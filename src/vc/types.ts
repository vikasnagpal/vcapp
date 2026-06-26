export type Tab = 'home' | 'social' | 'leaderboard' | 'profile'
export type CalView = 'week' | 'month'
export type LbMode = 'overall' | 'monthly'
export type DayStatus = 'todo' | 'done'

export type Sheet =
  | { type: 'photo'; target: 'act' | 'intro' }
  | { type: 'tour' }
  | { type: 'redeem' }
  | { type: 'nps' }
  | null

export interface Post {
  day: string
  label: string
}

export interface VCState {
  tab: Tab
  selMs: number
  actStatus: DayStatus
  introStatus: DayStatus
  tourChoice: string | null
  sheet: Sheet
  sheetCaptured: boolean
  npsScore: number | null
  npsReason: string
  npsDone: boolean
  collabInput: string
  posts: Post[]
  collabLinks: string[]
  lbMode: LbMode
  calView: CalView
  // transient overlays + a bump counter each so identical values still retrigger
  celebrate: { xp: number } | null
  celebrateSeq: number
  toast: string | null
  toastSeq: number
  // bumped on each date selection to retrigger the weather-icon pop animation
  wxNonce: number
}
