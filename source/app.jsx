// app.jsx — mounts the canvas with all 9 cards + tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "gridOverlay": false,
  "accentVariant": "line",
  "logoMode": "auto"
}/*EDITMODE-END*/;

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);
  const tweaks = { gridOverlay: t.gridOverlay, accentVariant: t.accentVariant, logoMode: t.logoMode };

  return (
    <>
      <DesignCanvas>
        <DCSection id="portfolio" title="Portfolio Cards" subtitle="작업물 소개 · @seoldi.graphics 피드 비율 1080×1350 (1:1 scale view at 40%)">
          <DCArtboard id="pf-a" label="A · Classic Cream"  width={432} height={540}><PortfolioA tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="pf-b" label="B · Bauhaus Grid"   width={432} height={540}><PortfolioB tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="pf-c" label="C · Editorial"      width={432} height={540}><PortfolioC tweaks={tweaks} /></DCArtboard>
        </DCSection>

        <DCSection id="insight" title="Insight Cards" subtitle="디자인 인사이트 · 팁 · AI 워크플로우 — 캐러셀 첫 장 후보">
          <DCArtboard id="in-a" label="A · Numbered Tips"  width={432} height={540}><InsightA tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="in-b" label="B · Code · Terminal" width={432} height={540}><InsightB tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="in-c" label="C · Big Statement"  width={432} height={540}><InsightC tweaks={tweaks} /></DCArtboard>
        </DCSection>

        <DCSection id="mood" title="Mood / Manifesto Cards" subtitle="일상 · 인용 · 자기소개 · CTA — 피드의 호흡을 만드는 장">
          <DCArtboard id="md-a" label="A · Big Quote"      width={432} height={540}><MoodA tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="md-b" label="B · Late Night"     width={432} height={540}><MoodB tweaks={tweaks} /></DCArtboard>
          <DCArtboard id="md-c" label="C · Manifesto List" width={432} height={540}><MoodC tweaks={tweaks} /></DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks · Seoldi">
        <TweakSection label="System">
          <TweakRadio
            label="Accent line"
            value={t.accentVariant}
            options={[
              { label: 'Line', value: 'line' },
              { label: 'Bar',  value: 'bar' },
              { label: 'Dots', value: 'dotted' },
            ]}
            onChange={(v) => setT('accentVariant', v)}
          />
          <TweakToggle
            label="Layout grid overlay"
            value={t.gridOverlay}
            onChange={(v) => setT('gridOverlay', v)}
          />
        </TweakSection>
        <TweakSection label="Brand">
          <div style={{ padding: '8px 4px', fontFamily: SG.mono, fontSize: 11, color: '#6b6b6b', lineHeight: 1.55 }}>
            <div>Royal&nbsp;Blue&nbsp;<span style={{ color: SG.royal }}>■</span>&nbsp;#0D21A5&nbsp;<span style={{ opacity: 0.5 }}>60%</span></div>
            <div>Cream&nbsp;<span style={{ color: SG.orange, background: SG.cream, padding: '0 4px' }}>■</span>&nbsp;#F5F0E8&nbsp;<span style={{ opacity: 0.5 }}>25%</span></div>
            <div>Orange&nbsp;<span style={{ color: SG.orange }}>■</span>&nbsp;#F97316&nbsp;<span style={{ opacity: 0.5 }}>15% · accent only</span></div>
            <div style={{ marginTop: 8, opacity: 0.6 }}>Montserrat · Pretendard · JetBrains Mono</div>
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
