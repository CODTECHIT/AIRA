## Aira Lab Equipment – Static Marketing Site

This project is a single-page React + Tailwind CSS website for **Aira Lab Equipment**, a Hyderabad-based manufacturer of pharma lab furniture, fume hoods, storage racks, apron & locker units, and flammable material storage cabinets.

### Tech Stack

- React 18
- Tailwind CSS 3
- Vite build tool
- Plain JavaScript (no TypeScript, for simplicity)

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open the printed URL in your browser (default `http://localhost:5173`).

3. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

### Project Structure

- `index.html` – HTML shell, meta tags, and LocalBusiness JSON-LD schema for SEO.
- `src/main.jsx` – React entry point.
- `src/App.jsx` – Single-page layout with:
  - Hero section.
  - Products grid.
  - Solutions section.
- `src/index.css` – Tailwind directives + a few utility classes.
- `tailwind.config.js` – Tailwind setup with custom `brand` and `accent` colours.
- `docs/PRD.md` – Product Requirements Document.
- `docs/seo-text-tags.md` – SEO text and tag plan (headings, meta, alt text).
- `docs/design-system.md` – Design system (colors, typography, layouts).

### Using Real Images

The gallery and hero currently use gradient placeholders. To add your real product photos:

1. Create a folder such as `public/images/`.
2. Copy your images (workstations, fume hoods, lockers, etc.) into that folder.
3. Replace the placeholder `div` blocks in the **Gallery** section of `App.jsx` with `<img>` tags:

   ```jsx
   <img
     src="/images/lab-workstations.jpg"
     alt="Island lab workstations with white cabinets and black countertops by Aira Lab Equipment"
     className="h-full w-full object-cover"
   />
   ```

4. Use alt text suggestions from `docs/seo-text-tags.md` for better SEO.

### Connecting the Contact Form

Currently, the contact form is static and does not send data anywhere. You can:

- Connect it to an API endpoint.
- Use third-party services like Formspree, Getform, or Netlify Forms.

The submit handler is in the **Contact** section of `App.jsx`. Replace `e.preventDefault()` with your integration logic.

