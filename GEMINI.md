# Minsang.dev - Next.js Tech Blog

## Project Overview
이 프로젝트는 Next.js (App Router) 기반의 개인 기술 블로그입니다. 로컬 MDX 파일을 이용한 블로그 포스팅 관리와 Notion API 및 Supabase를 연동한 프로젝트 전시 기능을 제공합니다. 최근 `styled-components`에서 `Tailwind CSS v4`로 스타일 엔진을 전면 마이그레이션하였습니다.

### 주요 기술 스택
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS 기반)
- **Animations**: Framer Motion
- **Database/Auth**: Supabase
- **CMS**: Notion API (Projects), Local MDX (Blog)
- **Deployment**: Vercel

## Building and Running
### 개발 서버 실행
```bash
yarn dev
```
### 프로덕션 빌드 및 실행
```bash
yarn build
yarn start
```
### 린트 체크
```bash
yarn lint
```

## Project Structure
- `app/`: Next.js App Router 핵심 디렉토리
  - `blog/`: 블로그 포스트 리스트 및 상세 페이지 (MDX 기반)
  - `projects/`: Notion API 연동 프로젝트 페이지
  - `test/`: Supabase 연동 테스트 페이지
  - `components/`: 전역 공용 컴포넌트
  - `libs/`: 데이터 페칭 및 마크다운 변환 로직 (`api.ts`, `markdownToHtml.ts`)
  - `styles/`: Tailwind CSS 전역 스타일 및 테마 설정 (`globals.css`)
  - `utils/`: Framer Motion 애니메이션 정의 및 Supabase 클라이언트
- `app/contents/`: 블로그 포스트 데이터 (`.mdx` 파일)
- `public/`: 정적 에셋 (이미지 등)

## Development Conventions
1. **Styling**: 모든 스타일은 Tailwind CSS 클래스를 사용합니다. 전역 테마 변수나 애니메이션 설정은 `app/styles/globals.css`의 `@theme` 블록에서 관리합니다.
2. **Components**: UI 구성 시 `framer-motion`을 적극 활용하여 인터랙티브한 경험을 제공합니다. 애니메이션 프리셋은 `app/utils/motions.ts`를 참조하십시오.
3. **Data Fetching**: 
   - 블로그 데이터는 `app/libs/api.ts`를 통해 로컬 파일 시스템에서 직접 읽어옵니다 (SSG).
   - 프로젝트 데이터는 Notion API 또는 Supabase를 통해 가져옵니다.
4. **Client/Server Boundary**: 데이터 페칭 및 서버 전용 모듈(`fs` 등)을 사용하는 로직은 반드시 서버 컴포넌트에서 처리하고, 애니메이션이나 상태 관리가 필요한 부분만 클라이언트 컴포넌트로 분리합니다.

## Future Plans
- `app/test/`의 Supabase 연동 로직을 메인 `projects/` 페이지로 통합 예정
- 블로그 포스트의 태그 필터링 기능 강화
