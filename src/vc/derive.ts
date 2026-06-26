import type { Actions } from './actions'
import {
  ACT,
  CONTACTS,
  MONTH_GOAL,
  MONTH_STATS,
  MONTH_XP,
  MOY,
  NPS_CAT_COLOR,
  NPS_CAT_LABEL,
  NPS_FOLLOW_Q,
  NPS_TAG_SETS,
  OV,
  PAST_PROPS,
  PROFILE_STATS,
  REDEEM_BASE,
  TOTAL_XP,
  TOUR_OPTIONS,
  type LbEntry,
  type NpsCat,
} from './data'
import { DOW, MON, fmt, initials, today as todayFn, weather, wxData } from './helpers'
import type { VCState } from './types'

/**
 * Near-verbatim TS port of the design's renderVals(). Pure: given state +
 * dispatch-bound actions, produces every value the screens render.
 */
export function deriveVals(S: VCState, A: Actions) {
  const today = todayFn()
  const sel = new Date(S.selMs)
  const offset = Math.round((S.selMs - today.getTime()) / 864e5)

  // ── Week strip ──────────────────────────────────────────────
  const wdi = (sel.getDay() + 6) % 7
  const monday = new Date(sel)
  monday.setDate(sel.getDate() - wdi)
  const week = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const ms = d.getTime()
    const off = Math.round((ms - today.getTime()) / 864e5)
    const isSel = ms === S.selMs
    const isToday = off === 0
    const w = weather(d)
    week.push({
      key: ms,
      label: DOW[d.getDay()],
      day: d.getDate(),
      todaySel: isToday && isSel,
      todayOnly: isToday && !isSel,
      selOnly: isSel && !isToday,
      plain: !isSel && !isToday,
      wSun: w === 'sun',
      wPartly: w === 'partly',
      wCloud: w === 'cloud',
      wRain: w === 'rain',
      iconColor: isSel ? 'var(--vc-accent,#FF6A1A)' : '#AFAEBA',
      iconAnim: isSel ? 'vcIconPop .55s ease-out' : 'none',
      isSel,
      onSelect: () => A.selectDate(ms),
    })
  }

  // ── Plan cards (activity / intro / tours) ───────────────────
  const a = ACT[sel.getDay()]
  const actSt = offset < 0 ? 'done' : offset > 0 ? 'future' : S.actStatus
  const introSt = offset < 0 ? 'done' : offset > 0 ? 'future' : S.introStatus
  const tourChoice = offset < 0 ? 'Almost everyone' : offset > 0 ? null : S.tourChoice
  const act = {
    title: a.title,
    time: a.time,
    type: a.type,
    isTodo: actSt === 'todo',
    isDone: actSt === 'done',
    isFuture: actSt === 'future',
  }
  const intro = {
    isTodo: introSt === 'todo',
    isDone: introSt === 'done',
    isFuture: introSt === 'future',
  }
  const tour = {
    isTodo: offset === 0 && !S.tourChoice,
    isDone: !!tourChoice && offset <= 0,
    isFuture: offset > 0,
    choice: tourChoice,
  }

  // ── Hero progress ───────────────────────────────────────────
  let hd: number, hx: number
  if (offset < 0) {
    hd = 3
    hx = 120
  } else if (offset > 0) {
    hd = 0
    hx = 0
  } else {
    hd = (S.actStatus === 'done' ? 1 : 0) + (S.introStatus === 'done' ? 1 : 0) + (S.tourChoice ? 1 : 0)
    hx = (S.actStatus === 'done' ? 50 : 0) + (S.introStatus === 'done' ? 40 : 0) + (S.tourChoice ? 30 : 0)
  }
  const heroSub =
    offset < 0
      ? 'All wrapped up — nice work'
      : offset > 0
        ? 'Planned and ready to go'
        : hd === 3
          ? 'All done for today!'
          : 'Wrap it up before lights out'
  const relTag = offset === 0 ? 'Today, ' : offset === 1 ? 'Tomorrow, ' : offset === -1 ? 'Yesterday, ' : ''
  const dateLabel = relTag + DOW[sel.getDay()] + ' ' + sel.getDate() + ' ' + MON[sel.getMonth()]
  const planHeading = offset === 0 ? "Today's plan" : offset > 0 ? 'Upcoming plan' : "That day's plan"

  const selType = weather(sel)
  const selWx = wxData(selType)

  // ── Social ──────────────────────────────────────────────────
  const weekDone = S.posts.length + S.collabLinks.length
  const socialDots = [0, 1, 2].map((i) => ({ filled: i < weekDone, empty: !(i < weekDone) }))
  const posts = S.posts.map((p) => ({ ...p }))
  const collabLinks = S.collabLinks.map((u, i) => ({ url: u, n: i + 1 }))

  // ── Leaderboard ─────────────────────────────────────────────
  const raw = S.lbMode === 'overall' ? OV : MOY
  const mkRow = (r: LbEntry, i: number) => {
    const you = r[0] === 'Riya Kapoor'
    return {
      rank: i + 1,
      name: you ? 'You' : r[0],
      prop: r[1],
      xp: fmt(r[2]),
      isYou: you,
      bg: you ? 'var(--vc-accent-soft,#FFF1E9)' : '#fff',
      border: you ? '2px solid var(--vc-accent,#FF6A1A)' : '1px solid #ECEAF1',
      av: you ? 'var(--vc-accent,#FF6A1A)' : '#ECEAF1',
      avText: you ? '#fff' : '#3A3A42',
      initials: you ? 'RK' : initials(r[0]),
    }
  }
  const rows = raw.map(mkRow)
  const lbMe = S.lbMode === 'overall' ? { rank: 12, xp: fmt(2480) } : { rank: 4, xp: fmt(920) }

  // ── Profile ─────────────────────────────────────────────────
  const totalXP = TOTAL_XP
  const profile = {
    totalXP: fmt(totalXP),
    nights: Math.floor(totalXP / 500),
    dayN: 38,
    totalDays: 60,
    left: 22,
    tenurePct: Math.round((38 / 60) * 100),
    start: '18 May 2026',
    end: '17 Jul 2026',
  }
  const pastProps = PAST_PROPS.map((p) => ({ name: p.name, period: p.period, xp: fmt(p.xp) }))
  const stats = PROFILE_STATS
  const contacts = CONTACTS.map((c, i) => ({
    name: c.name,
    role: c.role,
    divider: i < CONTACTS.length - 1 ? '1px solid #F1F0F5' : '0px solid transparent',
    onWhatsApp: () => A.openWhatsApp(c.phone),
  }))
  const redeemOptions = REDEEM_BASE.map((o) => ({
    label: o.nights + (o.nights > 1 ? ' nights' : ' night'),
    xp: o.xp,
    onRedeem: () => A.redeem(),
  }))

  // ── Month calendar ──────────────────────────────────────────
  const my = sel.getFullYear()
  const mm = sel.getMonth()
  const startDow = new Date(my, mm, 1).getDay()
  const dim = new Date(my, mm + 1, 0).getDate()
  type MonthCell = {
    key: string
    blank: boolean
    show: boolean
    day?: number
    bg?: string
    numColor?: string
    border?: string
    shadow?: string
    numBg?: string
    onSelect?: () => void
  }
  const monthCells: MonthCell[] = []
  for (let i = 0; i < startDow; i++) monthCells.push({ blank: true, show: false, key: 'b' + i })
  for (let dn = 1; dn <= dim; dn++) {
    const cd = new Date(my, mm, dn)
    const coff = Math.round((cd.getTime() - today.getTime()) / 864e5)
    let status: string | undefined
    let bg = '#fff',
      border = '1px solid #ECEAF1',
      numColor = '#B6B4C2',
      shadow = 'none',
      numBg = 'transparent'
    if (coff > 0) {
      bg = 'transparent'
      border = '0px solid transparent'
      numColor = '#D7D5DE'
    } else {
      if (coff === 0) {
        const dc = (S.actStatus === 'done' ? 1 : 0) + (S.introStatus === 'done' ? 1 : 0) + (S.tourChoice ? 1 : 0)
        status = dc >= 3 ? 'full' : dc >= 1 ? 'partial' : 'todo'
      } else {
        const seed = (dn * 7) % 10
        status = seed < 6 ? 'full' : seed < 8 ? 'partial' : 'missed'
      }
      if (status === 'full') {
        bg = 'var(--vc-accent,#FF6A1A)'
        border = '0px solid transparent'
        numColor = '#fff'
      } else if (status === 'partial') {
        bg =
          'radial-gradient(circle, var(--vc-accent2,#FF8A3D) 1.2px, transparent 1.9px) 0 0/10px 10px, radial-gradient(circle, var(--vc-accent2,#FF8A3D) 1.2px, transparent 1.9px) 5px 5px/10px 10px, #fff'
        border = '1px solid #FFD2B8'
        numColor = '#18181B'
        numBg = 'rgba(255,255,255,0.92)'
      } else if (status === 'missed') {
        bg = '#fff'
        border = '1px solid #ECEAF1'
        numColor = '#C2C0CC'
      } else if (status === 'todo') {
        bg = '#fff'
        border = '1.5px solid #ECEAF1'
        numColor = '#18181B'
      }
      if (coff === 0) shadow = '0 0 0 2px #18181B'
    }
    monthCells.push({
      blank: false,
      show: true,
      day: dn,
      bg,
      numColor,
      border,
      shadow,
      numBg,
      onSelect: () => A.selectDateWeek(cd.getTime()),
      key: 'd' + dn,
    })
  }
  const monthXP = MONTH_XP,
    monthGoal = MONTH_GOAL
  const month = {
    label: MON[mm] + ' ' + my,
    xp: fmt(monthXP),
    remaining: fmt(monthGoal - monthXP),
    goal: fmt(monthGoal),
    pct: Math.round((monthXP / monthGoal) * 100),
  }
  const monthStats = MONTH_STATS

  // ── Sheets ──────────────────────────────────────────────────
  const sh = S.sheet
  const sheetTitle = sh && sh.type === 'photo' ? (sh.target === 'act' ? act.title : 'Introduction Table') : ''
  const sheetXp = sh && sh.type === 'photo' ? (sh.target === 'act' ? 50 : 40) : 0
  const tourOptions = TOUR_OPTIONS.map((o) => ({ label: o, onPick: () => A.chooseTour(o) }))

  // ── NPS ─────────────────────────────────────────────────────
  const npsSel = S.npsScore
  const npsScale = Array.from({ length: 11 }, (_, n) => ({
    label: n,
    sel: npsSel === n,
    bg: npsSel === n ? 'var(--vc-accent,#FF6A1A)' : '#F4F3F7',
    color: npsSel === n ? '#fff' : '#6B6B76',
    border: npsSel === n ? '1.5px solid var(--vc-accent,#FF6A1A)' : '1.5px solid transparent',
    onPick: () => A.setNpsScore(n),
  }))
  const cat: NpsCat | null = npsSel == null ? null : npsSel >= 9 ? 'promoter' : npsSel >= 7 ? 'passive' : 'detractor'
  const catLabel = cat ? NPS_CAT_LABEL[cat] : undefined
  const catColor = cat ? NPS_CAT_COLOR[cat] : undefined
  const followQ = cat ? NPS_FOLLOW_Q[cat] : undefined
  const reasonText = S.npsReason || ''
  const reasonParts = reasonText.split(' · ').filter(Boolean)
  const npsTags = (cat ? NPS_TAG_SETS[cat] : []).map((t) => {
    const on = reasonParts.includes(t)
    return {
      label: t,
      border: on ? 'var(--vc-accent,#FF6A1A)' : '#ECEAF1',
      bg: on ? 'var(--vc-accent-soft,#FFF1E9)' : '#fff',
      color: on ? 'var(--vc-accent-ink,#E1560F)' : '#6B6B76',
      onPick: () => A.toggleNpsTag(t),
    }
  })

  // ── Nav (locked to "Soft chips dark") ───────────────────────
  const navOn = (t: VCState['tab']) => S.tab === t
  const naDarkBg = (t: VCState['tab']) => (navOn(t) ? 'var(--vc-accent-tint,rgba(255,106,26,0.24))' : 'transparent')
  const naDarkCol = (t: VCState['tab']) => (navOn(t) ? 'var(--vc-accent2,#FF8A3D)' : '#9A9AA6')

  return {
    tabHome: S.tab === 'home',
    tabSocial: S.tab === 'social',
    tabLeaderboard: S.tab === 'leaderboard',
    tabProfile: S.tab === 'profile',
    showNav: S.tab !== 'profile',
    wxNonce: S.wxNonce,

    dateLabel,
    weekLabel: MON[sel.getMonth()] + ' ' + sel.getFullYear(),
    week,
    calWeek: S.calView === 'week',
    calMonth: S.calView === 'month',
    monthCells,
    month,
    monthStats,
    planHeading,

    heroDone: hd,
    heroPct: Math.round((hd / 3) * 100),
    todayXP: hx,
    heroSub,
    heroWxSun: selType === 'sun',
    heroWxPartly: selType === 'partly',
    heroWxCloud: selType === 'cloud',
    heroWxRain: selType === 'rain',
    heroWxLabel: selWx.label,
    heroWxTemp: selWx.temp,

    act,
    intro,
    tour,
    tourOptions,

    social: { weekDone },
    socialDots,
    posts,
    collabLinks,
    collabInput: S.collabInput,

    lbOverallBg: S.lbMode === 'overall' ? '#18181B' : 'transparent',
    lbOverallColor: S.lbMode === 'overall' ? '#fff' : '#8A8A95',
    lbMonthlyBg: S.lbMode === 'monthly' ? '#18181B' : 'transparent',
    lbMonthlyColor: S.lbMode === 'monthly' ? '#fff' : '#8A8A95',
    lbP1: rows[0],
    lbP2: rows[1],
    lbP3: rows[2],
    lbRest: rows.slice(3, 10),
    lbMe,

    profile,
    pastProps,
    stats,
    contacts,
    redeemOptions,

    sheetOpen: !!sh,
    sheetPhoto: !!sh && sh.type === 'photo',
    sheetTour: !!sh && sh.type === 'tour',
    sheetRedeem: !!sh && sh.type === 'redeem',
    sheetNps: !!sh && sh.type === 'nps',
    sheetCaptured: S.sheetCaptured,
    notCaptured: !S.sheetCaptured,
    sheetTitle,
    sheetXp,

    npsOpen: !!sh && sh.type === 'nps' && !S.npsDone,
    npsDone: !!sh && sh.type === 'nps' && S.npsDone,
    npsScale,
    npsHasScore: npsSel != null,
    npsCatLabel: catLabel,
    npsCatColor: catColor,
    npsFollowQ: followQ,
    npsTags,
    npsReason: reasonText,

    celebrateShow: !!S.celebrate,
    celebrateXp: S.celebrate?.xp,
    toast: S.toast,
    toastShow: !!S.toast,

    navHomeDarkBg: naDarkBg('home'),
    navHomeDarkColor: naDarkCol('home'),
    navSocialDarkBg: naDarkBg('social'),
    navSocialDarkColor: naDarkCol('social'),
    navLbDarkBg: naDarkBg('leaderboard'),
    navLbDarkColor: naDarkCol('leaderboard'),
  }
}

export type Vals = ReturnType<typeof deriveVals>
