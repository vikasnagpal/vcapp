import type { ChangeEvent, Dispatch } from 'react'
import type { Action } from './state'

/** Dispatch-bound handlers — the React equivalent of the design's renderVals closures. */
export interface Actions {
  goHome: () => void
  goSocial: () => void
  goLeaderboard: () => void
  goProfile: () => void
  backHome: () => void
  selectDate: (ms: number) => void
  selectDateWeek: (ms: number) => void
  toggleCal: () => void
  prevPeriod: () => void
  nextPeriod: () => void
  openActPhoto: () => void
  openIntroPhoto: () => void
  openTour: () => void
  openRedeem: () => void
  openNps: () => void
  closeSheet: () => void
  capture: () => void
  confirmPhoto: () => void
  chooseTour: (choice: string) => void
  logPost: () => void
  addCollab: () => void
  onCollabInput: (e: ChangeEvent<HTMLInputElement>) => void
  setLbOverall: () => void
  setLbMonthly: () => void
  setNpsScore: (score: number) => void
  toggleNpsTag: (tag: string) => void
  onNpsReason: (e: ChangeEvent<HTMLTextAreaElement>) => void
  submitNps: () => void
  redeem: () => void
  openInsta: () => void
  openWhatsApp: (num: string) => void
}

export function buildActions(dispatch: Dispatch<Action>): Actions {
  return {
    goHome: () => dispatch({ type: 'setTab', tab: 'home' }),
    goSocial: () => dispatch({ type: 'setTab', tab: 'social' }),
    goLeaderboard: () => dispatch({ type: 'setTab', tab: 'leaderboard' }),
    goProfile: () => dispatch({ type: 'setTab', tab: 'profile' }),
    backHome: () => dispatch({ type: 'setTab', tab: 'home' }),
    selectDate: (ms) => dispatch({ type: 'selectDate', ms }),
    selectDateWeek: (ms) => dispatch({ type: 'selectDateWeek', ms }),
    toggleCal: () => dispatch({ type: 'toggleCal' }),
    prevPeriod: () => dispatch({ type: 'prevPeriod' }),
    nextPeriod: () => dispatch({ type: 'nextPeriod' }),
    openActPhoto: () => dispatch({ type: 'openSheet', sheet: { type: 'photo', target: 'act' } }),
    openIntroPhoto: () => dispatch({ type: 'openSheet', sheet: { type: 'photo', target: 'intro' } }),
    openTour: () => dispatch({ type: 'openSheet', sheet: { type: 'tour' } }),
    openRedeem: () => dispatch({ type: 'openSheet', sheet: { type: 'redeem' } }),
    openNps: () => dispatch({ type: 'openSheet', sheet: { type: 'nps' } }),
    closeSheet: () => dispatch({ type: 'closeSheet' }),
    capture: () => dispatch({ type: 'capture' }),
    confirmPhoto: () => dispatch({ type: 'confirmPhoto' }),
    chooseTour: (choice) => dispatch({ type: 'chooseTour', choice }),
    logPost: () => dispatch({ type: 'logPost' }),
    addCollab: () => dispatch({ type: 'addCollab' }),
    onCollabInput: (e) => dispatch({ type: 'setCollabInput', value: e.target.value }),
    setLbOverall: () => dispatch({ type: 'setLbMode', mode: 'overall' }),
    setLbMonthly: () => dispatch({ type: 'setLbMode', mode: 'monthly' }),
    setNpsScore: (score) => dispatch({ type: 'npsSetScore', score }),
    toggleNpsTag: (tag) => dispatch({ type: 'npsToggleTag', tag }),
    onNpsReason: (e) => dispatch({ type: 'npsSetReason', value: e.target.value }),
    submitNps: () => dispatch({ type: 'submitNps' }),
    redeem: () => dispatch({ type: 'redeem' }),
    openInsta: () => {
      try {
        window.open('https://www.instagram.com', '_blank')
      } catch {
        /* ignore */
      }
      dispatch({ type: 'toast', message: 'Opening Instagram…' })
    },
    openWhatsApp: (num) => {
      try {
        window.open('https://wa.me/' + num, '_blank')
      } catch {
        /* ignore */
      }
      dispatch({ type: 'toast', message: 'Opening WhatsApp…' })
    },
  }
}
