# Portfolio Website

This is a personal portfolio website built with Next.js, React, Tailwind CSS, and Sass. It presents personal projects, a short bio, and other relevant sections using custom animations and a minimal, responsive design.

## Overview

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (utility-first) combined with Sass for custom styling
- **Animation**: GSAP (GreenSock Animation Platform)
- **Structure**:
  - `app/`: Core pages and layout files
  - `components/`: Reusable UI components organized by feature
  - `db/data.ts`: Static data source for projects
  - `styles/`: Global styles using both Tailwind CSS and Sass
  - `public/`: Static assets such as images and textures

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Notes

- Animations are handled through GSAP and ScrollTrigger.
- Main sections like Hero, About, and Projects are modular and located under `components/`.
- Tailwind CSS is used for layout and utility styling, while Sass is used for structured custom styles and overrides.
- Static project data is defined in `db/data.ts`.

## Deployment

This project is deployed on Vercel.  
Check out the live version: [Portfolio](https://rizikh.vercel.app)

---
