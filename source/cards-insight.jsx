// cards-insight.jsx — three insight/tips card directions @ 1080×1350.

// ─── A · NUMBERED TIPS ────────────────────────────────────────────────
// Per brand prompt: blue field, three numbered orange-numbered tip boxes
// on darker-blue panels. Classic carousel slide 1.
function InsightA({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'line' } = tweaks;
  const tips = [
    { n: '01', t: 'Auto Layout 먼저',    d: 'Frame은 항상 Auto Layout으로 시작' },
    { n: '02', t: 'Variant는 4개 이하', d: '복잡해지면 Component 분리' },
    { n: '03', t: 'Token으로 색 관리',  d: 'Hex 직접 입력은 금지' },
  ];
  return (
    <SGCard bg={SG.royal} gridOverlay={gridOverlay}>
      {/* top — accent + category */}
      <div style={{ position: 'absolute', top: 64, left: 80, right: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <SGAccent variant={accentVariant} width={56} color={SG.orange} thickness={4} />
          <div style={{ fontFamily: SG.mono, fontSize: 18, color: SG.peri, letterSpacing: '0.25em' }}>DESIGN · INSIGHT</div>
        </div>
      </div>

      {/* big headline */}
      <div style={{ position: 'absolute', top: 140, left: 80, right: 80 }}>
        <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 92, lineHeight: 0.92, color: SG.cream, letterSpacing: '-0.025em' }}>
          Figma<br/>shortcuts<br/>I live by.
        </div>
        <div style={{ marginTop: 28, fontFamily: SG.kr, fontSize: 22, color: SG.peri, lineHeight: 1.45, maxWidth: 720 }}>
          10년 차 디자이너가 매일 쓰는<br/>피그마 단축키 & 워크플로우 3가지
        </div>
      </div>

      {/* tip stack */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 140, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {tips.map((tip) => (
          <div key={tip.n} style={{ background: SG.royalDk, padding: '24px 32px', display: 'flex', gap: 28, alignItems: 'center' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 36, fontWeight: 700, color: SG.orange, minWidth: 70 }}>{tip.n}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: SG.kr, fontSize: 28, fontWeight: 700, color: SG.cream }}>{tip.t}</div>
              <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.peri, marginTop: 4 }}>{tip.d}</div>
            </div>
            <div style={{ fontFamily: SG.mono, fontSize: 18, color: SG.peri, opacity: 0.5 }}>↗</div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 16, color: SG.peri, opacity: 0.55, letterSpacing: '0.18em' }}>SWIPE →</div>
        <SGHandle color={SG.peri} opacity={0.85} />
      </div>
    </SGCard>
  );
}

// ─── B · CODE / TERMINAL ──────────────────────────────────────────────
// Tech-native, AI-native vibe — looks like an editor pane. Mono dominant.
function InsightB({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'dotted' } = tweaks;
  return (
    <SGCard bg={SG.ink} gridOverlay={gridOverlay}>
      {/* logo mark, top-left */}
      <div style={{ position: 'absolute', top: 64, left: 80 }}>
        <SGLogoMark size={56} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.royal} />
      </div>
      <div style={{ position: 'absolute', top: 80, right: 80, fontFamily: SG.mono, fontSize: 18, color: SG.peri, opacity: 0.65, letterSpacing: '0.2em' }}>
        TIP · 047
      </div>

      {/* headline */}
      <div style={{ position: 'absolute', top: 200, left: 80, right: 80 }}>
        <SGAccent variant={accentVariant} width={120} color={SG.orange} thickness={5} />
        <div style={{ marginTop: 24, fontFamily: SG.sans, fontWeight: 800, fontSize: 88, lineHeight: 0.95, color: SG.cream, letterSpacing: '-0.025em' }}>
          Vibe coding<br/>with Claude.
        </div>
      </div>

      {/* editor pane */}
      <div style={{ position: 'absolute', top: 580, left: 80, right: 80, background: '#0F0F0F', border: `1px solid ${SG.inkSoft}`, fontFamily: SG.mono }}>
        {/* fake tab bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', borderBottom: `1px solid ${SG.inkSoft}`, fontSize: 16, color: SG.peri, opacity: 0.7 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: SG.orange, display: 'inline-block' }} />
          <span>prompt.md</span>
          <span style={{ marginLeft: 'auto', opacity: 0.4 }}>UTF-8 · LF</span>
        </div>
        <pre style={{ margin: 0, padding: '28px 28px 32px', fontSize: 22, color: SG.cream, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>
<span style={{ color: SG.peri }}>{'# 좋은 프롬프트 = 좋은 디자인'}</span>{'\n\n'}
<span style={{ color: SG.orange }}>1.</span>{' '}<span style={{ color: SG.cream }}>맥락을 먼저</span> <span style={{ opacity: 0.55 }}>(브랜드, 컴포넌트, 톤)</span>{'\n'}
<span style={{ color: SG.orange }}>2.</span>{' '}<span style={{ color: SG.cream }}>제약을 명확히</span> <span style={{ opacity: 0.55 }}>(크기, 색, 폰트)</span>{'\n'}
<span style={{ color: SG.orange }}>3.</span>{' '}<span style={{ color: SG.cream }}>변형 개수 지정</span> <span style={{ opacity: 0.55 }}>(3 variations)</span>{'\n\n'}
<span style={{ color: SG.peri, opacity: 0.8 }}>{'$ '}<span style={{ color: SG.orange }}>claude</span> design --refine</span>
        </pre>
      </div>

      {/* footer */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 18, color: SG.orange, letterSpacing: '0.22em' }}>
          # AI · NATIVE
        </div>
        <SGHandle color={SG.peri} opacity={0.7} />
      </div>
    </SGCard>
  );
}

// ─── C · BIG STATEMENT ────────────────────────────────────────────────
// Single bold takeaway. Cream bg, oversize type, supporting footnote.
function InsightC({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'bar' } = tweaks;
  return (
    <SGCard bg={SG.cream} gridOverlay={gridOverlay}>
      {/* top */}
      <div style={{ position: 'absolute', top: 64, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 18, color: SG.ink, opacity: 0.55, letterSpacing: '0.22em' }}>
          ONE · THOUGHT
        </div>
        <SGLogoMark size={48} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
      </div>

      {/* the line */}
      <div style={{ position: 'absolute', left: 80, right: 80, top: 230 }}>
        <SGAccent variant={accentVariant} width={140} color={SG.orange} />
        <div style={{ marginTop: 36, fontFamily: SG.sans, fontWeight: 800, fontSize: 132, lineHeight: 0.92, color: SG.royal, letterSpacing: '-0.035em' }}>
          Design{' '}
          <span style={{ color: SG.ink }}>meets</span><br/>
          Co<span style={{ color: SG.orange }}>·</span>de.
        </div>
      </div>

      {/* annotation block */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 200 }}>
        <div style={{ width: 80, height: 2, background: SG.ink, opacity: 0.4 }} />
        <div style={{ marginTop: 22, fontFamily: SG.kr, fontSize: 26, color: SG.inkSoft, lineHeight: 1.45, maxWidth: 760 }}>
          기획부터 구현까지 한 사람이 잇는다.<br/>
          그게 1인 디자인 엔지니어가 일하는 방식.
        </div>
      </div>

      {/* footer */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 16, color: SG.inkSoft, opacity: 0.55, letterSpacing: '0.2em' }}>
          MANIFESTO · 01
        </div>
        <SGHandle color={SG.inkSoft} opacity={0.85} />
      </div>
    </SGCard>
  );
}

Object.assign(window, { InsightA, InsightB, InsightC });
