// hub.jsx — Seoldi Graphics 브랜드 시스템 통합 허브
// 3개 문서로 진입하는 메뉴 + 브랜드 미리보기 + 시스템 상태 요약.

const PALETTE = [
  { name: 'Royal Blue', hex: '#0D21A5', use: 'Primary · 60%', fg: '#F5F0E8' },
  { name: 'Cream',      hex: '#F5F0E8', use: 'Base · 25%',    fg: '#1A1A1A', bordered: true },
  { name: 'Orange',     hex: '#F97316', use: 'Accent · 15%',  fg: '#F5F0E8' },
  { name: 'Periwinkle', hex: '#B9C7F8', use: 'Support',       fg: '#0D21A5' },
  { name: 'Ink Black',  hex: '#1A1A1A', use: 'Dark base',     fg: '#F5F0E8' },
];

const DOCS = [
  {
    no: '01',
    href: 'Portfolio.html',
    title: 'Portfolio Landing',
    krTitle: '포트폴리오 랜딩',
    desc: '소개 · Logofolio (60+ 클라이언트) · Social Media · KEPCO 케이스 스터디. seoldi.kr에 올라갈 메인 랜딩 페이지.',
    meta: ['6 sections', 'Long scroll', 'seoldi.kr · main'],
    bg: SG.cream,
    fg: SG.ink,
    accent: SG.royal,
    badge: 'LANDING',
    Preview: HubPreviewPortfolio,
  },
  {
    no: '02',
    href: 'index.html',
    title: 'Instagram Templates',
    krTitle: '인스타그램 템플릿',
    desc: '포트폴리오 · 인사이트 · 무드 세 가지 카드 타입과, 각 타입별 3가지 변형. 1080×1350 비율, 디자인 캔버스에서 비교/포커스.',
    meta: ['3 × 3 = 9 cards', '1080 × 1350 px', '디자인 캔버스 / Tweaks'],
    bg: SG.royal,
    fg: SG.cream,
    accent: SG.orange,
    badge: 'CANVAS',
    Preview: HubPreviewTemplates,
  },
  {
    no: '03',
    href: 'Brand Guideline.html',
    title: 'Brand Guideline',
    krTitle: '브랜드 가이드라인',
    desc: '로고 시스템 · 컨스트럭션 · 컬러 · 타입 · 슬로건 · 보이스 · 어플리케이션 · Do & Don\'t. 9개 섹션 1장 문서.',
    meta: ['9 sections', '1280px / print-ready', 'Sd! letter-mark'],
    bg: SG.cream,
    fg: SG.ink,
    accent: SG.orange,
    badge: 'GUIDELINE',
    Preview: HubPreviewGuideline,
  },
  {
    no: '04',
    href: 'Instagram Playbook.html',
    title: 'Instagram Playbook',
    krTitle: 'SNS 운영 플레이북',
    desc: '프로필 셋업부터 30일 캘린더까지. 그리드 전략 · 콘텐츠 4·3·2·1 · 하이라이트 · 스토리 · 릴스 · 캡션 공식.',
    meta: ['8 sections', '월 24 posts', 'Story · Reels · Highlight'],
    bg: SG.ink,
    fg: SG.cream,
    accent: SG.orange,
    badge: 'PLAYBOOK',
    Preview: HubPreviewPlaybook,
  },
];

function HubPreviewPortfolio() {
  return (
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* header line */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 18, color: SG.royal, letterSpacing: '-0.02em' }}>
          SEOLDI<span style={{ color: SG.orange }}>.</span>
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 8, color: SG.inkSoft, letterSpacing: '0.2em', opacity: 0.6 }}>2025</div>
      </div>
      {/* split layout mini — photo + bio */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 8 }}>
        <div style={{ aspectRatio: '4/5', background: SG.peri, borderRadius: 6, position: 'relative' }}>
          <SGLogoMark size={14} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2px 0' }}>
          <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 14, color: SG.royal, lineHeight: 1, letterSpacing: '-0.025em' }}>Hello,<br/>I'm Seoldi<span style={{ color: SG.orange }}>!</span></div>
          {/* mini logo grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
            {[SG.royal, SG.ink, SG.orange, SG.cream, SG.ink, SG.royal].map((c, i) => (
              <div key={i} style={{ aspectRatio: '1/1', background: c === SG.cream ? SG.cream : 'transparent', border: `1px solid ${c}`, borderRadius: 2 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Preview tiles (mini compositions of each doc) ─────────────────────
function HubPreviewTemplates() {
  // 3 mini cards in a row, each in a brand color
  const tiles = [
    { bg: SG.cream, fg: SG.royal, t: 'Case' },
    { bg: SG.royal, fg: SG.cream, t: '03 Tips' },
    { bg: SG.ink,   fg: SG.cream, t: 'Night' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, padding: 14 }}>
      {tiles.map((t, i) => (
        <div key={i} style={{ aspectRatio: '4/5', background: t.bg, border: t.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none', borderRadius: 6, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <SGLogoMark size={16} cdColor={t.bg === SG.ink ? SG.royal : (t.bg === SG.royal ? SG.cream : SG.royal)} bangColor={SG.orange} footColor={t.bg === SG.ink ? SG.cream : SG.ink} />
          <div>
            <div style={{ width: 18, height: 2, background: SG.orange, marginBottom: 4 }} />
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 13, color: t.fg, lineHeight: 1, letterSpacing: '-0.02em' }}>{t.t}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HubPreviewGuideline() {
  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* color row */}
      <div style={{ display: 'flex', gap: 4, height: 28, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ flex: 60, background: SG.royal }} />
        <div style={{ flex: 25, background: SG.cream, border: `1px solid rgba(255,255,255,0.2)` }} />
        <div style={{ flex: 15, background: SG.orange }} />
      </div>
      {/* type sample */}
      <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 28, color: SG.cream, lineHeight: 0.95, letterSpacing: '-0.025em' }}>
        Design <span style={{ color: SG.peri }}>meets</span> Code<span style={{ color: SG.orange }}>·</span>
      </div>
      <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.peri, letterSpacing: '0.22em', opacity: 0.8 }}>
        MONTSERRAT · PRETENDARD · MONO
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
        <SGLogoMark size={28} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
        <SGLogoMark size={28} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.cream} />
      </div>
    </div>
  );
}

function HubPreviewPlaybook() {
  // 3x3 IG feed mock
  const colors = [SG.royal, SG.cream, SG.ink, SG.cream, SG.ink, SG.royal, SG.ink, SG.royal, SG.cream];
  return (
    <div style={{ padding: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
        {colors.map((c, i) => (
          <div key={i} style={{ aspectRatio: '4/5', background: c, border: c === SG.cream ? `1px solid rgba(0,0,0,0.08)` : 'none', position: 'relative' }}>
            {/* tiny accent dot on a few */}
            {(i === 0 || i === 4 || i === 8) ? <span style={{ position: 'absolute', top: 4, left: 4, width: 4, height: 4, borderRadius: '50%', background: SG.orange }} /> : null}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontFamily: SG.mono, fontSize: 9, color: SG.peri, letterSpacing: '0.2em', opacity: 0.7 }}>
        <span>@SEOLDI.GRAPHICS</span><span>9 / GRID</span>
      </div>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────
function HubHero() {
  return (
    <header style={{ background: SG.ink, color: SG.cream, padding: '88px 64px 72px', position: 'relative', overflow: 'hidden', borderRadius: 24 }}>
      {/* faint mark behind */}
      <div style={{ position: 'absolute', top: -40, right: -40, opacity: 0.08 }}>
        <SGLogoMark size={520} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
      </div>

      {/* top status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.28em', opacity: 0.85, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: SG.orange, boxShadow: `0 0 0 4px rgba(249,115,22,0.18)` }} />
          <span>BRAND · SYSTEM · LIVE</span>
        </div>
        <div>SEOLDI · GRAPHICS · 2025</div>
      </div>

      {/* title */}
      <div style={{ marginTop: 96, position: 'relative' }}>
        <div style={{ width: 64, height: 4, background: SG.orange, marginBottom: 28 }} />
        <h1 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 132, lineHeight: 0.88, letterSpacing: '-0.035em' }}>
          설디그래픽스<br/>
          <span style={{ color: SG.peri }}>Branding</span><span style={{ color: SG.orange }}>.</span>
        </h1>
        <div style={{ marginTop: 28, fontFamily: SG.kr, fontSize: 22, color: SG.peri, lineHeight: 1.5, maxWidth: 780 }}>
          로고 · 컬러 · 타입 · 슬로건 · SNS 운영까지 한 곳에서.<br/>
          세 개의 문서로 묶인 살아있는 브랜드 시스템.
        </div>
      </div>

      {/* meta strip */}
      <div style={{ marginTop: 80, position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: `1px solid rgba(185,199,248,0.2)`, paddingTop: 28 }}>
        {[
          { k: 'STUDIO',  v: '정설옥',             s: 'Design Engineer' },
          { k: 'SLOGAN',  v: 'Design meets Code.',  s: '기획 → 구현, 한 사람' },
          { k: 'VERSION', v: 'v1.0',                s: '2025.05' },
          { k: 'CONTACT', v: 'seoldi.kr',           s: '@seoldi.graphics' },
        ].map((m) => (
          <div key={m.k}>
            <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.28em', fontWeight: 700 }}>{m.k}</div>
            <div style={{ marginTop: 8, fontFamily: SG.sans, fontWeight: 700, fontSize: 18, color: SG.cream }}>{m.v}</div>
            <div style={{ marginTop: 4, fontFamily: SG.mono, fontSize: 11, color: SG.peri, opacity: 0.7, letterSpacing: '0.16em' }}>{m.s}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function HubDocs() {
  return (
    <section style={{ padding: '72px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 3, background: SG.orange }} />
            <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 700 }}>DOCS · 4</div>
          </div>
          <h2 style={{ margin: '14px 0 0', fontFamily: SG.sans, fontWeight: 800, fontSize: 52, color: SG.royal, lineHeight: 0.96, letterSpacing: '-0.02em' }}>
            네 권의 문서.<br/>하나의 시스템.
          </h2>
        </div>
        <div style={{ fontFamily: SG.kr, fontSize: 16, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 420, textAlign: 'right' }}>
          각 문서는 독립적으로 인쇄 가능하지만, 같은 토큰 · 같은 로고 · 같은 톤을 공유합니다.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {DOCS.map((d) => <HubDocCard key={d.no} d={d} />)}
      </div>
    </section>
  );
}

function HubDocCard({ d }) {
  const [hover, setHover] = React.useState(false);
  const Preview = d.Preview;
  return (
    <a href={d.href}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}
       style={{
         textDecoration: 'none', color: 'inherit', display: 'block',
         background: d.bg, color: d.fg, borderRadius: 20,
         overflow: 'hidden', position: 'relative',
         border: d.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none',
         boxShadow: hover ? '0 24px 50px -16px rgba(13,33,165,0.25)' : '0 8px 22px -16px rgba(13,33,165,0.15)',
         transform: hover ? 'translateY(-4px)' : 'translateY(0)',
         transition: 'transform 0.2s ease, box-shadow 0.2s ease',
       }}>
      {/* top: number + badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '22px 24px 0' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 38, fontWeight: 700, color: d.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>
          {d.no}
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 10, padding: '4px 10px', background: d.accent, color: d.bg === SG.cream ? SG.cream : (d.accent === SG.orange ? SG.cream : SG.royal), letterSpacing: '0.22em', borderRadius: 999, fontWeight: 700 }}>
          {d.badge}
        </div>
      </div>

      {/* preview area */}
      <div style={{ margin: '10px 14px 16px', background: d.bg === SG.cream ? '#FFFFFF' : 'rgba(255,255,255,0.04)', border: d.bg === SG.cream ? `1px solid ${SG.creamDk}` : `1px solid rgba(245,240,232,0.08)`, borderRadius: 12, aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <Preview />
      </div>

      {/* body */}
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ fontFamily: SG.kr, fontSize: 13, color: d.bg === SG.cream ? SG.inkSoft : SG.peri, opacity: 0.75, letterSpacing: '-0.005em' }}>
          {d.krTitle}
        </div>
        <div style={{ marginTop: 4, fontFamily: SG.sans, fontWeight: 800, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          {d.title}
        </div>
        <div style={{ marginTop: 12, fontFamily: SG.kr, fontSize: 14, color: d.bg === SG.cream ? SG.inkSoft : SG.peri, lineHeight: 1.6, opacity: 0.88 }}>
          {d.desc}
        </div>

        {/* meta chips */}
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {d.meta.map((m) => (
            <span key={m} style={{
              fontFamily: SG.mono, fontSize: 10, padding: '4px 8px',
              background: d.bg === SG.cream ? 'rgba(13,33,165,0.07)' : 'rgba(245,240,232,0.08)',
              color: d.bg === SG.cream ? SG.royal : SG.peri,
              letterSpacing: '0.08em', borderRadius: 4,
            }}>{m}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${d.bg === SG.cream ? SG.creamDk : 'rgba(245,240,232,0.12)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: SG.mono, fontSize: 11, color: d.accent, letterSpacing: '0.2em', fontWeight: 700 }}>
            열기
          </span>
          <span style={{ fontFamily: SG.sans, fontSize: 16, color: d.accent, fontWeight: 700, transition: 'transform 0.2s ease', transform: hover ? 'translateX(4px)' : 'translateX(0)', display: 'inline-block' }}>
            →
          </span>
        </div>
      </div>
    </a>
  );
}

function HubBrandEssentials() {
  return (
    <section style={{ padding: '24px 0 72px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{ width: 28, height: 3, background: SG.orange }} />
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 700 }}>ESSENTIALS · 4</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr 3fr', gap: 20 }}>
        {/* Logo trio */}
        <div style={{ padding: '28px 28px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 18 }}>
          <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.24em', fontWeight: 700 }}>LOGO · Sd!</div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { bg: SG.cream, cd: SG.royal, foot: SG.ink,   label: '기본형' },
              { bg: SG.royal, cd: SG.cream, foot: SG.ink,   label: '반전형' },
              { bg: SG.ink,   cd: SG.royal, foot: SG.cream, label: '다크형' },
            ].map((v, i) => (
              <div key={i} style={{ background: v.bg, aspectRatio: '1/1', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', border: v.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none', position: 'relative' }}>
                <SGLogoMark size={56} cdColor={v.cd} bangColor={SG.orange} footColor={v.foot} />
                <div style={{ position: 'absolute', bottom: 6, left: 8, fontFamily: SG.mono, fontSize: 9, color: v.bg === SG.cream ? SG.inkSoft : SG.peri, letterSpacing: '0.18em', opacity: 0.7 }}>0{i+1}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft, lineHeight: 1.55 }}>
            S(설) · d(디) · !(스템 + 닷)으로 구성된 레터마크. 세 가지 컬러 조합으로만 사용.
          </div>
        </div>

        {/* Palette */}
        <div style={{ padding: '28px 28px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 18 }}>
          <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.24em', fontWeight: 700 }}>PALETTE · 60·25·15</div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {PALETTE.map((c) => (
              <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, background: c.hex, borderRadius: 6, border: c.bordered ? `1px solid ${SG.creamDk}` : 'none' }} />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 13, color: SG.ink }}>{c.name}</span>
                  <span style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.65, letterSpacing: '0.1em' }}>{c.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <div style={{ padding: '28px 28px', background: SG.royal, color: SG.cream, borderRadius: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.peri, letterSpacing: '0.24em', fontWeight: 700 }}>SLOGAN</div>
          <div>
            <div style={{ width: 36, height: 3, background: SG.orange, marginBottom: 14 }} />
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 36, lineHeight: 0.96, letterSpacing: '-0.025em' }}>
              Design{' '}<span style={{ color: SG.peri }}>meets</span>{' '}Code<span style={{ color: SG.orange }}>·</span>
            </div>
            <div style={{ marginTop: 12, fontFamily: SG.kr, fontSize: 13, color: SG.peri, lineHeight: 1.55, opacity: 0.85 }}>
              기획부터 구현까지,<br/>설디그래픽스가 잇습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HubChangelog() {
  const log = [
    { v: 'v1.0', d: '2025.05.22', notes: ['Sd! 레터마크 명명 정정 · 슬로건 "Design meets Code."로 변경', '브랜드 가이드라인 + IG 플레이북 + 템플릿 9종 1차 배포'] },
    { v: 'v0.9', d: '2025.05.18', notes: ['컬러 시스템 60·25·15 비율 확정', '인스타그램 카드 3종 × 3변형 캔버스 셋업'] },
    { v: 'v0.5', d: '2025.05.10', notes: ['Royal Blue · Cream · Orange 메인 트리오 결정', 'Montserrat + Pretendard 폰트 페어링 확정'] },
  ];
  return (
    <section style={{ padding: '32px 0 96px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{ width: 28, height: 3, background: SG.orange }} />
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 700 }}>CHANGELOG</div>
      </div>

      <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 18, overflow: 'hidden' }}>
        {log.map((row, i) => (
          <div key={row.v} style={{ display: 'grid', gridTemplateColumns: '160px 140px 1fr', gap: 24, padding: '22px 28px', borderTop: i === 0 ? 'none' : `1px solid ${SG.creamDk}`, alignItems: 'flex-start' }}>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, letterSpacing: '-0.01em' }}>{row.v}</div>
            <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.inkSoft, opacity: 0.7, letterSpacing: '0.14em', paddingTop: 6 }}>{row.d}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontFamily: SG.kr, fontSize: 14, color: SG.ink, lineHeight: 1.55 }}>
              {row.notes.map((n, j) => (
                <li key={j} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8 }}>
                  <span style={{ color: SG.orange, fontFamily: SG.mono, fontSize: 11, paddingTop: 4 }}>—</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function HubFooter() {
  return (
    <footer style={{ background: SG.ink, color: SG.cream, padding: '52px 56px', borderRadius: 20, marginBottom: 36 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <SGLogoMark size={56} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
            <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.24em', marginTop: 4 }}>DESIGN · MEETS · CODE</div>
          </div>
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.2em', opacity: 0.75, textAlign: 'right', lineHeight: 1.85 }}>
          정설옥 · DESIGN ENGINEER<br/>
          seoldi.kr · @seoldi.graphics<br/>
          BRAND SYSTEM · v1.0 · 2025
        </div>
      </div>
    </footer>
  );
}

function Hub() {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 0' }}>
      <HubHero />
      <HubDocs />
      <HubBrandEssentials />
      <HubChangelog />
      <HubFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Hub />);
