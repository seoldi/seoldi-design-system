# 설디그래픽스 Brand Package
## Claude Design 업로드용

---

## 1. BRAND IDENTITY

**브랜드명:** SEOLDI GRAPHICS / 설디그래픽스
**대표자:** 정설옥 (Seolok Jeong)
**직함:** Design Engineer
**업종:** 1인 크리에이티브 스튜디오 (UI/UX · Web · Branding)
**웹:** seoldi.com
**인스타:** @seoldi.graphics

---

## 2. COLOR SYSTEM

| 역할 | 이름 | HEX | RGB | 용도 |
|------|------|-----|-----|------|
| Primary | Royal Blue | `#0D21A5` | 13, 33, 165 | 주 배경, 강조 영역, 로고 cd |
| Base | Cream | `#F5F0E8` | 245, 240, 232 | 기본 배경, 반전 텍스트 |
| Accent | Orange | `#F97316` | 249, 115, 22 | 포인트 전용 — !, CTA, 강조 라인만 |
| Light | Periwinkle | `#B9C7F8` | 185, 199, 248 | 서브 텍스트, 블루 위 텍스트 |
| Dark | Ink Black | `#1A1A1A` | 26, 26, 26 | 다크 베이스, 본문 텍스트 |

**컬러 사용 비율:**
- Royal Blue 60% — 주 배경, 강조 영역
- Cream 25% — 베이스 배경
- Orange 15% — 포인트 전용 (배경으로 절대 사용 금지)

---

## 3. TYPOGRAPHY

| 구분 | 폰트 | 웨이트 | 용도 |
|------|------|--------|------|
| Primary | Montserrat | Bold 700 / Regular 400 | 영문 헤드라인, 로고, 주요 UI |
| Secondary | Pretendard | Bold 700 / Medium 500 / Regular 400 | 한글 본문, 캡션, 레이블 |

---

## 4. LOGO SYSTEM

**로고 마크:** `cd!` 레터마크
- `cd` — Royal Blue `#0D21A5`
- `!` (스템 + 닷) — Orange `#F97316`
- `d` 하단 연결부 — Ink Black `#1A1A1A`

**3가지 버전:**
1. 기본형 — 크림 배경 + 블루 cd + 오렌지 !
2. 반전형 — 블루 배경 + 크림 cd + 오렌지 !
3. 다크형 — 블랙 배경 + 블루 cd + 오렌지 !

---

## 5. SLOGAN

**메인 슬로건 (영문):**
> Design meets Development.

**서브 슬로건 (한국어):**
> 기획부터 구현까지, 설디그래픽스가 잇습니다

---

## 6. BRAND PERSONALITY

- **모던 · 테크** — 바우하우스 감성 + 디지털 네이티브
- **전문성** — 10년 경력, B2B 대기업 클라이언트 (두산에너빌리티 등)
- **1인 스튜디오** — 기획부터 구현까지 혼자 커버
- **AI-Native** — Claude Code, Vibe Coding 실무 적용

---

## 7. INSTAGRAM CONTENT MIX

| 비율 | 유형 | 예시 |
|------|------|------|
| 40% | 포트폴리오 | 작업물 소개, Before→After |
| 30% | 1인 사업자 일상 | 스튜디오 브이로그, 야근 감성 |
| 20% | 디자인 인사이트 | Figma 팁, AI 워크플로우 |
| 10% | 자기소개/브랜딩 | 프로필, CTA |

**피드 톤앤매너:**
- 배경 3종 순환: 크림 → 블루 → 다크
- 오렌지는 라인, 태그, 포인트 텍스트에만
- 비율: 4:5 세로형 (1080 × 1350px)
- 폰트: Montserrat Bold 헤드라인

---

## 8. CLAUDE DESIGN 프롬프트 가이드

아래 프롬프트를 Claude Design에 그대로 붙여넣어 사용하세요.

### 포트폴리오 카드
```
설디그래픽스 인스타그램 포트폴리오 카드를 만들어줘.
- 비율: 4:5 (1080×1350px)
- 배경: Cream #F5F0E8
- 상단 좌측: cd! 로고 (cd는 #0D21A5, !는 #F97316)
- 상단 우측: 카테고리 태그 (배경 #0D21A5, 텍스트 크림)
- 중단: 작업물 이미지 플레이스홀더
- 하단: 오렌지 액센트 라인 + 카테고리명(오렌지) + 프로젝트 제목(블루, Bold, 큰 사이즈) + 서브 정보(회색)
- 폰트: Montserrat Bold
- 하단 우측: @seoldi.graphics
```

### 인사이트 카드
```
설디그래픽스 디자인 인사이트 카드를 만들어줘.
- 비율: 4:5 (1080×1350px)
- 배경: #0D21A5 (Royal Blue)
- 상단: 오렌지 포인트 라인 + 카테고리 텍스트 (Periwinkle #B9C7F8)
- 메인 헤드라인: Cream #F5F0E8, Montserrat Bold, 큰 사이즈
- 오렌지 액센트 라인
- 본문 설명: Periwinkle, Regular
- 팁 아이템 박스: 어두운 블루 배경 + 오렌지 번호 + 크림 텍스트
- 하단: @seoldi.graphics
```

### 일상/무드 카드
```
설디그래픽스 일상 무드 텍스트 카드를 만들어줘.
- 비율: 4:5 (1080×1350px)
- 배경: #0D21A5 (Royal Blue)
- 큰 인용 텍스트: Cream, Montserrat Bold, 임팩트 있게
- 오렌지 액센트 라인
- 서브 텍스트: Periwinkle
- 우하단: cd! 로고 마크 작게
- 하단: 이름/직함
- 전체적으로 에디토리얼하고 감성적인 분위기
```

---

## 9. 파일 목록

| 파일명 | 용도 |
|--------|------|
| `seoldi_logo_new.svg` | 새 컬러 적용 로고 원본 |
| `seoldi_brand_guideline.svg` | 브랜드 가이드라인 1장 |
| `seoldi_card_front.svg` | 명함 앞면 인쇄용 |
| `seoldi_card_back.svg` | 명함 뒷면 인쇄용 |
| Figma: Brand Kit 2025 | 브랜드 가이드 + 명함 + 인스타 템플릿 9종 |

---

*Seoldi Graphics Brand Package 2025 — Created with Claude*
