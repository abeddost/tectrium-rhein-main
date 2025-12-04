# Tectrium Rhein-Main — Premium Apple-Style Website Plan

## Goal
Create a cinematic, premium, Apple-inspired single-page site for Tectrium Rhein-Main with smooth gradients, glassmorphism, micro-interactions, and atmospheric video layers using the existing public videos.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom theme: gradients, glass, animations)
- Framer Motion for scroll reveals, sliders, magnetic hover
- Lightweight video handling with HTML5 video (blurred/low-opacity overlays)
- Optional dark mode toggle via CSS variables and `data-theme`

## Global Experience
- Light-first palette with aurora gradients; gentle animated background
- Glass cards, soft shadows, micro-shimmer accents
- Page-load staggered fade/slide; parallax on hero/gallery videos
- Smooth scrolling, scroll-based section reveals; hover glows/magnetic buttons
- Responsive across breakpoints; performance-aware (lazy video/image loading)

## Page Structure
1) **Hero**  
   - Full-screen, animated gradient canvas + low-opacity blurred video layer (from `public` hero video)  
   - Bold Apple-style headline & value subheadline  
   - Primary CTA (Kontakt/Termin), secondary CTA (Leistungen) with magnetic hover  
   - Floating shapes/particles and subtle parallax

2) **About / Mission**  
   - Glass container over gradient; scroll reveal copy  
   - Mission/value cards with soft glow hover; optional mini ambient video chip  
   - Timeline-style highlights (founded, response time, coverage)

3) **Services**  
   - 3–6 service cards (Hausreinigung, Technischer Service, Aussenanlagen, Winterdienst, Tiefgaragenreinigung, Service für HV und ET, Renovierungen)  
   - Gradient borders, depth shadows; iconography  
   - Staggered entrance + hover lift/shimmer

4) **Why Choose Us / Value**  
   - Split layout: text with animated checkmarks + side visual (parallax video or gradient image)  
   - Bullet proof-points; trust cues (response times, transparency)

5) **Gallery / Showcase**  
   - Grid/masonry of video tiles (remaining public videos) with hover zoom/reflection  
   - Lightbox modal for playback; lazy loading; parallax on scroll

6) **Testimonials**  
   - Glass cards, auto-slide carousel; round avatars with gradient rings  
   - Soft fades between slides

7) **Contact / CTA**  
   - Gradient block with strong CTA; animated button  
   - Elegant contact form with focus/hover feedback  
   - Contact details and map embed

8) **Footer**  
   - Minimal Apple-like footer with thin gradient divider  
   - Social icons hover glow; legal links

## Animations & Interactions
- Page load: staggered fade/slide for hero headline, subhead, CTA  
- Scroll reveals via Framer Motion `whileInView`  
- Magnetic hover on primary CTA; glow on buttons/cards  
- Parallax on hero/galleries; gradient background slow shift  
- Hover zoom + reflection on gallery tiles; testimonial auto-slider  
- Dark-mode toggle switches CSS variables

## Asset Usage
- Use `Diy, Apartment, Roller, Drill by Stockbusters - Stock Footage.mp4` as hero atmospheric video (blurred/opac ~10–15%)  
- Use `Royalty Stock Footage and Video Footage_13/14/15.mp4` across gallery/value sections  
- Provide fallback poster SVG for videos

## Implementation Steps
1. Scaffold Next.js app with Tailwind, Framer Motion; configure fonts, theme tokens, gradients, animations, and dark-mode variables.  
2. Build shared components: Navigation (sticky glass), Layout, VideoBackground (parallax/blur), Section shells, Buttons (magnetic), ThemeToggle.  
3. Implement sections (Hero → Footer) with required animations, services content, contact info, and video integrations.  
4. Add gallery lightbox and testimonial slider; ensure lazy loading and accessibility.  
5. Polish responsiveness, hover states, motion tuning; run lint/build checks.
