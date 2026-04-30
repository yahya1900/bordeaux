---
name: Bordeaux Heritage Premium
colors:
  surface: '#fbf8ff'
  surface-dim: '#dbd9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fd'
  surface-container: '#efecf7'
  surface-container-high: '#e9e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1b1b22'
  on-surface-variant: '#43474c'
  inverse-surface: '#303038'
  inverse-on-surface: '#f2effa'
  outline: '#73777d'
  outline-variant: '#c3c7cd'
  surface-tint: '#486176'
  primary: '#294357'
  on-primary: '#ffffff'
  primary-container: '#415a6f'
  on-primary-container: '#b7d1e9'
  inverse-primary: '#afcae2'
  secondary: '#b52517'
  on-secondary: '#ffffff'
  secondary-container: '#fc5843'
  on-secondary-container: '#5b0200'
  tertiary: '#40403e'
  on-tertiary: '#ffffff'
  tertiary-container: '#585755'
  on-tertiary-container: '#cfcdca'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#afcae2'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#30495e'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410100'
  on-secondary-fixed-variant: '#920501'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#fbf8ff'
  on-background: '#1b1b22'
  surface-variant: '#e3e1ec'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin: 64px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system targets high-net-worth travelers and professionals seeking a refined, authentic stay in Bordeaux. The personality is "Quiet Luxury"—it is confident and established but maintains a welcoming, hospitable warmth. 

The aesthetic blends **Modern Minimalism** with **Editorial Sophistication**. It prioritizes high-quality photography of Haussmann-style architecture and curated interiors, using negative space as a functional element to convey prestige. The interface feels light and airy, punctuated by deep, authoritative tones that instill a sense of security and professional reliability.

## Colors

The palette is anchored by a deep slate blue, representing the professional and trustworthy nature of the service. This is balanced by a warm neutral (off-white/cream) used for large background sections to avoid the clinical feel of pure white and to reference the limestone of Bordeaux’s historic facades.

- **Primary:** Use for headers, navigation, and primary brand moments.
- **Secondary:** Use sparingly for critical calls to action or seasonal highlights; it provides a sharp, contemporary contrast to the cooler blues.
- **Neutral:** A dark charcoal for primary text to ensure readability without the harshness of pure black.
- **Backgrounds:** Use a mix of white and the warm neutral tertiary to create subtle section differentiation.

## Typography

The typographic strategy utilizes a high-contrast pairing to evoke an editorial, premium feel. 

**Noto Serif** is reserved for headlines and storytelling elements. Its elegant serifs suggest tradition and high-end hospitality. 

**Manrope** is used for all functional and body text. Its modern, geometric construction ensures maximum legibility for property details, pricing, and navigation. Use the "label-caps" style for small metadata, like "Bordeaux City Center" or "Per Night," to add a layer of structured hierarchy.

## Layout & Spacing

This design system employs a **Fixed Grid** system for desktop to maintain a controlled, gallery-like experience. 

- **Grid:** A 12-column grid with generous 32px gutters.
- **Rhythm:** Vertical rhythm is extremely spacious. Section gaps are intentionally large (120px+) to allow imagery to "breathe" and to signal to the user that they are in a premium environment.
- **Alignment:** Use asymmetrical layouts for property showcases—pairing large images with offset text blocks—to create a modern, curated feel rather than a standard rental grid.

## Elevation & Depth

To maintain a sophisticated and "flat-premium" aesthetic, depth is achieved through **Tonal Layers** rather than heavy shadows.

- **Surface Tiers:** Use the warm neutral tertiary color to create containers for cards and search modules against white backgrounds.
- **Shadows:** When necessary (e.g., on primary booking modals), use "Ambient Shadows"—extremely soft, large-radius blurs with very low opacity (3-5%) and a slight tint of the primary blue.
- **Overlays:** Images should use subtle darkening gradients only where text legibility is required, ensuring the photography remains the focal point.

## Shapes

The shape language is restrained and architectural. UI elements use **Soft (0.25rem)** roundedness to appear approachable without losing the professional "edge" required for a high-end service. 

- **Buttons & Inputs:** Use the standard 4px (0.25rem) radius.
- **Property Cards:** Use the same 4px radius for a crisp, organized look.
- **Iconography:** Use thin-stroke (1.5pt) linear icons with slightly rounded terminals to match the body typeface.

## Components

### Buttons
- **Primary:** Solid primary color with white text. High padding (16px 32px) to feel substantial.
- **Secondary:** Outlined (1px) in primary color for secondary actions.
- **Tertiary:** Text-only with a 1px bottom border that animates on hover.

### Cards
Property cards should feature a large aspect-ratio image (4:3 or 16:9). Titles should be in Noto Serif, while metadata (guests, bedrooms) should use Manrope labels with small, elegant icons. No heavy borders; use subtle tonal backgrounds or high-quality whitespace to separate cards.

### Input Fields
Forms use a "Minimalist Classic" style: a simple bottom border or a very light 1px outline that darkens on focus. Labels should always be visible (never placeholder-only) to maintain an accessible, professional feel.

### Selection Controls
Checkboxes and radio buttons should be custom-styled using the primary color, avoiding the default browser appearance to ensure a bespoke brand experience.

### Additional Components
- **Image Gallery:** A masonry or editorial-style grid for property photos.
- **Trust Badges:** Simple, monochrome logos of certifications or local partners.
- **Sticky Booking Bar:** A slim, persistent bar on mobile for property pages to facilitate "instant book" functionality.