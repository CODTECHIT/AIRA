# Aira Lab Equipment – Design System

## 1. Brand Direction

- **Look & feel**: Modern, bright, industrial-professional.
- **Base style**: Dark slate backgrounds with vibrant aqua / teal and warm accent (orange / yellow) inspired by the Aira logo.
- **Avoid**: Dull, flat colours with no contrast; overly playful colours that feel like a kids’ brand.

## 2. Color Palette

Implemented in `tailwind.config.js` under `brand` and `accent`.

- **Brand (Aqua / Teal)** – used for primary CTAs, gradients and highlights.
  - `brand-300`: `#3dfec1`
  - `brand-400`: `#00dca7`
  - `brand-500`: `#00b48a`
  - `brand-700`: `#026f5a`
- **Accent (Warm Orange)** – used as secondary colour in gradients, small highlights.
  - `accent-300`: `#ffca70`
  - `accent-400`: `#ffae33`
  - `accent-500`: `#ff9300`
- **Background & Neutrals**
  - Main background: `bg-slate-950`
  - Card background: `bg-slate-900/60–70`
  - Borders: `border-slate-800`
  - Primary text: `text-slate-50`
  - Secondary text: `text-slate-300`

## 3. Typography

- **Base stack**: `system-ui, "Segoe UI", sans-serif`
- **Usage**:
  - H1: `text-3xl sm:text-4xl lg:text-5xl font-bold`
  - H2: `text-2xl sm:text-3xl font-semibold`
  - H3: `text-base sm:text-lg font-semibold`
  - Body: `text-sm sm:text-base`
  - Fine print: `text-[11px] text-slate-400`

## 4. Components & Layout

### 4.1 Sections

- All sections use the helper class `.aira-section`:
  - `py-16 sm:py-20 lg:py-24`
- Max content width:
  - `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`

### 4.2 Buttons

- **Primary CTA button**:
  - Classes:
    - `inline-flex items-center justify-center`
    - `rounded-full`
    - `bg-gradient-to-r from-brand-400 to-accent-400`
    - `px-5 sm:px-6 py-2.5`
    - `text-sm font-semibold text-slate-950`
    - `shadow-soft hover:scale-[1.02] active:scale-95 transition-transform`
- **Secondary / Outline button**:
  - `rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-brand-400 hover:text-brand-200`

### 4.3 Cards

- **Product / feature cards**:
  - `rounded-2xl border border-slate-800 bg-slate-900/60 p-5`
  - Title: `text-base sm:text-lg font-semibold text-slate-50`
  - Body: `text-xs text-slate-300`
- **Gallery cards**:
  - Wrapper: `rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden`
  - Image area: `aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 group-hover:from-brand-500/20 group-hover:to-accent-500/10`

### 4.4 Hero

- Gradient headline using `.aira-gradient-text`:
  - `bg-gradient-to-r from-brand-300 via-accent-400 to-brand-500 bg-clip-text text-transparent`
- Background:
  - Overall: `bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950`
  - Decorative blur behind hero card:
    - `absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-accent-400/10 to-brand-300/30 blur-3xl opacity-70`

## 5. Responsive Behaviour

- **Mobile first**: Single-column layout, stacked cards.
- **Breakpoints**:
  - `sm` (≥640px): slightly larger text, side paddings increased.
  - `md` (≥768px): product grid switches to 2 columns.
  - `lg` (≥1024px): main hero and contact sections use side-by-side columns.
- **Navigation**:
  - On mobile: nav links hidden; primary CTA shown as button.
  - On desktop: nav links displayed horizontally.

## 6. Imagery Guidelines

- Use the actual product photos you shared:
  - Lab workstations and benches.
  - Fume hoods with blue or green fascia.
  - Locker units and base cabinets.
  - Stainless steel or powder-coated storage racks.
- Style tips:
  - Prefer clean, well-lit images without clutter.
  - Maintain similar aspect ratio (around 4:3) for consistency.
  - Use descriptive, keyword-rich alt text from `seo-text-tags.md`.

## 7. UX Notes

- Keep calls-to-action visible at all times:
  - Sticky header with phone CTA.
  - Primary button in hero and contact sections.
- Limit text length per section to keep scanning easy.
- Ensure form fields are clearly labelled and large enough for touch.

