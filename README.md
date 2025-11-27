# GCAD Constructions Web App

## Overview
GCAD Constructions is a marketing and lead-generation site for a renovation company. It is built with Vite, React, and TypeScript, styled with Tailwind CSS, and optimised for high-converting enquiries.

## Feature Summary
- Responsive multi-section landing page with smooth navigation.
- Detailed service pages for basement and home renovation offerings.
- Portfolio and testimonial showcases.
- Contact forms that capture enquiries with instant on-screen confirmation.
- Reusable UI components with animation states.

## Feature Map
| Feature | Location | Description |
| --- | --- | --- |
| Global Layout | `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx` | Site shell with service dropdown navigation, plus header and footer content. |
| Home Sections | `src/components/Hero.tsx`, `src/components/HeroQuickForm.tsx`, `src/components/WhyChoose.tsx`, `src/components/BasementPackage.tsx`, `src/components/HomeRenovation.tsx`, `src/components/Portfolio.tsx`, `src/components/Testimonials.tsx`, `src/components/FinalCTA.tsx` | Landing page hero split with a quick inquiry form, plus service highlights and calls to action. |
| Home Updated Page | `src/pages/HomeUpdatedPage.tsx` | Duplicate of the homepage experience exposed at `/homeupdated` for content experimentation. |
| Service Pages | `src/pages/ServicesPage.tsx`, `src/components/services/*` | Services overview with card links into basement and home renovation detail pages. |
| Portfolio Page | `src/pages/PortfolioPage.tsx`, `src/components/Portfolio.tsx`, `src/components/FinalCTA.tsx` | Dedicated portfolio gallery page accessible at `/portfolio`. |
| Basement Page | `src/pages/BasementPage.tsx`, `src/components/basement/*` | Basement renovation hero, packages, FAQs, testimonials, and CTAs. |
| About Page | `src/pages/AboutPage.tsx`, `src/components/about/*` | Company story, values, approach, and services summary. |
| Home Renovation Page | `src/pages/HomeRenovationPage.tsx`, `src/components/home-renovation/*` | Transformation gallery, process, testimonials, and CTAs. |
| Contact Page | `src/pages/ContactPage.tsx`, `src/components/contact/*`, `src/components/Footer.tsx` | Contact hero, contact details, and reusable enquiry forms surfaced in the footer. |
| Routing | `src/main.tsx`, `src/components/ScrollToTop.tsx` | React Router setup with scroll restoration for page-style navigation. |

## Project Structure
```
gcadconstructionss/
├── index.html
├── package.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── pages/
│   ├── lib/
│   └── index.css
└── ...
```

## Prerequisites
- Node.js 18+ (tested with Node 20)
- npm 9+

## Setup & Installation
1. Clone the repository and navigate into the project folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open the local URL shown in the terminal (default `http://localhost:5173/`).

## Available Scripts
- `npm run dev` – Start the Vite dev server.
- `npm run build` – Produce a production build.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint checks.
- `npm run typecheck` – Run TypeScript without emitting files.

## Dependencies
- React 18
- React Router DOM 7
- Tailwind CSS 3
- Vite 5

## Current Status
- ✅ Landing pages render correctly.
- ⚠️ npm reports 9 audit vulnerabilities (2 low, 5 moderate, 2 high).

## Testing & Validation
- Manual testing: run `npm run dev` and verify navigation across all routes.
- Submit the hero and contact forms to confirm the success state appears.
- For automated testing, add Jest/React Testing Library as needed (not included by default).

## Security Considerations
- Do **not** commit secrets; store any future API keys in `.env`.
- All third-party integrations should use secure (HTTPS) endpoints.

## Documentation Maintenance
Update this README after any feature additions, configuration changes, or dependency upgrades to keep it as the single source of truth.
