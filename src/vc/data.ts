// Static mock data ported verbatim from the design's renderVals().

export interface ActivityDef {
  title: string
  time: string
  type: string
}

// Activity per day-of-week (0=Sun … 6=Sat)
export const ACT: Record<number, ActivityDef> = {
  0: { title: 'Café Walk', time: '9:00 AM', type: 'Outdoor' },
  1: { title: 'Card Games Night', time: '8:30 PM', type: 'Indoor' },
  2: { title: 'Morning Trek', time: '6:00 AM', type: 'Outdoor' },
  3: { title: 'Bonfire & Stories', time: '7:30 PM', type: 'Outdoor' },
  4: { title: 'Music Jam Session', time: '8:30 PM', type: 'Indoor' },
  5: { title: 'Storytelling Night', time: '9:00 PM', type: 'Indoor' },
  6: { title: 'Sunset Hike', time: '5:00 PM', type: 'Outdoor' },
}

// [name, property, xp]
export type LbEntry = [string, string, number]

export const OV: LbEntry[] = [
  ['Aanya Sharma', 'Zostel Spiti', 8420],
  ['Kabir Rao', 'Zostel Goa', 7980],
  ['Meera Nair', 'Zostel Udaipur', 7610],
  ['Dev Patel', 'Zostel Manali', 6890],
  ['Ishaan Gupta', 'Zostel Jaipur', 6320],
  ['Tara Singh', 'Zostel Rishikesh', 5870],
  ['Rohan Das', 'Zostel Varkala', 5540],
  ['Nisha Reddy', 'Zostel Mcleodganj', 5210],
  ['Arjun Mehta', 'Zostel Pushkar', 4980],
  ['Sara Khan', 'Zostel Kasol', 4720],
]

export const MOY: LbEntry[] = [
  ['Meera Nair', 'Zostel Udaipur', 1180],
  ['Kabir Rao', 'Zostel Goa', 1090],
  ['Dev Patel', 'Zostel Manali', 980],
  ['Riya Kapoor', 'Zostel Rishikesh', 920],
  ['Aanya Sharma', 'Zostel Spiti', 870],
  ['Tara Singh', 'Zostel Rishikesh', 810],
  ['Ishaan Gupta', 'Zostel Jaipur', 760],
  ['Rohan Das', 'Zostel Varkala', 720],
  ['Nisha Reddy', 'Zostel Mcleodganj', 680],
  ['Sara Khan', 'Zostel Kasol', 640],
]

export const PAST_PROPS = [
  { name: 'Zostel Goa', period: 'Nov – Dec 2025', xp: 1340 },
  { name: 'Zostel Manali', period: 'Aug – Oct 2025', xp: 980 },
]

export const PROFILE_STATS = [
  { label: 'Activities', value: 24 },
  { label: 'House tours', value: 156 },
  { label: 'Posts', value: 19 },
]

export const CONTACTS = [
  { name: 'Vikram Rana', role: 'Property Manager · Rishikesh', phone: '919876543210' },
  { name: 'VC Helpdesk', role: 'Zostel HQ Support', phone: '919812345678' },
]

export const REDEEM_BASE = [
  { nights: 1, xp: '500' },
  { nights: 2, xp: '1,000' },
  { nights: 4, xp: '2,000' },
]

export const TOUR_OPTIONS = ['No new check-ins today', 'Very few', 'Almost everyone', 'Not done today']

export const MONTH_STATS = [
  { label: 'Activities', value: 18 },
  { label: 'Intro tables', value: 16 },
  { label: 'Posts', value: 9 },
]

export const TOTAL_XP = 2480
export const MONTH_XP = 920
export const MONTH_GOAL = 1500

export type NpsCat = 'promoter' | 'passive' | 'detractor'

export const NPS_TAG_SETS: Record<NpsCat, string[]> = {
  promoter: ['Great team', 'Guest vibes', 'Fun activities', 'Solid support'],
  passive: ['More support', 'Clearer tasks', 'Lighter load', 'Better tools'],
  detractor: ['Heavy workload', 'Unclear expectations', 'Slow support', 'Tech issues'],
}

export const NPS_CAT_LABEL: Record<NpsCat, string> = {
  promoter: "Glad you're loving it",
  passive: "Good — let's make it great",
  detractor: "Sorry it's been rough",
}

export const NPS_CAT_COLOR: Record<NpsCat, string> = {
  promoter: '#34B27B',
  passive: '#E0A100',
  detractor: '#E5564B',
}

export const NPS_FOLLOW_Q: Record<NpsCat, string> = {
  promoter: 'What did you love most this week?',
  passive: 'What would make next week a 10?',
  detractor: "What's one thing we should fix?",
}
