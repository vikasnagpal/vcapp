import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'

// The big animated hero weather scene. One of sun / partly / cloud / rain,
// ported verbatim (decorative div trees) from the design.

export default function WeatherScene({ vals }: { vals: Vals }) {
  return (
    <div style={css('position:absolute;right:14px;top:0;bottom:0;width:120px;z-index:1;display:flex;align-items:center;justify-content:center;')}>
      {vals.heroWxSun && (
        <div style={css('position:relative;width:116px;height:112px;display:flex;align-items:center;justify-content:center;')}>
          <div style={css('position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:104px;height:104px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.30),rgba(255,255,255,0) 68%);')} />
          <svg width="112" height="112" viewBox="0 0 112 112" style={css('position:absolute;inset:0;margin:auto;animation:vcSpin 30s linear infinite;opacity:.85;')}>
            <g stroke="#FFF4DB" strokeWidth="4.2" strokeLinecap="round">
              <line x1="56" y1="6" x2="56" y2="17" /><line x1="56" y1="95" x2="56" y2="106" />
              <line x1="6" y1="56" x2="17" y2="56" /><line x1="95" y1="56" x2="106" y2="56" />
              <line x1="20.7" y1="20.7" x2="28.5" y2="28.5" /><line x1="83.5" y1="83.5" x2="91.3" y2="91.3" />
              <line x1="20.7" y1="91.3" x2="28.5" y2="83.5" /><line x1="83.5" y1="28.5" x2="91.3" y2="20.7" />
            </g>
          </svg>
          <div style={css('position:relative;width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #FFFEF8, #FFE59C 56%, #FFCE63);box-shadow:0 8px 22px rgba(214,118,30,.45),0 0 30px rgba(255,239,200,.65);animation:vcThrob 3.8s ease-in-out infinite;')} />
        </div>
      )}

      {vals.heroWxPartly && (
        <div style={css('position:relative;width:116px;height:112px;')}>
          <div style={css('position:absolute;left:-4px;top:8px;width:48px;height:26px;opacity:.5;animation:vcDrift 9s ease-in-out infinite;filter:drop-shadow(0 4px 7px rgba(150,70,20,.16));')}>
            <div style={css('position:absolute;bottom:0;left:3px;width:42px;height:16px;border-radius:10px;background:linear-gradient(180deg,#FFF7F0,#FBE3D1);')} />
            <div style={css('position:absolute;bottom:7px;left:6px;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#FFFFFF,#FBE6D6);')} />
            <div style={css('position:absolute;bottom:9px;left:20px;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#FFFFFF,#F8DEC9);')} />
          </div>
          <div style={css('position:absolute;right:16px;top:8px;width:54px;height:54px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #FFFEF8, #FFE49A 58%, #FFCD66);box-shadow:0 0 26px rgba(255,238,195,.7);animation:vcThrob 3.8s ease-in-out infinite;')} />
          <div style={css('position:absolute;left:6px;bottom:14px;width:100px;height:58px;animation:vcBob 5s ease-in-out infinite;filter:drop-shadow(0 10px 14px rgba(140,60,15,.28));')}>
            <div style={css('position:absolute;bottom:0;left:8px;width:84px;height:30px;border-radius:16px;background:linear-gradient(180deg,#FFF7F0,#FADFCB);')} />
            <div style={css('position:absolute;bottom:11px;left:12px;width:40px;height:40px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#FFFFFF,#FBE6D6);')} />
            <div style={css('position:absolute;bottom:15px;left:36px;width:50px;height:50px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#FFFFFF,#F8DEC9);')} />
            <div style={css('position:absolute;bottom:9px;left:62px;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 40% 34%,#FFFFFF,#FBE6D6);')} />
          </div>
        </div>
      )}

      {vals.heroWxCloud && (
        <div style={css('position:relative;width:116px;height:112px;display:flex;align-items:center;justify-content:center;')}>
          <div style={css('position:absolute;left:2px;top:20px;width:58px;height:30px;opacity:.55;animation:vcDrift 8s ease-in-out infinite;filter:drop-shadow(0 5px 8px rgba(150,70,20,.16));')}>
            <div style={css('position:absolute;bottom:0;left:4px;width:50px;height:18px;border-radius:11px;background:linear-gradient(180deg,#FFF7F0,#FBE3D1);')} />
            <div style={css('position:absolute;bottom:8px;left:7px;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#FFFFFF,#FBE6D6);')} />
            <div style={css('position:absolute;bottom:10px;left:24px;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#FFFFFF,#F8DEC9);')} />
          </div>
          <div style={css('position:relative;width:104px;height:60px;margin-top:18px;animation:vcBob 5s ease-in-out infinite;filter:drop-shadow(0 11px 16px rgba(140,60,15,.30));')}>
            <div style={css('position:absolute;bottom:0;left:9px;width:88px;height:31px;border-radius:17px;background:linear-gradient(180deg,#FFF7F0,#FADFCB);')} />
            <div style={css('position:absolute;bottom:12px;left:14px;width:42px;height:42px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#FFFFFF,#FBE6D6);')} />
            <div style={css('position:absolute;bottom:16px;left:38px;width:54px;height:54px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#FFFFFF,#F8DEC9);')} />
            <div style={css('position:absolute;bottom:9px;left:66px;width:36px;height:36px;border-radius:50%;background:radial-gradient(circle at 40% 34%,#FFFFFF,#FBE6D6);')} />
          </div>
        </div>
      )}

      {vals.heroWxRain && (
        <div style={css('position:relative;width:116px;height:112px;')}>
          <div style={css('position:absolute;left:8px;top:12px;width:100px;height:58px;animation:vcBob 5s ease-in-out infinite;filter:drop-shadow(0 10px 14px rgba(140,60,15,.30));')}>
            <div style={css('position:absolute;bottom:0;left:8px;width:84px;height:30px;border-radius:16px;background:linear-gradient(180deg,#FFF7F0,#FADFCB);')} />
            <div style={css('position:absolute;bottom:11px;left:12px;width:40px;height:40px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#FFFFFF,#FBE6D6);')} />
            <div style={css('position:absolute;bottom:15px;left:36px;width:50px;height:50px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#FFFFFF,#F8DEC9);')} />
            <div style={css('position:absolute;bottom:9px;left:62px;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 40% 34%,#FFFFFF,#FBE6D6);')} />
          </div>
          <div style={css('position:absolute;top:74px;left:38px;width:6px;height:15px;border-radius:3px 3px 5px 5px;background:linear-gradient(180deg,rgba(255,255,255,.5),#FFFFFF);animation:vcDrop 1.3s linear infinite;')} />
          <div style={css('position:absolute;top:74px;left:58px;width:6px;height:15px;border-radius:3px 3px 5px 5px;background:linear-gradient(180deg,rgba(255,255,255,.5),#FFFFFF);animation:vcDrop 1.3s .45s linear infinite;')} />
          <div style={css('position:absolute;top:74px;left:78px;width:6px;height:15px;border-radius:3px 3px 5px 5px;background:linear-gradient(180deg,rgba(255,255,255,.5),#FFFFFF);animation:vcDrop 1.3s .9s linear infinite;')} />
        </div>
      )}

      <div style={css('position:absolute;right:6px;bottom:9px;font-size:11px;font-weight:700;color:#fff;opacity:.92;text-align:right;line-height:1.5;')}>
        {vals.heroWxLabel}
        <br />
        {vals.heroWxTemp}
      </div>
    </div>
  )
}
