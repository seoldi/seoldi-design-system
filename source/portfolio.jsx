// portfolio.jsx — seoldi.kr landing page on the new brand system.
// Sections: Hero · About · Work (SNS · Dashboard · Gnuboard) · CTA.
// All sections reuse SG tokens. Section transitions are full-bleed color
// bands (cream ↔ royal ↔ ink) per the brand 60·25·15 ratio.

const PF_MAX = 1240;

// ─── Wordmark — large display version (hero) ─────────────────────────
function PFWordmark() {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0.9, letterSpacing: '-0.025em' }}>
      <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 64, color: SG.royal, display: 'flex', alignItems: 'baseline' }}>
        SEOLDI<span style={{ color: SG.orange, marginLeft: 2 }}>.</span>
      </div>
      <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 28, color: SG.creamDk, letterSpacing: '0.06em', marginTop: 6 }}>
        GRAPHICS
      </div>
    </div>
  );
}

// ─── Section band — full-bleed transition between work sections ─────
function PFBand({ label, sub, bg = SG.royal, fg = SG.cream }) {
  return (
    <section style={{ background: bg, color: fg, padding: '100px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 56, height: 4, background: SG.orange }} />
          <div style={{ fontFamily: SG.mono, fontSize: 13, color: bg === SG.cream ? SG.royal : SG.peri, letterSpacing: '0.32em', fontWeight: 700 }}>
            {label[0]}
          </div>
        </div>
        <h2 style={{ margin: '20px 0 0', fontFamily: SG.sans, fontWeight: 800, fontSize: 128, lineHeight: 0.92, letterSpacing: '-0.035em' }}>
          {label[1]}
        </h2>
        {sub ? (
          <div style={{ marginTop: 22, fontFamily: SG.kr, fontSize: 19, color: bg === SG.cream ? SG.inkSoft : SG.peri, lineHeight: 1.55, maxWidth: 720 }}>
            {sub}
          </div>
        ) : null}
      </div>
      <div style={{ position: 'absolute', top: 32, right: 56, fontFamily: SG.mono, fontSize: 12, color: bg === SG.cream ? SG.royal : SG.peri, letterSpacing: '0.28em', opacity: 0.75 }}>
        {label[2]}
      </div>
    </section>
  );
}

// ─── Work header — title block atop each work case ──────────────────
function WorkHeader({ no, tag, title, sub, stats }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 56, alignItems: 'flex-end' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 28, height: 3, background: SG.orange }} />
          <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 700 }}>WORK · {no}</div>
        </div>
        <div style={{ marginTop: 12, fontFamily: SG.mono, fontSize: 13, color: SG.inkSoft, letterSpacing: '0.06em' }}>{tag}</div>
        <h3 style={{ margin: '12px 0 0', fontFamily: SG.sans, fontWeight: 800, fontSize: 64, color: SG.royal, lineHeight: 0.94, letterSpacing: '-0.025em' }}>
          {title}
        </h3>
      </div>
      <div>
        {sub ? (
          <div style={{ fontFamily: SG.kr, fontSize: 17, color: SG.inkSoft, lineHeight: 1.7, maxWidth: 580 }}>
            {sub}
          </div>
        ) : null}
        {stats ? (
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 14 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ padding: '14px 18px', borderLeft: `3px solid ${SG.orange}`, background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderLeftColor: SG.orange, borderLeftWidth: 3, borderRadius: 8 }}>
                <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 28, color: SG.royal, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
                <div style={{ marginTop: 6, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.7, letterSpacing: '0.2em' }}>{s.l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ─── 01 · HERO ───────────────────────────────────────────────────────
function PFHero() {
  return (
    <section style={{ background: SG.cream, padding: '72px 56px 96px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <PFWordmark />
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: SG.mono, fontSize: 12, color: SG.inkSoft, opacity: 0.6, letterSpacing: '0.28em' }}>
            PORTFOLIO · 2025
          </div>
        </div>

        <div style={{ marginTop: 22, fontFamily: SG.kr, fontSize: 18, color: SG.inkSoft, lineHeight: 1.55, maxWidth: 540 }}>
          기획부터 구현까지, 디자인과 개발을 잇는 디지털 파트너.<br/>
          1인 크리에이티브 스튜디오 <b style={{ color: SG.royal }}>설디그래픽스</b>.
        </div>

        <div style={{ marginTop: 96, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <SGLogoMark size={140} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
            <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.7, letterSpacing: '0.22em' }}>
              Sd! · LETTER MARK
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 540, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: `1.5px solid ${SG.ink}` }}>
            <ContactBlock head="Contact" lines={[
              ['EMAIL',  'contact@seoldi.kr'],
              ['KAKAO',  'kakaotalk · seoldi'],
            ]} />
            <ContactBlock head="Address" lines={[
              ['BASE',   'South Korea'],
              ['STUDIO', '경상남도 창원시'],
            ]} divider />
            <ContactBlock head="Web" lines={[
              ['SITE', 'seoldi.kr'],
              ['IG',   '@seoldi.graphics'],
            ]} divider />
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, marginBottom: 16, letterSpacing: '-0.005em' }}>
              Software
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { abbr: 'Fi', name: 'Figma',        bg: SG.royal },
                { abbr: 'Ai', name: 'Illustrator',  bg: SG.ink },
                { abbr: 'Ps', name: 'Photoshop',    bg: SG.ink },
                { abbr: 'Id', name: 'InDesign',     bg: SG.ink },
                { abbr: '</>',name: 'VS Code',      bg: SG.orange },
              ].map((s) => (
                <div key={s.name} title={s.name} style={{ width: 54, height: 54, background: s.bg, color: SG.cream, fontFamily: SG.sans, fontWeight: 800, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, letterSpacing: '-0.02em' }}>
                  {s.abbr}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, marginBottom: 16, letterSpacing: '-0.005em' }}>
              Creative Field
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['SNS · 소셜미디어', '대시보드', '웹사이트 구축 (그누보드)', 'UI/UX 디자인', '브랜딩', 'AI 워크플로우'].map((f, i) => (
                <span key={f} style={{
                  fontFamily: SG.kr, fontSize: 14, fontWeight: 600, padding: '10px 16px', borderRadius: 999,
                  background: i < 3 ? SG.royal : 'transparent',
                  color: i < 3 ? SG.cream : SG.ink,
                  border: i < 3 ? 'none' : `1.5px solid ${SG.ink}`,
                }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ head, lines, divider }) {
  return (
    <div style={{ padding: '20px 24px 20px 0', borderLeft: divider ? `1px solid rgba(26,26,26,0.15)` : 'none', paddingLeft: divider ? 24 : 0 }}>
      <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.24em', fontWeight: 700, marginBottom: 12 }}>
        {head.toUpperCase()}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {lines.map(([k, v]) => (
          <div key={k} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 10, alignItems: 'baseline' }}>
            <span style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.6, letterSpacing: '0.16em' }}>{k}</span>
            <span style={{ fontFamily: SG.kr, fontSize: 14, color: SG.ink, fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 02 · ABOUT ──────────────────────────────────────────────────────
function PFAbout() {
  return (
    <section style={{ background: SG.cream, padding: '96px 56px', borderTop: `1px solid ${SG.creamDk}` }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <div style={{ width: 28, height: 3, background: SG.orange }} />
          <div style={{ fontFamily: SG.mono, fontSize: 12, color: SG.royal, letterSpacing: '0.28em', fontWeight: 700 }}>ABOUT · 01</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <div style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', aspectRatio: '4 / 5', background: SG.peri, border: `1px solid ${SG.creamDk}` }}>
              <SGImagePlaceholder label="PROFILE · PHOTO" bg={SG.peri} fg={SG.royal} />
              <div style={{ position: 'absolute', top: 24, right: 24, background: SG.cream, padding: '10px 14px', borderRadius: 16, boxShadow: '0 6px 16px -8px rgba(13,33,165,0.25)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <SGLogoMark size={22} cdColor={SG.royal} bangColor={SG.orange} footColor={SG.ink} />
                <span style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 13, color: SG.royal }}>Sd!</span>
              </div>
              <div style={{ position: 'absolute', bottom: 24, left: 24, display: 'flex', gap: 6, padding: '8px 12px', background: 'rgba(26,26,26,0.65)', borderRadius: 999 }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? SG.orange : SG.peri, opacity: i === 0 ? 1 : 0.7 }} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 84, lineHeight: 0.94, letterSpacing: '-0.03em', color: SG.royal }}>
              Hello, I'm<br/>
              <span style={{ color: SG.ink }}>Seoldi</span><span style={{ color: SG.orange }}>!</span>
            </div>

            <div style={{ marginTop: 32, fontFamily: SG.kr, fontSize: 17, color: SG.inkSoft, lineHeight: 1.7, maxWidth: 620 }}>
              <p style={{ margin: 0 }}>
                기획부터 구현까지, 1인 크리에이티브 스튜디오 <b style={{ color: SG.royal }}>설디그래픽스</b>입니다.
              </p>
              <p style={{ margin: '14px 0 0' }}>
                단순히 보기 좋은 결과물을 만드는 걸 넘어, 실제 비즈니스 환경에서 작동하는 결과물을 만듭니다.
                전략적인 제안부터 기획 · 디자인 · 개발 · 운영까지 한 사람의 책임으로 가져갑니다.
              </p>
              <p style={{ margin: '14px 0 0' }}>
                <q style={{ fontStyle: 'italic', color: SG.royal }}>아이디어를 실제 작동하는 비즈니스로 구현하는 것</q>,
                그게 설디그래픽스가 추구하는 모습입니다.
              </p>
            </div>

            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, maxWidth: 540 }}>
              {[
                { icn: '✉', k: 'EMAIL',   v: 'contact@seoldi.kr' },
                { icn: '◐', k: 'KAKAO',   v: 'kakaotalk · seoldi' },
                { icn: '@', k: 'IG',      v: '@seoldi.graphics' },
                { icn: '◇', k: 'BASED',   v: 'South Korea, Changwon' },
              ].map((c) => (
                <div key={c.k} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: SG.royal, color: SG.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SG.mono, fontSize: 16 }}>{c.icn}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, letterSpacing: '0.22em', fontWeight: 700 }}>{c.k}</div>
                    <div style={{ fontFamily: SG.kr, fontSize: 13, color: SG.ink, fontWeight: 500, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── KEPCO card · used in SNS work showcase ─────────────────────────
function KepcoCard({ i }) {
  const variants = [
    { bg: '#FFFFFF', accent: SG.orange,  rim: SG.royal,  title: '요금의 달인',         kicker: '#1 카드뉴스' },
    { bg: SG.cream,  accent: SG.royal,   rim: SG.orange, title: '단스쿨링',            kicker: 'CHECK · LIST' },
    { bg: '#FFFFFF', accent: SG.royal,   rim: SG.orange, title: '요금의 달인 #2',       kicker: '가전제품편' },
    { bg: SG.cream,  accent: SG.orange,  rim: SG.royal,  title: '겨울철 전기절약',     kicker: '체크리스트' },
    { bg: '#FFFFFF', accent: SG.royal,   rim: SG.orange, title: '인플레이션연동제',     kicker: 'NOTICE' },
    { bg: SG.cream,  accent: SG.royal,   rim: SG.orange, title: '여름철 에너지',        kicker: '안내' },
    { bg: '#FFFFFF', accent: SG.orange,  rim: SG.royal,  title: '동절기 안전수칙',      kicker: '체크리스트' },
    { bg: SG.cream,  accent: SG.royal,   rim: SG.orange, title: '에너지 절약 캠페인',    kicker: 'CAMPAIGN' },
    { bg: SG.orange, accent: SG.cream,   rim: SG.cream,  title: '다음 콘텐츠로 또 만나요!', kicker: 'NEXT' },
  ];
  const v = variants[i];
  const isCta = i === 8;
  return (
    <div style={{
      aspectRatio: '4 / 5', background: v.bg, borderRadius: 8, padding: 14, position: 'relative',
      border: `2px solid ${v.rim}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: SG.mono, fontSize: 8, fontWeight: 700, color: v.accent, letterSpacing: '0.2em' }}>{v.kicker}</div>
        <div style={{ fontFamily: SG.mono, fontSize: 8, color: v.rim, opacity: 0.7, letterSpacing: '0.18em' }}>KEPCO</div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 0' }}>
        {isCta ? (
          <div style={{ textAlign: 'center', color: v.accent, fontFamily: SG.sans, fontWeight: 800, fontSize: 13, lineHeight: 1.15, letterSpacing: '-0.01em' }}>
            다음 콘텐츠로<br/>또 만나요!
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, width: '100%' }}>
            {[0,1,2].map((k) => (
              <div key={k} style={{ aspectRatio: '1/1', background: k === 1 ? v.accent : 'transparent', border: `1px solid ${v.rim}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: SG.mono, fontSize: 11, color: k === 1 ? v.bg : v.rim, fontWeight: 700 }}>{['◢','◯','◣'][k]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {!isCta ? (
        <div style={{
          padding: '6px 8px', background: v.rim, color: v.bg, borderRadius: 4,
          fontFamily: SG.sans, fontWeight: 800, fontSize: 11, textAlign: 'center', letterSpacing: '-0.01em',
        }}>
          {v.title}
        </div>
      ) : (
        <div style={{ fontFamily: SG.mono, fontSize: 7, color: v.accent, letterSpacing: '0.18em', textAlign: 'center', opacity: 0.85 }}>
          @KEPCO · OFFICIAL
        </div>
      )}
    </div>
  );
}

// ─── WORK 01 · SNS · 소셜미디어 ──────────────────────────────────────
function PFWorkSocial() {
  return (
    <section style={{ background: SG.cream, padding: '96px 56px 112px' }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto' }}>
        <WorkHeader
          no="01"
          tag="SNS · 소셜미디어"
          title={<>SNS에서 살아<br/>움직이는 디자인<span style={{ color: SG.orange }}>.</span></>}
          sub={<>인쇄용으로 끝나지 않는 시리즈 콘텐츠. 매주 새 글이 발행되는 채널 위에서 시리즈로 작동하는 시스템과 운영 가이드를 함께 만듭니다. <b style={{ color: SG.royal }}>한국전력공사(KEPCO)</b> SNS 카드뉴스를 4년째 운영 중입니다.</>}
          stats={[
            { n: '100+', l: '카드뉴스' },
            { n: '24',   l: '월간 발행' },
            { n: '4Y',   l: '운영 기간' },
          ]}
        />

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 32, alignItems: 'flex-start' }}>
          {/* IG live mock */}
          <div style={{ background: SG.ink, color: SG.cream, padding: 22, borderRadius: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.orange, letterSpacing: '0.24em', fontWeight: 700 }}>FEATURED · CASE</div>
              <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.peri, opacity: 0.6, letterSpacing: '0.16em' }}>2021 — 2025</div>
            </div>
            <div style={{ background: SG.inkSoft, borderRadius: 14, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: SG.royal, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 2px ${SG.inkSoft}, 0 0 0 3px ${SG.orange}` }}>
                  <SGLogoMark size={16} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: SG.sans, fontWeight: 700, fontSize: 12, color: SG.cream }}>iamkepco</div>
                  <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.peri, opacity: 0.6, letterSpacing: '0.14em' }}>KOREA · SPONSORED</div>
                </div>
                <div style={{ color: SG.peri, fontFamily: SG.mono, fontSize: 12 }}>···</div>
              </div>
              <div style={{ aspectRatio: '1 / 1', background: '#FFFFFF', color: SG.royal, borderRadius: 6, padding: 16, position: 'relative', border: `2px solid ${SG.royal}` }}>
                <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, fontWeight: 700, letterSpacing: '0.2em' }}>#1 카드뉴스 시리즈</div>
                <div style={{ marginTop: 8, fontFamily: SG.sans, fontWeight: 800, fontSize: 28, lineHeight: 1, letterSpacing: '-0.025em', color: SG.royal }}>
                  요금의<br/>달인<span style={{ color: SG.orange }}>.</span>
                </div>
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
                  {[0,1,2].map((k) => (
                    <div key={k} style={{ aspectRatio: '1/1', background: k === 1 ? SG.orange : SG.cream, border: `1px solid ${SG.royal}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SG.mono, fontSize: 14, color: SG.royal, fontWeight: 700 }}>
                      {['¥','%','₩'][k]}
                    </div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: -2, right: 14, transform: 'translateY(60%)', padding: '4px 10px', background: SG.royal, color: SG.cream, fontFamily: SG.sans, fontWeight: 700, fontSize: 9, letterSpacing: '0.16em', borderRadius: 3 }}>
                  KEPCO
                </div>
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 14, color: SG.peri, fontFamily: SG.mono, fontSize: 14 }}>
                <span>♥</span><span>💬</span><span>↗</span>
                <span style={{ marginLeft: 'auto', opacity: 0.6 }}>◰</span>
              </div>
              <div style={{ marginTop: 6, fontFamily: SG.kr, fontSize: 11, color: SG.peri, lineHeight: 1.55 }}>
                <b style={{ color: SG.cream }}>iamkepco</b> 누구나 쉽게 따라 할 수 있는 전기요금 절약 팁! <span style={{ color: SG.orange }}>#요금의달인</span>
              </div>
            </div>
            <div style={{ marginTop: 18, fontFamily: SG.kr, fontSize: 13, color: SG.peri, lineHeight: 1.6 }}>
              공기관임에도 디테일이 살아있는 카드뉴스 시리즈. 인포그래픽과 일러스트레이션으로 복잡한 정책을 진입장벽 없이 전달.
            </div>
          </div>

          {/* 9-card matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {Array.from({ length: 9 }).map((_, i) => <KepcoCard key={i} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WORK 02 · 대시보드 ──────────────────────────────────────────────
function PFWorkDashboard() {
  return (
    <section style={{ background: SG.cream, padding: '96px 56px 112px' }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto' }}>
        <WorkHeader
          no="02"
          tag="DASHBOARD · DATA UI"
          title={<>숫자가 말을<br/>걸도록<span style={{ color: SG.orange }}>.</span></>}
          sub={<>복잡한 데이터를 한 화면 안에서 읽히게 만드는 일. KPI 카드 · 차트 · 테이블의 정보 위계를 잡고, 운영자가 매일 보는 화면을 매일 보고 싶은 화면으로 바꿉니다. 두산에너빌리티 등 B2B 대기업 현장의 어드민 UI를 다수 진행.</>}
          stats={[
            { n: '12+', l: '대시보드' },
            { n: 'B2B', l: '대기업 운영' },
            { n: 'WEB', l: '반응형' },
          ]}
        />

        {/* Featured dashboard mock — browser frame */}
        <div style={{ marginTop: 56 }}>
          <BrowserFrame title="admin.doosan-energy.com / overview">
            <DashboardMock />
          </BrowserFrame>
        </div>

        {/* sub-grid: 3 supporting screens */}
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <SubScreenTile title="실시간 모니터링" sub="REAL-TIME · OPS" mode="lines" />
          <SubScreenTile title="권한 관리" sub="ACCESS · ROLES" mode="table" />
          <SubScreenTile title="리포트 빌더" sub="REPORT · BUILDER" mode="cards" />
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ title, children }) {
  return (
    <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 60px -30px rgba(13,33,165,0.18)' }}>
      {/* chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: `1px solid ${SG.creamDk}`, background: SG.cream }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#E64C4C' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#E8B73C' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#5BC369' }} />
        </div>
        <div style={{ flex: 1, padding: '6px 12px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 6, fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.8 }}>
          🔒 {title}
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.5, letterSpacing: '0.12em' }}>1440 × 900</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: 540 }}>
      {/* sidebar */}
      <aside style={{ background: SG.ink, color: SG.cream, padding: '20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <SGLogoMark size={22} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.cream} />
          <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 13, letterSpacing: '0.04em' }}>OPS · ADMIN</div>
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.peri, letterSpacing: '0.2em', opacity: 0.6, marginBottom: 8 }}>NAVIGATION</div>
        {[
          ['◧', '대시보드', true],
          ['◔', '실시간',   false],
          ['◫', '리포트',   false],
          ['◇', '사용자',   false],
          ['⚙', '설정',     false],
        ].map(([ic, l, on]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 6, background: on ? SG.royal : 'transparent', color: on ? SG.cream : SG.peri, fontFamily: SG.kr, fontSize: 13, marginBottom: 2 }}>
            <span style={{ fontFamily: SG.mono, color: on ? SG.orange : SG.peri }}>{ic}</span>
            <span>{l}</span>
            {on ? <span style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: SG.orange }} /> : null}
          </div>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: 24, fontFamily: SG.mono, fontSize: 9, color: SG.peri, letterSpacing: '0.18em', opacity: 0.5 }}>v 2.4 · BUILD 0526</div>
      </aside>

      {/* main */}
      <div style={{ padding: '22px 24px' }}>
        {/* top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em', fontWeight: 700 }}>OVERVIEW · MAY 2026</div>
            <div style={{ marginTop: 4, fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, letterSpacing: '-0.015em' }}>월간 운영 리포트</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['일','주','월','분기','연간'].map((p, i) => (
              <span key={p} style={{ padding: '6px 10px', borderRadius: 6, fontFamily: SG.mono, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', background: i === 2 ? SG.royal : 'transparent', color: i === 2 ? SG.cream : SG.inkSoft, border: i === 2 ? 'none' : `1px solid ${SG.creamDk}` }}>{p}</span>
            ))}
          </div>
        </div>

        {/* KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
          {[
            { l: '활성 사용자', v: '12,438', d: '+8.4%', up: true },
            { l: '평균 응답시간', v: '142ms',  d: '-12ms', up: true },
            { l: '오류율',     v: '0.04%',  d: '+0.01%', up: false },
            { l: '월간 매출',  v: '₩ 84.2M', d: '+14.1%', up: true },
          ].map((k) => (
            <div key={k.l} style={{ padding: '14px 16px', background: SG.cream, borderRadius: 10, border: `1px solid ${SG.creamDk}` }}>
              <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.inkSoft, opacity: 0.65, letterSpacing: '0.2em' }}>{k.l.toUpperCase()}</div>
              <div style={{ marginTop: 6, fontFamily: SG.sans, fontWeight: 800, fontSize: 22, color: SG.royal, letterSpacing: '-0.02em' }}>{k.v}</div>
              <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ color: k.up ? SG.royal : SG.orange, fontFamily: SG.mono, fontSize: 11, fontWeight: 700 }}>{k.up ? '↑' : '↓'} {k.d}</span>
                <span style={{ fontFamily: SG.mono, fontSize: 9, color: SG.inkSoft, opacity: 0.6 }}>vs 지난달</span>
              </div>
            </div>
          ))}
        </div>

        {/* chart + table row */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 12 }}>
          {/* line chart card */}
          <div style={{ padding: '16px 18px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, letterSpacing: '0.2em', fontWeight: 700 }}>TRAFFIC · 30D</div>
                <div style={{ marginTop: 4, fontFamily: SG.sans, fontWeight: 700, fontSize: 14, color: SG.royal }}>일별 접속자 추이</div>
              </div>
              <div style={{ display: 'flex', gap: 12, fontFamily: SG.mono, fontSize: 10 }}>
                <span style={{ color: SG.royal }}>■ 신규</span>
                <span style={{ color: SG.orange }}>■ 재방문</span>
              </div>
            </div>
            <svg viewBox="0 0 400 160" width="100%" height="160" style={{ display: 'block' }}>
              {/* grid */}
              {[0,1,2,3,4].map((i) => (
                <line key={i} x1="0" x2="400" y1={20 + i * 28} y2={20 + i * 28} stroke={SG.creamDk} strokeWidth="1" strokeDasharray="3 3" />
              ))}
              {/* royal line */}
              <polyline fill="none" stroke={SG.royal} strokeWidth="2.5" strokeLinejoin="round"
                points="0,110 30,90 60,98 90,72 120,80 150,55 180,68 210,45 240,52 270,40 300,55 330,38 360,48 400,30" />
              {/* orange line */}
              <polyline fill="none" stroke={SG.orange} strokeWidth="2" strokeLinejoin="round" strokeDasharray="2 3"
                points="0,135 30,128 60,130 90,118 120,120 150,108 180,114 210,100 240,105 270,98 300,107 330,92 360,98 400,86" />
              {/* dots on royal */}
              {[[0,110],[60,98],[120,80],[180,68],[240,52],[300,55],[360,48],[400,30]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill={SG.royal} stroke="#fff" strokeWidth="1.5" />
              ))}
              {/* x axis labels */}
              {['1','7','14','21','28','30'].map((t, i) => (
                <text key={t} x={i * 80} y={155} fontFamily="JetBrains Mono" fontSize="9" fill={SG.inkSoft} opacity="0.6">{t}일</text>
              ))}
            </svg>
          </div>

          {/* mini table */}
          <div style={{ padding: '16px 18px', background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 10 }}>
            <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, letterSpacing: '0.2em', fontWeight: 700 }}>TOP · CHANNELS</div>
            <div style={{ marginTop: 8 }}>
              {[
                ['검색',   '5,124', 78, SG.royal],
                ['직접',   '3,210', 49, SG.orange],
                ['SNS',    '2,184', 33, SG.royal],
                ['외부링크','1,560', 24, SG.peri],
                ['이메일',  '   360',  5, SG.inkSoft],
              ].map(([k, v, pct, c]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 56px', gap: 10, alignItems: 'center', padding: '6px 0', borderBottom: `1px solid ${SG.creamDk}` }}>
                  <div style={{ fontFamily: SG.kr, fontSize: 12, color: SG.ink }}>{k}</div>
                  <div style={{ background: SG.cream, borderRadius: 3, height: 8, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: pct + '%', height: '100%', background: c, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.royal, fontWeight: 700, textAlign: 'right' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubScreenTile({ title, sub, mode }) {
  return (
    <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 14, padding: 18, minHeight: 220, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.orange, letterSpacing: '0.22em', fontWeight: 700 }}>{sub}</div>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: SG.royal }} />
      </div>
      <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 16, color: SG.royal, marginBottom: 10 }}>{title}</div>

      {mode === 'lines' ? (
        <svg viewBox="0 0 200 80" width="100%" height="80" style={{ display: 'block', marginTop: 'auto' }}>
          <polyline fill="none" stroke={SG.royal} strokeWidth="2" points="0,55 25,40 50,48 75,30 100,38 125,22 150,28 175,15 200,20" />
          <polyline fill="none" stroke={SG.orange} strokeWidth="1.5" strokeDasharray="2 2" points="0,65 25,60 50,62 75,52 100,55 125,46 150,50 175,40 200,42" />
        </svg>
      ) : mode === 'table' ? (
        <div style={{ marginTop: 'auto' }}>
          {[
            ['Admin',     'royal'],
            ['Editor',    'orange'],
            ['Viewer',    'peri'],
          ].map(([k, c]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: `1px solid ${SG.creamDk}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: c === 'royal' ? SG.royal : c === 'orange' ? SG.orange : SG.peri }} />
                <span style={{ fontFamily: SG.kr, fontSize: 12, color: SG.ink, fontWeight: 600 }}>{k}</span>
              </div>
              <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.royal, fontWeight: 700 }}>{({Admin:'3', Editor:'12', Viewer:'48'})[k]}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
          {[
            { l: '월간 활성', v: '12K', c: SG.royal },
            { l: '전환율',   v: '4.2%', c: SG.orange },
            { l: '체류시간', v: '6:24', c: SG.royal },
            { l: '신규',     v: '+312', c: SG.orange },
          ].map((k) => (
            <div key={k.l} style={{ padding: '8px 10px', background: SG.cream, borderRadius: 6, borderLeft: `2px solid ${k.c}` }}>
              <div style={{ fontFamily: SG.mono, fontSize: 8, color: SG.inkSoft, letterSpacing: '0.18em', opacity: 0.7 }}>{k.l.toUpperCase()}</div>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 14, color: SG.royal, lineHeight: 1, marginTop: 2 }}>{k.v}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── WORK 03 · 웹사이트 구축 (그누보드) ────────────────────────────
function PFWorkGnuboard() {
  return (
    <section style={{ background: SG.cream, padding: '96px 56px 112px' }}>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto' }}>
        <WorkHeader
          no="03"
          tag="WEBSITE · 그누보드"
          title={<>그누보드 위에<br/>제대로 된 디자인<span style={{ color: SG.orange }}>.</span></>}
          sub={<><b style={{ color: SG.royal }}>그누보드(Gnuboard)</b>는 한국 중소기업·공공기관·교회·협회 사이트에서 가장 많이 쓰이는 CMS. 빠른 운영과 게시판 시스템은 강력하지만, 디자인 자유도가 낮다는 한계. 그 위에 모던한 UI와 반응형 레이아웃을 입혀 60여 개의 사이트를 구축했습니다.</>}
          stats={[
            { n: '60+',  l: '웹사이트' },
            { n: '15Y+', l: '경력' },
            { n: '147+', l: '프로젝트' },
          ]}
        />

        {/* Featured: big browser frame with church site mock */}
        <div style={{ marginTop: 56 }}>
          <BrowserFrame title="www.csskorea.kr / 창원성산교회">
            <GnuboardSiteMock />
          </BrowserFrame>
        </div>

        {/* sub-grid: 4 smaller sites */}
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { name: 'VRist',      url: 'vrist.kr',       cat: 'VR · 그룹사', color: SG.royal },
            { name: 'GB 엔지니어링', url: 'gb-eng.kr',     cat: '제조업',     color: SG.ink },
            { name: '나원공원묘원', url: 'naone.kr',       cat: '서비스업',   color: SG.royal },
            { name: '더본협동조합', url: 'dubon.kr',       cat: '협동조합',   color: SG.orange },
          ].map((s) => (
            <SiteThumb key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GnuboardSiteMock() {
  return (
    <div style={{ background: SG.cream, minHeight: 540 }}>
      {/* top nav */}
      <header style={{ background: '#FFFFFF', borderBottom: `1px solid ${SG.creamDk}`, padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, background: SG.royal, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SG.sans, fontWeight: 800, fontSize: 14, color: SG.cream }}>창</div>
          <div>
            <div style={{ fontFamily: SG.kr, fontWeight: 800, fontSize: 14, color: SG.royal }}>창원성산교회</div>
            <div style={{ fontFamily: SG.mono, fontSize: 9, color: SG.inkSoft, opacity: 0.6, letterSpacing: '0.14em' }}>SUNGSAN CHURCH</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 22, marginLeft: 24 }}>
          {['교회소개','예배안내','말씀','공지사항','갤러리','오시는길'].map((m, i) => (
            <span key={m} style={{ fontFamily: SG.kr, fontSize: 13, fontWeight: 600, color: i === 3 ? SG.royal : SG.inkSoft, position: 'relative' }}>
              {m}
              {i === 3 ? <span style={{ position: 'absolute', bottom: -8, left: 0, right: 0, height: 2, background: SG.orange }} /> : null}
            </span>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: SG.mono, fontSize: 11, color: SG.inkSoft, opacity: 0.6 }}>로그인 · 회원가입</span>
          <div style={{ padding: '6px 12px', background: SG.orange, color: SG.cream, fontFamily: SG.sans, fontWeight: 700, fontSize: 11, borderRadius: 6, letterSpacing: '0.04em' }}>새 신자 등록</div>
        </div>
      </header>

      {/* hero strip */}
      <div style={{ background: SG.royal, color: SG.cream, padding: '36px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: 40, opacity: 0.15 }}>
          <SGLogoMark size={180} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
        </div>
        <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.peri, letterSpacing: '0.24em', fontWeight: 700, opacity: 0.85 }}>NEW · NOTICE</div>
        <div style={{ marginTop: 10, fontFamily: SG.sans, fontWeight: 800, fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em' }}>
          2026 여름 수련회 안내
        </div>
        <div style={{ marginTop: 8, fontFamily: SG.kr, fontSize: 13, color: SG.peri, opacity: 0.85 }}>
          7월 24일 — 26일 · 강원도 평창 · 누구나 참여 가능
        </div>
      </div>

      {/* body grid */}
      <div style={{ padding: '24px 28px', display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 20 }}>
        {/* board (gnuboard signature) */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10, paddingBottom: 8, borderBottom: `2px solid ${SG.royal}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 4, height: 14, background: SG.orange }} />
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 16, color: SG.royal }}>공지사항</div>
            </div>
            <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.6, letterSpacing: '0.16em' }}>MORE · ↗</div>
          </div>
          <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 6, overflow: 'hidden' }}>
            {[
              ['공지', '2026 여름 수련회 신청 안내', '관리자', '05.26', true],
              ['공지', '주차장 이용 안내 (개정)',  '관리자', '05.20', true],
              ['일반', '청년부 단기선교 모집',    '청년부장', '05.18', false],
              ['일반', '5월 셀모임 일정 공유',    '교역자',  '05.14', false],
              ['일반', '봄 친교회 사진 게시',    '미디어팀', '05.10', false],
              ['일반', '주일학교 교사 모집',    '교육부',  '05.06', false],
            ].map(([tag, title, who, date, hot], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 60px', gap: 12, alignItems: 'center', padding: '11px 16px', borderBottom: i < 5 ? `1px solid ${SG.creamDk}` : 'none', background: i % 2 === 0 ? '#FFFFFF' : SG.cream }}>
                <span style={{ padding: '3px 8px', borderRadius: 3, fontFamily: SG.mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textAlign: 'center', background: hot ? SG.orange : 'transparent', color: hot ? SG.cream : SG.inkSoft, border: hot ? 'none' : `1px solid ${SG.creamDk}` }}>{tag}</span>
                <span style={{ fontFamily: SG.kr, fontSize: 13, color: SG.ink, fontWeight: hot ? 700 : 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}{hot ? <span style={{ marginLeft: 6, color: SG.orange, fontSize: 10 }}>NEW</span> : null}</span>
                <span style={{ fontFamily: SG.kr, fontSize: 12, color: SG.inkSoft, opacity: 0.75 }}>{who}</span>
                <span style={{ fontFamily: SG.mono, fontSize: 10, color: SG.inkSoft, opacity: 0.65, textAlign: 'right' }}>{date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* sidebar widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* worship times */}
          <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 4, height: 14, background: SG.orange }} />
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 14, color: SG.royal }}>예배 시간</div>
            </div>
            {[
              ['주일 1부', '08:00'],
              ['주일 2부', '11:00'],
              ['수요예배', '20:00'],
              ['금요철야', '22:00'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderTop: `1px dashed ${SG.creamDk}`, fontFamily: SG.kr, fontSize: 12 }}>
                <span style={{ color: SG.ink, fontWeight: 600 }}>{k}</span>
                <span style={{ fontFamily: SG.mono, color: SG.royal, fontWeight: 700, letterSpacing: '0.1em' }}>{v}</span>
              </div>
            ))}
          </div>
          {/* quick links */}
          <div style={{ background: SG.royal, color: SG.cream, borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.peri, letterSpacing: '0.22em', fontWeight: 700 }}>QUICK · LINKS</div>
            <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
              {['새신자','헌금','셀모임','갤러리','오시는길','문의'].map((q) => (
                <div key={q} style={{ padding: '10px 6px', background: SG.royalDk, borderRadius: 4, textAlign: 'center', fontFamily: SG.kr, fontSize: 11, fontWeight: 600 }}>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteThumb({ name, url, cat, color }) {
  return (
    <div style={{ background: '#FFFFFF', border: `1px solid ${SG.creamDk}`, borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* mini browser bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: SG.cream, borderBottom: `1px solid ${SG.creamDk}` }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E64C4C' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8B73C' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5BC369' }} />
        <span style={{ marginLeft: 8, fontFamily: SG.mono, fontSize: 9, color: SG.inkSoft, opacity: 0.7 }}>{url}</span>
      </div>
      {/* fake site preview */}
      <div style={{ flex: 1, padding: 12, background: color, color: SG.cream, position: 'relative', minHeight: 140 }}>
        <div style={{ fontFamily: SG.mono, fontSize: 8, opacity: 0.7, letterSpacing: '0.2em' }}>{cat.toUpperCase()}</div>
        <div style={{ marginTop: 8, fontFamily: SG.sans, fontWeight: 800, fontSize: 22, lineHeight: 1, letterSpacing: '-0.02em' }}>{name}<span style={{ color: SG.orange }}>.</span></div>
        {/* fake content blocks */}
        <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ height: 5, background: 'rgba(245,240,232,0.5)', borderRadius: 2 }} />
          <div style={{ height: 5, background: 'rgba(245,240,232,0.3)', borderRadius: 2, width: '80%' }} />
          <div style={{ height: 5, background: 'rgba(245,240,232,0.2)', borderRadius: 2, width: '60%' }} />
        </div>
      </div>
      {/* meta */}
      <div style={{ padding: '10px 12px', borderTop: `1px solid ${SG.creamDk}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: SG.kr, fontSize: 12, color: SG.ink, fontWeight: 600 }}>{name}</span>
        <span style={{ fontFamily: SG.mono, fontSize: 9, color: SG.orange, letterSpacing: '0.16em', fontWeight: 700 }}>그누보드 5</span>
      </div>
    </div>
  );
}

// ─── CTA / contact footer ───────────────────────────────────────────
function PFCTA() {
  return (
    <section style={{ background: SG.royal, color: SG.cream, padding: '140px 56px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, opacity: 0.12 }}>
        <SGLogoMark size={520} cdColor={SG.peri} bangColor={SG.orange} footColor={SG.cream} />
      </div>
      <div style={{ maxWidth: PF_MAX, margin: '0 auto', position: 'relative' }}>
        <div style={{ width: 64, height: 4, background: SG.orange, marginBottom: 28 }} />
        <h2 style={{ margin: 0, fontFamily: SG.sans, fontWeight: 800, fontSize: 124, lineHeight: 0.9, letterSpacing: '-0.035em' }}>
          Got a project<span style={{ color: SG.orange }}>?</span><br/>
          <span style={{ color: SG.peri }}>Let's build it.</span>
        </h2>

        <div style={{ marginTop: 40, fontFamily: SG.kr, fontSize: 22, color: SG.peri, lineHeight: 1.5, maxWidth: 720 }}>
          기획 단계의 가벼운 상담부터 풀스택 브랜드 작업까지.<br/>
          어떤 단계에 있어도 한 번 이야기 나눠 봐요.
        </div>

        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a href="mailto:contact@seoldi.kr" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 26px', background: SG.orange, color: SG.cream, fontFamily: SG.sans, fontWeight: 700, fontSize: 18, borderRadius: 14, textDecoration: 'none', letterSpacing: '-0.005em' }}>
            <span>✉</span><span>contact@seoldi.kr</span>
          </a>
          <a href="https://instagram.com/seoldi.graphics" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 26px', background: 'transparent', color: SG.cream, fontFamily: SG.sans, fontWeight: 700, fontSize: 18, borderRadius: 14, textDecoration: 'none', border: `1.5px solid ${SG.peri}`, letterSpacing: '-0.005em' }}>
            <span>@</span><span>seoldi.graphics</span>
          </a>
        </div>

        <div style={{ marginTop: 96, paddingTop: 32, borderTop: `1px solid rgba(185,199,248,0.25)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <SGLogoMark size={36} cdColor={SG.cream} bangColor={SG.orange} footColor={SG.ink} />
            <div>
              <div style={{ fontFamily: SG.sans, fontWeight: 800, fontSize: 15, letterSpacing: '0.04em' }}>SEOLDI GRAPHICS</div>
              <div style={{ fontFamily: SG.mono, fontSize: 10, color: SG.peri, opacity: 0.75, letterSpacing: '0.22em', marginTop: 3 }}>DESIGN MEETS CODE</div>
            </div>
          </div>
          <div style={{ fontFamily: SG.mono, fontSize: 11, color: SG.peri, opacity: 0.7, letterSpacing: '0.2em' }}>
            © 2025 SEOLDI GRAPHICS · CHANGWON, KR
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mount ─────────────────────────────────────────────────────────
function Portfolio() {
  return (
    <div style={{ background: SG.cream, color: SG.ink }}>
      <PFHero />
      <PFAbout />
      <PFBand label={['WORK · 01', 'SNS · 소셜미디어.',         '/ WORK 01']} bg={SG.royal} fg={SG.cream} sub={<>채널 위에서 매주 작동하는 시리즈 콘텐츠와 운영 시스템.</>} />
      <PFWorkSocial />
      <PFBand label={['WORK · 02', 'Dashboard.',                '/ WORK 02']} bg={SG.ink}   fg={SG.cream} sub={<>숫자가 사람의 결정을 돕도록 만드는 데이터 UI.</>} />
      <PFWorkDashboard />
      <PFBand label={['WORK · 03', '웹사이트 구축.',              '/ WORK 03']} bg={SG.royal} fg={SG.cream} sub={<>그누보드 위에 입히는 모던 UI와 반응형 레이아웃 — 60+ 사이트.</>} />
      <PFWorkGnuboard />
      <PFCTA />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);
