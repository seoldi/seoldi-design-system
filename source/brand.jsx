// brand.jsx — Seoldi Graphics design tokens, logo, shared primitives.
// All instagram cards consume these so the system stays consistent.

const SG = {
  royal:    '#0D21A5',
  royalDk:  '#091676',  // darker blue for nested boxes on blue bg
  cream:    '#F5F0E8',
  creamDk:  '#E8E0D2',  // hairline on cream
  orange:   '#F97316',
  peri:     '#B9C7F8',
  ink:      '#1A1A1A',
  inkSoft:  '#2A2A2A',
  // type
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  sans: "'Montserrat', 'Pretendard Variable', Pretendard, sans-serif",
  kr:   "'Pretendard Variable', Pretendard, 'Montserrat', sans-serif",
};

// ─────────────────────────────────────────────────────────────────────
// Logo — the `Sd!` letter-mark (S + d 조합), inlined so we can re-color per surface.
// Layers from source SVG: orange ! stem, orange ! dot, blue S, black d.
// (Variable names kept as cdColor/footColor for backwards compat with existing
// card components — semantically: cdColor = S layer, footColor = d layer.)
// ─────────────────────────────────────────────────────────────────────
function SGLogoMark({ size = 80, cdColor = SG.royal, bangColor = SG.orange, footColor = SG.ink }) {
  return (
    <svg width={size} height={size * 350 / 479} viewBox="0 0 479 350" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      {/* ! stem */}
      <path d="M477.811 34.7586C477.811 15.562 462.261 0 443.079 0C423.897 0 408.347 15.562 408.347 34.7586V207.286C408.347 226.482 423.897 242.044 443.079 242.044C462.261 242.044 477.811 226.482 477.811 207.286V34.7586Z" fill={bangColor}/>
      {/* ! dot */}
      <path d="M443.474 349.907C462.875 349.907 478.602 334.18 478.602 314.779C478.602 295.379 462.875 279.651 443.474 279.651C424.074 279.651 408.347 295.379 408.347 314.779C408.347 334.18 424.074 349.907 443.474 349.907Z" fill={bangColor}/>
      {/* cd main */}
      <path d="M477.811 211.136C477.811 230.546 462.094 246.264 442.736 246.264C423.379 246.264 407.609 230.546 407.609 211.136C407.609 174.267 377.703 144.361 340.834 144.361C303.966 144.361 274.007 174.267 274.007 211.136C274.007 248.004 260.716 278.49 238.932 302.753C213.826 330.655 177.485 348.219 137.03 348.219C61.3417 348.219 0 286.877 0 211.189C0 135.5 61.289 74.1057 136.977 74.1057C156.387 74.1057 172.052 89.8236 172.052 109.234C172.052 128.643 156.334 144.309 136.977 144.309C100.056 144.309 70.15 174.215 70.15 211.083C70.15 247.951 100.056 277.91 136.977 277.91C173.898 277.91 203.752 248.004 203.752 211.083C203.752 174.162 217.043 143.781 238.879 119.519C263.933 91.6169 300.327 74.053 340.782 74.053C416.47 74.053 477.811 135.395 477.811 211.083V211.136Z" fill={cdColor}/>
      {/* d foot */}
      <path d="M375.909 313.038C375.909 332.448 360.191 348.166 340.834 348.166C300.379 348.166 263.985 330.602 238.932 302.701C260.768 278.438 274.007 246.317 274.007 211.083C274.007 248.005 303.913 277.911 340.834 277.911C360.244 277.911 375.909 293.629 375.909 312.986V313.038Z" fill={footColor}/>
    </svg>
  );
}

// Wordmark: "SEOLDI" + small "GRAPHICS" stacked. Pure type, no logo glyph.
function SGWordmark({ color = SG.ink, accent = SG.orange, size = 22 }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0.95, color, fontFamily: SG.sans, fontWeight: 800, letterSpacing: '0.02em' }}>
      <div style={{ fontSize: size, display: 'flex', alignItems: 'baseline' }}>
        SEOLDI<span style={{ color: accent, marginLeft: 1 }}>.</span>
      </div>
      <div style={{ fontSize: size * 0.34, letterSpacing: '0.32em', fontWeight: 600, marginTop: size * 0.18, opacity: 0.7 }}>
        GRAPHICS
      </div>
    </div>
  );
}

// Handle line — used at the bottom of most cards.
function SGHandle({ color = SG.ink, opacity = 0.7, mono = true }) {
  return (
    <div style={{ fontFamily: mono ? SG.mono : SG.sans, fontSize: 18, color, opacity, letterSpacing: '0.04em' }}>
      @seoldi.graphics
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Artboard chrome — fixes the canvas-card to 1080×1350 then scales it
// down to fit a smaller frame. Lets card components author at real
// instagram resolution (so px values match what gets posted).
// ─────────────────────────────────────────────────────────────────────
function SGCard({ children, bg = SG.cream, w = 1080, h = 1350, displayW = 432, gridOverlay, style }) {
  const scale = displayW / w;
  return (
    <div style={{ width: displayW, height: h * scale, position: 'relative', overflow: 'hidden', background: bg, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
      <div style={{ width: w, height: h, transformOrigin: 'top left', transform: `scale(${scale})`, position: 'relative', ...style }}>
        {children}
        {gridOverlay ? <SGGrid /> : null}
      </div>
    </div>
  );
}

// 12-column overlay for inspecting layout. Toggled via tweak.
function SGGrid() {
  const cols = 12;
  const margin = 80;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', padding: `0 ${margin}px` }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16, width: '100%', height: '100%' }}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} style={{ background: 'rgba(249,115,22,0.07)', borderLeft: '1px dashed rgba(249,115,22,0.35)', borderRight: '1px dashed rgba(249,115,22,0.35)' }} />
        ))}
      </div>
      {/* baselines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to bottom, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '100% 80px' }} />
    </div>
  );
}

// Orange accent line — variants for "regular | bar | dotted"
function SGAccent({ variant = 'line', width = 120, color = SG.orange, thickness = 4 }) {
  if (variant === 'bar') {
    return <div style={{ width, height: thickness * 3, background: color }} />;
  }
  if (variant === 'dotted') {
    return (
      <div style={{ display: 'flex', gap: thickness * 1.5 }}>
        {Array.from({ length: Math.max(3, Math.round(width / (thickness * 3))) }).map((_, i) => (
          <div key={i} style={{ width: thickness, height: thickness, borderRadius: '50%', background: color }} />
        ))}
      </div>
    );
  }
  return <div style={{ width, height: thickness, background: color }} />;
}

// Striped placeholder for "your work goes here" — never invent imagery.
function SGImagePlaceholder({ label = 'PROJECT IMAGE', bg = SG.ink, fg = SG.cream, style }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      backgroundColor: bg,
      backgroundImage: `repeating-linear-gradient(135deg, ${fg}0F 0 24px, transparent 24px 48px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{ fontFamily: SG.mono, fontSize: 22, letterSpacing: '0.3em', color: fg, opacity: 0.55 }}>
        [{label}]
      </div>
    </div>
  );
}

// Tag pill — for category labels on cards
function SGTag({ children, bg = SG.royal, color = SG.cream, size = 22 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', padding: `${size * 0.5}px ${size * 1.1}px`,
      background: bg, color, fontFamily: SG.sans, fontWeight: 700, fontSize: size,
      letterSpacing: '0.14em', textTransform: 'uppercase',
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { SG, SGLogoMark, SGWordmark, SGHandle, SGCard, SGAccent, SGImagePlaceholder, SGTag, SGGrid });
