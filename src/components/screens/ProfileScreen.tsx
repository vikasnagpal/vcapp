import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { Camera, ChevronLeft, ContactUser, WhatsApp } from '../Icons'

export default function ProfileScreen({ vals, actions }: { vals: Vals; actions: Actions }) {
  const p = vals.profile
  return (
    <div>
      {/* cover + avatar (bleeds past the app's 80/18px padding) */}
      <div style={css('position:relative;margin:-80px -18px 0;')}>
        <div style={css('height:172px;overflow:hidden;background:#E9E8EE;')}>
          <img src={`${import.meta.env.BASE_URL}assets/property.jpg`} alt="" style={css('width:100%;height:172px;display:block;object-fit:cover;')} />
        </div>
        <div style={css('position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,0) 38%,rgba(251,251,253,0) 64%,#FBFBFD);pointer-events:none;')} />
        <div onClick={actions.backHome} style={css('position:absolute;top:54px;left:18px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.14);')}>
          <ChevronLeft size={16} sw={2.4} color="#18181B" />
        </div>
        <div style={css('position:absolute;top:54px;right:18px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.14);pointer-events:none;')}>
          <Camera size={16} sw={2} color="#18181B" r={3.2} />
        </div>
        <div style={css('position:absolute;left:18px;bottom:-32px;')}>
          <div style={css('position:relative;width:92px;height:92px;border-radius:50%;border:4px solid #FBFBFD;overflow:hidden;background:#ECEAF1;display:flex;align-items:flex-end;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.18);')}>
            {/* generic avatar placeholder (matches the design's pfp.png) */}
            <svg width="84" height="84" viewBox="0 0 84 84" fill="#C2BFCD" aria-hidden="true">
              <circle cx="42" cy="34" r="15" />
              <path d="M14 80c0-15 12.5-23 28-23s28 8 28 23z" />
            </svg>
          </div>
          <div style={css('position:absolute;right:-2px;bottom:-2px;width:30px;height:30px;border-radius:50%;background:var(--vc-accent,#FF6A1A);border:3px solid #FBFBFD;display:flex;align-items:center;justify-content:center;pointer-events:none;')}>
            <Camera size={14} sw={2.4} color="#fff" r={3} />
          </div>
        </div>
      </div>

      <div style={css('margin-top:42px;margin-bottom:20px;')}>
        <div style={css('font-size:23px;font-weight:800;letter-spacing:-0.5px;')}>Riya Kapoor</div>
        <div style={css('display:flex;align-items:center;gap:7px;margin-top:8px;')}>
          <div style={css('background:#F1F0F5;color:#6B6B76;border-radius:20px;padding:5px 12px;font-size:12px;font-weight:700;')}>Vibe Curator</div>
          <div style={css('display:flex;align-items:center;gap:5px;background:#fff;border:1px solid #ECEAF1;border-radius:20px;padding:5px 12px;font-size:12px;font-weight:700;')}>
            <div style={css('width:6px;height:6px;border-radius:50%;background:var(--vc-accent,#FF6A1A);')} />Zostel Rishikesh
          </div>
        </div>
      </div>

      <div style={css('position:relative;border-radius:var(--vc-card-radius,24px);background:linear-gradient(135deg,var(--vc-accent,#FF6A1A),var(--vc-accent2,#FF8A3D));padding:20px;color:#fff;overflow:hidden;margin-bottom:14px;box-shadow:0 12px 26px rgba(255,106,26,.28);')}>
        <div style={css('font-size:11px;font-weight:700;letter-spacing:1.2px;opacity:.9;')}>AVAILABLE XP</div>
        <div style={css('display:flex;align-items:flex-end;justify-content:space-between;margin-top:6px;')}>
          <div>
            <div style={css('font-size:38px;font-weight:800;line-height:1;letter-spacing:-1px;')}>{p.totalXP}</div>
            <div style={css('font-size:12.5px;opacity:.92;font-weight:500;margin-top:5px;')}>≈ {p.nights} free nights at any Zostel</div>
          </div>
          <div onClick={actions.openRedeem} style={css('cursor:pointer;background:#fff;color:var(--vc-accent-ink,#E1560F);border-radius:14px;padding:11px 18px;font-weight:800;font-size:13.5px;')}>Redeem</div>
        </div>
      </div>

      <div style={css('border-radius:var(--vc-card-radius,22px);background:#fff;border:1px solid #ECEAF1;padding:18px;margin-bottom:14px;box-shadow:0 4px 16px rgba(30,25,50,0.04);')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px;')}>
          <div style={css('font-size:15px;font-weight:800;')}>Current tenure</div>
          <div style={css('font-size:12px;font-weight:700;color:var(--vc-accent,#FF6A1A);')}>{p.left} days left</div>
        </div>
        <div style={css('font-size:24px;font-weight:800;margin-bottom:12px;')}>Day {p.dayN} <span style={css('font-size:15px;color:#8A8A95;')}>of {p.totalDays}</span></div>
        <div style={css('height:10px;border-radius:8px;background:#F1F0F5;overflow:hidden;margin-bottom:10px;')}>
          <div style={css(`height:100%;border-radius:8px;background:var(--vc-accent,#FF6A1A);width:${p.tenurePct}%;`)} />
        </div>
        <div style={css('display:flex;justify-content:space-between;font-size:11.5px;font-weight:600;color:#8A8A95;')}>
          <span>{p.start}</span>
          <span>{p.end}</span>
        </div>
      </div>

      <div style={css('display:flex;gap:10px;margin-bottom:14px;')}>
        {vals.stats.map((s) => (
          <div key={s.label} style={css('flex:1;background:#fff;border:1px solid #ECEAF1;border-radius:20px;padding:15px 10px;text-align:center;box-shadow:0 4px 16px rgba(30,25,50,0.04);')}>
            <div style={css('font-size:22px;font-weight:800;')}>{s.value}</div>
            <div style={css('font-size:11px;font-weight:600;color:#8A8A95;margin-top:2px;')}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={css('font-size:16px;font-weight:800;margin:6px 0 12px;')}>Need a hand?</div>
      <div style={css('border-radius:var(--vc-card-radius,22px);background:#fff;border:1px solid #ECEAF1;padding:8px 14px;margin-bottom:14px;box-shadow:0 4px 16px rgba(30,25,50,0.04);')}>
        {vals.contacts.map((c) => (
          <div key={c.name} style={css(`display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:${c.divider};`)}>
            <div style={css('width:42px;height:42px;border-radius:13px;background:#F4F3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0;')}>
              <ContactUser />
            </div>
            <div style={css('flex:1;min-width:0;')}>
              <div style={css('font-size:14.5px;font-weight:800;')}>{c.name}</div>
              <div style={css('font-size:11.5px;color:#8A8A95;font-weight:600;')}>{c.role}</div>
            </div>
            <div onClick={c.onWhatsApp} style={css('cursor:pointer;display:flex;align-items:center;gap:6px;background:#25D366;color:#fff;border-radius:12px;padding:9px 13px;font-weight:700;font-size:12.5px;flex-shrink:0;')}>
              <WhatsApp />WhatsApp
            </div>
          </div>
        ))}
      </div>

      <div style={css('font-size:16px;font-weight:800;margin:6px 0 12px;')}>Properties before this</div>
      {vals.pastProps.map((pp) => (
        <div key={pp.name} style={css('display:flex;align-items:center;gap:13px;background:#fff;border:1px solid #ECEAF1;border-radius:18px;padding:13px;margin-bottom:9px;')}>
          <div style={css('width:48px;height:48px;border-radius:14px;flex-shrink:0;background:repeating-linear-gradient(45deg,#F4F3F7,#F4F3F7 5px,#E7E5EE 5px,#E7E5EE 10px);')} />
          <div style={css('flex:1;')}>
            <div style={css('font-size:14.5px;font-weight:800;')}>{pp.name}</div>
            <div style={css('font-size:11.5px;color:#8A8A95;font-weight:600;')}>{pp.period}</div>
          </div>
          <div style={css('text-align:right;flex-shrink:0;')}>
            <div style={css('font-size:13.5px;font-weight:800;color:var(--vc-accent,#FF6A1A);')}>{pp.xp}</div>
            <div style={css('font-size:10px;color:#8A8A95;font-weight:600;')}>XP earned</div>
          </div>
        </div>
      ))}
    </div>
  )
}
