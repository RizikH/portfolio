# Portfolio Website

This is a personal portfolio website built with Next.js, React, and Tailwind CSS. It presents personal projects, a short bio, and other relevant sections using custom animations and minimal design.

## Overview

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with global customizations
- **Animation**: GSAP (GreenSock Animation Platform)
- **Structure**:
  - `app/`: Core pages and layout files
  - `components/`: Reusable UI components organized by feature
  - `db/data.ts`: Static data source for projects
  - `styles/`: Global styles and layout styling

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

- Custom animations are handled through GSAP and ScrollTrigger.
- Sections like Projects, About, and Hero are modular and located under `components/`.
- The footer was styled entirely using Tailwind CSS to demonstrate utility-first styling without external libraries.

## Deployment

This project is deployed on vercel. 
Check out the live link [Portfolio](https://rizikh.vercel.app)

---

Inspired by [Muhammad AlDawahreh](https://m7mad.dev/)  
GitHub: [MuhammadJaafer](https://github.com/MuhammadJaafer)
