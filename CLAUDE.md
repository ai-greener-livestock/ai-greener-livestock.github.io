# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic research website for the USDA-funded "AI Greener Livestock" project, built with Next.js 15 and TypeScript. The site presents research on AI-powered methane emission detection for livestock using optical gas imaging technology.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint linting

## Architecture

### Static Site Generation
- Configured for static export (`output: 'export'`) for GitHub Pages deployment
- Images are unoptimized for static hosting
- Trailing slashes enabled for consistent routing

### App Router Structure
- Uses Next.js 13+ App Router with TypeScript
- File-based routing under `/app` directory:
  - `/` - Homepage with comprehensive research overview
  - `/research` - Detailed research timeline and methodology
  - `/team` - Team member profiles and contact information
  - `/resources` - Publications, datasets, and code downloads

### Component Architecture
- **Layout Components**: `Header.tsx` (sticky navigation with mobile menu), `Footer.tsx` (simple footer with links)
- **UI Components**: Uses shadcn/ui component library with Radix UI primitives
- **Content Components**: `ResearchCharts.tsx` for data visualization
- **Styling**: Tailwind CSS with custom component styling

### Key Dependencies
- **Framework**: Next.js 15 with React 19
- **UI Library**: shadcn/ui components built on Radix UI
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization

### Content Structure
- Academic research focus with sections for methodology, results, and team
- Heavy use of cards, tabs, and accordions for organizing complex content
- Responsive design optimized for desktop and mobile viewing
- Professional academic styling with green/blue color scheme

### Image Management
- Equipment photos stored in `/public/equipment/`  
- Team photos stored in `/public/team/`
- All images are unoptimized for static deployment

## Development Notes

- The site uses Tailwind CSS v4 with PostCSS configuration
- ESLint configuration uses the new flat config format (eslint.config.mjs)
- TypeScript strict mode enabled
- No test framework is configured in this project
- Static export configuration requires `unoptimized: true` for images