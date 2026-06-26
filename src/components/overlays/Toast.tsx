import { css } from '../../vc/css'

export default function Toast({ text }: { text: string }) {
  return (
    <div style={css('position:absolute;left:50%;bottom:104px;z-index:90;transform:translateX(-50%);background:#18181B;color:#fff;padding:12px 18px;border-radius:16px;font-weight:700;font-size:13.5px;white-space:nowrap;box-shadow:0 12px 30px rgba(0,0,0,.32);animation:vcChipIn .3s ease;')}>
      {text}
    </div>
  )
}
