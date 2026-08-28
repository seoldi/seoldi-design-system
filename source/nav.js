// nav.jsx — persistent top nav bar injected on every brand-system page.
// Mounts into <div id="sg-nav-root"> if present, else floats top-right.
// Pure DOM (no React dep) so it can be dropped onto any page.

(function () {
  if (window.__sgNavMounted) return;
  window.__sgNavMounted = true;

  // Links — keep paths consistent across all docs (all served from project root).
  const LINKS = [
    { href: 'Seoldi Branding.html',     label: '홈',         key: 'hub' },
    { href: 'Portfolio.html',           label: '포트폴리오',    key: 'pf'  },
    { href: 'index.html',               label: 'IG · 템플릿', key: 'tpl' },
    { href: 'Brand Guideline.html',     label: '가이드라인',   key: 'gl'  },
    { href: 'Instagram Playbook.html',  label: '플레이북',    key: 'pb'  },
  ];

  const here = (window.location.pathname.split('/').pop() || 'Seoldi Branding.html');
  const decodedHere = decodeURIComponent(here);

  // ── Logo SVG (same Sd! mark) ──
  const logoSvg = `
    <svg width="22" height="16" viewBox="0 0 479 350" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <path d="M477.811 34.7586C477.811 15.562 462.261 0 443.079 0C423.897 0 408.347 15.562 408.347 34.7586V207.286C408.347 226.482 423.897 242.044 443.079 242.044C462.261 242.044 477.811 226.482 477.811 207.286V34.7586Z" fill="#F97316"/>
      <path d="M443.474 349.907C462.875 349.907 478.602 334.18 478.602 314.779C478.602 295.379 462.875 279.651 443.474 279.651C424.074 279.651 408.347 295.379 408.347 314.779C408.347 334.18 424.074 349.907 443.474 349.907Z" fill="#F97316"/>
      <path d="M477.811 211.136C477.811 230.546 462.094 246.264 442.736 246.264C423.379 246.264 407.609 230.546 407.609 211.136C407.609 174.267 377.703 144.361 340.834 144.361C303.966 144.361 274.007 174.267 274.007 211.136C274.007 248.004 260.716 278.49 238.932 302.753C213.826 330.655 177.485 348.219 137.03 348.219C61.3417 348.219 0 286.877 0 211.189C0 135.5 61.289 74.1057 136.977 74.1057C156.387 74.1057 172.052 89.8236 172.052 109.234C172.052 128.643 156.334 144.309 136.977 144.309C100.056 144.309 70.15 174.215 70.15 211.083C70.15 247.951 100.056 277.91 136.977 277.91C173.898 277.91 203.752 248.004 203.752 211.083C203.752 174.162 217.043 143.781 238.879 119.519C263.933 91.6169 300.327 74.053 340.782 74.053C416.47 74.053 477.811 135.395 477.811 211.083V211.136Z" fill="#0D21A5"/>
      <path d="M375.909 313.038C375.909 332.448 360.191 348.166 340.834 348.166C300.379 348.166 263.985 330.602 238.932 302.701C260.768 278.438 274.007 246.317 274.007 211.083C274.007 248.005 303.913 277.911 340.834 277.911C360.244 277.911 375.909 293.629 375.909 312.986V313.038Z" fill="#1A1A1A"/>
    </svg>`;

  // ── Styles, scoped via class names ──
  const css = `
  .sg-nav { position: fixed; top: 16px; right: 16px; z-index: 9999;
    display: flex; align-items: stretch; gap: 0;
    background: rgba(26,26,26,0.92); color: #F5F0E8;
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-radius: 14px; padding: 6px;
    box-shadow: 0 10px 30px -10px rgba(13,33,165,0.35), 0 2px 0 rgba(255,255,255,0.04) inset;
    font-family: 'Pretendard Variable', Pretendard, 'Montserrat', system-ui, sans-serif;
    font-size: 12.5px;
  }
  .sg-nav-brand { display: flex; align-items: center; gap: 8px;
    padding: 6px 12px 6px 10px; border-right: 1px solid rgba(245,240,232,0.12);
    margin-right: 6px;
  }
  .sg-nav-brand-mark { width: 24px; height: 24px; border-radius: 6px; background: #0D21A5;
    display: flex; align-items: center; justify-content: center;
  }
  .sg-nav-brand-text { display: flex; flex-direction: column; line-height: 1; }
  .sg-nav-brand-text b { font-weight: 700; font-size: 12px; letter-spacing: 0.04em; }
  .sg-nav-brand-text span { font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 9px; letter-spacing: 0.22em; opacity: 0.6; margin-top: 3px; }
  .sg-nav-items { display: flex; align-items: center; gap: 2px; }
  .sg-nav-link { display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 12px; border-radius: 9px; color: #B9C7F8; text-decoration: none;
    font-weight: 500; letter-spacing: -0.005em; transition: background 0.15s, color 0.15s;
  }
  .sg-nav-link:hover { background: rgba(245,240,232,0.07); color: #F5F0E8; }
  .sg-nav-link.is-current { background: #0D21A5; color: #F5F0E8; font-weight: 600; }
  .sg-nav-link.is-current::before { content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: #F97316; display: inline-block;
  }
  @media print { .sg-nav { display: none !important; } }
  @media (max-width: 760px) {
    .sg-nav { top: auto; bottom: 12px; right: 12px; left: 12px;
      justify-content: center; padding: 4px;
    }
    .sg-nav-brand { display: none; }
    .sg-nav-link { padding: 8px 10px; font-size: 11.5px; }
  }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'sg-nav';

  // Brand block
  const brand = document.createElement('a');
  brand.href = 'Seoldi Branding.html';
  brand.className = 'sg-nav-brand';
  brand.style.textDecoration = 'none';
  brand.style.color = 'inherit';
  brand.innerHTML = `
    <div class="sg-nav-brand-mark">${logoSvg}</div>
    <div class="sg-nav-brand-text"><b>SEOLDI</b><span>BRAND · 2025</span></div>
  `;
  nav.appendChild(brand);

  const items = document.createElement('div');
  items.className = 'sg-nav-items';
  LINKS.forEach((l) => {
    if (l.key === 'hub') return; // hub linked via brand
    const a = document.createElement('a');
    a.href = l.href;
    a.className = 'sg-nav-link' + (decodedHere === l.href ? ' is-current' : '');
    a.textContent = l.label;
    items.appendChild(a);
  });
  nav.appendChild(items);

  // Mount after DOM ready
  if (document.body) document.body.appendChild(nav);
  else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(nav));
})();
