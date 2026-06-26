import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { Crown } from '../Icons'

export default function LeaderboardScreen({ vals, actions }: { vals: Vals; actions: Actions }) {
  return (
    <div>
      <div style={css('display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;')}>
        <div style={css('font-size:26px;font-weight:800;letter-spacing:-0.6px;')}>Leaderboard</div>
        <div onClick={actions.goProfile} style={css('cursor:pointer;width:44px;height:44px;border-radius:14px;background:#18181B;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#fff;flex-shrink:0;')}>RK</div>
      </div>

      <div style={css('display:flex;background:#F1F0F5;border-radius:16px;padding:4px;margin-bottom:22px;')}>
        <div onClick={actions.setLbOverall} style={css(`cursor:pointer;flex:1;text-align:center;border-radius:12px;padding:10px;font-weight:700;font-size:13.5px;background:${vals.lbOverallBg};color:${vals.lbOverallColor};transition:all .2s;`)}>Overall</div>
        <div onClick={actions.setLbMonthly} style={css(`cursor:pointer;flex:1;text-align:center;border-radius:12px;padding:10px;font-weight:700;font-size:13.5px;background:${vals.lbMonthlyBg};color:${vals.lbMonthlyColor};transition:all .2s;`)}>This month</div>
      </div>

      {/* podium */}
      <div style={css('display:flex;align-items:flex-end;gap:8px;margin-bottom:22px;')}>
        <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;')}>
          <div style={css('width:52px;height:52px;border-radius:50%;background:#ECEAF1;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:#3A3A42;margin-bottom:7px;border:3px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,.06);')}>{vals.lbP2.initials}</div>
          <div style={css('font-size:12px;font-weight:800;text-align:center;line-height:1.1;')}>{vals.lbP2.name}</div>
          <div style={css('font-size:11px;font-weight:700;color:var(--vc-accent,#FF6A1A);margin:2px 0 8px;')}>{vals.lbP2.xp} XP</div>
          <div style={css('width:100%;height:74px;background:#D9D7E0;border-radius:14px 14px 0 0;display:flex;align-items:flex-start;justify-content:center;padding-top:10px;font-size:22px;font-weight:800;color:#6B6B76;')}>2</div>
        </div>
        <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;')}>
          <Crown style={css('margin-bottom:3px;')} />
          <div style={css('width:60px;height:60px;border-radius:50%;background:#ECEAF1;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#3A3A42;margin-bottom:7px;border:3px solid var(--vc-accent,#FF6A1A);box-shadow:0 4px 14px rgba(255,106,26,.25);')}>{vals.lbP1.initials}</div>
          <div style={css('font-size:12.5px;font-weight:800;text-align:center;line-height:1.1;')}>{vals.lbP1.name}</div>
          <div style={css('font-size:11px;font-weight:700;color:var(--vc-accent,#FF6A1A);margin:2px 0 8px;')}>{vals.lbP1.xp} XP</div>
          <div style={css('width:100%;height:104px;background:var(--vc-accent,#FF6A1A);border-radius:14px 14px 0 0;display:flex;align-items:flex-start;justify-content:center;padding-top:10px;font-size:26px;font-weight:800;color:#fff;')}>1</div>
        </div>
        <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;')}>
          <div style={css('width:52px;height:52px;border-radius:50%;background:#ECEAF1;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:#3A3A42;margin-bottom:7px;border:3px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,.06);')}>{vals.lbP3.initials}</div>
          <div style={css('font-size:12px;font-weight:800;text-align:center;line-height:1.1;')}>{vals.lbP3.name}</div>
          <div style={css('font-size:11px;font-weight:700;color:var(--vc-accent,#FF6A1A);margin:2px 0 8px;')}>{vals.lbP3.xp} XP</div>
          <div style={css('width:100%;height:58px;background:#E6E4EC;border-radius:14px 14px 0 0;display:flex;align-items:flex-start;justify-content:center;padding-top:9px;font-size:20px;font-weight:800;color:#6B6B76;')}>3</div>
        </div>
      </div>

      {/* ranks 4–10 */}
      {vals.lbRest.map((r) => (
        <div key={r.rank} style={css(`display:flex;align-items:center;gap:12px;background:${r.bg};border:${r.border};border-radius:18px;padding:11px 13px;margin-bottom:8px;`)}>
          <div style={css('width:24px;font-size:14px;font-weight:800;color:#9A9AA4;text-align:center;flex-shrink:0;')}>{r.rank}</div>
          <div style={css(`width:40px;height:40px;border-radius:50%;background:${r.av};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:${r.avText};flex-shrink:0;`)}>{r.initials}</div>
          <div style={css('flex:1;min-width:0;')}>
            <div style={css('font-size:14px;font-weight:800;')}>{r.name}</div>
            <div style={css('font-size:11.5px;color:#8A8A95;font-weight:600;')}>{r.prop}</div>
          </div>
          <div style={css('font-size:13.5px;font-weight:800;color:var(--vc-accent,#FF6A1A);flex-shrink:0;')}>{r.xp}</div>
        </div>
      ))}

      {/* you */}
      <div style={css('display:flex;align-items:center;gap:12px;background:#18181B;border-radius:18px;padding:13px;margin-top:14px;box-shadow:0 10px 24px rgba(24,24,27,.22);')}>
        <div style={css('width:24px;font-size:14px;font-weight:800;color:#fff;text-align:center;flex-shrink:0;')}>{vals.lbMe.rank}</div>
        <div style={css('width:40px;height:40px;border-radius:50%;background:var(--vc-accent,#FF6A1A);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#fff;flex-shrink:0;')}>RK</div>
        <div style={css('flex:1;min-width:0;')}>
          <div style={css('font-size:14px;font-weight:800;color:#fff;')}>You · Riya Kapoor</div>
          <div style={css('font-size:11.5px;color:#A7A7B2;font-weight:600;')}>Zostel Rishikesh</div>
        </div>
        <div style={css('font-size:13.5px;font-weight:800;color:var(--vc-accent2,#FF8A3D);flex-shrink:0;')}>{vals.lbMe.xp}</div>
      </div>
    </div>
  )
}
