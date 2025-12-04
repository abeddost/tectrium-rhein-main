# Tectrium Ultra-Modern Website Redesign

## Overview
Transform the Tectrium Rhein-Main website into a premium, cinematic experience with Next.js, Framer Motion animations, video backgrounds, and Apple-inspired design aesthetics.

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom gradients
- **Animations**: Framer Motion
- **Video Integration**: HTML5 video elements with optimized loading
- **Typography**: System fonts (SF Pro-like) or Inter/Geist

## Project Structure
```
├── app/
│   ├── layout.tsx (root layout with gradient background)
│   ├── page.tsx (home page)
│   └── globals.css (global styles, gradients, animations)
├── components/
│   ├── Hero.tsx (full-width video background hero)
│   ├── About.tsx (two-column layout with animations)
│   ├── Services.tsx (animated service cards)
│   ├── Gallery.tsx (video/image showcase with parallax)
│   ├── Contact.tsx (minimal form with gradient accents)
│   ├── Footer.tsx (ultra-simple footer)
│   ├── Navigation.tsx (smooth scroll navigation)
│   └── VideoBackground.tsx (reusable video component)
├── public/
│   └── [4 existing video files]
└── package.json
```

## Implementation Details

### 1. Next.js Setup & Configuration
- Initialize Next.js project with TypeScript
- Configure Tailwind CSS with custom gradient utilities
- Set up Framer Motion
- Configure video optimization

### 2. Global Styles & Theme (`app/globals.css`)
- Light gradient background (white → soft pastel)
- Premium typography system
- Custom animation keyframes
- Glassmorphism utilities
- Smooth scroll behavior

### 3. Hero Section (`components/Hero.tsx`)
- Full-width video background using one of the public videos
- Large animated headline with text reveal (Framer Motion)
- Subheadline with soft fade-in
- Minimal CTA button with hover micro-interactions
- Floating motion effects
- Gradient overlay on video

### 4. About Section (`components/About.tsx`)
- Two-column layout (text + visual)
- Preserve existing company description
- Light gradient behind icons/elements
- Text animations on scroll (staggered)
- Optional small looping ambient video embedded
- Fade-in effects on scroll

### 5. Services Section (`components/Services.tsx`)
- Modern service cards with animated icons
- Preserve all existing services:
  - Hausreinigung
  - Technischer Service
  - Aussenanlagen
  - Winterdienst
  - Tiefgaragenreinigung
  - Service für HV und ET
  - Renovierungen
- Cards fade in and rise on scroll
- Soft glow hover effect
- Gradient shimmer on hover

### 6. Gallery/Projects Section (`components/Gallery.tsx`)
- Large video showcase using remaining videos
- Parallax or slow zoom effects
- Smooth hover transitions
- Grid or carousel layout

### 7. Contact Section (`components/Contact.tsx`)
- Preserve contact information:
  - Harald Ganick
  - Tel. +49 (0) 177 343 00 15
  - Email
  - Address: An der Brunnenstube 27-31, 55120 Mainz
- Minimal form with gradient accents
- Animated heading
- Map integration with soft shadows
- Smooth form field animations

### 8. Footer (`components/Footer.tsx`)
- Ultra-simple & elegant design
- Clean spacing, thin separators
- Navigation links
- Contact info
- Legal links (Datenschutz, Impressum)

### 9. Navigation (`components/Navigation.tsx`)
- Smooth scroll navigation
- Sticky header with glassmorphism
- Animated menu items
- Mobile-responsive hamburger menu

### 10. Video Component (`components/VideoBackground.tsx`)
- Reusable video background component
- Autoplay, loop, muted
- Rounded edges or full-width cinematic style
- Gentle parallax or slow zoom
- Optimized loading

## Animation Strategy
- **Text Reveals**: Framer Motion `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Scroll Animations**: `useInView` hook with stagger effects
- **Hover Effects**: Scale transforms + glow shadows
- **Parallax**: CSS transforms with scroll listeners
- **Gradient Shimmer**: CSS keyframe animations
- **Section Transitions**: Smooth fade and slide effects

## Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized video loading for mobile

## Content Preservation
- All existing German text content
- All service descriptions
- Complete contact information
- Company history and values
- Navigation structure

## Video Integration Strategy
- **Hero**: Use "Diy, Apartment, Roller, Drill" video as main background
- **Gallery**: Use "Royalty Stock Footage 13, 14, 15" for showcase
- All videos: autoplay, loop, muted, optimized formats
- Fallback images for slow connections

