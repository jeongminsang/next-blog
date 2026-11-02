# Minsang.dev - Next.js Tech Blog

## Project Overview
This project is a personal tech blog built with Next.js (App Router). It features blog post management using local MDX files with static generation (SSG) for optimal performance and SEO.

### Core Technology Stack
- **Framework**: Next.js 16+ (App Router, Turbopack)
- **Package Manager**: pnpm (v12+)
- **Language**: TypeScript 5.9+
- **Styling**: Tailwind CSS v4 (PostCSS-based)
- **Animations**: Motion (`motion/react`)
- **Markdown / Content**: Local MDX, `unified`, `remark-parse`, `remark-gfm`, `remark-rehype`, `rehype-slug`, `rehype-stringify`, `gray-matter`
- **Code Highlighting**: `highlight.js`
- **Comments**: Giscus
- **Dynamic Icons**: Next.js Metadata API (`app/icon.tsx`)
- **Deployment**: Vercel

## Building and Running
### Install Dependencies
```bash
pnpm install
```
### Start Development Server
```bash
pnpm dev
```
### Production Build and Start
```bash
pnpm build
pnpm start
```

## Project Structure
- `app/`: Next.js App Router core directory
  - `blog/`: Blog post list and detail (`[postId]`) pages
  - `components/`: Global reusable UI components (`Header`, `Footer`, `ThemeChanger`, `TOC`, `ReadingProgressBar`, `PostDetailContents`, `Giscus`)
  - `libs/`: Data fetching and Markdown conversion logic (`api.ts`, `markdownToHtml.ts`)
  - `styles/`: Global styles and Tailwind configuration (`globals.css`)
  - `utils/`: Motion animation definitions (`motions.ts`)
  - `icon.tsx`: Favicon/Icon generation using Next.js Metadata API
- `app/contents/`: Blog post data source (`.mdx` files)
- `public/`: Static assets (images, blog cover images, profile photo)

## Development Conventions
1. **Package Manager**: Always use **pnpm**. Do not commit `yarn.lock` or `package-lock.json`.
2. **Styling**: Use **Tailwind CSS v4** utility classes for styling. Global theme variables, keyframes, and custom utility classes are centralized in `app/styles/globals.css` within the `@theme` block.
3. **Animations**: Use `motion/react` from the `motion` package (do not use deprecated `framer-motion` imports).
4. **Components**:
   - Keep components as **Server Components** by default to minimize client bundle size.
   - Restrict `"use client"` to components that require React hooks, event listeners, or browser APIs.
5. **Data Fetching**: 
   - Blog content is read statically on the server using Node `fs` (`getAllPostData`, `getPostDetailData`).
   - Dynamic routes use `generateStaticParams` for complete static site generation (SSG).
