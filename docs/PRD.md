# Aira Lab Equipment – Marketing Website PRD

## 1. Overview

- **Business**: Aira Lab Equipment  
- **Owner**: C. Ramesh (Proprietor)  
- **Location**: Hyderabad, Telangana, India  
- **Website Type**: Static marketing site built with React + Tailwind CSS (single-page application, can be deployed to any static host)  
- **Primary Goals**:
  - Generate qualified enquiries for pharma lab furniture and fume hood projects.
  - Present Aira as a professional, modern manufacturer (not just a fabricator).
  - Showcase key product categories and sample installations.

## 2. Target Audience

- **Primary**:
  - Pharma companies (QC & R&D labs).
  - Chemical & biotech manufacturing units.
  - Institutions and colleges with laboratory setups.
- **Secondary**:
  - Architects / project consultants planning new labs.
  - Procurement teams evaluating lab furniture vendors.

## 3. Success Metrics

- Increase in incoming enquiries (calls / emails / form submissions) from the website.
- Visitors spending at least 1–2 minutes on the site (scrolling through hero, products, and contact).
- Positive feedback on look & clarity from customers and partners.

## 4. Pages & Information Architecture

Single-page layout with sticky navigation:

1. **Hero**
   - Strong headline describing business: “Smart, Safe & Stylish Lab Furniture & Fume Hoods”.
   - Sub-text describing specialisation in pharma lab furniture.
   - Two primary CTAs:
     - “Get a layout & quote” (scroll to contact section).
     - “View products” (scroll to product grid).
   - Short highlight stats: based in Hyderabad, industries served, main product focus.
2. **Products**
   - Grid of core product categories:
     - Pharma Lab Furniture (benches, workstations, tabletops).
     - Fume Hoods & Fume Cupboards.
     - Material Storage Racks.
     - Apron & Locker Units.
     - Flammable Material Storage Cabinets.
   - Each card shows: short description + 3 key bullet benefits.
3. **Solutions**
   - Explanation of turnkey solutions:
     - Layout planning & proposals.
     - Custom fabrication & powder coating.
     - On-site installation & service.
   - Quick facts: applications, industries, locations served, contact.
4. **Why Aira**
   - 3–4 highlight cards:
     - “Built for daily heavy use”.
     - “Clean, modern aesthetics”.
     - “Direct manufacturer advantage”.
5. **Gallery**
   - Responsive grid with image placeholders for:
     - Modular workstations.
     - Fume hoods.
     - Locker units.
     - Sink & base cabinets.
     - Full-length hood banks.
     - Storage cabinets.
   - Copy indicates these placeholders should be replaced with real photos (images similar to those shared).
6. **Contact**
   - Static enquiry form with fields:
     - Name.
     - Company / Institution.
     - Mobile number.
     - Email.
     - Requirement details (textarea).
   - Right-side contact card with:
     - Name: C. Ramesh – Proprietor.
     - Phone: +91 80089 93002 (click-to-call).
     - Email: airalabequipment@gmail.com (click-to-email).
     - Address: Full postal address.
     - GSTIN.
   - Note that the form is static and needs backend / service integration for production.
7. **Footer**
   - Copyright.
   - Small list of main offerings for SEO anchoring.

## 5. Functional Requirements

- **FR-1: Navigation**
  - Sticky header with logo text and anchor links.
  - Clicking a nav item smoothly scrolls to the target section.
- **FR-2: Hero CTAs**
  - “Get a layout & quote” scrolls to Contact section.
  - “View products” scrolls to Products section.
- **FR-3: Responsive Layout**
  - All sections must render cleanly from 320px wide phones to large desktops.
  - Cards stack vertically on mobile and use grid on tablet/desktop.
- **FR-4: Static Enquiry Form**
  - Form fields with proper HTML types (text, tel, email, textarea).
  - Form submission currently prevented (no backend), with comment in code.
  - Can be wired up later to services like Formspree, Netlify Forms, or an API.
- **FR-5: SEO Content**
  - Title, meta description, and keywords added in `index.html`.
  - Structured data (LocalBusiness JSON-LD) embedded.
  - Semantic HTML tags used (`header`, `main`, `section`, `footer`, `nav`, etc.).
- **FR-6: Performance**
  - Simple Vite + React + Tailwind stack with no heavy extra libraries.
  - Optimised for static hosting (build artefacts are pure HTML/CSS/JS).

## 6. Non-functional Requirements

- **NFR-1: Brand & Visuals**
  - Use vibrant colors inspired by the Aira logo:
    - Aqua / teal and lime / yellow gradients.
    - No dull, flat greys as main colors; can use dark slate backgrounds for contrast.
  - Clean, minimal, modern UI that still feels “industrial professional”.
- **NFR-2: Accessibility**
  - Sufficient color contrast between text and background.
  - Text equivalents for all future product images (alt tags).
  - Form labels associated with inputs.
  - Font sizes legible on mobile.
- **NFR-3: Maintainability**
  - Code organised into a single-page `App.jsx` plus minimal configuration.
  - Clear comments in docs on how to add new product cards or gallery images.

## 7. Tech Stack

- **Frontend Framework**: React 18 (SPA).
- **Styling**: Tailwind CSS 3.x + custom classes.
- **Build Tool**: Vite.
- **Languages**: HTML, CSS, JavaScript (no TypeScript for simplicity).
- **Hosting**: Any static host (e.g. GitHub Pages, Netlify, Vercel, etc.).

## 8. SEO & Content Strategy

- Focus keyword themes:
  - “pharma lab furniture manufacturer Hyderabad”.
  - “lab furniture and fume hood supplier”.
  - “laboratory storage racks and lockers”.
- On-page tactics:
  - One primary H1 in hero.
  - H2s for each major section.
  - Short, keyword-rich but human-readable copy.
  - Internal anchor links in footer (keywords repeated as plain text).
- Off-page / future:
  - Can later add “Projects / Clients” pages and blog posts to build authority.

## 9. Future Enhancements (Out of Scope for v1)

- Working contact form with backend integration.
- Multi-page structure (Projects, About, Careers, etc.).
- Downloadable PDF brochures and project profiles.
- Language switch (e.g. English + local language).

