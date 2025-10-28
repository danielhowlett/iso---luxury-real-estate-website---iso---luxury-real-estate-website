# HC Construction Website

## Overview
This is a professional construction company website for HC Construction, a veteran-owned roofing and construction business serving the Nashville/Springfield, TN area since 2012. Built on the ISO Luxury Real Estate template, it's a React-based single-page application featuring modern design with sections for hero content, why choose us, services, recent work, contact, and footer.

**Current State:** Fully rebranded for HC Construction with all content, images, and contact information updated
**Last Updated:** October 28, 2025

## Project Architecture

### Technology Stack
- **Frontend Framework:** React 18.2.0 with TypeScript
- **Build Tool:** Vite 6.0.4
- **Styling:** Tailwind CSS 3.4.16 with custom animations
- **Routing:** React Router DOM 6.8.1
- **Animations:** Framer Motion for smooth scroll animations
- **Development:** Anima Vite Plugin for screen graph generation

### Project Structure
```
/
├── src/
│   ├── index.tsx                 # Application entry point
│   ├── utils/
│   │   └── smoothScroll.ts      # Smooth scroll utility function
│   ├── hooks/
│   │   └── useMotionSafe.ts     # Hook to detect reduced motion preference
│   └── screens/
│       └── IsoLuxuryReal/       # Main screen component
│           ├── IsoLuxuryReal.tsx
│           └── sections/         # Individual page sections
│               ├── HeroSection/
│               ├── AboutUsSection/
│               ├── LodgingSection/
│               ├── StatisticsSection/
│               ├── TestimonialsSection/
│               ├── VideoSection/
│               ├── SubscriptionSection/
│               └── FooterSection/
├── static/
│   ├── hero-background.jpg        # Hero section background (roofing project)
│   ├── about-section.jpg          # About section image (construction site aerial)
│   ├── statistics-section.jpg     # Statistics section image (mansion construction)
│   └── hc-logo.png               # HC Construction logo
├── index.html                    # HTML entry point
├── tailwind.config.js           # Tailwind configuration
├── tailwind.css                 # Tailwind styles
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Configuration

### Replit Environment Setup
- **Development Server:** Runs on `0.0.0.0:5000`
- **Workflow:** Configured to run `npm run dev -- --host 0.0.0.0 --port 5000`
- **Port:** 5000 (required for Replit's web preview)
- **Host:** 0.0.0.0 (allows external access through Replit's proxy)

### Vite Configuration
The Vite config has been customized for Replit:
- Server binds to `0.0.0.0:5000` for development
- Preview server also configured for port 5000
- Strict port mode enabled to prevent port conflicts
- Screen graph plugin enabled in development mode
- Tailwind CSS integrated via PostCSS

### Deployment Configuration
- **Target:** Autoscale (stateless website)
- **Build Command:** `npm run build` (builds static assets to `dist/`)
- **Run Command:** `npx vite preview --host 0.0.0.0 --port 5000` (serves built production assets)

## Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production

## Recent Changes

### October 28, 2025 - UI Refinements, Badge Repositioning & Image Updates
**Hero Section Updates:**
- Removed avatar circles from "25+ Five-Star Reviews" indicator
- Centered the "Get Your Free Quote" button for better visual hierarchy
- "25+ Five-Star Reviews" text now displays cleanly below the button
- **"ROOFING & CONSTRUCTION" badge repositioned** - now appears BELOW the main heading "Serving the Nashville Area Since 2012" instead of above the logo
- Creates better visual flow: Logo → Heading → Badge → Subheading
- **Hero section vertical positioning optimized** - content positioned at top of viewport so logo appears above the house in background image, ensuring maximum readability against trees/sky

**Header Redesign:**
- Removed navigation menu (Home, About, Features, Services, Testimonials)
- Removed social media icons from header
- Logo now centered at the top of the page
- Creates a cleaner, more focused brand presentation

**Image Updates:**
- Updated "Why Choose HC Construction" section image to new construction site aerial photo
- Updated "Built on Experience. Backed by Results." section image to mansion construction photo

**Contact Section Simplification:**
- Removed contact form box for streamlined presentation
- Centered contact information card with all essential details
- Kept: address, phone, email, and business hours in a clean, single-column layout

**Logo Visibility Improvements:**
- Tripled logo size in hero header to h-48 (mobile) and h-72 (desktop)
- Tripled logo size in footer to h-48
- Logo is now very prominent and highly visible throughout the entire site

### October 27, 2025 - Content Cleanup & Professional Polish
**Removed Irrelevant Content:**
- Removed VideoSection (luxury real estate interior gallery) from page structure
- Eliminated all "Iso" and luxury real estate references throughout the site

**Statistics Section Overhaul:**
- Replaced generic fitness app metrics with HC Construction-specific stats:
  - "13+ Years serving Nashville & Springfield"
  - "500+ Projects completed with excellence"
  - "100% Licensed, insured & veteran-owned"
  - "10% Discount for military, police & firefighters"
- Updated heading to "Built on Experience. Backed by Results."
- Replaced description with HC Construction-focused copy

**Testimonials Update:**
- Replaced all 4 testimonials with construction/roofing-specific reviews
- Updated client names and locations to Tennessee area (Nashville, Springfield, Goodlettsville, White House)
- Removed luxury real estate references and replaced with roofing, siding, framing, and renovation feedback

**Hero Section Improvements:**
- Added caption "Five-Star Reviews" below the "25+" indicator for clarity
- Now visitors understand the "25+" represents customer reviews

**Design Consistency:**
- Replaced emoji service icons (🏠🔨📐✨) with professional SVG line icons
- All service cards now use clean, minimalist line icons that match the overall design aesthetic

**Navigation Verification:**
- Confirmed all navigation buttons correctly link to their intended sections
- Home → Hero section
- About → Why Choose HC Construction
- Features → Services (4 cards)
- Services → Statistics/Experience section
- Testimonials → Client testimonials

### October 27, 2025 - Complete HC Construction Rebrand
**Hero Section:**
- Updated heading to "Serving the Nashville Area Since 2012"
- Updated subheading to "Protecting & transforming homes with premium craftsmanship and dependable service."
- Changed CTA button to "Get Your Free Quote" (scrolls to contact section)
- Replaced hero background with roofing project image
- Added darker overlay for better text contrast
- Replaced ISO logo with HC Construction logo

**Why Choose HC Construction Section (formerly About Us):**
- Complete rewrite with 6 key value propositions:
  - Veteran-owned & operated
  - Licensed, insured & local to Springfield/Nashville
  - Free inspections & detailed estimates
  - Complete cleanup and attention to detail
  - 10% discount for military, police, firefighters
  - Extensive experience across roofing, siding, framing, remodeling
- Added checkmark icons for each bullet point
- Replaced image with construction site aerial photo
- Simplified layout for better mobile responsiveness

**Services Section (formerly Lodging):**
- Replaced 3 property cards with 4 service cards:
  1. Roofing - with "Get a Roofing Quote" button
  2. Siding - with "Get a Siding Quote" button
  3. Framing - with "Learn More – Framing" button
  4. Renovation - with "Let's Talk Renovation" button
- Added service icons (emojis)
- All buttons scroll to contact section
- Grid layout: 1 column on mobile, 2 on tablet, 4 on desktop

**Recent Work Section (formerly Video):**
- Updated heading to "Recent Work"
- Updated description: "Take a look through our project gallery..."
- Kept video showcase of modern house interior
- Added "View Full Gallery" CTA button

**Contact Section (formerly Subscription):**
- Complete redesign with two-column layout
- Left column: Contact information with icons
  - Address: 245 Elder Drive, Springfield, TN 37172
  - Phone: (615) 766-6180
  - Email: reylopez21@icloud.com
  - Hours: Mon-Fri 9 AM–6 PM, Sat-Sun 9 AM–12 PM
- Right column: Contact form with name, email, and message fields
- "Get a Free Quote" submit button that opens email client

**Footer Section:**
- Replaced ISO branding with HC Construction logo
- Updated tagline: "Built with pride in Tennessee. Powered by premium craftsmanship and dedicated service."
- Added "Veteran-Owned | Licensed & Insured" badge
- Simplified navigation to 4 sections (Home, About, Services, Contact)
- Updated services list (Roofing, Siding, Framing, Renovation)
- Added social media icons (Facebook, Instagram, LinkedIn)
- Updated copyright: "© 2012 – 2025 HC Construction Inc. – All Rights Reserved"
- All contact information updated to Springfield, TN location

### October 10, 2025 - Smooth Scrolling Navigation System
- Created smooth scroll utility function (`src/utils/smoothScroll.ts`) for elegant page navigation
- Implemented `useMotionSafe` hook to respect user's reduced motion preferences
- Added unique section IDs to all sections for navigation targeting:
  - `hero` (HeroSection) - Home
  - `features` (LodgingSection) - Services
  - `about` (AboutUsSection) - Why Choose Us
  - `video` (VideoSection) - Recent Work
  - `contact` (SubscriptionSection) - Contact
- Updated header navigation with smooth scroll functionality
- Updated footer navigation links to scroll to relevant sections
- Updated all CTA buttons with smooth scroll to contact section

### October 9, 2025 - Initial Replit Setup
- Installed Node.js 20 and all project dependencies
- Configured Vite to serve on 0.0.0.0:5000 for Replit environment
- Set up workflow for automatic dev server startup
- Configured deployment settings for autoscale deployment
- Verified application runs successfully with all sections rendering correctly

## Dependencies

### Production Dependencies
- react & react-dom - UI framework
- react-router-dom - Client-side routing
- framer-motion - Animation library for smooth interactions
- clsx & tailwind-merge - Utility class management
- tailwindcss-animate - Animation utilities

### Development Dependencies
- @vitejs/plugin-react - React support for Vite
- @animaapp/vite-plugin-screen-graph - Anima integration
- TypeScript types for React
- Vite build tool
- Tailwind CSS

## Business Information

### HC Construction
- **Type:** Veteran-owned roofing and construction company
- **Established:** 2012
- **Service Area:** Nashville/Springfield, TN region
- **Specialties:** Roofing, siding, framing, renovation
- **Special Offers:** 10% discount for military, police, firefighters

### Contact Information
- **Address:** 245 Elder Drive, Springfield, TN 37172
- **Phone:** (615) 766-6180
- **Email:** reylopez21@icloud.com
- **Hours:** Mon-Fri 9 AM–6 PM, Sat-Sun 9 AM–12 PM

## Navigation System
- **Type:** Single-page application with smooth scrolling navigation
- **Behavior:** All navigation links scroll smoothly to their target sections
- **Accessibility:** Respects user's `prefers-reduced-motion` setting
- **Section Mapping:**
  - Home → Hero section
  - About → Why Choose HC Construction section
  - Features/Services → Services section (4 service cards)
  - Contact → Contact form section

## Design & Styling
- **Color Scheme:** Black background with white text, glass-morphism cards
- **Typography:** Plus Jakarta Sans (headings), Plus Jakarta Sans (body)
- **Animations:** Fade-up, slide-in, and scale-in effects via Framer Motion
- **Responsive:** Fully responsive across mobile, tablet, and desktop
- **Accessibility:** Motion-safe hooks, semantic HTML, ARIA labels

## Notes
- The project uses Google Fonts (Plus Jakarta Sans and Poppins)
- No backend API or database required - this is a static frontend
- All styling is done with Tailwind CSS utility classes
- The application is a single-page app using smooth scroll navigation instead of routing
- Framer Motion animations respect accessibility preferences
- Images stored in `/static` folder for easy access
- Contact form uses mailto: protocol to open user's email client

## User Preferences
None documented yet.
