# Minsang.dev - Next.js Tech Blog

## Project Overview
This project is a personal tech blog built with Next.js (App Router). It features blog post management using local MDX files and a project showcase integrated with Notion API and Supabase.

### Core Technology Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS-based)
- **Animations**: Framer Motion
- **Database/Auth**: Supabase
- **CMS**: Notion API (for Projects), Local MDX (for Blog)
- **Edge Functions**: Next.js Dynamic Icon Generation (`app/icon.tsx`)
- **Deployment**: Vercel

## Building and Running
### Start Development Server
```bash
yarn dev
```
### Production Build and Start
```bash
yarn build
yarn start
```

## Project Structure
- `app/`: Core Next.js App Router directory
  - `blog/`: Blog post list and detail pages (MDX-based)
  - `projects/`: Project showcase pages integrated with Notion API
  - `test/`: Supabase integration test pages
  - `components/`: Global reusable UI components
  - `libs/`: Data fetching and Markdown conversion logic (`api.ts`, `markdownToHtml.ts`)
  - `styles/`: Global styles and Tailwind configuration (`globals.css`)
  - `utils/`: Framer Motion animation definitions and Supabase client
  - `icon.tsx`: Dynamic favicon generation logic using Edge Runtime
- `app/contents/`: Blog post data source (`.mdx` files)
- `public/`: Static assets (images, icons, etc.)

## Development Conventions
1. **Styling**: Use **Tailwind CSS v4** utility classes for all styling. Global theme variables, custom `@keyframes`, and complex CSS selectors should be managed centrally in the `@theme` block within `app/styles/globals.css`.
2. **Components**:
   - Utilize `framer-motion` for UI interactions and transitions.
   - Separate complex client-side logic or animations into dedicated client components (e.g., `DetailClient.tsx`).
3. **Data Fetching**: 
   - Blog content must be fetched on the server side using the `fs` module (`getAllPostData`, `getPostDetailData`).
   - Keep components as Server Components by default to minimize browser bundle size; only use Client Components when necessary for interactivity.
4. **Metadata & Icons**: Leverage Next.js dynamic metadata features (like `app/icon.tsx`). Ensure these functions run on the `edge` runtime for optimal performance.

## Recent Changes (Migration)
- **Styled-Components Removal**: Completely replaced CSS-in-JS logic with Tailwind CSS v4 utility classes.
- **Build Optimization**: Refined Server/Client component boundaries to fix build errors and improve performance.
- **Path Aliases**: Removed `~` prefix from imports to comply with standard package resolution and Tailwind v4 requirements.
