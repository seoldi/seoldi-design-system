// instagram-playbook.jsx — 인스타그램 운영 플레이북
// Brand guideline의 후속 문서. brand.jsx 토큰 재사용.

const PB_W = 1280;
const PB_PAD = 88;

// ─── Section shell ────────────────────────────────────────────────────
function PBSection({ id, eyebrow, bg = SG.cream, fg = SG.ink, accent = SG.orange, children, padTop = 96, padBottom = 96 }) {
  return (
    <section id={id} style={{ background: bg, color: fg, padding: `${padTop}px ${PB_PAD}px ${padBottom}px` }}>
      {eyebrow ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 48 }}>
          <div style={{ width: 36, height: 3, background: accent }} />
          <div style={{ fontFamily: SG.mono, fontSize: 13, color: fg, opacity: 0.75, letterSpacing: '0.32em', fontWeight: 600 }}>{eyebrow}</div>
          <div style={{ flex: 1, height: 1, background: fg, opacity: 0.12 }} />
        </div>
      ) : null}
      {children}
    </section>
  );
}

function PBHeading({ children, color = SG.royal, sub }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'baseline', marginBottom: 48 }}>
      <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 68, lineHeight: 0.96, color, letterSpacing: '-0.02em' }}>
        {children}
      </h2>
      {sub ? <div style={{ fontFamily: SG.kr, fontSize: 19, color: SG.inkSoft, lineHeight: 1.6, maxWidth: 560 }}>{sub}</div> : null}
    </div>
  );
}

function PBLabel({ children, color = SG.royal }) {
  return <div style={{ fontFamily: SG.mono, fontSize: 12, letterSpacing: '0.28em', color, fontWeight: 600, textTransform: 'uppercase' }}>{children}</div>;
}

// ─── Cover ────────────────────────────────────────────────────────────
function PBCover() {
  return (
    <section style={{ background: SG.royal, color: SG.cream, padding: `120px ${PB_PAD}px 100px`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 64, right: 88, opacity: 0.22 }}>
        <SGLogoMark size={200} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: SG.mono, fontSize: 13, letterSpacing: '0.28em', color: SG.peri, opacity: 0.85 }}>
        <span>SEOLDI · GRAPHICS</span>
        <span>VOL. 02 · INSTAGRAM</span>
      </div>
      <div style={{ marginTop: 140 }}>
        <div style={{ width: 64, height: 4, background: SG.orange, marginBottom: 28 }} />
        <h1 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 124, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
          The IG<br/><span style={{ color: SG.peri }}>Playbook.</span>
        </h1>
        <div style={{ marginTop: 32, fontFamily: SG.kr, fontSize: 24, color: SG.peri, lineHeight: 1.5, maxWidth: 760 }}>
          @seoldi.graphics를 어떻게 운영할 것인가.<br/>
          프로필 셋업부터 30일 캘린더까지, 월요일 아침에 바로 쓰는 가이드.
        </div>
      </div>
      <div style={{ marginTop: 100, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.18em' }}>
        {[
          ['01', 'PROFILE'],
          ['02', 'GRID · STRATEGY'],
          ['03', 'CONTENT · MIX'],
          ['04', 'HIGHLIGHTS'],
          ['05', 'STORIES'],
          ['06', 'REELS'],
          ['07', 'COPY · CTA'],
          ['08', 'CALENDAR'],
        ].map(([n, t]) => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: `1px solid rgba(185,199,248,0.35)` }}>
            <span style={{ color: SG.orange }}>{n}</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 01 · Profile Setup ───────────────────────────────────────────────
function PBProfile() {
  return (
    <PBSection id="profile" eyebrow="01 · PROFILE SETUP" bg={SG.cream}>
      <PBHeading sub={<>프로필은 <b>이 사람이 누구이고, 왜 팔로우해야 하는지</b>를 3초 안에 답해야 합니다. 아바타는 다크형 마크, 바이오는 슬로건+직함+CTA 3줄 구조.</>}>
        First three<br/>seconds.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 40 }}>
        {/* Phone mockup */}
        <div>
          <PBLabel>PROFILE PREVIEW</PBLabel>
          <div style={{ marginTop: 14, background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 24, padding: 22, boxShadow: '0 18px 40px -20px rgba(13,33,165,0.18)' }}>
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
              <div style={{ width: 86, height: 86, borderRadius: '50%', background: SG.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 3px ${SG.cream}, 0 0 0 5px ${SG.orange}` }}>
                <SGLogoMark size={50} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.cream} />
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', alignSelf: 'center' }}>
                {[['132', '게시물'], ['2.4K', '팔로워'], ['184', '팔로잉']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 18, color: SG.ink }}>{n}</div>
                    <div style={{ fontFamily: SG.kr, fontSize: 11, color: SG.inkSoft, opacity: 0.7 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Handle + bio */}
            <div style={{ marginTop: 14 }}>
              <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 16, color: SG.ink }}>설디그래픽스</div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.6, marginTop: 2 }}>@seoldi.graphics · 디자이너</div>
              <div style={{ marginTop: 10, fontFamily: SG.kr, fontSize: 13, color: SG.ink, lineHeight: 1.55 }}>
                <div style={{ fontWeight: 700, color: SG.royal }}>Design meets Code.</div>
                <div>10년 차 1인 디자인 스튜디오 · UI/UX · Web · Branding</div>
                <div style={{ color: SG.orange, fontWeight: 600 }}>↓ DM으로 프로젝트 문의</div>
              </div>
              <div style={{ marginTop: 8, fontFamily: SG.mono, fontSize: 11, color: SG.royal }}>🔗 seoldi.kr</div>
            </div>
            {/* CTA buttons */}
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.6fr', gap: 6 }}>
              {['팔로우', '메시지', '이메일', '⌄'].map((b, i) => (
                <div key={b} style={{ padding: '8px 10px', textAlign: 'center', borderRadius: 8, background: i === 0 ? SG.royal : SG.cream, color: i === 0 ? SG.cream : SG.ink, fontFamily: SG.sans, fontWeight: 600, fontSize: 12, border: i === 0 ? 'none' : `1px solid ${SG.creamDk}` }}>{b}</div>
              ))}
            </div>
            {/* Highlights */}
            <div style={{ marginTop: 16, display: 'flex', gap: 12, overflowX: 'auto' }}>
              {[
                { lbl: 'WORK',    icon: '◧' },
                { lbl: 'CASE',    icon: '◐' },
                { lbl: 'STUDIO',  icon: '◇' },
                { lbl: 'AI',      icon: '✦' },
                { lbl: 'CONTACT', icon: '✉' },
              ].map((h) => (
                <div key={h.lbl} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: SG.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SG.orange, fontFamily: SG.mono, fontSize: 22, boxShadow: `0 0 0 2px ${SG.cream}, 0 0 0 3px ${SG.creamDk}` }}>{h.icon}</div>
                  <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.ink, letterSpacing: '0.16em' }}>{h.lbl}</div>
                </div>
              ))}
            </div>
            {/* tab bar mock */}
            <div style={{ marginTop: 14, display: 'flex', borderTop: `1px solid ${SG.creamDk}`, paddingTop: 8, gap: 24, justifyContent: 'center', fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.6, letterSpacing: '0.2em' }}>
              <span style={{ color: SG.royal }}>▦ GRID</span><span>▶ REELS</span><span>♥ TAGGED</span>
            </div>
          </div>
        </div>

        {/* Right: structured copy guide */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <PBChecklist
            title="아바타 (Profile Photo)"
            items={[
              ['다크 베이스 ', 'Sd! 마크 · 다크형 사용. 작게 보여도 ! 의 오렌지가 살아야 합니다.'],
              ['Crop ', '마크가 원 안에 75% 차지하도록 — 너무 꽉 차면 둥근 마스크에서 잘립니다.'],
              ['금지 ', '얼굴 사진, cd! 텍스트만 표기, 다른 컬러 조합.'],
            ]}
          />
          <PBChecklist
            title="바이오 3줄 공식"
            items={[
              ['1줄 · 슬로건', 'Design meets Code. — 가장 먼저 보여야 할 문장.'],
              ['2줄 · 정체성', '10년 차 1인 디자인 스튜디오 · UI/UX · Web · Branding'],
              ['3줄 · 행동',  '↓ DM으로 프로젝트 문의 (CTA는 항상 오렌지 ↓로 시작)'],
            ]}
          />
          <PBChecklist
            title="링크 · 카테고리"
            items={[
              ['링크', 'seoldi.kr 단일 링크. 링크인바이오 서비스(LinkTree 등) 지양 — 단일 도메인이 더 신뢰감 있습니다.'],
              ['카테고리', '"디자이너" 또는 "그래픽 디자인" 둘 중 하나로 고정.'],
              ['연락 버튼', '이메일 + DM 모두 활성. 이메일은 hello@seoldi.kr 같은 단일 주소 권장.'],
            ]}
          />
        </div>
      </div>
    </PBSection>
  );
}

function PBChecklist({ title, items }) {
  return (
    <div style={{ padding: '22px 24px 24px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14 }}>
      <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 18, color: SG.royal, letterSpacing: '-0.005em' }}>{title}</div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([k, v], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14, fontFamily: SG.kr, fontSize: 14, lineHeight: 1.5 }}>
            <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.14em', textTransform: 'uppercase', paddingTop: 2 }}>{k}</div>
            <div style={{ color: SG.ink }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 02 · Feed Grid Strategy ──────────────────────────────────────────
function PBGrid() {
  // tile = bg color + icon hint. CCB = cream/blue/dark rotation.
  // We design the grid by ROW-of-3, each row carrying 1 cream / 1 blue / 1 dark.
  const T = { c: SG.cream, b: SG.royal, d: SG.ink };
  const fg = (bg) => (bg === SG.cream ? SG.royal : SG.cream);
  const peri = (bg) => (bg === SG.cream ? SG.inkSoft : SG.peri);

  const tiles = [
    // row 1
    { bg: T.b, kind: 'NEW · CASE',  head: 'Doosan',  sub: 'Web · UI/UX' },
    { bg: T.c, kind: 'TIPS',        head: 'Figma 3', sub: 'shortcuts' },
    { bg: T.d, kind: 'MOOD',        head: 'Night',   sub: 'studio diary' },
    // row 2
    { bg: T.c, kind: 'PORTFOLIO',   head: 'Brand',   sub: '2025 SS' },
    { bg: T.d, kind: 'AI · NATIVE', head: 'Claude',  sub: 'workflow' },
    { bg: T.b, kind: 'D × D',       head: 'Manifesto', sub: '01' },
    // row 3
    { bg: T.d, kind: 'BTS',         head: 'Desk',    sub: 'late night' },
    { bg: T.b, kind: 'INSIGHT',     head: '3 rules', sub: 'auto layout' },
    { bg: T.c, kind: 'CTA',         head: 'DM →',    sub: 'project' },
  ];
  return (
    <PBSection id="grid" eyebrow="02 · GRID STRATEGY" bg={SG.cream}>
      <PBHeading sub={<>피드의 첫인상은 <b>최근 9장</b>이 결정합니다. <b>크림 · 블루 · 다크</b> 3종을 줄(row)마다 한 장씩 배치하면 어떤 순서로 봐도 리듬이 깨지지 않아요.</>}>
        Row of three,<br/>three colors.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 40, alignItems: 'flex-start' }}>
        {/* The grid */}
        <div>
          <PBLabel>LATEST · 9 POSTS</PBLabel>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, background: SG.creamDk, padding: 6, borderRadius: 12 }}>
            {tiles.map((t, i) => (
              <div key={i} style={{ aspectRatio: '4 / 5', background: t.bg, position: 'relative', padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: t.bg === SG.cream ? `1px solid ${SG.creamDk}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <SGLogoMark
                    size={22}
                    cdColor={t.bg === SG.ink ? SG.royal : (t.bg === SG.royal ? SG.cream : SG.royal)}
                    bangColor={SG.orange}
                    footColor={t.bg === SG.ink ? SG.cream : SG.ink}
                  />
                  <div style={{ fontFamily: SG.mono, fontSize: 8, color: peri(t.bg), letterSpacing: '0.18em', opacity: 0.85 }}>{t.kind}</div>
                </div>
                <div>
                  <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: fg(t.bg), lineHeight: 1, letterSpacing: '-0.02em' }}>{t.head}</div>
                  <div style={{ fontFamily: SG.mono, fontSize: 9, color: peri(t.bg), letterSpacing: '0.18em', marginTop: 4 }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* legend strip */}
          <div style={{ marginTop: 16, display: 'flex', gap: 18, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, letterSpacing: '0.18em' }}>
            <Swatch c={SG.cream} bordered label="CREAM · 포트폴리오 · CTA" />
            <Swatch c={SG.royal} label="BLUE · 강조 · 인사이트" />
            <Swatch c={SG.ink}   label="DARK · 무드 · 비하인드" />
          </div>
        </div>

        {/* Rules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <PBRule n="01" title="줄마다 3색이 섞이도록"      body="9칸을 가로줄 3개로 보고, 각 줄에 크림 · 블루 · 다크가 한 장씩. 순서는 자유." />
          <PBRule n="02" title="같은 컬러를 세로로 쌓지 않기" body="세로 3장이 모두 블루면 피드가 한쪽으로 무거워집니다. 새 글을 올리기 전 미리보기에서 체크." />
          <PBRule n="03" title="오렌지는 점, 라인, 화살표만"  body="배경 오렌지 금지. 액센트가 곳곳에서 한 번씩 빛나야 합니다 (느낌표, ↓, →)." />
          <PBRule n="04" title="여백 = 콘텐츠"                body="비주얼 카드 사이에 적어도 1장은 타이포그래피 위주의 ‘브리딩 카드’를 둡니다." />
          <PBRule n="05" title="저장 가치가 가장 중요한 KPI"  body="좋아요보다 저장(Save). 인사이트 카드는 ‘다시 볼 수 있게’ 만들기." />
        </div>
      </div>
    </PBSection>
  );
}

function Swatch({ c, label, bordered }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 14, height: 14, background: c, border: bordered ? `1px solid ${SG.creamDk}` : 'none', borderRadius: 3 }} />
      <span>{label}</span>
    </div>
  );
}

function PBRule({ n, title, body }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '16px 0', borderBottom: `1px solid ${SG.creamDk}` }}>
      <div style={{ fontFamily: SG.mono, fontSize: 22, fontWeight: 700, color: SG.orange }}>{n}</div>
      <div>
        <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 18, color: SG.royal }}>{title}</div>
        <div style={{ marginTop: 4, fontFamily: SG.kr, fontSize: 14, color: SG.inkSoft, lineHeight: 1.55 }}>{body}</div>
      </div>
    </div>
  );
}

// ─── 03 · Content Mix ─────────────────────────────────────────────────
function PBMix() {
  const mix = [
    { pct: 40, label: '포트폴리오', en: 'Portfolio',  body: '작업물 케이스 스터디. Before → After, 디테일 컷, 프로세스.', color: SG.royal, bg: SG.cream, text: SG.cream },
    { pct: 30, label: '1인 사업자 일상', en: 'Studio diary', body: '브이로그, 야근 감성, 데스크 셋업, 작업 중 BGM 같은 인간미.', color: SG.ink,   bg: SG.ink,    text: SG.cream },
    { pct: 20, label: '디자인 인사이트', en: 'Insight',     body: 'Figma 팁, Claude Code 워크플로우, 단축키, 토큰 시스템.',     color: SG.peri,  bg: SG.royal,  text: SG.peri },
    { pct: 10, label: '자기소개 · CTA', en: 'Profile · CTA', body: '슬로건, 소개 카드, 문의 받는 글. 한 달에 1~2회 충분.',         color: SG.orange,bg: SG.cream,  text: SG.royal },
  ];
  return (
    <PBSection id="mix" eyebrow="03 · CONTENT MIX" bg={SG.cream}>
      <PBHeading sub={<>업로드 비율은 <b>4 · 3 · 2 · 1</b>로 고정합니다. 10장 한 사이클을 기준으로 작업 4장, 일상 3장, 인사이트 2장, CTA 1장.</>}>
        4·3·2·1<br/>per ten.
      </PBHeading>

      {/* Stacked ratio bar */}
      <div style={{ display: 'flex', height: 88, borderRadius: 12, overflow: 'hidden', border: `1px solid ${SG.creamDk}` }}>
        {mix.map((m) => (
          <div key={m.label} style={{ flex: m.pct, background: m.bg, color: m.text, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '14px 18px', borderRight: `1px solid ${SG.creamDk}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: m.color }}>{m.pct}%</div>
              <div style={{ fontFamily: SG.mono, fontSize: 10, letterSpacing: '0.22em', opacity: 0.75 }}>{m.en.toUpperCase()}</div>
            </div>
            <div style={{ fontFamily: SG.kr, fontSize: 14, fontWeight: 600 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed cards */}
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {mix.map((m) => (
          <div key={m.label} style={{ padding: '24px 22px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, letterSpacing: '0.24em', color: SG.orange, fontWeight: 700 }}>{m.pct}% · {m.en}</div>
              <div style={{ marginTop: 8, fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal }}>{m.label}</div>
              <div style={{ marginTop: 10, fontFamily: SG.kr, fontSize: 14, color: SG.inkSoft, lineHeight: 1.55 }}>{m.body}</div>
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px dashed ${SG.creamDk}`, fontFamily: SG.mono, fontSize: 11, color: SG.royal, letterSpacing: '0.12em' }}>
              {m.label === '포트폴리오' && '단일 + 캐러셀'}
              {m.label === '1인 사업자 일상' && '릴스 + 단일'}
              {m.label === '디자인 인사이트' && '캐러셀 (저장↑)'}
              {m.label === '자기소개 · CTA' && '핀 고정 단일'}
            </div>
          </div>
        ))}
      </div>
    </PBSection>
  );
}

// ─── 04 · Highlights ──────────────────────────────────────────────────
function PBHighlights() {
  const highlights = [
    { lbl: 'WORK',    icon: '◧', body: '작업물 모음 (캐러셀 단축본)' },
    { lbl: 'CASE',    icon: '◐', body: '케이스 스터디 1프로젝트 1하이라이트' },
    { lbl: 'STUDIO',  icon: '◇', body: '데스크 · 일상 · 야근' },
    { lbl: 'AI',      icon: '✦', body: 'Claude · Figma AI 워크플로우' },
    { lbl: 'CONTACT', icon: '✉', body: '문의 양식 · 가격 · 일정' },
  ];
  return (
    <PBSection id="highlights" eyebrow="04 · HIGHLIGHTS" bg={SG.ink} fg={SG.cream}>
      <PBHeading color={SG.cream} sub={<><span style={{ color: SG.peri }}>다크 베이스 + 오렌지 픽토그램</span> 한 가지 룰로 5개 모두 통일합니다. 라벨은 영문 대문자로 짧게.</>}>
        Five icons,<br/>one system.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
        {highlights.map((h) => (
          <div key={h.lbl} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '24px 12px', background: SG.inkSoft, borderRadius: 14 }}>
            <div style={{ position: 'relative', width: 132, height: 132, borderRadius: '50%', background: SG.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1.5px solid ${SG.orange}` }}>
              <div style={{ fontFamily: SG.mono, fontSize: 56, color: SG.orange, lineHeight: 1 }}>{h.icon}</div>
            </div>
            <div style={{ fontFamily: SG.mono, fontSize: 13, color: SG.cream, letterSpacing: '0.22em', fontWeight: 700 }}>{h.lbl}</div>
            <div style={{ fontFamily: SG.kr, fontSize: 12, color: SG.peri, opacity: 0.75, textAlign: 'center', lineHeight: 1.5 }}>{h.body}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, padding: '20px 26px', border: `1px solid ${SG.inkSoft}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 24, fontFamily: SG.kr, fontSize: 14, color: SG.peri }}>
        <PBLabel color={SG.orange}>RULE</PBLabel>
        <div>
          하이라이트 커버는 한 번 정해두면 거의 안 바꿉니다. 픽토그램 5종을 SVG 1080×1920 형식으로 만들어 두고,
          새 스토리를 올릴 때마다 같은 커버로 덮어 씌우세요.
        </div>
      </div>
    </PBSection>
  );
}

// ─── 05 · Stories ─────────────────────────────────────────────────────
function PBStories() {
  return (
    <PBSection id="stories" eyebrow="05 · STORIES · 9:16" bg={SG.cream}>
      <PBHeading sub={<>스토리는 <b>3가지 템플릿</b>으로 충분합니다 — 작업 미리보기, 일상 한 줄, 새 글 알림. 매번 만들지 말고 템플릿 위에 텍스트만 갈아끼우세요.</>}>
        Three stories,<br/>endless reuse.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        <StoryFrame title="A · 작업 미리보기" desc="새 작업물 1컷 + 슬로건 + 손가락 → 스와이프 유도.">
          {/* image area */}
          <div style={{ position: 'absolute', inset: '14% 10% 28%', borderRadius: 8, overflow: 'hidden' }}>
            <SGImagePlaceholder label="WORK · PEEK" bg={SG.royal} fg={SG.peri} />
          </div>
          {/* top mark */}
          <div style={{ position: 'absolute', top: '5%', left: '8%' }}>
            <SGLogoMark size={28} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
          </div>
          <div style={{ position: 'absolute', top: '5%', right: '8%', fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.65, letterSpacing: '0.2em' }}>SNEAK · PEEK</div>
          {/* caption */}
          <div style={{ position: 'absolute', bottom: '8%', left: '8%', right: '8%' }}>
            <div style={{ width: 36, height: 3, background: SG.orange }} />
            <div style={{ marginTop: 8, fontFamily: SG.sans, fontWeight: 800, fontSize: 24, color: SG.royal, lineHeight: 1, letterSpacing: '-0.02em' }}>Doosan</div>
            <div style={{ marginTop: 4, fontFamily: SG.kr, fontSize: 12, color: SG.inkSoft }}>새 작업 · 다음 주 공개</div>
          </div>
        </StoryFrame>

        <StoryFrame title="B · 데일리 한 줄" desc="블루 배경 · 큰 한 문장. 매일 한 장씩 발행해도 부담 없는 톤.">
          <div style={{ position: 'absolute', inset: 0, background: SG.royal }} />
          <div style={{ position: 'absolute', top: '6%', left: '8%', fontFamily: SG.mono, fontSize: 10, color: SG.peri, letterSpacing: '0.22em', opacity: 0.85 }}>
            DAILY · 23.47
          </div>
          <div style={{ position: 'absolute', top: '32%', left: '8%', right: '8%' }}>
            <div style={{ width: 28, height: 3, background: SG.orange }} />
            <div style={{ marginTop: 14, fontFamily: SG.sans, fontWeight: 800, fontSize: 28, color: SG.cream, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              "A thousand <span style={{ color: SG.orange }}>no</span>'s, one <span style={{ color: SG.orange }}>yes</span>."
            </div>
            <div style={{ marginTop: 14, fontFamily: SG.kr, fontSize: 12, color: SG.peri, lineHeight: 1.45 }}>
              밤 11시, 또 시안을 엎으며.
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '6%', right: '8%' }}>
            <SGLogoMark size={26} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
          </div>
        </StoryFrame>

        <StoryFrame title="C · 새 글 알림" desc="피드 새 글 + 화살표. 큰 ↓로 시선을 본문으로 보냅니다.">
          <div style={{ position: 'absolute', inset: 0, background: SG.ink }} />
          <div style={{ position: 'absolute', top: '7%', left: '8%', fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em' }}>NEW POST · ↓</div>
          {/* mini preview */}
          <div style={{ position: 'absolute', top: '20%', left: '14%', right: '14%', aspectRatio: '4 / 5', background: SG.royal, borderRadius: 6, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <SGLogoMark size={20} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
            <div>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 18, color: SG.cream, lineHeight: 1, letterSpacing: '-0.02em' }}>Figma 3 tips</div>
              <div style={{ fontFamily: SG.mono, fontSize: 8, color: SG.peri, marginTop: 4, letterSpacing: '0.2em' }}>SWIPE →</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '7%', left: 0, right: 0, textAlign: 'center', fontFamily: SG.mono, fontSize: 26, color: SG.orange, fontWeight: 700 }}>↓</div>
          <div style={{ position: 'absolute', bottom: '4%', left: 0, right: 0, textAlign: 'center', fontFamily: SG.mono, fontSize: 10, color: SG.peri, letterSpacing: '0.22em' }}>TAP TO READ</div>
        </StoryFrame>
      </div>
    </PBSection>
  );
}

function StoryFrame({ title, desc, children }) {
  return (
    <div>
      <PBLabel>{title}</PBLabel>
      <div style={{ marginTop: 12, position: 'relative', aspectRatio: '9 / 16', background: SG.cream, border: `1px solid ${SG.creamDk}`, borderRadius: 18, overflow: 'hidden' }}>
        {children}
      </div>
      <div style={{ marginTop: 10, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

// ─── 06 · Reels Covers ────────────────────────────────────────────────
function PBReels() {
  return (
    <PBSection id="reels" eyebrow="06 · REELS COVERS" bg={SG.royal} fg={SG.cream}>
      <PBHeading color={SG.cream} sub={<>릴스 썸네일은 <b>피드에서도 그리드 한 칸으로</b> 보입니다. 첫 프레임이 아니라 별도 커버를 항상 만드세요. 텍스트는 위 1/3에만.</>}>
        Cover, not<br/>first frame.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {[
          { kind: 'TUTORIAL', head: 'Auto Layout', sub: 'in 30 sec', bg: SG.ink, color: SG.cream },
          { kind: 'BTS',      head: 'Late commit', sub: '23:47 · solo', bg: SG.royal, color: SG.cream, border: `1px solid ${SG.peri}` },
          { kind: 'PROCESS',  head: 'Wireframe →\nProduct', sub: 'Doosan · 8 wk', bg: SG.cream, color: SG.royal },
        ].map((r, i) => (
          <div key={i} style={{ position: 'relative', aspectRatio: '9 / 16', background: r.bg, border: r.border || 'none', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
            {/* top: orange tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ padding: '5px 10px', background: SG.orange, color: SG.cream, fontFamily: SG.mono, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em' }}>{r.kind}</div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: r.color, opacity: 0.7, letterSpacing: '0.18em' }}>0:{(i + 1) * 15 + 15}</div>
            </div>
            {/* title in top-third */}
            <div style={{ marginTop: -10 }}>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 38, color: r.color, lineHeight: 0.96, letterSpacing: '-0.025em', whiteSpace: 'pre-line' }}>{r.head}</div>
              <div style={{ marginTop: 8, fontFamily: SG.mono, fontSize: 11, color: r.color, opacity: 0.7, letterSpacing: '0.18em' }}>{r.sub.toUpperCase()}</div>
            </div>
            <div />
            {/* logo bottom */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <SGLogoMark size={22} cdColor={r.bg === SG.cream ? SG.royal : (r.bg === SG.royal ? SG.cream : SG.royal)} bangColor={SG.orange} footColor={r.bg === SG.ink ? SG.cream : SG.ink} />
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: r.color, opacity: 0.7, letterSpacing: '0.14em' }}>@seoldi.graphics</div>
            </div>
            {/* play icon mock */}
            <div style={{ position: 'absolute', top: 18, right: 18, opacity: 0.85, color: r.color, fontFamily: SG.mono, fontSize: 14 }}>▶</div>
          </div>
        ))}
      </div>
    </PBSection>
  );
}

// ─── 07 · Copy & CTA ──────────────────────────────────────────────────
function PBCopy() {
  return (
    <PBSection id="copy" eyebrow="07 · COPY · CTA · TAGS" bg={SG.cream}>
      <PBHeading sub={<>매번 새로 쓰지 마세요. <b>캡션 공식 · CTA 4종 · 해시태그 묶음 3세트</b>를 미리 만들고 조합만 바꿉니다.</>}>
        Caption formulas.
      </PBHeading>

      <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 32 }}>
        {/* Caption recipe */}
        <div style={{ padding: '28px 30px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14 }}>
          <PBLabel>CAPTION · 4 LINE FORMULA</PBLabel>
          <div style={{ marginTop: 16, fontFamily: SG.kr, fontSize: 15, color: SG.ink, lineHeight: 1.7 }}>
            <CaptionLine n="1" color={SG.royal}>훅 — 한 문장. 질문 또는 강한 주장.</CaptionLine>
            <CaptionLine n="2" color={SG.ink}>맥락 — 누구를 위한 것인지, 왜 만들었는지.</CaptionLine>
            <CaptionLine n="3" color={SG.ink}>핵심 — 본문에서 가장 가져갈 한 줄.</CaptionLine>
            <CaptionLine n="4" color={SG.orange}>CTA — 저장 · 공유 · DM 중 한 가지만.</CaptionLine>
          </div>
          <div style={{ marginTop: 18, padding: '14px 16px', background: SG.cream, borderRadius: 10, fontFamily: SG.kr, fontSize: 13, color: SG.inkSoft, lineHeight: 1.65 }}>
            <b style={{ color: SG.royal }}>예시.</b> Figma에서 가장 많이 쓰는 단축키 3개. — 1인 디자이너로 일하면서 매일 누르는 버튼만 추렸어요. — Auto Layout은 단축키 없이는 일하지 마세요. — <span style={{ color: SG.orange }}>저장하고 내일 한 번 써보세요 ↓</span>
          </div>
        </div>

        {/* CTA + hashtags */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ padding: '22px 26px', background: SG.ink, color: SG.cream, borderRadius: 14 }}>
            <PBLabel color={SG.orange}>CTA · 4 KINDS</PBLabel>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, fontFamily: SG.kr, fontSize: 14 }}>
              {[
                ['저장', '↓ 다음 작업에 써먹게 저장해 두세요'],
                ['공유', '→ 이걸 알면 좋을 동료에게'],
                ['DM',   '✉ 프로젝트는 DM으로'],
                ['댓글', '💬 여러분의 단축키도 알려주세요'],
              ].map(([k, v]) => (
                <div key={k} style={{ padding: '12px 14px', background: SG.inkSoft, borderRadius: 8 }}>
                  <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.2em', fontWeight: 700 }}>{k}</div>
                  <div style={{ marginTop: 6, color: SG.peri, fontSize: 13 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '22px 26px', background: SG.royal, color: SG.cream, borderRadius: 14 }}>
            <PBLabel color={SG.orange}>HASHTAG · 3 SETS</PBLabel>
            <div style={{ marginTop: 12, fontFamily: SG.mono, fontSize: 13, color: SG.peri, lineHeight: 1.85 }}>
              <div><span style={{ color: SG.orange }}>WORK·</span> #seoldigraphics #portfolio #uiuxdesign #branddesign #designstudio</div>
              <div><span style={{ color: SG.orange }}>TIP·</span>  #figmatips #designtools #designengineer #productdesign #aiux</div>
              <div><span style={{ color: SG.orange }}>LIFE·</span> #soloDesigner #1인사업자 #디자이너의일상 #studiolife #designerseoul</div>
            </div>
            <div style={{ marginTop: 12, fontFamily: SG.kr, fontSize: 12, color: SG.peri, opacity: 0.75 }}>
              한 게시물에 5~7개. 매번 같은 세트는 알고리즘이 패널티 — 한 단어씩 갈아끼우세요.
            </div>
          </div>
        </div>
      </div>
    </PBSection>
  );
}

function CaptionLine({ n, color, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10, padding: '4px 0' }}>
      <div style={{ fontFamily: SG.mono, fontWeight: 700, color, fontSize: 13, paddingTop: 4 }}>0{n}</div>
      <div>{children}</div>
    </div>
  );
}

// ─── 08 · 30-day calendar ─────────────────────────────────────────────
function PBCalendar() {
  // monday-start grid · 4 weeks
  const weeks = [
    [{ d: '월', t: '포트폴리오 — 케이스 A · 표지',  k: 'C', color: SG.cream }, { d: '화', t: '인사이트 — Figma 3 단축키',  k: 'B', color: SG.royal }, { d: '수', t: '일상 — 데스크 셋업',              k: 'D', color: SG.ink }, { d: '목', t: '포트폴리오 — 케이스 A · 디테일', k: 'C', color: SG.cream }, { d: '금', t: 'CTA — 핀 고정 자기소개',         k: 'B', color: SG.royal }, { d: '토', t: '릴스 — 30초 튜토리얼',          k: 'D', color: SG.ink }, { d: '일', t: '쉼 (스토리만)',                  k: '·', color: SG.creamDk }],
    [{ d: '월', t: '포트폴리오 — 케이스 A · 클로즈', k: 'C', color: SG.cream }, { d: '화', t: '인사이트 — 컬러 토큰 만들기',k: 'B', color: SG.royal }, { d: '수', t: '일상 — 야근 무드 카드',          k: 'D', color: SG.ink }, { d: '목', t: '릴스 — Claude 워크플로우',     k: 'D', color: SG.ink },   { d: '금', t: '포트폴리오 — 케이스 B · 표지', k: 'C', color: SG.cream },  { d: '토', t: '인사이트 — 캐러셀 (저장↑)',    k: 'B', color: SG.royal }, { d: '일', t: '쉼',                              k: '·', color: SG.creamDk }],
    [{ d: '월', t: '포트폴리오 — 케이스 B · 디테일', k: 'C', color: SG.cream }, { d: '화', t: '일상 — 작업 BGM 추천',     k: 'D', color: SG.ink },   { d: '수', t: '인사이트 — AI prompt 3가지',     k: 'B', color: SG.royal }, { d: '목', t: '포트폴리오 — 케이스 B · 클로즈',k: 'C', color: SG.cream }, { d: '금', t: 'CTA — 프로젝트 모집',           k: 'B', color: SG.royal }, { d: '토', t: '릴스 — Before → After',         k: 'D', color: SG.ink }, { d: '일', t: '쉼',                              k: '·', color: SG.creamDk }],
    [{ d: '월', t: '포트폴리오 — 케이스 C · 표지',  k: 'C', color: SG.cream }, { d: '화', t: '인사이트 — 명함 디자인 팁',k: 'B', color: SG.royal }, { d: '수', t: '일상 — 한 달 회고',              k: 'D', color: SG.ink },   { d: '목', t: '포트폴리오 — 케이스 C · 클로즈',k: 'C', color: SG.cream }, { d: '금', t: '릴스 — 작업 타임랩스',          k: 'D', color: SG.ink },   { d: '토', t: '인사이트 — 토큰 시스템 정리',   k: 'B', color: SG.royal }, { d: '일', t: '쉼',                              k: '·', color: SG.creamDk }],
  ];
  return (
    <PBSection id="calendar" eyebrow="08 · 30 DAY CALENDAR" bg={SG.cream}>
      <PBHeading sub={<>월 24개 게시물 + 일요일 휴식 = <b>한 달 페이스</b>. 같은 작업물은 표지 · 디테일 · 클로즈로 <b>3장 분할</b>합니다 — 시안 부족할 일 없음.</>}>
        Mon–Sat, ship.<br/>Sun, rest.
      </PBHeading>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', gap: 8, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, letterSpacing: '0.2em', paddingBottom: 6, borderBottom: `1px solid ${SG.creamDk}` }}>
          <span />
          {['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d) => <span key={d}>{d}</span>)}
        </div>
        {weeks.map((wk, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', gap: 8 }}>
            <div style={{ fontFamily: SG.mono, fontSize: 18, fontWeight: 700, color: SG.royal, alignSelf: 'center' }}>W{i + 1}</div>
            {wk.map((day, j) => (
              <div key={j} style={{ background: day.color, color: day.color === SG.cream ? SG.ink : (day.color === SG.creamDk ? SG.inkSoft : SG.cream), borderRadius: 10, padding: '12px 14px', minHeight: 96, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: day.color === SG.cream || day.color === SG.creamDk ? `1px solid ${SG.creamDk}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: SG.mono, fontSize: 10, letterSpacing: '0.18em', opacity: 0.8 }}>
                  <span>{day.d}</span>
                  <span style={{ color: day.color === SG.ink ? SG.orange : (day.color === SG.royal ? SG.orange : SG.orange) }}>{day.k}</span>
                </div>
                <div style={{ fontFamily: SG.kr, fontSize: 12, lineHeight: 1.4, fontWeight: 500 }}>{day.t}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 18, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, letterSpacing: '0.18em' }}>
        <Swatch c={SG.cream} bordered label="C · CASE (포트폴리오)" />
        <Swatch c={SG.royal} label="B · BLUE (인사이트 · CTA)" />
        <Swatch c={SG.ink}   label="D · DARK (일상 · 릴스)" />
        <Swatch c={SG.creamDk} bordered label="· REST" />
      </div>
    </PBSection>
  );
}

// ─── Colophon ─────────────────────────────────────────────────────────
function PBColophon() {
  return (
    <section style={{ background: SG.ink, color: SG.cream, padding: `72px ${PB_PAD}px` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <SGLogoMark size={64} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
            <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.24em', marginTop: 4 }}>INSTAGRAM · PLAYBOOK · 2025</div>
          </div>
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.peri, letterSpacing: '0.2em', opacity: 0.7, textAlign: 'right', lineHeight: 1.8 }}>
          @seoldi.graphics · seoldi.kr<br/>
          v1.0 — 2025.05
        </div>
      </div>
    </section>
  );
}

// ─── ToC ──────────────────────────────────────────────────────────────
function PBToC() {
  const items = [
    ['profile',   '01 · Profile'],
    ['grid',      '02 · Grid'],
    ['mix',       '03 · Content Mix'],
    ['highlights','04 · Highlights'],
    ['stories',   '05 · Stories'],
    ['reels',     '06 · Reels'],
    ['copy',      '07 · Copy · CTA'],
    ['calendar',  '08 · Calendar'],
  ];
  return (
    <nav style={{ position: 'fixed', top: 32, left: 24, zIndex: 50, display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', background: 'rgba(245,240,232,0.85)', backdropFilter: 'blur(8px)', border: `1px solid ${SG.creamDk}`, borderRadius: 14 }} className="pb-toc">
      <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.royal, fontWeight: 700, letterSpacing: '0.28em', marginBottom: 6 }}>CONTENTS</div>
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} style={{ fontFamily: SG.mono, fontSize: 11, color: SG.ink, opacity: 0.7, textDecoration: 'none', letterSpacing: '0.08em' }}>{label}</a>
      ))}
    </nav>
  );
}

function Playbook() {
  return (
    <div style={{ width: PB_W, margin: '0 auto', background: SG.cream, boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 30px 80px rgba(13,33,165,0.08)' }}>
      <PBCover />
      <PBProfile />
      <PBGrid />
      <PBMix />
      <PBHighlights />
      <PBStories />
      <PBReels />
      <PBCopy />
      <PBCalendar />
      <PBColophon />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PBToC />
    <Playbook />
  </>
);
