# THE CROMAZOOGRAFÍAS DESIGN SYSTEM

> **STRICT COMPLIANT WARNING**: This document is the absolute source of truth for all visual and interactive elements. Any AI agent modifying or extending this codebase MUST adhere to these tokens, patterns, and principles without deviation.

## 1. CORE PHILOSOPHY

The project "Cromazoografías" is based on **Existential Poetry** and **Cromatic Taxonomy**. The design system reflects an "Analog High-Contrast" feel, blending **Brutalism** (thick borders, sharp corners, bold type) with a **Sophisticated Dark Aesthetic** (grainy textures, subtle glassmorphism).

- **High Contrast**: Pure Black (#000) vs Pure White (#FFF).
- **Hard Edges**: 0px border-radius. Borders are thick and intentional.
- **Grainy Vision**: A constant noise texture that breathes life into the solid black.
- **Spectrum Driven**: Categorization is dictated by color (The Spectrum), not biological taxonomy.

---

## 2. COLOR PALETTE

### Base Tokens

- `--black`: `#000000` (Backgrounds, Primary ground)
- `--white`: `#FFFFFF` (Headings, Main UI, Card text/borders, CTA fills)
- `--gray`: `#DADADA` (Achromatic step in Vol. 2)

### The Spectrum (Functional & Decorative)

These are primary colors used for Volumes and classification.
| Color Tag | Hex Code | Usage Context |
| :--- | :--- | :--- |
| **Yellow** | `#E6B905` | Vol. 1 Start |
| **Orange** | `#FF6B00` | Vol. 1 Accents |
| **Red** | `#E30613` | Vol. 1 Accents |
| **Pink** | `#E91E8C` | Vol. 1 End |
| **Purple** | `#9B5A9E` | Vol. 2 Start |
| **Blue** | `#2E5A99` | Vol. 2 Accents |
| **Green** | `#4CAF50` | Vol. 2 Accents |
| **Gray** | `#DADADA` | Vol. 2 End |

---

## 3. TYPOGRAPHY SYSTEM

### Headings & Display (The Poetic Voice)

- **Typeface**: `'Arvo'`, serif (via Google Fonts)
- **Weights**: 400 (Regular), 700 (Bold)
- **Usage**: Page Titles (`.hero-title`), Section Headers (`.section-title`), Poem Text (`.poem-text`), Prices.
- **Character**: Authoritative, typewriter-esque, high-impact.

### Body & Interface (The Operational Voice)

- **Typeface**: `'Lato'`, sans-serif (via Google Fonts)
- **Weights**: 300 (Light - Default Body), 400 (Regular), 700 (Bold)
- **Usage**: Bio text, Labels, Buttons, Form inputs, Meta information.
- **Character**: Precise, neutral, modern.

---

## 4. VISUAL DNA (DESIGN TOKENS)

### The Grain (Global Texture)

Every page MUST have a `.grain` overlay to prevent "dead black" pixels.

```css
.grain {
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
    radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size:
    800px 800px,
    900px 900px,
    4px 4px;
  animation: grainMove 8s steps(1) infinite;
  z-index: 999;
}
```

### Borders & Dividers

- **Standard Borders**: `3px` or `4px`.
- **Contrast Dividers**: `1px solid rgba(255,255,255,0.1)` for soft separation.
- **Featured Contours**: `5px solid var(--white)`.

### Interactive Effects (Neo-Brutalism)

- **Hover Offset**: When interactive, elements shift on the X or Y axis.
  - _Pattern_: `transform: translateX(-8px); box-shadow: 8px 8px 0 rgba(255,255,255,0.1);`
- **CTA Reveal**: Buttons animate internal fills using `:before` overlays and `scaleX`/`translateY`.

---

## 5. COMPONENT ARCHEOTYPES

### Poem Container

A box that frame-caps the content.

- **Corners**: Custom `::before`/`::after` psuedo-elements creating 20x20px angle brackets.
- **Padding**: Large internal gutter (`clamp(3rem, 6vw, 5rem)`).

### The Spectrum Strips

Used for categorical listings.

- Large blocks of flat color.
- Black text (`color: var(--black)`) for maximum accessibility on all colors EXCEPT Purple/Blue, which use white.

### Product "Spec" Grid

- **Pricing**: Dominant scale (`clamp(3.5rem, 7vw, 6rem)`).
- **Palette Bars**: Vertical or horizontal stacks of colors representing the Vol range.

---

## 6. GRID & SPACING

Avoid fixed pixel values for layout. Use responsive clamps.

- **Default Section Gutter**: `80px` to `160px` (`clamp(5rem, 12vw, 10rem)`).
- **Global Gap**: `4px` for grid lines (emulating physical print margins).

---

## 7. MANDATORY IA CONSTRAINTS

- **Rule #1**: No Border Radius. Everything is sharp.
- **Rule #2**: High Contrast only. Gray is only for Vol. 2 spectrum.
- **Rule #3**: No standard Blue links. Links are buttons or underlined text in spectrum colors or white.
- **Rule #4**: If it moves, it shifts. Use `cubic-bezier(0.16, 1, 0.3, 1)` for all animations.
- **Rule #5**: The Grain is eternal. Never hide the `.grain` layer.
