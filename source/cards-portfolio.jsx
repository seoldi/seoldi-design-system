// cards-portfolio.jsx — three portfolio card directions @ 1080×1350.
// All consume tweak props { gridOverlay, accentVariant, logoMode } so the
// canvas-wide tweaks cascade cleanly.

// ─── A · CLASSIC CREAM ────────────────────────────────────────────────
// Straight from the brand prompt: cream bg, big project image, accent
// line + category + project title + meta. Safe, on-brand, print-ready.
function PortfolioA({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'line' } = tweaks;
  return (
    <SGCard bg={SG.cream} gridOverlay={gridOverlay}>
      {/* top bar: logo + tag */}
      <div style={{ position: 'absolute', top: 64, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SGLogoMark size={88} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
        <SGTag bg={SG.royal} color={SG.cream}>Case Study</SGTag>
      </div>

      {/* image — slightly inset from edges so the cream frame reads */}
      <div style={{ position: 'absolute', top: 220, left: 80, right: 80, height: 720 }}>
        <SGImagePlaceholder label="DOOSAN WEB · HERO" bg={SG.ink} fg={SG.cream} />
        {/* corner code-tag */}
        <div style={{ position: 'absolute', top: 24, left: 24, fontFamily: SG.mono, fontSize: 18, color: SG.cream, opacity: 0.7, letterSpacing: '0.12em' }}>
          01 / 06
        </div>
      </div>

      {/* meta block */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 88 }}>
        <SGAccent variant={accentVariant} width={140} color={SG.orange} />
        <div style={{ marginTop: 24, fontFamily: SG.sans, fontSize: 20, fontWeight: 700, color: SG.orange, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Web · UI/UX
        </div>
        <div style={{ marginTop: 14, fontFamily: SG.sans, fontSize: 80, fontWeight: 800, color: SG.royal, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          Doosan<br/>Enerbility.
        </div>
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: SG.kr, fontSize: 22, color: SG.inkSoft, lineHeight: 1.4 }}>
            글로벌 에너지 기업 웹사이트 리뉴얼<br/>
            <span style={{ opacity: 0.55, fontSize: 18 }}>2025 · 8 weeks · Solo</span>
          </div>
          <SGHandle color={SG.inkSoft} opacity={0.85} />
        </div>
      </div>
    </SGCard>
  );
}

// ─── B · BAUHAUS GRID ─────────────────────────────────────────────────
// Geometric composition: blue field with circle + square + thin rule.
// Image hosted inside a circular mask. Confident, magazine-cover energy.
function PortfolioB({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'bar' } = tweaks;
  return (
    <SGCard bg={SG.royal} gridOverlay={gridOverlay}>
      {/* corner ! mark, top-right */}
      <div style={{ position: 'absolute', top: 64, right: 80 }}>
        <SGLogoMark size={68} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.peri} />
      </div>
      {/* index */}
      <div style={{ position: 'absolute', top: 80, left: 80, fontFamily: SG.mono, fontSize: 20, color: SG.peri, letterSpacing: '0.2em' }}>
        № 02 · BRANDING
      </div>

      {/* big offset circle — image inside */}
      <div style={{ position: 'absolute', top: 200, left: -60, width: 820, height: 820, borderRadius: '50%', overflow: 'hidden', background: SG.cream }}>
        <SGImagePlaceholder label="PACK SHOT" bg={SG.cream} fg={SG.royal} />
      </div>

      {/* offset orange square — pure shape, no content */}
      <div style={{ position: 'absolute', top: 740, right: 100, width: 180, height: 180, background: SG.orange }} />

      {/* thin vertical rule on right */}
      <div style={{ position: 'absolute', top: 200, bottom: 200, right: 60, width: 2, background: SG.peri, opacity: 0.45 }} />

      {/* title — vertical-baseline aligned bottom-left */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 80 }}>
        <SGAccent variant={accentVariant} width={120} color={SG.orange} />
        <div style={{ marginTop: 20, fontFamily: SG.sans, fontWeight: 800, fontSize: 92, lineHeight: 0.92, color: SG.cream, letterSpacing: '-0.025em' }}>
          Form<br/>follows<br/>code.
        </div>
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: SG.kr, fontSize: 20, color: SG.peri, maxWidth: 540, lineHeight: 1.45 }}>
            바우하우스 그리드에 디지털 네이티브 감성을 더한<br/>패키지 브랜딩 시스템 · 2025
          </div>
          <SGHandle color={SG.peri} opacity={0.85} />
        </div>
      </div>
    </SGCard>
  );
}

// ─── C · EDITORIAL MAGAZINE ───────────────────────────────────────────
// Asymmetric split — big number, half-bleed image, headline crossing
// the gutter. Density + air on the same canvas.
function PortfolioC({ tweaks = {} }) {
  const { gridOverlay, accentVariant = 'line' } = tweaks;
  return (
    <SGCard bg={SG.cream} gridOverlay={gridOverlay}>
      {/* top: wordmark + status mono */}
      <div style={{ position: 'absolute', top: 56, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <SGWordmark color={SG.ink} accent={SG.orange} size={24} />
        <div style={{ fontFamily: SG.mono, fontSize: 18, color: SG.ink, opacity: 0.55, textAlign: 'right', lineHeight: 1.6 }}>
          ISSUE 003<br/>SS · 2025
        </div>
      </div>

      {/* huge volume number — anchors composition */}
      <div style={{ position: 'absolute', top: 140, left: 70, fontFamily: SG.sans, fontWeight: 800, fontSize: 360, color: SG.royal, lineHeight: 0.85, letterSpacing: '-0.05em' }}>
        03
      </div>

      {/* half-bleed image, top-right */}
      <div style={{ position: 'absolute', top: 200, right: 0, width: 480, height: 600 }}>
        <SGImagePlaceholder label="UI · DETAIL" bg={SG.royal} fg={SG.peri} />
      </div>

      {/* cross-gutter headline */}
      <div style={{ position: 'absolute', left: 80, right: 80, top: 870 }}>
        <SGAccent variant={accentVariant} width={160} color={SG.orange} />
        <div style={{ marginTop: 20, fontFamily: SG.sans, fontWeight: 800, fontSize: 96, lineHeight: 0.92, color: SG.ink, letterSpacing: '-0.025em' }}>
          A solo<br/>studio,<br/>shipping.
        </div>
      </div>

      {/* meta strip */}
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1.5px solid ${SG.ink}`, paddingTop: 22 }}>
        <div style={{ fontFamily: SG.kr, fontSize: 20, color: SG.inkSoft, lineHeight: 1.45 }}>
          정설옥 · Design Engineer<br/>
          <span style={{ fontFamily: SG.mono, fontSize: 16, opacity: 0.6 }}>FIGMA · CLAUDE CODE · REACT</span>
        </div>
        <SGHandle color={SG.ink} opacity={0.85} />
      </div>
    </SGCard>
  );
}

Object.assign(window, { PortfolioA, PortfolioB, PortfolioC });
