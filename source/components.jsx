// components.jsx — Seoldi Graphics Web Component Library
// seoldi.com · seoldi-ops · 클라이언트 납품물에 바로 복사해서 쓰는 컴포넌트 레퍼런스.
// brand.jsx의 SG 토큰과 SGLogoMark 공유.

const COMP_PAGE_W = 1280;
const COMP_PAD = 64;

// ─── Copy-to-clipboard hook ──────────────────────────────────────────────────
function useCopy(text) {
  const [copied, setCopied] = React.useState(false);
  const copy = React.useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [text]);
  return [copied, copy];
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function CompSection({ id, no, title, krTitle, children, bg = SG.cream }) {
  const isDark = bg === SG.ink;
  return (
    <section id={id} style={{ background: bg, padding: `80px ${COMP_PAD}px` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 52 }}>
        <div style={{ fontFamily: SG.mono, fontSize: 13, color: SG.orange, fontWeight: 700, letterSpacing: '0.24em' }}>{no}</div>
        <div style={{ flex: 1, height: 1, background: isDark ? 'rgba(185,199,248,0.15)' : SG.creamDk }} />
        <div>
          <span style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 28, color: isDark ? SG.cream : SG.royal, letterSpacing: '-0.015em' }}>{title}</span>
          <span style={{ fontFamily: SG.kr, fontSize: 14, color: isDark ? SG.peri : SG.inkSoft, marginLeft: 10, opacity: 0.75 }}>{krTitle}</span>
        </div>
      </div>
      {children}
    </section>
  );
}

// ─── Code block with copy button ─────────────────────────────────────────────
function CodeBlock({ code, lang = 'html' }) {
  const [copied, copy] = useCopy(code);
  return (
    <div style={{ position: 'relative', background: SG.ink, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 18px', borderBottom: '1px solid rgba(185,199,248,0.1)' }}>
        <span style={{ fontFamily: SG.mono, fontSize: 10, color: SG.peri, letterSpacing: '0.22em', opacity: 0.55 }}>{lang.toUpperCase()}</span>
        <button
          onClick={copy}
          style={{ fontFamily: SG.mono, fontSize: 11, color: copied ? SG.orange : SG.peri, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.18em', padding: '3px 8px', transition: 'color 0.2s', fontWeight: copied ? 700 : 400 }}
        >
          {copied ? '✓ COPIED' : 'COPY'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px 18px', fontFamily: SG.mono, fontSize: 13, color: SG.cream, overflowX: 'auto', lineHeight: 1.65, whiteSpace: 'pre', wordBreak: 'normal' }}>{code}</pre>
    </div>
  );
}

// ─── Preview + code composite card ───────────────────────────────────────────
function CompCard({ label, preview, code, lang = 'html', previewBg = '#FFFFFF' }) {
  return (
    <div style={{ border: `1px solid ${SG.creamDk}`, borderRadius: 14, overflow: 'hidden' }}>
      {label && (
        <div style={{ padding: '9px 18px', borderBottom: `1px solid ${SG.creamDk}`, background: '#FAFAF8', fontFamily: SG.mono, fontSize: 10, color: SG.royal, letterSpacing: '0.22em', fontWeight: 700 }}>
          {label}
        </div>
      )}
      <div style={{ padding: '28px 24px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, minHeight: 88, background: previewBg }}>
        {preview}
      </div>
      {code && <CodeBlock code={code} lang={lang} />}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 01 · COLORS
// ══════════════════════════════════════════════════════════════════════════════

const COLOR_TOKENS = [
  { name: 'Royal Blue',  hex: '#0D21A5', cssVar: '--sg-royal',    role: 'PRIMARY',  ratio: '60%', note: '주 배경, 강조 영역, 로고 S', fg: SG.cream },
  { name: 'Cream',       hex: '#F5F0E8', cssVar: '--sg-cream',    role: 'BASE',     ratio: '25%', note: '기본 배경, 반전 텍스트', fg: SG.ink, bordered: true },
  { name: 'Orange',      hex: '#F97316', cssVar: '--sg-orange',   role: 'ACCENT',   ratio: '15%', note: '느낌표 · CTA · 강조 라인, 배경 금지', fg: SG.cream },
  { name: 'Periwinkle',  hex: '#B9C7F8', cssVar: '--sg-peri',     role: 'SUPPORT',  ratio: '',    note: '블루 배경 위 서브 텍스트', fg: SG.royal },
  { name: 'Ink Black',   hex: '#1A1A1A', cssVar: '--sg-ink',      role: 'DARK',     ratio: '',    note: '다크 베이스, 본문 텍스트', fg: SG.cream },
  { name: 'Royal Dark',  hex: '#091676', cssVar: '--sg-royal-dk', role: 'SUB',      ratio: '',    note: '블루 위 중첩 박스', fg: SG.peri },
  { name: 'Cream Dark',  hex: '#E8E0D2', cssVar: '--sg-cream-dk', role: 'SUB',      ratio: '',    note: '크림 배경 구분선·테두리', fg: SG.ink },
  { name: 'Ink Soft',    hex: '#2A2A2A', cssVar: '--sg-ink-soft', role: 'SUB',      ratio: '',    note: '인크 위 중첩 박스', fg: SG.cream },
];

function ColorSwatch({ c }) {
  const [copiedHex, copyHex] = useCopy(c.hex);
  const [copiedVar, copyVar] = useCopy(`var(${c.cssVar})`);
  return (
    <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 12, overflow: 'hidden' }}>
      <button
        onClick={copyHex}
        title={`클릭: ${c.hex} 복사`}
        style={{ display: 'block', width: '100%', height: 100, background: c.hex, border: 'none', cursor: 'pointer', position: 'relative', borderBottom: c.bordered ? `1px solid ${SG.creamDk}` : 'none' }}
      >
        {copiedHex && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.22)' }}>
            <span style={{ fontFamily: SG.mono, fontSize: 14, color: '#fff', fontWeight: 700, letterSpacing: '0.1em' }}>✓ COPIED</span>
          </div>
        )}
      </button>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 13, color: SG.ink, marginBottom: 6 }}>{c.name}</div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          <button onClick={copyHex} style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, background: 'rgba(13,33,165,0.05)', border: 'none', padding: '3px 7px', borderRadius: 4, cursor: 'pointer', letterSpacing: '0.06em' }}>
            {copiedHex ? '✓' : c.hex}
          </button>
          <button onClick={copyVar} style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, background: 'rgba(13,33,165,0.08)', border: 'none', padding: '3px 7px', borderRadius: 4, cursor: 'pointer', letterSpacing: '0.04em' }}>
            {copiedVar ? '✓' : c.cssVar}
          </button>
        </div>
        <div style={{ marginTop: 7, fontFamily: SG.kr, fontSize: 11, color: SG.inkSoft, lineHeight: 1.5, opacity: 0.8 }}>{c.note}</div>
        {c.ratio && (
          <div style={{ marginTop: 6, display: 'inline-block', fontFamily: SG.mono, fontSize: 10, color: SG.orange, background: 'rgba(249,115,22,0.08)', padding: '2px 7px', borderRadius: 3, letterSpacing: '0.1em', fontWeight: 700 }}>
            {c.role} · {c.ratio}
          </div>
        )}
      </div>
    </div>
  );
}

function CompColors() {
  return (
    <CompSection id="colors" no="01 · COLORS" title="Color Tokens" krTitle="컬러 토큰">
      <div style={{ marginBottom: 24, padding: '12px 18px', background: 'rgba(249,115,22,0.06)', border: `1px solid rgba(249,115,22,0.18)`, borderRadius: 9, fontFamily: SG.kr, fontSize: 13, color: SG.ink, lineHeight: 1.6 }}>
        스와치 클릭 → HEX 복사 &nbsp;·&nbsp; CSS 변수 버튼 → <code style={{ fontFamily: SG.mono, color: SG.royal, fontSize: 12 }}>var(--sg-*)</code> 복사
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {COLOR_TOKENS.map(c => <ColorSwatch key={c.cssVar} c={c} />)}
      </div>
      <div style={{ marginTop: 28, borderRadius: 10, overflow: 'hidden', height: 44, display: 'flex', border: `1px solid ${SG.creamDk}` }}>
        <div style={{ flex: 60, background: SG.royal, display: 'flex', alignItems: 'center', padding: '0 20px', fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.18em' }}>60% ROYAL BLUE</div>
        <div style={{ flex: 25, background: SG.cream, display: 'flex', alignItems: 'center', padding: '0 16px', fontFamily: SG.mono, fontSize: 12, color: SG.ink, letterSpacing: '0.18em' }}>25% CREAM</div>
        <div style={{ flex: 15, background: SG.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SG.mono, fontSize: 11, color: SG.cream, letterSpacing: '0.14em' }}>15%</div>
      </div>
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 02 · TYPOGRAPHY
// ══════════════════════════════════════════════════════════════════════════════

const TYPE_SCALE = [
  { name: 'Display', size: 96, weight: 800, cssVar: '--sg-text-display', use: '카드 헤드라인 · 슬로건', sample: 'Design.' },
  { name: 'H1',      size: 64, weight: 800, cssVar: '--sg-text-h1',      use: '섹션 제목', sample: 'Brand System.' },
  { name: 'H2',      size: 40, weight: 700, cssVar: '--sg-text-h2',      use: '서브섹션', sample: 'Component Library' },
  { name: 'Body L',  size: 24, weight: 600, cssVar: '--sg-text-body-l',  use: '리드 본문', sample: '기획부터 구현까지.' },
  { name: 'Body',    size: 16, weight: 400, cssVar: '--sg-text-body',    use: '기본 본문', sample: 'Design meets Code. 설디그래픽스.' },
  { name: 'Caption', size: 12, weight: 600, cssVar: '--sg-text-caption', use: '메타 · 라벨', sample: 'SEOLDI · GRAPHICS · 2025' },
];

function CompTypography() {
  return (
    <CompSection id="type" no="02 · TYPOGRAPHY" title="Type Scale" krTitle="타입 스케일" bg={SG.ink}>
      {/* Font pair showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 32 }}>
        {[
          { label: 'PRIMARY · LATIN', font: SG.sans, name: 'Montserrat', weights: '800 / 700 / 400', sample: 'Aa', bg: SG.royal, fg: SG.cream, sub: SG.peri },
          { label: 'SECONDARY · KR',  font: SG.kr,   name: 'Pretendard', weights: '700 / 500 / 400', sample: '가나다', bg: SG.cream, fg: SG.royal, sub: SG.inkSoft },
          { label: 'ACCENT · CODE',   font: SG.mono, name: 'JetBrains Mono', weights: '700 / 400', sample: '</>', bg: SG.inkSoft, fg: SG.orange, sub: SG.peri },
        ].map(f => (
          <div key={f.name} style={{ background: f.bg, borderRadius: 14, padding: '26px 26px 24px', border: f.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 10, color: f.sub, letterSpacing: '0.24em', opacity: 0.75 }}>{f.label}</div>
            <div style={{ fontFamily: f.font, fontWeight: 800, fontSize: 68, lineHeight: 1, color: f.fg, letterSpacing: '-0.02em', margin: '12px 0 8px' }}>{f.sample}</div>
            <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 17, color: f.fg }}>{f.name}</div>
            <div style={{ fontFamily: SG.mono, fontSize: 11, color: f.sub, opacity: 0.65, marginTop: 4, letterSpacing: '0.12em' }}>fw {f.weights}</div>
          </div>
        ))}
      </div>

      {/* Scale table */}
      <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14, overflow: 'hidden' }}>
        <div style={{ padding: '10px 24px', borderBottom: `1px solid ${SG.creamDk}`, display: 'grid', gridTemplateColumns: '80px 70px 1fr 160px 160px', gap: 16, fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, letterSpacing: '0.2em' }}>
          <span>SIZE</span><span>LEVEL</span><span>SAMPLE</span><span>CSS VAR</span><span>USE</span>
        </div>
        {TYPE_SCALE.map((t, i) => {
          const displaySize = Math.min(t.size, 52);
          return (
            <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '80px 70px 1fr 160px 160px', alignItems: 'center', gap: 16, padding: '14px 24px', borderTop: i === 0 ? 'none' : `1px solid ${SG.creamDk}` }}>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.14em', fontWeight: 700 }}>{t.size}px</div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.65, letterSpacing: '0.1em' }}>{t.name}</div>
              <div style={{ fontFamily: SG.sans, fontWeight: t.weight, fontSize: displaySize, color: SG.ink, lineHeight: 1, letterSpacing: '-0.015em', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{t.sample}</div>
              <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{t.cssVar}</div>
              <div style={{ fontFamily: SG.kr, fontSize: 12, color: SG.inkSoft }}>{t.use}</div>
            </div>
          );
        })}
      </div>
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 03 · BUTTONS
// ══════════════════════════════════════════════════════════════════════════════

const BTN_BASE_STYLE = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  gap: 8, padding: '12px 24px', border: 'none', borderRadius: 100,
  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
  letterSpacing: '0.05em', cursor: 'pointer', textDecoration: 'none', lineHeight: 1,
};

const BUTTON_VARIANTS = [
  {
    label: 'PRIMARY · 주요 CTA',
    class: 'sg-btn sg-btn-primary',
    style: { background: SG.royal, color: SG.cream },
    note: '가장 중요한 행동에만 사용. 한 화면에 1개 권장.',
  },
  {
    label: 'OUTLINE · 보조 액션',
    class: 'sg-btn sg-btn-outline',
    style: { background: 'transparent', color: SG.royal, border: `2px solid ${SG.royal}` },
    note: 'Primary와 함께 사용하는 보조 액션.',
  },
  {
    label: 'GHOST · 연한 보조',
    class: 'sg-btn sg-btn-ghost',
    style: { background: 'transparent', color: SG.ink, border: `2px solid ${SG.creamDk}` },
    note: '배경 없이 가장 가벼운 액션.',
  },
  {
    label: 'DARK · 다크 배경용',
    class: 'sg-btn sg-btn-dark',
    style: { background: SG.ink, color: SG.cream },
    note: '블루/크림 배경 위에서 강한 대비.',
  },
  {
    label: 'ORANGE · Orange 전용',
    class: 'sg-btn sg-btn-orange',
    style: { background: 'transparent', color: SG.orange, border: `2px solid ${SG.orange}` },
    note: 'Orange 규칙 준수 — CTA·강조 한정. 배경 사용 금지.',
  },
];

const BTN_FULL_CSS = `/* sg-components.css 로드 후 사용 */

/* 기본 버튼 */
<button class="sg-btn sg-btn-primary">Primary</button>
<button class="sg-btn sg-btn-outline">Outline</button>
<button class="sg-btn sg-btn-ghost">Ghost</button>
<button class="sg-btn sg-btn-dark">Dark</button>
<button class="sg-btn sg-btn-orange">Orange</button>

/* 크기 조합 */
<button class="sg-btn sg-btn-primary sg-btn-sm">Small</button>
<button class="sg-btn sg-btn-primary">Default</button>
<button class="sg-btn sg-btn-primary sg-btn-lg">Large</button>`;

function CompButtons() {
  return (
    <CompSection id="buttons" no="03 · BUTTONS" title="Buttons" krTitle="버튼">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {BUTTON_VARIANTS.map(v => (
          <CompCard
            key={v.label}
            label={v.label}
            preview={
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <button style={{ ...BTN_BASE_STYLE, ...v.style, padding: '8px 16px', fontSize: 12 }}>Small</button>
                <button style={{ ...BTN_BASE_STYLE, ...v.style }}>Default</button>
                <button style={{ ...BTN_BASE_STYLE, ...v.style, padding: '16px 36px', fontSize: 16 }}>Large</button>
              </div>
            }
            code={`<button class="${v.class}">\n  버튼 텍스트\n</button>`}
          />
        ))}
        {/* Note card */}
        <div style={{ background: '#FFF9F6', border: `1px solid rgba(249,115,22,0.18)`, borderRadius: 14, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em', fontWeight: 700, marginBottom: 10 }}>SIZE MODIFIER</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
            <button style={{ ...BTN_BASE_STYLE, background: SG.royal, color: SG.cream, padding: '8px 16px', fontSize: 12 }}>Small</button>
            <button style={{ ...BTN_BASE_STYLE, background: SG.royal, color: SG.cream }}>Default</button>
            <button style={{ ...BTN_BASE_STYLE, background: SG.royal, color: SG.cream, padding: '16px 36px', fontSize: 16 }}>Large</button>
          </div>
          <div style={{ fontFamily: SG.kr, fontSize: 12, color: SG.inkSoft, lineHeight: 1.6 }}>
            <code style={{ fontFamily: SG.mono, color: SG.royal, fontSize: 11 }}>.sg-btn-sm</code> / <code style={{ fontFamily: SG.mono, color: SG.royal, fontSize: 11 }}>.sg-btn-lg</code><br/>
            모든 variant에 조합 가능.
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, letterSpacing: '0.2em', fontWeight: 700, marginBottom: 8 }}>ALL VARIANTS · HTML</div>
        <CodeBlock code={BTN_FULL_CSS} />
      </div>
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 04 · BADGES & TAGS
// ══════════════════════════════════════════════════════════════════════════════

const TAG_BASE_STYLE = {
  display: 'inline-flex', alignItems: 'center',
  padding: '4px 12px', borderRadius: 4,
  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
  letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1,
};
const PILL_STYLE = { ...TAG_BASE_STYLE, borderRadius: 100, padding: '5px 14px' };

const BADGE_SECTIONS = [
  {
    label: 'SOLID · 채운 태그',
    items: [
      { text: 'UI/UX',     style: { ...TAG_BASE_STYLE, background: SG.royal,  color: SG.cream }, cls: 'sg-tag sg-tag-royal' },
      { text: 'BRANDING',  style: { ...TAG_BASE_STYLE, background: SG.ink,    color: SG.cream }, cls: 'sg-tag sg-tag-dark' },
      { text: 'WEB',       style: { ...TAG_BASE_STYLE, background: SG.orange, color: SG.cream }, cls: 'sg-tag sg-tag-orange' },
      { text: 'DESIGN',    style: { ...TAG_BASE_STYLE, background: SG.cream,  color: SG.royal, border: `1px solid ${SG.creamDk}` }, cls: 'sg-tag sg-tag-cream' },
    ],
  },
  {
    label: 'OUTLINE · 선 태그',
    items: [
      { text: 'UI/UX',    style: { ...TAG_BASE_STYLE, background: 'transparent', color: SG.royal, border: `1.5px solid ${SG.royal}` }, cls: 'sg-tag sg-tag-outline-royal' },
      { text: 'BRANDING', style: { ...TAG_BASE_STYLE, background: 'transparent', color: SG.ink, border: `1.5px solid ${SG.creamDk}` }, cls: 'sg-tag sg-tag-outline-dark' },
      { text: 'WEB',      style: { ...TAG_BASE_STYLE, background: 'rgba(249,115,22,0.08)', color: SG.orange, border: `1.5px solid ${SG.orange}` }, cls: 'sg-tag sg-tag-outline-orange' },
    ],
  },
  {
    label: 'PILL · 둥근 태그',
    items: [
      { text: 'UI/UX',  style: { ...PILL_STYLE, background: SG.royal, color: SG.cream }, cls: 'sg-tag sg-pill sg-tag-royal' },
      { text: 'v1.0',   style: { ...PILL_STYLE, background: SG.cream, color: SG.royal, border: `1px solid ${SG.creamDk}` }, cls: 'sg-tag sg-pill sg-tag-cream' },
      { text: 'LIVE',   style: { ...PILL_STYLE, background: 'rgba(249,115,22,0.1)', color: SG.orange }, cls: 'sg-tag sg-pill' },
    ],
  },
];

const TAG_CODE = `<span class="sg-tag sg-tag-royal">UI/UX</span>
<span class="sg-tag sg-tag-dark">BRANDING</span>
<span class="sg-tag sg-tag-orange">WEB</span>
<span class="sg-tag sg-tag-outline-royal">UI/UX</span>
<span class="sg-tag sg-pill sg-tag-royal">UI/UX</span>`;

function CompBadges() {
  return (
    <CompSection id="badges" no="04 · BADGES" title="Badges & Tags" krTitle="배지 · 태그">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
        {BADGE_SECTIONS.map(section => (
          <div key={section.label} style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '9px 16px', borderBottom: `1px solid ${SG.creamDk}`, background: '#FAFAF8', fontFamily: SG.mono, fontSize: 10, color: SG.royal, letterSpacing: '0.2em', fontWeight: 700 }}>{section.label}</div>
            <div style={{ padding: '20px 16px', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', minHeight: 72 }}>
              {section.items.map((item, i) => <span key={i} style={item.style}>{item.text}</span>)}
            </div>
          </div>
        ))}
      </div>
      <CodeBlock code={TAG_CODE} />
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 05 · ACCENTS & DIVIDERS
// ══════════════════════════════════════════════════════════════════════════════

const ACCENT_CODE = `<!-- Orange Accent Line -->
<span class="sg-accent-line"></span>
<span class="sg-accent-line sg-accent-line-sm"></span>
<span class="sg-accent-line sg-accent-line-lg"></span>

<!-- Eyebrow Pattern (섹션 레이블) -->
<div class="sg-eyebrow">
  <span class="sg-accent-line sg-accent-line-sm"></span>
  <span class="sg-eyebrow-text">SECTION · LABEL</span>
  <span class="sg-eyebrow-line"></span>
</div>
<h2>Section Heading</h2>

<!-- Divider -->
<hr class="sg-divider">
<hr class="sg-divider sg-divider-dark">`;

function CompAccents() {
  return (
    <CompSection id="accents" no="05 · ACCENTS" title="Accents & Dividers" krTitle="액센트 · 구분선">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <CompCard label="ORANGE ACCENT LINES" preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%' }}>
            {[{ w: 32, h: 3, name: 'SM · 32px' }, { w: 56, h: 4, name: 'DEFAULT · 56px' }, { w: 80, h: 4, name: 'LG · 80px' }].map(a => (
              <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: a.w, height: a.h, background: SG.orange, flexShrink: 0 }} />
                <span style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, letterSpacing: '0.14em' }}>{a.name}</span>
              </div>
            ))}
          </div>
        } />
        <CompCard label="EYEBROW PATTERN" preview={
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: SG.orange, flexShrink: 0 }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 600, whiteSpace: 'nowrap' }}>SECTION · LABEL</div>
              <div style={{ flex: 1, height: 1, background: SG.creamDk }} />
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 32, color: SG.royal, letterSpacing: '-0.02em' }}>Section Heading</div>
            <div style={{ marginTop: 12, height: 1, background: SG.creamDk }} />
            <div style={{ marginTop: 4, fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, letterSpacing: '0.14em', opacity: 0.6 }}>← sg-divider</div>
          </div>
        } />
      </div>
      <CodeBlock code={ACCENT_CODE} />
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 06 · CARDS
// ══════════════════════════════════════════════════════════════════════════════

const CARD_CODE = `<div class="sg-card">
  <div class="sg-card-img"></div>
  <div class="sg-card-body">
    <div class="sg-card-tag">
      <span class="sg-tag sg-tag-royal">UI/UX</span>
    </div>
    <div class="sg-card-title">프로젝트 제목</div>
    <p class="sg-card-desc">짧은 설명을 입력합니다.</p>
    <div class="sg-card-meta">
      <span>2025</span>
      <span>VIEW →</span>
    </div>
  </div>
</div>

<!-- Dark variant -->
<div class="sg-card sg-card-dark">
  ...
</div>`;

function MiniCard({ dark, blue }) {
  const bg = dark ? SG.ink : blue ? SG.royal : '#FFFFFF';
  const titleColor = (dark || blue) ? SG.cream : SG.royal;
  const descColor = (dark || blue) ? SG.peri : '#666666';
  const imgBg = dark ? SG.royalDk : blue ? 'rgba(255,255,255,0.12)' : SG.peri;
  const divColor = (dark || blue) ? 'rgba(185,199,248,0.2)' : SG.creamDk;
  return (
    <div style={{ background: bg, border: (!dark && !blue) ? `1px solid ${SG.creamDk}` : 'none', borderRadius: 14, overflow: 'hidden', width: 220 }}>
      <div style={{ width: '100%', aspectRatio: '4/3', background: imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SGLogoMark size={44} cdColor={dark ? SG.peri : blue ? SG.cream : SG.royal} bangColor={SG.orange} footColor={dark ? SG.cream : SG.ink} />
      </div>
      <div style={{ padding: '16px 18px' }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.16em', background: SG.royal, color: SG.cream, padding: '3px 8px', borderRadius: 3, textTransform: 'uppercase' }}>UI/UX</span>
        <div style={{ marginTop: 8, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15, color: titleColor, letterSpacing: '-0.01em', lineHeight: 1.1 }}>프로젝트 제목</div>
        <div style={{ marginTop: 5, fontFamily: SG.kr, fontSize: 12, color: descColor, lineHeight: 1.5, opacity: 0.85 }}>짧은 설명 텍스트</div>
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${divColor}`, display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: SG.orange, letterSpacing: '0.14em', fontWeight: 700 }}>
          <span>2025</span><span>VIEW →</span>
        </div>
      </div>
    </div>
  );
}

function CompCards() {
  return (
    <CompSection id="cards" no="06 · CARDS" title="Cards" krTitle="카드">
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
        {[
          { label: 'LIGHT · DEFAULT', dark: false, blue: false },
          { label: 'DARK',            dark: true,  blue: false },
          { label: 'BLUE',            dark: false, blue: true  },
        ].map(c => (
          <div key={c.label}>
            <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, letterSpacing: '0.2em', fontWeight: 700, marginBottom: 10 }}>{c.label}</div>
            <MiniCard dark={c.dark} blue={c.blue} />
          </div>
        ))}
      </div>
      <CodeBlock code={CARD_CODE} />
    </CompSection>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// QUICK START (IMPORT GUIDE)
// ══════════════════════════════════════════════════════════════════════════════

const IMPORT_CODE = `<!-- 1. 폰트 (head에 추가) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

<!-- 2. 브랜드 토큰 + 컴포넌트 CSS -->
<link rel="stylesheet" href="./brand-tokens.css">
<link rel="stylesheet" href="./sg-components.css">`;

// ══════════════════════════════════════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════════════════════════════════════

const NAV_ITEMS = [
  ['colors',  '01 · Colors'],
  ['type',    '02 · Type'],
  ['buttons', '03 · Buttons'],
  ['badges',  '04 · Badges'],
  ['accents', '05 · Accents'],
  ['cards',   '06 · Cards'],
];

function CompNav() {
  return (
    <nav style={{ position: 'fixed', top: 28, left: 22, zIndex: 50, display: 'flex', flexDirection: 'column', gap: 3, padding: '12px 16px', background: 'rgba(245,240,232,0.94)', backdropFilter: 'blur(8px)', border: `1px solid ${SG.creamDk}`, borderRadius: 12 }}>
      <a href="Seoldi Branding.html" style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, letterSpacing: '0.24em', fontWeight: 700, textDecoration: 'none', marginBottom: 6 }}>← HUB</a>
      <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.royal, fontWeight: 700, letterSpacing: '0.24em', marginBottom: 4, opacity: 0.75 }}>COMPONENTS</div>
      {NAV_ITEMS.map(([id, label]) => (
        <a key={id} href={`#${id}`} style={{ fontFamily: SG.mono, fontSize: 10, color: SG.ink, opacity: 0.6, textDecoration: 'none', letterSpacing: '0.06em' }}>{label}</a>
      ))}
    </nav>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HEADER
// ══════════════════════════════════════════════════════════════════════════════

function CompHeader() {
  return (
    <header style={{ background: SG.ink, color: SG.cream, padding: `80px ${COMP_PAD}px 72px`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -70, right: -70, opacity: 0.05 }}>
        <SGLogoMark size={500} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 11, color: SG.peri, letterSpacing: '0.24em', opacity: 0.75, marginBottom: 60, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: SG.orange }} />
          <span>COMPONENT · LIBRARY · LIVE</span>
        </div>
        <a href="Seoldi Branding.html" style={{ color: SG.peri, textDecoration: 'none', opacity: 0.65, letterSpacing: '0.18em', fontSize: 11 }}>← HUB</a>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ width: 56, height: 4, background: SG.orange, marginBottom: 24 }} />
        <h1 style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 88, lineHeight: 0.92, letterSpacing: '-0.03em', color: SG.cream }}>
          Web<br /><span style={{ color: SG.peri }}>Components</span><span style={{ color: SG.orange }}>.</span>
        </h1>
        <p style={{ marginTop: 24, fontFamily: SG.kr, fontSize: 20, color: SG.peri, lineHeight: 1.55, maxWidth: 680, opacity: 0.85 }}>
          seoldi.com · seoldi-ops · 클라이언트 납품물에 바로 복사해서 쓰는 컴포넌트.<br />
          brand-tokens.css를 로드 후 클래스만 붙이면 완성.
        </p>
      </div>

      <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(185,199,248,0.07)', border: '1px solid rgba(185,199,248,0.15)', borderRadius: 12, position: 'relative' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em', fontWeight: 700, marginBottom: 10 }}>QUICK START · 사용법</div>
        <CodeBlock code={IMPORT_CODE} lang="html" />
      </div>
    </header>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════════════════════

function CompFooter() {
  return (
    <footer style={{ background: SG.ink, color: SG.cream, padding: `48px ${COMP_PAD}px`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <SGLogoMark size={44} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
        <div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
          <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.peri, letterSpacing: '0.2em', marginTop: 3, opacity: 0.7 }}>WEB COMPONENT LIBRARY · v1.0</div>
        </div>
      </div>
      <a href="Seoldi Branding.html" style={{ fontFamily: SG.mono, fontSize: 12, color: SG.orange, letterSpacing: '0.2em', fontWeight: 700, textDecoration: 'none' }}>← BACK TO HUB</a>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════════

function ComponentLibrary() {
  return (
    <div style={{ maxWidth: COMP_PAGE_W, margin: '0 auto', background: SG.cream, boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 30px 80px rgba(13,33,165,0.08)' }}>
      <CompHeader />
      <CompColors />
      <CompTypography />
      <CompButtons />
      <CompBadges />
      <CompAccents />
      <CompCards />
      <CompFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CompNav />
    <ComponentLibrary />
  </>
);
