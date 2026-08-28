// cards-mood.jsx — three "daily mood" cards @ 1080×1350.
// Editorial / personal voice. Less product, more presence.

// ─── A · BIG QUOTE ────────────────────────────────────────────────────
// On-brand: blue bg, oversize quote, mark in corner.
function MoodA({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'line' } = tweaks;
  return (
    <SGCard bg={SG.royal} gridOverlay={gridOverlay}>
      {/* giant opening quote glyph */}
      <div style={{ position: 'absolute', top: 80, left: 60, fontFamily: 'Georgia, serif', fontSize: 360, lineHeight: 0.7, color: SG.orange, fontStyle: 'italic' }}>
        “
      </div>

      {/* quote — vertically centered-ish */}
      <div style={{ position: 'absolute', left: 80, right: 80, top: 360 }}>
        <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 76, lineHeight: 1.08, color: SG.cream, letterSpacing: '-0.02em', textWrap: 'pretty' }}>
          Good design is a thousand <span style={{ color: SG.orange }}>no</span>'s, and then one <span style={{ color: SG.orange }}>yes</span>.
        </div>
        <div style={{ marginTop: 36 }}>
          <SGAccent variant={accentVariant} width={100} color={SG.orange} />
        </div>
        <div style={{ marginTop: 26, fontFamily: SG.kr, fontSize: 24, color: SG.peri, lineHeight: 1.5 }}>
          밤 11시, 또 다시 시안을 엎으면서<br/>
          되뇌는 한 줄.
        </div>
      </div>

      {/* sig — bottom right */}
      <div style={{ position: 'absolute', right: 80, bottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18 }}>
        <SGLogoMark size={56} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.peri} />
        <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 22, color: SG.peri, letterSpacing: '0.06em' }}>
          정설옥 · DESIGN ENGINEER
        </div>
        <SGHandle color={SG.peri} opacity={0.7} />
      </div>
    </SGCard>
  );
}

// ─── B · LATE NIGHT (DARK) ────────────────────────────────────────────
// Black bg, cinematic image-band across the middle, body below.
// Personal/vlog-y. Lets the dark base in the brand breathe.
function MoodB({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'dotted' } = tweaks;
  return (
    <SGCard bg={SG.ink} gridOverlay={gridOverlay}>
      {/* top meta */}
      <div style={{ position: 'absolute', top: 72, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 18, color: SG.peri, letterSpacing: '0.22em', opacity: 0.7 }}>
        <span>02 · 35 · DIARY</span>
        <span>SEOUL · 23:47</span>
      </div>

      {/* image band */}
      <div style={{ position: 'absolute', top: 180, left: 0, right: 0, height: 540 }}>
        <SGImagePlaceholder label="DESK · NIGHT" bg={SG.ink} fg={SG.orange} />
        {/* warm orange wash — overlay color so the photo dropped in still reads warm */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(249,115,22,0.18) 100%)' }} />
      </div>

      {/* body */}
      <div style={{ position: 'absolute', left: 80, right: 80, top: 780 }}>
        <SGAccent variant={accentVariant} width={160} color={SG.orange} thickness={4} />
        <div style={{ marginTop: 28, fontFamily: SG.sans, fontWeight: 800, fontSize: 78, lineHeight: 0.96, color: SG.cream, letterSpacing: '-0.02em' }}>
          Late night,<br/>last commit.
        </div>
        <div style={{ marginTop: 22, fontFamily: SG.kr, fontSize: 22, color: SG.peri, lineHeight: 1.5, maxWidth: 800, opacity: 0.85 }}>
          마감 D-1. 커피 4잔, 시안 12개, 노래 한 곡 반복.<br/>
          1인 사업자의 밤은 길고, 결정은 빠르다.
        </div>
      </div>

      {/* footer */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 16, color: SG.orange, letterSpacing: '0.2em' }}>
          # SOLO · STUDIO
        </div>
        <SGHandle color={SG.peri} opacity={0.65} />
      </div>
    </SGCard>
  );
}

// ─── C · MANIFESTO LIST ───────────────────────────────────────────────
// Cream/blue split with a hand-drawn-feeling numbered list of values.
// "Profile/CTA" use case from the brand mix.
function MoodC({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'bar' } = tweaks;
  const items = [
    '기획은 디자인의 일부다.',
    '구현 못 하면 디자인 아니다.',
    'AI는 동료, 도구, 가속기.',
    '명함 한 장에 10년이 담긴다.',
  ];
  return (
    <SGCard bg={SG.cream} gridOverlay={gridOverlay}>
      {/* top half — cream */}
      <div style={{ position: 'absolute', top: 72, left: 80, right: 80 }}>
        <SGWordmark color={SG.ink} accent={SG.orange} size={24} />
        <div style={{ marginTop: 56 }}>
          <SGAccent variant={accentVariant} width={120} color={SG.orange} />
        </div>
        <div style={{ marginTop: 28, fontFamily: SG.sans, fontWeight: 800, fontSize: 108, lineHeight: 0.92, color: SG.royal, letterSpacing: '-0.03em' }}>
          What I<br/>believe.
        </div>
        <div style={{ marginTop: 20, fontFamily: SG.kr, fontSize: 22, color: SG.inkSoft }}>
          1인 디자인 스튜디오의 작업 원칙 네 가지.
        </div>
      </div>

      {/* bottom half — blue list */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 560, background: SG.royal, padding: '52px 80px 0' }}>
        {items.map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 28, padding: '18px 0', borderBottom: i < items.length - 1 ? `1px solid rgba(185,199,248,0.25)` : 'none' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 22, color: SG.orange, fontWeight: 700, minWidth: 56 }}>0{i + 1}</div>
            <div style={{ flex: 1, fontFamily: SG.kr, fontSize: 30, fontWeight: 600, color: SG.cream, letterSpacing: '-0.005em' }}>{line}</div>
          </div>
        ))}
        <div style={{ position: 'absolute', left: 80, right: 80, bottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 18, color: SG.peri, letterSpacing: '0.18em' }}>
            DM FOR PROJECT →
          </div>
          <SGHandle color={SG.peri} opacity={0.9} />
        </div>
      </div>
    </SGCard>
  );
}

Object.assign(window, { MoodA, MoodB, MoodC });
