# Monark

<p align="center">
  <img src="./public/imgs/logo/mainLogo.png" alt="Monark" width="260" />
</p>

<p align="center">
  A responsive e-commerce storefront interface built with React, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
</p>

<p align="center">
  <a href="#getting-started">Get started</a> ·
  <a href="#project-structure">Project structure</a> ·
  <a href="#available-scripts">Scripts</a>
</p>

## Overview

Monark is a work-in-progress storefront experience focused on a clean shopping flow across mobile and desktop. The project currently includes a responsive navigation bar, search interactions, bag and menu panels, and a product-detail route with breadcrumbs, pricing, and a mobile image carousel.

## Design preview

<p align="center">
  <img src="./appDesign.png" alt="Monark e-commerce interface design preview, including catalog, search, and product detail screens" width="720" />
</p>

## Highlights

- Responsive navigation with mobile search, menu, and shopping-bag panels
- Product detail page at `/products/:productId`
- Mobile-first product carousel with a slide progress indicator
- Reusable UI primitives powered by Radix UI
- Local Roboto font files and product imagery for an offline-friendly interface

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS |
| Routing | React Router |
| Components | Radix UI + Lucide icons |
| Carousel | React Slick |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/fahchouchsm/Monark-Ecom-Web-App.git
cd Monark-Ecom-Web-App
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
src/
├── components/
│   ├── navBar/       # Navigation, search, bag, and menu UI
│   └── ui/           # Reusable Radix-based primitives
├── pages/
│   ├── home/         # Landing route
│   └── productPage/  # Product detail route and components
├── interfaces/       # Shared TypeScript types
└── App.tsx           # Application routes

public/
├── imgs/             # Branding assets
├── test/             # Product images for the carousel
└── fonts/             # Local Roboto font family
```

## Roadmap

- [ ] Build the product catalog and category pages
- [ ] Connect product data to the detail route
- [ ] Implement shopping-bag state and checkout flow
- [ ] Complete desktop product-gallery behavior

## Author

Built by [fahchouchsm](https://github.com/fahchouchsm).
