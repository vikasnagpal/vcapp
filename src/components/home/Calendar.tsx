import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from '../Icons'

function WeekDayIcon({ d }: { d: Vals['week'][number] }) {
  const sw = 1.9
  if (d.wSun)
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1.5M12 19.5V21M5.2 5.2l1 1M17.8 17.8l1 1M3 12h1.5M19.5 12H21M5.2 18.8l1-1M17.8 6.2l1-1" />
      </svg>
    )
  if (d.wPartly)
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="7.5" r="2.6" />
        <path d="M8 2.4v1M2.9 7.5H2M4.2 3.7l.7.7" />
        <path d="M17 18H9a3.6 3.6 0 0 1 0-7.2 4.5 4.5 0 0 1 8.6 1.3A3.2 3.2 0 0 1 17 18Z" />
      </svg>
    )
  if (d.wCloud)
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18H7a4 4 0 0 1 0-8 5 5 0 0 1 9.5 1.5A3.5 3.5 0 0 1 17 18Z" />
      </svg>
    )
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 13H7a4 4 0 0 1 0-8 5 5 0 0 1 9.5 1.5A3.5 3.5 0 0 1 17 13Z" />
      <path d="M8 17.5l-.8 2M12 17.5l-.8 2M16 17.5l-.8 2" />
    </svg>
  )
}

export default function Calendar({ vals, actions }: { vals: Vals; actions: Actions }) {
  return (
    <>
      {/* header: month-year + toggle + prev/next */}
      <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;')}>
        <div onClick={actions.toggleCal} style={css('cursor:pointer;display:flex;align-items:center;gap:6px;')}>
          <div style={css('font-size:15px;font-weight:800;')}>{vals.weekLabel}</div>
          {vals.calWeek && <ChevronDown />}
          {vals.calMonth && <ChevronUp />}
        </div>
        <div style={css('display:flex;gap:8px;')}>
          <div onClick={actions.prevPeriod} style={css('cursor:pointer;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid #ECEAF1;display:flex;align-items:center;justify-content:center;')}>
            <ChevronLeft />
          </div>
          <div onClick={actions.nextPeriod} style={css('cursor:pointer;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid #ECEAF1;display:flex;align-items:center;justify-content:center;')}>
            <ChevronRight size={13} sw={2.6} color="#6B6B76" />
          </div>
        </div>
      </div>

      {/* week strip */}
      {vals.calWeek && (
        <div style={css('display:flex;gap:6px;margin-bottom:22px;')}>
          {vals.week.map((d) => (
            <div key={d.key} onClick={d.onSelect} style={css('cursor:pointer;flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;')}>
              <span style={css('font-size:11px;font-weight:600;color:#8A8A95;')}>{d.label}</span>
              <div style={css('position:relative;width:100%;max-width:46px;display:flex;justify-content:center;')}>
                {d.todaySel && <div style={css('width:100%;aspect-ratio:1;border-radius:15px;background:var(--vc-accent,#FF6A1A);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;box-shadow:0 0 0 2.5px #18181B;')}>{d.day}</div>}
                {d.todayOnly && <div style={css('width:100%;aspect-ratio:1;border-radius:15px;background:var(--vc-accent,#FF6A1A);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;')}>{d.day}</div>}
                {d.selOnly && <div style={css('width:100%;aspect-ratio:1;border-radius:15px;background:#18181B;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;')}>{d.day}</div>}
                {d.plain && <div style={css('width:100%;aspect-ratio:1;border-radius:15px;background:#fff;border:1px solid #ECEAF1;color:#3A3A42;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;')}>{d.day}</div>}
              </div>
              {/* key on wxNonce for the selected day replays the pop animation each selection */}
              <div
                key={d.isSel ? `s${vals.wxNonce}` : 'n'}
                style={css(`height:16px;display:flex;align-items:center;justify-content:center;color:${d.iconColor};animation:${d.iconAnim};transition:color .25s;`)}
              >
                <WeekDayIcon d={d} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* month grid */}
      {vals.calMonth && (
        <>
          <div style={css('margin-bottom:18px;')}>
            <div style={css('display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:7px;')}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((h, i) => (
                <div key={i} style={css('text-align:center;font-size:10px;font-weight:700;color:#8A8A95;')}>{h}</div>
              ))}
            </div>
            <div style={css('display:grid;grid-template-columns:repeat(7,1fr);gap:5px;')}>
              {vals.monthCells.map((c) =>
                c.blank ? (
                  <div key={c.key} />
                ) : (
                  <div key={c.key} onClick={c.onSelect} style={css(`cursor:pointer;aspect-ratio:1;border-radius:11px;background:${c.bg};border:${c.border};box-shadow:${c.shadow};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${c.numColor};`)}>
                    <span style={css(`display:flex;align-items:center;justify-content:center;width:21px;height:21px;border-radius:50%;background:${c.numBg};`)}>{c.day}</span>
                  </div>
                ),
              )}
            </div>
            <div style={css('display:flex;gap:16px;justify-content:center;margin-top:14px;')}>
              <div style={css('display:flex;align-items:center;gap:6px;')}>
                <div style={css('width:13px;height:13px;border-radius:4px;background:var(--vc-accent,#FF6A1A);')} />
                <span style={css('font-size:10.5px;font-weight:600;color:#8A8A95;')}>All done</span>
              </div>
              <div style={css('display:flex;align-items:center;gap:6px;')}>
                <div style={css('width:13px;height:13px;border-radius:4px;background:radial-gradient(circle, var(--vc-accent2,#FF8A3D) 1.2px, transparent 1.9px) 0 0/10px 10px, radial-gradient(circle, var(--vc-accent2,#FF8A3D) 1.2px, transparent 1.9px) 5px 5px/10px 10px, #fff;border:1px solid #FFD2B8;')} />
                <span style={css('font-size:10.5px;font-weight:600;color:#8A8A95;')}>Partial</span>
              </div>
              <div style={css('display:flex;align-items:center;gap:6px;')}>
                <div style={css('width:13px;height:13px;border-radius:4px;background:#fff;border:1px solid #ECEAF1;')} />
                <span style={css('font-size:10.5px;font-weight:600;color:#8A8A95;')}>Missed</span>
              </div>
            </div>
          </div>

          <div style={css('border-radius:var(--vc-card-radius,22px);background:#18181B;padding:18px;margin-bottom:12px;color:#fff;')}>
            <div style={css('font-size:12px;font-weight:700;letter-spacing:.4px;color:var(--vc-accent2,#FF8A3D);')}>THIS MONTH · {vals.month.label}</div>
            <div style={css('display:flex;align-items:flex-end;gap:8px;margin:7px 0 4px;')}>
              <div style={css('font-size:34px;font-weight:800;line-height:1;letter-spacing:-0.8px;')}>{vals.month.xp}</div>
              <div style={css('font-size:14px;font-weight:700;color:#A7A7B2;margin-bottom:4px;')}>XP earned</div>
            </div>
            <div style={css('font-size:12.5px;font-weight:500;color:#A7A7B2;margin-bottom:12px;')}>{vals.month.remaining} XP to reach your {vals.month.goal} monthly goal</div>
            <div style={css('height:10px;border-radius:8px;background:rgba(255,255,255,0.14);overflow:hidden;')}>
              <div style={css(`height:100%;border-radius:8px;background:linear-gradient(90deg,var(--vc-accent2,#FF8A3D),var(--vc-accent,#FF6A1A));width:${vals.month.pct}%;`)} />
            </div>
          </div>

          <div style={css('display:flex;gap:10px;margin-bottom:22px;')}>
            {vals.monthStats.map((s) => (
              <div key={s.label} style={css('flex:1;background:#F4F3F7;border-radius:18px;padding:14px 8px;text-align:center;')}>
                <div style={css('font-size:21px;font-weight:800;')}>{s.value}</div>
                <div style={css('font-size:10.5px;font-weight:600;color:#8A8A95;margin-top:3px;')}>{s.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
