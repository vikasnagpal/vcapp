import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { Camera, ChevronRight, Check, House, Instagram, Star, Users } from '../Icons'
import WeatherScene from '../home/WeatherScene'
import Calendar from '../home/Calendar'

const cardBox =
  'border-radius:var(--vc-card-radius,22px);background:#fff;border:1px solid #ECEAF1;padding:16px;margin-bottom:12px;box-shadow:0 4px 16px rgba(30,25,50,0.04);'
const ctaBtn =
  'cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:14px;padding:13px;font-weight:700;font-size:14px;'
const doneRow = 'display:flex;align-items:center;gap:11px;background:#EBF7F1;border-radius:14px;padding:10px;'
const futureRow = 'text-align:center;background:#F4F3F7;border-radius:14px;padding:13px;font-size:12.5px;font-weight:700;color:#9A9AA4;'

function DoneCheck() {
  return (
    <div style={css('width:28px;height:28px;border-radius:50%;background:#34B27B;display:flex;align-items:center;justify-content:center;')}>
      <Check size={15} sw={3} color="#fff" />
    </div>
  )
}

export default function HomeScreen({ vals, actions }: { vals: Vals; actions: Actions }) {
  return (
    <div>
      {/* header */}
      <div style={css('display:flex;align-items:center;gap:12px;margin-bottom:18px;')}>
        <div onClick={actions.goProfile} style={css('cursor:pointer;width:48px;height:48px;border-radius:15px;background:#18181B;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#fff;flex-shrink:0;')}>RK</div>
        <div style={css('flex:1;min-width:0;')}>
          <div style={css('font-size:12px;font-weight:600;color:#8A8A95;')}>{vals.dateLabel}</div>
          <div style={css('font-size:21px;font-weight:800;line-height:1.1;letter-spacing:-0.4px;')}>Hi, Riya</div>
        </div>
        <div style={css('display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #ECEAF1;border-radius:14px;padding:8px 11px;')}>
          <div style={css('width:7px;height:7px;border-radius:50%;background:var(--vc-accent,#FF6A1A);')} />
          <span style={css('font-size:12px;font-weight:700;')}>Rishikesh</span>
        </div>
      </div>

      {/* hero */}
      <div style={css('position:relative;border-radius:26px;background:var(--vc-hero-bg,linear-gradient(135deg,#FF6A1A,#FF8A3D));padding:22px;color:#fff;overflow:hidden;margin-bottom:20px;box-shadow:0 16px 32px var(--vc-hero-shadow,rgba(255,106,26,0.30));')}>
        <div style={css('position:relative;z-index:2;max-width:60%;')}>
          <div style={css("font-size:11px;font-weight:700;letter-spacing:1.3px;opacity:.9;")}>TODAY'S PLAN</div>
          <div style={css('font-size:40px;font-weight:800;line-height:1;letter-spacing:-1px;margin:8px 0 4px;')}>
            {vals.heroDone}
            <span style={css('font-size:22px;opacity:.7;')}>/3</span>
          </div>
          <div style={css('font-size:13.5px;font-weight:500;opacity:.95;')}>{vals.heroSub}</div>
          <div style={css('margin-top:14px;height:8px;border-radius:8px;background:rgba(255,255,255,0.28);overflow:hidden;')}>
            <div style={css(`height:100%;border-radius:8px;background:#fff;width:${vals.heroPct}%;transition:width .4s;`)} />
          </div>
          <div style={css('display:inline-flex;align-items:center;gap:5px;margin-top:14px;background:rgba(255,255,255,0.2);border-radius:20px;padding:6px 12px;')}>
            <span style={css('font-size:13px;font-weight:800;')}>+{vals.todayXP}</span>
            <span style={css('font-size:13px;font-weight:600;opacity:.92;')}>XP today</span>
          </div>
        </div>
        <WeatherScene vals={vals} />
      </div>

      {/* calendar */}
      <Calendar vals={vals} actions={actions} />

      {/* plan heading */}
      <div style={css('display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px;')}>
        <div style={css('font-size:19px;font-weight:800;')}>{vals.planHeading}</div>
        <div style={css('font-size:12px;font-weight:600;color:#8A8A95;')}>{vals.dateLabel}</div>
      </div>

      {/* Activity */}
      <div style={css(cardBox)}>
        <div style={css('display:flex;align-items:center;gap:12px;margin-bottom:14px;')}>
          <div style={css('width:46px;height:46px;border-radius:14px;background:var(--vc-accent-soft,#FFF1E9);display:flex;align-items:center;justify-content:center;flex-shrink:0;')}>
            <Star />
          </div>
          <div style={css('flex:1;min-width:0;')}>
            <div style={css('font-size:16.5px;font-weight:800;')}>{vals.act.title}</div>
            <div style={css('font-size:12px;font-weight:600;color:#8A8A95;margin-top:2px;')}>{vals.act.type} · {vals.act.time}</div>
          </div>
          <div style={css('font-size:10px;font-weight:800;letter-spacing:.6px;color:#B6B6C0;')}>ACTIVITY</div>
        </div>
        {vals.act.isTodo && (
          <div onClick={actions.openActPhoto} style={css(ctaBtn)}>
            <Camera color="currentColor" />Mark done · +50 XP
          </div>
        )}
        {vals.act.isDone && (
          <div style={css(doneRow)}>
            <div style={css('width:42px;height:42px;border-radius:11px;flex-shrink:0;background:repeating-linear-gradient(45deg,#fff,#fff 5px,#E3E1EA 5px,#E3E1EA 10px);')} />
            <div style={css('flex:1;')}>
              <div style={css('font-size:13.5px;font-weight:800;color:#15835A;')}>Logged</div>
              <div style={css('font-size:11px;color:#6B6B76;')}>Proof photo shared with HQ</div>
            </div>
            <DoneCheck />
          </div>
        )}
        {vals.act.isFuture && <div style={css(futureRow)}>Upcoming · log it once it happens</div>}
      </div>

      {/* Intro Table */}
      <div style={css(cardBox)}>
        <div style={css('display:flex;align-items:center;gap:12px;margin-bottom:14px;')}>
          <div style={css('width:46px;height:46px;border-radius:14px;background:#F4F3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0;')}>
            <Users />
          </div>
          <div style={css('flex:1;min-width:0;')}>
            <div style={css('font-size:16.5px;font-weight:800;')}>Introduction Table</div>
            <div style={css('font-size:12px;font-weight:600;color:#8A8A95;margin-top:2px;')}>Common Lounge · 8:00 PM</div>
          </div>
          <div style={css('font-size:10px;font-weight:800;letter-spacing:.6px;color:#B6B6C0;')}>INTRO</div>
        </div>
        {vals.intro.isTodo && (
          <div onClick={actions.openIntroPhoto} style={css(ctaBtn)}>
            <Camera color="currentColor" />Mark done · +40 XP
          </div>
        )}
        {vals.intro.isDone && (
          <div style={css(doneRow)}>
            <div style={css('width:42px;height:42px;border-radius:11px;flex-shrink:0;background:repeating-linear-gradient(45deg,#fff,#fff 5px,#E3E1EA 5px,#E3E1EA 10px);')} />
            <div style={css('flex:1;')}>
              <div style={css('font-size:13.5px;font-weight:800;color:#15835A;')}>Logged</div>
              <div style={css('font-size:11px;color:#6B6B76;')}>Everyone got to mingle</div>
            </div>
            <DoneCheck />
          </div>
        )}
        {vals.intro.isFuture && <div style={css(futureRow)}>Upcoming · log it after the session</div>}
      </div>

      {/* House Tours */}
      <div style={css(cardBox)}>
        <div style={css('display:flex;align-items:center;gap:12px;margin-bottom:14px;')}>
          <div style={css('width:46px;height:46px;border-radius:14px;background:#F4F3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0;')}>
            <House />
          </div>
          <div style={css('flex:1;min-width:0;')}>
            <div style={css('font-size:16.5px;font-weight:800;')}>House Tours</div>
            <div style={css('font-size:12px;font-weight:600;color:#8A8A95;margin-top:2px;')}>Daily · welcome new check-ins</div>
          </div>
          <div style={css('font-size:10px;font-weight:800;letter-spacing:.6px;color:#B6B6C0;')}>TOURS</div>
        </div>
        {vals.tour.isTodo && (
          <div onClick={actions.openTour} style={css(ctaBtn)}>Log house tours · +30 XP</div>
        )}
        {vals.tour.isDone && (
          <div style={css('display:flex;align-items:center;gap:11px;background:#EBF7F1;border-radius:14px;padding:12px 14px;')}>
            <div style={css('width:28px;height:28px;border-radius:50%;background:#34B27B;flex-shrink:0;display:flex;align-items:center;justify-content:center;')}>
              <Check size={15} sw={3} color="#fff" />
            </div>
            <div style={css('flex:1;')}>
              <div style={css('font-size:11px;font-weight:600;color:#6B6B76;')}>Logged today</div>
              <div style={css('font-size:14px;font-weight:800;color:#18181B;')}>{vals.tour.choice}</div>
            </div>
          </div>
        )}
        {vals.tour.isFuture && <div style={css(futureRow)}>Upcoming · log at the end of the day</div>}
      </div>

      {/* Social nudge */}
      <div onClick={actions.goSocial} style={css('cursor:pointer;border-radius:var(--vc-card-radius,22px);background:#fff;border:1px solid #ECEAF1;padding:15px;display:flex;align-items:center;gap:13px;box-shadow:0 4px 16px rgba(30,25,50,0.04);')}>
        <div style={css('width:44px;height:44px;border-radius:13px;flex-shrink:0;background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF);display:flex;align-items:center;justify-content:center;')}>
          <Instagram dotFill />
        </div>
        <div style={css('flex:1;')}>
          <div style={css('font-size:15px;font-weight:800;')}>Social cadence</div>
          <div style={css('font-size:12px;color:#8A8A95;font-weight:600;')}>{vals.social.weekDone} of 3 posts this week</div>
        </div>
        <ChevronRight />
      </div>

      {/* Weekly NPS CTA */}
      <div onClick={actions.openNps} style={css('cursor:pointer;margin-top:12px;border-radius:var(--vc-card-radius,22px);background:var(--vc-accent-soft,#FFF1E9);border:1px solid #ECEAF1;padding:15px;display:flex;align-items:center;gap:13px;')}>
        <div style={css('width:44px;height:44px;border-radius:13px;flex-shrink:0;background:#fff;display:flex;align-items:center;justify-content:center;')}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--vc-accent,#FF6A1A)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
        </div>
        <div style={css('flex:1;')}>
          <div style={css('display:flex;align-items:center;gap:7px;')}>
            <span style={css('font-size:15px;font-weight:800;')}>Weekly check-in</span>
            <span style={css('font-size:9px;font-weight:800;letter-spacing:.5px;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:6px;padding:2px 6px;')}>NEW</span>
          </div>
          <div style={css('font-size:12px;color:#8A8A95;font-weight:600;')}>30-second pulse · rate your week</div>
        </div>
        <div style={css('background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:12px;padding:9px 14px;font-size:12.5px;font-weight:800;flex-shrink:0;')}>Start</div>
      </div>
    </div>
  )
}
