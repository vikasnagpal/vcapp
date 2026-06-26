import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { Check, Link } from '../Icons'

export default function SocialScreen({ vals, actions }: { vals: Vals; actions: Actions }) {
  return (
    <div>
      <div style={css('display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;')}>
        <div>
          <div style={css('font-size:26px;font-weight:800;line-height:1.05;letter-spacing:-0.6px;')}>Social cadence</div>
          <div style={css('font-size:13px;color:#8A8A95;font-weight:600;margin-top:3px;')}>Keep the Rishikesh feed alive · 3 / week</div>
        </div>
        <div onClick={actions.goProfile} style={css('cursor:pointer;width:44px;height:44px;border-radius:14px;background:#18181B;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#fff;flex-shrink:0;')}>RK</div>
      </div>

      <div style={css('border-radius:var(--vc-card-radius,24px);background:#18181B;padding:22px;color:#fff;margin-bottom:18px;')}>
        <div style={css('font-size:11px;font-weight:700;letter-spacing:1.3px;color:var(--vc-accent2,#FF8A3D);')}>THIS WEEK</div>
        <div style={css('font-size:40px;font-weight:800;line-height:1;letter-spacing:-1px;margin:8px 0 14px;')}>
          {vals.social.weekDone}
          <span style={css('font-size:22px;color:#A7A7B2;')}>/3 posts</span>
        </div>
        <div style={css('display:flex;gap:8px;')}>
          {vals.socialDots.map((dt, i) =>
            dt.filled ? (
              <div key={i} style={css('flex:1;height:8px;border-radius:8px;background:var(--vc-accent,#FF6A1A);')} />
            ) : (
              <div key={i} style={css('flex:1;height:8px;border-radius:8px;background:rgba(255,255,255,0.16);')} />
            ),
          )}
        </div>
      </div>

      <div style={css('border-radius:var(--vc-card-radius,22px);background:#fff;border:1px solid #ECEAF1;padding:18px;margin-bottom:16px;box-shadow:0 4px 16px rgba(30,25,50,0.04);')}>
        <div style={css('display:flex;align-items:center;gap:12px;margin-bottom:16px;')}>
          <div style={css('width:46px;height:46px;border-radius:14px;flex-shrink:0;background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4);display:flex;align-items:center;justify-content:center;')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5.5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
            </svg>
          </div>
          <div style={css('flex:1;')}>
            <div style={css("font-size:16px;font-weight:800;")}>Post today's vibe</div>
            <div style={css('font-size:12px;color:#8A8A95;font-weight:600;')}>Activities, guests, life at Zostel</div>
          </div>
        </div>
        <div onClick={actions.openInsta} style={css('cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:14px;padding:13px;font-weight:700;font-size:14px;margin-bottom:10px;')}>Open Instagram</div>
        <div style={css('display:flex;align-items:center;justify-content:center;gap:6px;text-align:center;font-size:11.5px;font-weight:600;color:#8A8A95;')}>
          <Check size={13} sw={2.6} color="#34B27B" />Posts are detected automatically once you publish
        </div>
      </div>

      <div style={css("font-size:16px;font-weight:800;margin-bottom:12px;")}>This week's posts</div>
      {vals.posts.map((p, i) => (
        <div key={i} style={css('display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #ECEAF1;border-radius:18px;padding:11px;margin-bottom:9px;')}>
          <div style={css('width:48px;height:48px;border-radius:12px;flex-shrink:0;background:repeating-linear-gradient(45deg,#F4F3F7,#F4F3F7 5px,#E7E5EE 5px,#E7E5EE 10px);')} />
          <div style={css('flex:1;')}>
            <div style={css('font-size:14px;font-weight:700;')}>{p.label}</div>
            <div style={css('font-size:11.5px;color:#8A8A95;font-weight:600;')}>Posted · {p.day}</div>
          </div>
          <div style={css('width:24px;height:24px;border-radius:50%;background:#34B27B;display:flex;align-items:center;justify-content:center;')}>
            <Check size={13} sw={3.2} color="#fff" />
          </div>
        </div>
      ))}

      <div style={css('border-radius:var(--vc-card-radius,22px);background:#F4F3F7;padding:18px;margin-top:18px;')}>
        <div style={css('font-size:15px;font-weight:800;')}>Done a collab post?</div>
        <div style={css("font-size:12.5px;color:#6B6B76;font-weight:500;margin:4px 0 14px;line-height:1.4;")}>We can't auto-detect collaboration posts. Paste the link and we'll add it to your weekly progress.</div>
        <div style={css('display:flex;gap:8px;')}>
          <input
            value={vals.collabInput}
            onChange={actions.onCollabInput}
            placeholder="Paste Instagram post link"
            style={css('flex:1;min-width:0;border:1.5px solid #E0DEE8;background:#fff;border-radius:14px;padding:12px 13px;font-size:13px;font-family:inherit;outline:none;color:#18181B;')}
          />
          <div onClick={actions.addCollab} style={css('cursor:pointer;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:14px;padding:12px 18px;font-weight:700;font-size:13.5px;display:flex;align-items:center;')}>Add</div>
        </div>
        {vals.collabLinks.map((c, i) => (
          <div key={i} style={css('display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:11px 13px;margin-top:9px;')}>
            <Link />
            <div style={css('flex:1;min-width:0;font-size:12.5px;font-weight:600;color:#6B6B76;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;')}>{c.url}</div>
            <div style={css('font-size:11px;font-weight:800;color:#34B27B;flex-shrink:0;')}>Counted</div>
          </div>
        ))}
      </div>
    </div>
  )
}
