import { css } from '../../vc/css'

export default function Celebration({ xp }: { xp: number }) {
  return (
    <div style={css('position:absolute;inset:0;z-index:95;display:flex;align-items:center;justify-content:center;pointer-events:none;')}>
      <div style={css('position:absolute;inset:0;background:rgba(20,15,40,0.16);animation:vcFade .2s ease;')} />
      <div style={css('position:absolute;width:150px;height:150px;border-radius:50%;border:3px solid var(--vc-accent,#FF6A1A);animation:vcRing 1.1s ease-out forwards;')} />
      <div style={css('position:absolute;width:150px;height:150px;border-radius:50%;border:2px solid #FFB07A;animation:vcRing 1.1s .15s ease-out forwards;')} />
      <div style={css('position:relative;width:150px;height:150px;border-radius:50%;background:#fff;border:3px solid var(--vc-accent,#FF6A1A);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 16px 40px rgba(255,106,26,.3);animation:vcStampIn .55s cubic-bezier(.2,1.1,.3,1) both;')}>
        <div style={css('position:absolute;inset:9px;border:2px dashed rgba(255,106,26,.38);border-radius:50%;')} />
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--vc-accent,#FF6A1A)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <div style={css('font-size:11px;font-weight:800;letter-spacing:1.6px;color:var(--vc-accent,#FF6A1A);margin-top:5px;')}>LOGGED</div>
        <div style={css('font-size:16px;font-weight:800;color:#18181B;')}>+{xp} XP</div>
      </div>
    </div>
  )
}
