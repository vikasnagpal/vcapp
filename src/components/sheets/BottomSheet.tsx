import { css } from '../../vc/css'
import type { Vals } from '../../vc/derive'
import type { Actions } from '../../vc/actions'
import { Camera, Check, ChevronRight } from '../Icons'

export default function BottomSheet({ vals, actions }: { vals: Vals; actions: Actions }) {
  return (
    <div style={css('position:absolute;inset:0;z-index:80;display:flex;flex-direction:column;justify-content:flex-end;')}>
      <div onClick={actions.closeSheet} style={css('position:absolute;inset:0;background:rgba(20,15,40,0.45);animation:vcFade .22s ease;')} />
      <div style={css('position:relative;z-index:2;background:#fff;border-radius:30px 30px 0 0;padding:20px 20px 32px;animation:vcSheetUp .32s cubic-bezier(.2,.85,.25,1);max-height:90%;overflow-y:auto;')}>
        <div style={css('width:44px;height:5px;border-radius:5px;background:#E5E3EC;margin:0 auto 18px;')} />

        {/* ── Photo ── */}
        {vals.sheetPhoto && (
          <>
            <div style={css('font-size:20px;font-weight:800;margin-bottom:4px;')}>Add proof photo</div>
            <div style={css('font-size:13px;color:#8A8A95;font-weight:600;margin-bottom:18px;')}>{vals.sheetTitle}</div>
            {vals.notCaptured && (
              <div onClick={actions.capture} style={css('cursor:pointer;border:2px dashed #DCDAE6;border-radius:20px;height:196px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;background:#F8F7FB;')}>
                <Camera size={40} sw={1.8} color="#B6B4C2" r={3.5} />
                <div style={css('font-weight:700;font-size:14px;color:#5C5C66;')}>Tap to capture or upload</div>
                <div style={css('font-size:11px;color:#A7A7B2;')}>Shared with Zostel HQ as proof</div>
              </div>
            )}
            {vals.sheetCaptured && (
              <>
                <div style={css('position:relative;border-radius:20px;height:196px;overflow:hidden;background:repeating-linear-gradient(45deg,#F1F0F5,#F1F0F5 11px,#E5E3EC 11px,#E5E3EC 22px);display:flex;align-items:center;justify-content:center;')}>
                  <div style={css('font-family:ui-monospace,monospace;font-size:12px;color:#6B6B76;background:#fff;padding:6px 11px;border-radius:9px;font-weight:600;')}>activity_photo.jpg</div>
                  <div style={css('position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;background:#34B27B;display:flex;align-items:center;justify-content:center;')}>
                    <Check size={16} sw={3} color="#fff" />
                  </div>
                </div>
                <div onClick={actions.confirmPhoto} style={css('cursor:pointer;text-align:center;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:16px;padding:15px;font-weight:700;font-size:15px;margin-top:16px;')}>Mark complete · +{vals.sheetXp} XP</div>
              </>
            )}
          </>
        )}

        {/* ── Tour ── */}
        {vals.sheetTour && (
          <>
            <div style={css('font-size:20px;font-weight:800;margin-bottom:4px;')}>House tours today</div>
            <div style={css('font-size:13px;color:#8A8A95;font-weight:600;margin-bottom:16px;')}>How many new check-ins got the welcome tour?</div>
            <div style={css('display:flex;flex-direction:column;gap:10px;')}>
              {vals.tourOptions.map((o) => (
                <div key={o.label} onClick={o.onPick} style={css('cursor:pointer;border:1.5px solid #ECEAF1;border-radius:16px;padding:15px 16px;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:space-between;')}>
                  {o.label}
                  <ChevronRight size={17} sw={2.4} color="#C7C6CF" />
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── Redeem ── */}
        {vals.sheetRedeem && (
          <>
            <div style={css('font-size:20px;font-weight:800;margin-bottom:4px;')}>Redeem XP</div>
            <div style={css('font-size:13px;color:#8A8A95;font-weight:600;margin-bottom:16px;')}>500 XP = 1 free night at any Zostel property</div>
            <div style={css('background:#F4F3F7;border-radius:16px;padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;')}>
              <span style={css('font-size:13px;font-weight:700;color:#6B6B76;')}>Your balance</span>
              <span style={css('font-size:16px;font-weight:800;color:#18181B;')}>{vals.profile.totalXP} XP</span>
            </div>
            <div style={css('display:flex;flex-direction:column;gap:10px;')}>
              {vals.redeemOptions.map((r) => (
                <div key={r.label} style={css('display:flex;align-items:center;gap:12px;border:1.5px solid #ECEAF1;border-radius:16px;padding:13px 15px;')}>
                  <div style={css('flex:1;')}>
                    <div style={css('font-size:15px;font-weight:800;')}>{r.label}</div>
                    <div style={css('font-size:11.5px;color:#8A8A95;font-weight:600;')}>{r.xp} XP</div>
                  </div>
                  <div onClick={r.onRedeem} style={css('cursor:pointer;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:13px;padding:10px 16px;font-weight:700;font-size:13px;')}>Redeem</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── NPS ── */}
        {vals.sheetNps && (
          <>
            {vals.npsOpen && (
              <>
                <div style={css('display:flex;align-items:center;gap:9px;margin-bottom:12px;')}>
                  <div style={css('width:30px;height:30px;border-radius:9px;background:var(--vc-accent-soft,#FFF1E9);display:flex;align-items:center;justify-content:center;flex-shrink:0;')}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--vc-accent,#FF6A1A)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
                    </svg>
                  </div>
                  <div style={css('font-size:11px;font-weight:800;letter-spacing:1px;color:#8A8A95;')}>WEEKLY CHECK-IN</div>
                </div>
                <div style={css('font-size:20px;font-weight:800;margin-bottom:5px;line-height:1.28;')}>How likely are you to recommend being a Vibe Curator to a friend?</div>
                <div style={css('font-size:12.5px;color:#8A8A95;font-weight:600;margin-bottom:18px;')}>Your honest take goes straight to Zostel HQ.</div>
                <div style={css('display:flex;gap:5px;margin-bottom:7px;')}>
                  {vals.npsScale.map((n) => (
                    <div key={n.label} onClick={n.onPick} style={css(`cursor:pointer;flex:1;aspect-ratio:1;border-radius:11px;background:${n.bg};color:${n.color};border:${n.border};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;transition:background .15s,color .15s;`)}>
                      {n.label}
                    </div>
                  ))}
                </div>
                <div style={css('display:flex;justify-content:space-between;font-size:10.5px;font-weight:700;color:#A7A7B2;margin-bottom:18px;')}>
                  <span>Not likely</span>
                  <span>Very likely</span>
                </div>

                {vals.npsHasScore && (
                  <div style={css('border-top:1px solid #F1F0F5;padding-top:16px;')}>
                    <div style={css('display:flex;align-items:center;gap:8px;margin-bottom:12px;')}>
                      <div style={css(`width:9px;height:9px;border-radius:50%;background:${vals.npsCatColor};`)} />
                      <span style={css('font-size:13.5px;font-weight:800;color:#18181B;')}>{vals.npsCatLabel}</span>
                    </div>
                    <div style={css('font-size:14.5px;font-weight:800;margin-bottom:11px;')}>{vals.npsFollowQ}</div>
                    <div style={css('display:flex;flex-wrap:wrap;gap:7px;margin-bottom:12px;')}>
                      {vals.npsTags.map((t) => (
                        <div key={t.label} onClick={t.onPick} style={css(`cursor:pointer;border:1.5px solid ${t.border};background:${t.bg};color:${t.color};border-radius:20px;padding:8px 13px;font-size:12.5px;font-weight:700;transition:all .15s;`)}>
                          {t.label}
                        </div>
                      ))}
                    </div>
                    <textarea
                      value={vals.npsReason}
                      onChange={actions.onNpsReason}
                      placeholder="Add anything else (optional)"
                      style={css('width:100%;min-height:64px;resize:none;border:1.5px solid #E0DEE8;border-radius:14px;padding:12px 13px;font-size:13px;font-family:inherit;outline:none;color:#18181B;box-sizing:border-box;margin-bottom:14px;')}
                    />
                    <div onClick={actions.submitNps} style={css('cursor:pointer;text-align:center;background:var(--vc-accent,#FF6A1A);color:#fff;border-radius:16px;padding:15px;font-weight:800;font-size:15px;')}>Submit feedback</div>
                  </div>
                )}
              </>
            )}

            {vals.npsDone && (
              <div style={css('text-align:center;padding:14px 6px 6px;')}>
                <div style={css('width:74px;height:74px;border-radius:50%;background:var(--vc-accent-soft,#FFF1E9);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;')}>
                  <Check size={36} sw={2.6} color="var(--vc-accent,#FF6A1A)" />
                </div>
                <div style={css('font-size:21px;font-weight:800;margin-bottom:6px;')}>Thanks, Riya!</div>
                <div style={css('font-size:13.5px;color:#8A8A95;font-weight:600;line-height:1.5;margin-bottom:20px;')}>Your weekly pulse is in — the team reviews every response. Next check-in unlocks Monday.</div>
                <div onClick={actions.closeSheet} style={css('cursor:pointer;background:#18181B;color:#fff;border-radius:16px;padding:14px;font-weight:800;font-size:15px;')}>Done</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
