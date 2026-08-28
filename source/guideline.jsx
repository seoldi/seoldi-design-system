// guideline.jsx — Seoldi Graphics Brand Guideline 2025
// A single long-form printable document. Reuses SG tokens from brand.jsx.

const PAGE_W = 1280;
const PAD = 88;

// ─── Small primitives local to the guideline doc ──────────────────────
function GLSection({ id, eyebrow, children, bg = SG.cream, fg = SG.ink, accent = SG.orange, padTop = 96, padBottom = 96, style }) {
  return (
    <section id={id} style={{ background: bg, color: fg, padding: `${padTop}px ${PAD}px ${padBottom}px`, ...style }}>
      {eyebrow ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 48 }}>
          <div style={{ width: 36, height: 3, background: accent }} />
          <div style={{ fontFamily: SG.mono, fontSize: 13, color: fg, opacity: 0.75, letterSpacing: '0.32em', fontWeight: 600 }}>
            {eyebrow}
          </div>
          <div style={{ flex: 1, height: 1, background: fg, opacity: 0.12 }} />
        </div>
      ) : null}
      {children}
    </section>
  );
}

function GLLabel({ children, color = SG.royal }) {
  return (
    <div style={{ fontFamily: SG.mono, fontSize: 12, letterSpacing: '0.28em', color, fontWeight: 600, textTransform: 'uppercase' }}>
      {children}
    </div>
  );
}

// ─── Cover ────────────────────────────────────────────────────────────
function GLCover() {
  return (
    <section style={{ background: SG.ink, color: SG.cream, padding: `120px ${PAD}px 100px`, position: 'relative', overflow: 'hidden' }}>
      {/* corner mark */}
      <div style={{ position: 'absolute', top: 64, right: 88, opacity: 0.18 }}>
        <SGLogoMark size={180} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
      </div>
      {/* index */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontFamily: SG.mono, fontSize: 13, letterSpacing: '0.28em', color: SG.peri, opacity: 0.75 }}>
        <span>SEOLDI · GRAPHICS</span>
        <span>VOL. 01 · 2025</span>
      </div>

      <div style={{ marginTop: 140 }}>
        <div style={{ width: 64, height: 4, background: SG.orange, marginBottom: 28 }} />
        <h1 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 112, lineHeight: 0.92, letterSpacing: '-0.025em' }}>
          Brand<br/>
          <span style={{ color: SG.peri }}>Guideline</span> · 25.
        </h1>
        <div style={{ marginTop: 32, fontFamily: SG.kr, fontSize: 24, color: SG.peri, lineHeight: 1.5, maxWidth: 720 }}>
          설디그래픽스의 시각 언어를 정리한 한 권의 문서.<br/>
          로고 · 컬러 · 타입 · 보이스 · 적용 사례까지.
        </div>
      </div>

      {/* footer of cover */}
      <div style={{ marginTop: 120, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontFamily: SG.mono, fontSize: 13, color: SG.peri, letterSpacing: '0.2em', opacity: 0.8 }}>
        <div>
          <div style={{ opacity: 0.6 }}>STUDIO</div>
          <div style={{ marginTop: 6, color: SG.cream }}>정설옥 · DESIGN ENGINEER</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ opacity: 0.6 }}>WEB · IG</div>
          <div style={{ marginTop: 6, color: SG.cream }}>seoldi.kr · @seoldi.graphics</div>
        </div>
      </div>
    </section>
  );
}

// ─── 01 · Logo System (3 variants) ────────────────────────────────────
function GLLogoSystem() {
  const variants = [
    {
      name: '기본형',  en: 'Cream Base',
      bg: SG.cream,    cd: SG.royal, foot: SG.ink,   bang: SG.orange,
      labelColor: SG.royal, badgeBg: SG.royal, badgeFg: SG.cream,
      use: 'SNS 메인 · 명함 앞면 · 웹 헤더 — 가장 기본이 되는 형태',
      notes: ['SNS 메인', '명함 앞면', '웹 헤더'],
    },
    {
      name: '반전형',  en: 'Blue Base',
      bg: SG.royal,    cd: SG.cream, foot: SG.ink,   bang: SG.orange,
      labelColor: SG.peri, badgeBg: SG.orange, badgeFg: SG.cream,
      use: 'SNS 강조 카드 · 명함 뒷면 · 캠페인 비주얼',
      notes: ['SNS 강조', '명함 뒷면', '캠페인'],
    },
    {
      name: '다크형',  en: 'Dark Base',
      bg: SG.ink,      cd: SG.royal, foot: SG.cream, bang: SG.orange,
      labelColor: SG.peri, badgeBg: SG.inkSoft, badgeFg: SG.peri,
      use: '다크 콘텐츠 · 굿즈 · 케이스 스터디 표지',
      notes: ['다크 콘텐츠', '굿즈', '케이스 스터디'],
    },
  ];
  return (
    <GLSection id="logo" eyebrow="01 · LOGO SYSTEM" bg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 64 }}>
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.02em' }}>
          The Sd! mark, three ways.
        </h2>
        <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 560 }}>
          <p style={{ margin: 0 }}>
            <b>Sd!</b> 레터마크는 세 가지 색 조합으로만 사용합니다. 어떤 배경에 올라가는지에 따라 변형이 결정되며,
            그 외의 컬러 조합은 허용하지 않습니다.
          </p>
          <p style={{ margin: '14px 0 0', opacity: 0.7 }}>
            구성: <code style={{ fontFamily: SG.mono, color: SG.royal }}>S</code>(설) ·
            <code style={{ fontFamily: SG.mono, color: SG.ink }}> d</code>(디) ·
            <code style={{ fontFamily: SG.mono, color: SG.orange }}> !</code>(스템 + 닷)
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {variants.map((v) => (
          <div key={v.name} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ position: 'relative', background: v.bg, aspectRatio: '4 / 5', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: v.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none' }}>
              <div style={{ position: 'absolute', top: 22, left: 22, padding: '6px 14px', background: v.badgeBg, color: v.badgeFg, fontFamily: SG.sans, fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', borderRadius: 999 }}>
                {v.name.toUpperCase()}
              </div>
              <SGLogoMark size={210} cdColor={v.cd} bangColor={v.bang} footColor={v.foot} />
              {/* tiny corner index */}
              <div style={{ position: 'absolute', bottom: 18, right: 22, fontFamily: SG.mono, fontSize: 11, letterSpacing: '0.28em', color: v.labelColor, opacity: 0.6 }}>
                /{(variants.indexOf(v) + 1).toString().padStart(2, '0')}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.ink }}>
                {v.name} <span style={{ opacity: 0.5, fontWeight: 500 }}> · {v.en}</span>
              </div>
              <div style={{ marginTop: 8, fontFamily: SG.kr, fontSize: 15, color: SG.inkSoft, lineHeight: 1.55 }}>
                {v.use}
              </div>
              <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {v.notes.map((n) => (
                  <span key={n} style={{ fontFamily: SG.mono, fontSize: 11, padding: '4px 8px', background: 'rgba(13,33,165,0.07)', color: SG.royal, letterSpacing: '0.08em' }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </GLSection>
  );
}

// ─── 02 · Construction (anatomy + clear space + min size) ────────────
function GLConstruction() {
  // unit-based clear space: 1 unit = height of the ! dot.
  return (
    <GLSection id="construction" eyebrow="02 · CONSTRUCTION" bg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 56 }}>
        {/* Anatomy */}
        <div>
          <GLLabel>ANATOMY</GLLabel>
          <h3 style={{ margin: '10px 0 22px', fontFamily: SG.sans, fontWeight: 800, fontSize: 36, color: SG.royal, letterSpacing: '-0.015em' }}>
            마크의 해부.
          </h3>
          <div style={{ position: 'relative', background: SG.cream, border: `1px solid ${SG.creamDk}`, borderRadius: 16, height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SGLogoMark size={280} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
            {/* annotation lines */}
            <Annotation top={36}  left={64}   text="S" sub="설 · Royal Blue" color={SG.royal} />
            <Annotation top={210} left={140}  text="d" sub="디 · Ink Black" color={SG.ink} />
            <Annotation top={50}  right={64}  text="!" sub="스템 + 닷 · Orange" color={SG.orange} align="right" />
          </div>
        </div>

        {/* Clear space */}
        <div>
          <GLLabel>CLEAR SPACE & MIN SIZE</GLLabel>
          <h3 style={{ margin: '10px 0 22px', fontFamily: SG.sans, fontWeight: 800, fontSize: 36, color: SG.royal, letterSpacing: '-0.015em' }}>
            여백, 그리고 최소 크기.
          </h3>
          <div style={{ position: 'relative', background: SG.peri, borderRadius: 16, height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* clear-space rectangle */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -56, border: `2px dashed ${SG.royal}`, opacity: 0.45 }} />
              <div style={{ position: 'absolute', top: -56, left: -56, fontFamily: SG.mono, fontSize: 11, color: SG.royal, letterSpacing: '0.2em', transform: 'translate(0,-18px)' }}>
                1X = ! 닷 높이
              </div>
              <SGLogoMark size={170} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
              {/* X markers */}
              <span style={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', fontFamily: SG.mono, fontSize: 13, color: SG.royal, fontWeight: 700 }}>X</span>
              <span style={{ position: 'absolute', bottom: -28, left: '50%', transform: 'translateX(-50%)', fontFamily: SG.mono, fontSize: 13, color: SG.royal, fontWeight: 700 }}>X</span>
              <span style={{ position: 'absolute', left: -32, top: '50%', transform: 'translateY(-50%)', fontFamily: SG.mono, fontSize: 13, color: SG.royal, fontWeight: 700 }}>X</span>
              <span style={{ position: 'absolute', right: -32, top: '50%', transform: 'translateY(-50%)', fontFamily: SG.mono, fontSize: 13, color: SG.royal, fontWeight: 700 }}>X</span>
            </div>
          </div>

          {/* min size strip */}
          <div style={{ marginTop: 18, padding: '18px 22px', background: SG.cream, border: `1px solid ${SG.creamDk}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <SGLogoMark size={56} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
                <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, letterSpacing: '0.18em' }}>40px · WEB</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <SGLogoMark size={32} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
                <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, letterSpacing: '0.18em' }}>24px · UI</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <SGLogoMark size={20} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
                <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, letterSpacing: '0.18em' }}>16px · 최소</div>
              </div>
            </div>
            <div style={{ flex: 1, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft, lineHeight: 1.55 }}>
              인쇄물 최소 폭 <b style={{ color: SG.royal }}>10mm</b>, 디지털 최소 폭 <b style={{ color: SG.royal }}>16px</b>. 그 이하는 사용을 금합니다.
            </div>
          </div>
        </div>
      </div>
    </GLSection>
  );
}

function Annotation({ top, left, right, text, sub, color, align = 'left' }) {
  const pos = right != null ? { top, right } : { top, left };
  return (
    <div style={{ position: 'absolute', ...pos, textAlign: align }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
        {align !== 'right' ? <div style={{ width: 28, height: 1, background: color, opacity: 0.6 }} /> : null}
        <div style={{ fontFamily: SG.mono, fontSize: 13, color, fontWeight: 700, letterSpacing: '0.1em' }}>{text}</div>
        {align === 'right' ? <div style={{ width: 28, height: 1, background: color, opacity: 0.6 }} /> : null}
      </div>
      <div style={{ marginTop: 2, fontFamily: SG.mono, fontSize: 10, color, opacity: 0.7, letterSpacing: '0.16em' }}>{sub}</div>
    </div>
  );
}

// ─── 03 · Color Palette ────────────────────────────────────────────────
function GLColor() {
  const primary = [
    { role: 'PRIMARY',  name: 'Royal Blue', hex: '#0D21A5', rgb: '13 · 33 · 165',  cmyk: '92 · 80 · 0 · 35',  bg: SG.royal,  fg: SG.cream,  desc: '주 배경 · 강조 영역 · 로고 cd' },
    { role: 'BASE',     name: 'Cream',      hex: '#F5F0E8', rgb: '245 · 240 · 232', cmyk: '0 · 2 · 5 · 4',     bg: SG.cream,  fg: SG.ink,    desc: '기본 배경 · 반전 텍스트', bordered: true },
    { role: 'ACCENT',   name: 'Orange',     hex: '#F97316', rgb: '249 · 115 · 22', cmyk: '0 · 54 · 91 · 2',    bg: SG.orange, fg: SG.cream,  desc: '포인트 전용 — ! · CTA · 강조 라인' },
  ];
  const secondary = [
    { name: 'Periwinkle', hex: '#B9C7F8', bg: SG.peri,  fg: SG.royal, desc: '블루 위 서브 텍스트' },
    { name: 'Ink Black',  hex: '#1A1A1A', bg: SG.ink,   fg: SG.cream, desc: '다크 베이스 · 본문' },
    { name: 'Pure White', hex: '#FFFFFF', bg: '#FFFFFF', fg: SG.ink,  desc: 'UI 카드 · 인쇄용', bordered: true },
  ];
  return (
    <GLSection id="color" eyebrow="03 · COLOR PALETTE" bg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 56 }}>
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.02em' }}>
          Three colors,<br/>one system.
        </h2>
        <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 560 }}>
          Royal Blue · Cream · Orange. 이 세 가지가 설디그래픽스의 시그니처입니다.
          나머지 컬러는 가독성과 UI를 위한 보조 역할로만 사용합니다.
        </div>
      </div>

      {/* Primary trio */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {primary.map((c) => (
          <div key={c.name} style={{ background: c.bg, color: c.fg, padding: '32px 30px 30px', height: 320, borderRadius: 18, position: 'relative', border: c.bordered ? `1px solid ${SG.creamDk}` : 'none', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 12, letterSpacing: '0.28em', opacity: 0.75, fontWeight: 600 }}>{c.role}</div>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 36, letterSpacing: '-0.01em' }}>{c.name}</div>
              <div style={{ marginTop: 14, fontFamily: SG.mono, fontSize: 13, lineHeight: 1.85, opacity: 0.92 }}>
                <div>HEX&nbsp;&nbsp;{c.hex}</div>
                <div>RGB&nbsp;&nbsp;{c.rgb}</div>
                <div>CMYK&nbsp;{c.cmyk}</div>
              </div>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${c.fg}`, opacity: 0.7, fontFamily: SG.kr, fontSize: 13 }}>
                {c.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary trio */}
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {secondary.map((c) => (
          <div key={c.name} style={{ background: c.bg, color: c.fg, padding: '22px 24px', height: 124, borderRadius: 14, border: c.bordered ? `1px solid ${SG.creamDk}` : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 18, letterSpacing: '0.02em' }}>{c.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontFamily: SG.mono, fontSize: 13, opacity: 0.85 }}>{c.hex}</div>
              <div style={{ fontFamily: SG.kr, fontSize: 12, opacity: 0.7, textAlign: 'right' }}>{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage rule bar */}
      <div style={{ marginTop: 56 }}>
        <GLLabel>COLOR RATIO · 60 · 25 · 15</GLLabel>
        <div style={{ marginTop: 14, display: 'flex', height: 72, borderRadius: 12, overflow: 'hidden', border: `1px solid ${SG.creamDk}` }}>
          <div style={{ flex: 60, background: SG.royal, color: SG.cream, display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: SG.sans, fontWeight: 700, fontSize: 15, letterSpacing: '0.05em' }}>
            60% &nbsp;·&nbsp; ROYAL BLUE&nbsp;<span style={{ opacity: 0.6, fontWeight: 500, marginLeft: 8 }}>주 배경 · 강조 영역</span>
          </div>
          <div style={{ flex: 25, background: SG.cream, color: SG.ink, display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: SG.sans, fontWeight: 700, fontSize: 15, letterSpacing: '0.05em' }}>
            25% &nbsp;·&nbsp; CREAM&nbsp;<span style={{ opacity: 0.55, fontWeight: 500, marginLeft: 8 }}>베이스</span>
          </div>
          <div style={{ flex: 15, background: SG.orange, color: SG.cream, display: 'flex', alignItems: 'center', padding: '0 18px', fontFamily: SG.sans, fontWeight: 700, fontSize: 15, letterSpacing: '0.05em' }}>
            15% &nbsp;·&nbsp; ORANGE
          </div>
        </div>
        <div style={{ marginTop: 14, fontFamily: SG.kr, fontSize: 14, color: SG.inkSoft, lineHeight: 1.6 }}>
          Orange는 <b style={{ color: SG.orange }}>포인트 전용</b>입니다 — 느낌표(!), CTA 버튼, 강조 라인, 카테고리 라벨에만 사용하고
          <b> 배경으로는 절대 사용하지 않습니다.</b>
        </div>
      </div>
    </GLSection>
  );
}

// ─── 04 · Typography ──────────────────────────────────────────────────
function GLType() {
  return (
    <GLSection id="type" eyebrow="04 · TYPOGRAPHY" bg={SG.ink} fg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 56 }}>
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.cream, letterSpacing: '-0.02em' }}>
          Mont. Pretend.<br/>Mono.
        </h2>
        <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.peri, lineHeight: 1.6, maxWidth: 560 }}>
          영문은 <b style={{ color: SG.cream }}>Montserrat</b>로 기하학적인 헤드라인을, 한글은 <b style={{ color: SG.cream }}>Pretendard</b>로 본문 가독성을 잡습니다.
          기술 톤이 필요할 때는 <b style={{ color: SG.orange }}>JetBrains Mono</b>를 액센트로 사용합니다.
        </div>
      </div>

      {/* Three type cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 5fr 4fr', gap: 24 }}>
        {/* Mont */}
        <div style={{ padding: 32, background: SG.royal, color: SG.cream, borderRadius: 18, minHeight: 320 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.22em' }}>
            <span>PRIMARY · LATIN</span>
            <span>700 / 600 / 400</span>
          </div>
          <div style={{ marginTop: 30, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 86, lineHeight: 0.96, letterSpacing: '-0.025em' }}>Aa</div>
          <div style={{ marginTop: 14, fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 28 }}>Montserrat</div>
          <div style={{ marginTop: 18, fontFamily: SG.mono, fontSize: 13, color: SG.peri, lineHeight: 1.85, opacity: 0.85 }}>
            영문 헤드라인 · 로고 텍스트 · UI 라벨<br/>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz · 0123456789
          </div>
        </div>

        {/* Pretendard */}
        <div style={{ padding: 32, background: SG.cream, color: SG.ink, borderRadius: 18, minHeight: 320 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.22em' }}>
            <span>SECONDARY · KR</span>
            <span>700 / 500 / 400</span>
          </div>
          <div style={{ marginTop: 30, fontFamily: SG.kr, fontWeight: 800, fontSize: 86, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.025em' }}>가나다</div>
          <div style={{ marginTop: 14, fontFamily: SG.kr, fontWeight: 700, fontSize: 28, color: SG.royal }}>Pretendard</div>
          <div style={{ marginTop: 18, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft, lineHeight: 1.85 }}>
            한글 본문 · 캡션 · UI 레이블<br/>
            기획부터 구현까지, 설디그래픽스가 잇습니다.<br/>
            <span style={{ fontFamily: SG.mono, opacity: 0.7 }}>가갸거겨고교구규그기 · 01234</span>
          </div>
        </div>

        {/* Mono */}
        <div style={{ padding: 32, background: SG.inkSoft, color: SG.cream, borderRadius: 18, minHeight: 320, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 12, color: SG.orange, letterSpacing: '0.22em' }}>
            <span>ACCENT · CODE</span>
            <span>700 / 400</span>
          </div>
          <div style={{ marginTop: 30, fontFamily: SG.mono, fontWeight: 700, fontSize: 86, lineHeight: 0.96, color: SG.orange, letterSpacing: '-0.01em' }}>{'</>'}</div>
          <div style={{ marginTop: 14, fontFamily: SG.mono, fontWeight: 700, fontSize: 22, color: SG.cream }}>JetBrains&nbsp;Mono</div>
          <div style={{ marginTop: 18, fontFamily: SG.mono, fontSize: 13, color: SG.peri, lineHeight: 1.85, opacity: 0.9 }}>
            태그 · 메타 · 코드 인용<br/>
            $&nbsp;claude&nbsp;design&nbsp;--refine<br/>
            01_PORTFOLIO · 02_INSIGHT
          </div>
        </div>
      </div>

      {/* Scale ladder */}
      <div style={{ marginTop: 48, padding: '28px 32px', border: `1px solid ${SG.inkSoft}`, borderRadius: 14 }}>
        <GLLabel color={SG.peri}>TYPE SCALE · MONTSERRAT</GLLabel>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { size: 96, weight: 800, name: 'Display', use: '카드 헤드라인 · 슬로건' },
            { size: 64, weight: 800, name: 'H1',      use: '섹션 제목' },
            { size: 40, weight: 700, name: 'H2',      use: '서브섹션' },
            { size: 24, weight: 600, name: 'Body L',  use: '리드 본문' },
            { size: 16, weight: 400, name: 'Body',    use: '기본 본문' },
            { size: 12, weight: 600, name: 'Caption', use: '메타 · 라벨' },
          ].map((r) => (
            <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 100px 160px', alignItems: 'baseline', gap: 24, paddingBlock: 6, borderBottom: `1px dashed ${SG.inkSoft}` }}>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.18em' }}>{r.size}px</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: r.weight, fontSize: Math.min(r.size, 48), color: SG.cream, lineHeight: 1, letterSpacing: '-0.015em' }}>
                Design meets Code.
              </div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.peri, opacity: 0.7, letterSpacing: '0.18em' }}>{r.name}</div>
              <div style={{ fontFamily: SG.kr, fontSize: 12, color: SG.peri, opacity: 0.75 }}>{r.use}</div>
            </div>
          ))}
        </div>
      </div>
    </GLSection>
  );
}

// ─── 05 · Slogan ──────────────────────────────────────────────────────
function GLSlogan() {
  return (
    <GLSection id="slogan" eyebrow="05 · SLOGAN" bg={SG.royal} fg={SG.cream} padTop={120} padBottom={120}>
      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.28em', opacity: 0.75 }}>MAIN · EN</div>
        <div style={{ marginTop: 18, fontFamily: SG.sans, fontWeight: 800, fontSize: 144, lineHeight: 0.92, letterSpacing: '-0.035em', color: SG.cream }}>
          Design{' '}
          <span style={{ color: SG.peri }}>meets</span>{' '}
          Co<span style={{ color: SG.orange }}>·</span>de.
        </div>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 64, alignItems: 'flex-end' }}>
          <div>
            <div style={{ width: 56, height: 4, background: SG.orange }} />
            <div style={{ marginTop: 16, fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.28em', opacity: 0.75 }}>SUB · KR</div>
            <div style={{ marginTop: 12, fontFamily: SG.kr, fontWeight: 600, fontSize: 30, color: SG.cream, lineHeight: 1.35, letterSpacing: '-0.01em' }}>
              기획부터 구현까지,<br/>설디그래픽스가 잇습니다.
            </div>
          </div>
          <div style={{ fontFamily: SG.kr, fontSize: 18, color: SG.peri, lineHeight: 1.65, maxWidth: 620, opacity: 0.85, paddingLeft: 32, borderLeft: `1px solid rgba(185,199,248,0.3)` }}>
            슬로건은 항상 메인(영문) + 서브(한글) 쌍으로 사용하며,
            단독 사용 시 메인 영문을 우선합니다. 한 줄 단축 표기는 「<b style={{ color: SG.cream }}>D × D</b>」.
          </div>
        </div>
      </div>
    </GLSection>
  );
}

// ─── 06 · Voice & Personality ─────────────────────────────────────────
function GLVoice() {
  const pairs = [
    { yes: '명확한 (Clear)',      no: '모호한 (Vague)' },
    { yes: '담백한 (Restrained)', no: '과장된 (Hyped)' },
    { yes: '기술적 (Technical)',  no: '비전문적 (Casual)' },
    { yes: '담대한 (Confident)',  no: '눈치 보는 (Hedging)' },
  ];
  const pillars = [
    { tag: '01', title: '바우하우스 + 디지털',  body: '기하학과 코드. 형태는 기능을, 코드는 형태를 따른다.' },
    { tag: '02', title: '10년 차 전문성',       body: 'B2B 대기업 현장에서 쌓은 디테일과 일관성.' },
    { tag: '03', title: '1인 사업자',           body: '기획 · 디자인 · 개발 · 운영, 한 사람의 책임으로.' },
    { tag: '04', title: 'AI-Native',            body: 'Claude Code · Vibe Coding을 실무에 가속기로.' },
  ];
  return (
    <GLSection id="voice" eyebrow="06 · BRAND VOICE" bg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 48 }}>
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.02em' }}>
          How we<br/>sound.
        </h2>
        <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 560 }}>
          설디그래픽스의 톤은 <b>"기술자의 말투, 디자이너의 감각"</b>입니다.
          정확한 단어, 짧은 문장, 약속한 만큼만 말합니다.
        </div>
      </div>

      {/* Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
        {pillars.map((p) => (
          <div key={p.tag} style={{ padding: '26px 24px 28px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 13, color: SG.orange, fontWeight: 700, letterSpacing: '0.22em' }}>{p.tag}</div>
            <div>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, letterSpacing: '-0.01em' }}>{p.title}</div>
              <div style={{ marginTop: 8, fontFamily: SG.kr, fontSize: 14, color: SG.inkSoft, lineHeight: 1.6 }}>{p.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* yes / no */}
      <div style={{ padding: '32px 36px', background: SG.ink, color: SG.cream, borderRadius: 18 }}>
        <GLLabel color={SG.peri}>SAY THIS · NOT THAT</GLLabel>
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 36px' }}>
          {pairs.map((p) => (
            <div key={p.yes} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '12px 0', borderBottom: `1px dashed ${SG.inkSoft}` }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: SG.orange, color: SG.cream, fontFamily: SG.mono, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
                <span style={{ fontFamily: SG.kr, fontSize: 17, fontWeight: 600 }}>{p.yes}</span>
              </div>
              <div style={{ fontFamily: SG.kr, fontSize: 17, color: SG.peri, opacity: 0.7, textDecoration: 'line-through' }}>{p.no}</div>
            </div>
          ))}
        </div>
      </div>
    </GLSection>
  );
}

// ─── 07 · Application ─────────────────────────────────────────────────
function GLApplication() {
  return (
    <GLSection id="apply" eyebrow="07 · APPLICATION" bg={SG.cream}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 48 }}>
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.02em' }}>
          In the wild.
        </h2>
        <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 560 }}>
          시스템이 실제 매체 위에서 어떻게 보이는지. 인스타그램 피드 · 명함 · 웹 헤더의 예시입니다.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 32 }}>
        {/* IG feed 3x3 */}
        <div>
          <GLLabel>INSTAGRAM · @SEOLDI.GRAPHICS</GLLabel>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, background: SG.creamDk, padding: 6, borderRadius: 12 }}>
            {/* row 1: portfolio cream / insight blue / mood blue */}
            <FeedTile bg={SG.cream}><MiniLogo cd={SG.royal} foot={SG.ink} bang={SG.orange} /><MiniTag>CASE</MiniTag></FeedTile>
            <FeedTile bg={SG.royal}><MiniLogo cd={SG.cream} foot={SG.ink} bang={SG.orange} /><MiniHead color={SG.cream}>03 TIPS</MiniHead></FeedTile>
            <FeedTile bg={SG.royal}><MiniLogo cd={SG.cream} foot={SG.ink} bang={SG.orange} /><MiniHead color={SG.peri} small>"yes."</MiniHead></FeedTile>
            {/* row 2: dark / cream / blue */}
            <FeedTile bg={SG.ink}><MiniLogo cd={SG.royal} foot={SG.cream} bang={SG.orange} /><MiniHead color={SG.cream}>NIGHT</MiniHead></FeedTile>
            <FeedTile bg={SG.cream}><MiniHead color={SG.royal}>D × D</MiniHead><MiniSub color={SG.inkSoft}>MANIFESTO</MiniSub></FeedTile>
            <FeedTile bg={SG.royal}><MiniLogo cd={SG.cream} foot={SG.ink} bang={SG.orange} /><MiniTag dark>WEB</MiniTag></FeedTile>
            {/* row 3 */}
            <FeedTile bg={SG.cream}><MiniLogo cd={SG.royal} foot={SG.ink} bang={SG.orange} /><MiniTag>BRAND</MiniTag></FeedTile>
            <FeedTile bg={SG.ink}><MiniHead color={SG.orange} small>// code</MiniHead></FeedTile>
            <FeedTile bg={SG.cream}><MiniHead color={SG.royal}>CTA</MiniHead><MiniSub color={SG.orange}>DM →</MiniSub></FeedTile>
          </div>
          <div style={{ marginTop: 10, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.7, letterSpacing: '0.18em' }}>
            CREAM · BLUE · DARK 3종 순환 · 4:5 비율
          </div>
        </div>

        {/* Business card */}
        <div>
          <GLLabel>BUSINESS CARD · 90 × 54 MM</GLLabel>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateRows: 'auto auto', gap: 16 }}>
            {/* front */}
            <div style={{ position: 'relative', aspectRatio: '90 / 54', background: SG.cream, border: `1px solid ${SG.creamDk}`, borderRadius: 10, padding: '22px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <SGLogoMark size={48} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 16, color: SG.royal, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
                  <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em', marginTop: 3 }}>DESIGN · MEETS · CODE</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.ink }}>정설옥<span style={{ fontWeight: 500, fontSize: 14, color: SG.inkSoft, marginLeft: 8 }}>Seolok Jeong</span></div>
                  <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, marginTop: 4, letterSpacing: '0.18em' }}>DESIGN ENGINEER</div>
                </div>
                <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, textAlign: 'right', lineHeight: 1.6 }}>
                  seoldi.kr<br/>@seoldi.graphics
                </div>
              </div>
            </div>
            {/* back */}
            <div style={{ position: 'relative', aspectRatio: '90 / 54', background: SG.royal, borderRadius: 10, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SGLogoMark size={140} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
              <div style={{ position: 'absolute', bottom: 16, left: 22, right: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.peri, letterSpacing: '0.22em', opacity: 0.85 }}>FRONT ↔ BACK · 명함 시스템</div>
                <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 12, color: SG.cream, letterSpacing: '0.06em' }}>Sd!</div>
              </div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 8, background: SG.orange }} />
            </div>
          </div>
        </div>
      </div>
    </GLSection>
  );
}
function FeedTile({ bg, children }) {
  return (
    <div style={{ aspectRatio: '4 / 5', background: bg, position: 'relative', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', border: bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none' }}>
      {children}
    </div>
  );
}
function MiniLogo({ cd, foot, bang }) {
  return <SGLogoMark size={26} cdColor={cd} bangColor={bang} footColor={foot} />;
}
function MiniTag({ children, dark }) {
  return <div style={{ alignSelf: 'flex-end', fontFamily: SG.sans, fontWeight: 700, fontSize: 9, padding: '3px 6px', background: dark ? SG.ink : SG.royal, color: SG.cream, letterSpacing: '0.14em' }}>{children}</div>;
}
function MiniHead({ children, color, small }) {
  return <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: small ? 16 : 20, color, lineHeight: 1, letterSpacing: '-0.02em' }}>{children}</div>;
}
function MiniSub({ children, color }) {
  return <div style={{ fontFamily: SG.mono, fontSize: 9, color, letterSpacing: '0.2em', marginTop: 4 }}>{children}</div>;
}

// ─── 08 · Logo Do / Don't ─────────────────────────────────────────────
function GLDont() {
  const items = [
    { ok: true,  label: 'Cream + Blue cd + Orange !', render: (s) => <SGLogoMark size={s} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} /> , bg: SG.cream },
    { ok: false, label: '컬러 임의 변경',  render: (s) => <SGLogoMark size={s} cdColor="#22A06B" bangColor="#E94B4B" footColor={SG.ink} />, bg: SG.cream },
    { ok: false, label: '왜곡 · 늘림',     render: (s) => <div style={{ transform: 'scaleX(0.65)' }}><SGLogoMark size={s} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} /></div>, bg: SG.cream },
    { ok: false, label: '그림자 · 효과',   render: (s) => <div style={{ filter: 'drop-shadow(0 8px 14px rgba(13,33,165,0.5))' }}><SGLogoMark size={s} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} /></div>, bg: SG.cream },
    { ok: false, label: '회전',            render: (s) => <div style={{ transform: 'rotate(-18deg)' }}><SGLogoMark size={s} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} /></div>, bg: SG.cream },
    { ok: false, label: '저대비 배경',     render: (s) => <SGLogoMark size={s} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />, bg: SG.peri },
  ];
  return (
    <GLSection id="dont" eyebrow="08 · LOGO DO & DON'T" bg={SG.cream}>
      <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color: SG.royal, letterSpacing: '-0.02em' }}>
        Don't ruin the mark.
      </h2>
      <div style={{ marginTop: 12, fontFamily: SG.kr, fontSize: 17, color: SG.inkSoft, maxWidth: 720, lineHeight: 1.6 }}>
        지정된 3종(기본 · 반전 · 다크)을 벗어난 사용은 모두 금지합니다.
      </div>

      <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {items.map((it, i) => (
          <div key={i} style={{ background: it.bg, borderRadius: 14, aspectRatio: '4 / 3', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${SG.creamDk}` }}>
            {it.render(120)}
            <div style={{ position: 'absolute', top: 12, left: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: it.ok ? SG.royal : SG.orange, color: SG.cream, fontFamily: SG.mono, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {it.ok ? '✓' : '✕'}
              </div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, letterSpacing: '0.18em', color: it.ok ? SG.royal : SG.ink, fontWeight: 700 }}>
                {it.ok ? 'DO' : "DON'T"}
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft }}>{it.label}</div>
            {/* X-cross for don'ts */}
            {!it.ok ? (
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.08 }}>
                <line x1="0" y1="0" x2="100" y2="100" stroke={SG.ink} strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" stroke={SG.ink} strokeWidth="1" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
    </GLSection>
  );
}

// ─── 09 · Colophon ────────────────────────────────────────────────────
function GLColophon() {
  return (
    <section style={{ background: SG.ink, color: SG.cream, padding: `72px ${PAD}px` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <SGLogoMark size={64} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
            <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.24em', marginTop: 4 }}>BRAND · GUIDELINE · 2025</div>
          </div>
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.2em', opacity: 0.7, textAlign: 'right', lineHeight: 1.8 }}>
          정설옥 · DESIGN ENGINEER<br/>
          seoldi.kr · @seoldi.graphics<br/>
          v1.0 — 2025.05
        </div>
      </div>
    </section>
  );
}

// ─── Table of contents (left rail when wide enough) ────────────────────
function GLToC() {
  const items = [
    ['logo',         '01 · Logo System'],
    ['construction', '02 · Construction'],
    ['color',        '03 · Color Palette'],
    ['type',         '04 · Typography'],
    ['slogan',       '05 · Slogan'],
    ['voice',        '06 · Brand Voice'],
    ['apply',        '07 · Application'],
    ['dont',         "08 · Do & Don't"],
  ];
  return (
    <nav style={{ position: 'fixed', top: 32, left: 24, zIndex: 50, display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', background: 'rgba(245,240,232,0.85)', backdropFilter: 'blur(8px)', border: `1px solid ${SG.creamDk}`, borderRadius: 14 }} className="gl-toc">
      <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, fontWeight: 700, letterSpacing: '0.28em', marginBottom: 6 }}>CONTENTS</div>
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} style={{ fontFamily: SG.mono, fontSize: 11, color: SG.ink, opacity: 0.7, textDecoration: 'none', letterSpacing: '0.08em' }}>
          {label}
        </a>
      ))}
    </nav>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────
function Guideline() {
  return (
    <div style={{ width: PAGE_W, margin: '0 auto', background: SG.cream, boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 30px 80px rgba(13,33,165,0.08)' }}>
      <GLCover />
      <GLLogoSystem />
      <GLConstruction />
      <GLColor />
      <GLType />
      <GLSlogan />
      <GLVoice />
      <GLApplication />
      <GLDont />
      <GLColophon />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GLToC />
    <Guideline />
  </>
);
