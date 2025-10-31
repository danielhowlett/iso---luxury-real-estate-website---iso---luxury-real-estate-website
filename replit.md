# HC Construction Website

## Overview
This project is a professional, React-based single-page application for HC Construction, a veteran-owned roofing and construction business serving the Nashville/Springfield, TN area since 2012. The website features a modern design derived from the ISO Luxury Real Estate template, rebranded entirely for HC Construction. It aims to showcase the company's services, portfolio, and contact information, providing a strong online presence for lead generation and client engagement.

**Business Vision:** To be the leading roofing and construction service provider in the Nashville/Springfield, TN region, known for quality craftsmanship, dependability, and veteran-owned values.
**Market Potential:** Tapping into the local construction and home improvement market, offering specialized services with a trusted brand.
**Project Ambition:** To provide an accessible, visually appealing, and informative digital storefront for HC Construction, enhancing its market reach and customer trust.

## User Preferences
None documented yet.

## System Architecture
The project is a React 18.2.0 single-page application built with Vite 6.0.4 and styled using Tailwind CSS 3.4.16. It employs React Router DOM 6.8.1 for client-side routing (though primarily uses smooth scrolling for navigation between sections) and Framer Motion for animations.

**UI/UX Decisions:**
- **Color Scheme:** Black background with white text, complemented by glass-morphism styled cards.
- **Typography:** Uses Plus Jakarta Sans for both headings and body text, with Google Fonts for typography.
- **Design:** Modern, clean, and fully responsive across all devices (mobile, tablet, desktop).
- **Animations:** Subtle fade-up, slide-in, and scale-in effects via Framer Motion, respecting `prefers-reduced-motion` for accessibility.
- **Navigation:** Single-page application with smooth scrolling to sections (`hero`, `about`, `features`, `video`, `contact`), enhanced by a custom smooth scroll utility and `useMotionSafe` hook.
- **Branding:** Prominent HC Construction logo in the header and footer, consistent branding elements throughout.

**Technical Implementations & Feature Specifications:**
- **Core Sections:** Hero, Why Choose Us (AboutUsSection), Services (LodgingSection), Statistics (StatisticsSection), Testimonials, Recent Work (VideoSection), Contact (SubscriptionSection), and Footer.
- **Services:** Features distinct cards for Roofing, Siding, Framing, and Renovation, each with a call to action.
- **Contact Form:** Integrated contact form that utilizes a `mailto:` protocol to open the user's email client with pre-filled subject and message upon submission.
- **Statistics:** Displays key company metrics like years in service, projects completed, and special offers for military/police/firefighters.
- **Image Management:** All static assets, including images, are stored in the `/static` folder.

**System Design Choices:**
- **Frontend-only:** The application is purely a static frontend, requiring no backend API or database.
- **Build & Deployment:** Configured for Vite with `npm run build` for static asset generation and `npx vite preview` for serving production assets.
- **Replit Environment:** Optimized for Replit with specific `vite.config.ts` settings to run on `0.0.0.0:5000`.

## External Dependencies

- **UI Framework:** React (with `react-dom`)
- **Routing:** React Router DOM
- **Animation Library:** Framer Motion
- **Styling Utilities:** clsx, tailwind-merge, tailwindcss-animate
- **Build Tool:** Vite
- **Development Tooling:** TypeScript