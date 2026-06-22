# RK IT Training HUB

A premium, modern landing page and platform designed for RK IT HUB, a premier tech training institute. The platform enables students to explore various engineering and business internship tracks, view pricing tiers, browse testimonials, and enroll in industry-ready programs. The website is built with a focus on stunning UI/UX, utilizing glassmorphism, floating elements, and smooth Framer Motion animations.

## Demo

https://rkithub-f20ae.web.app/

## Features

- Premium SaaS-style UI with Aceternity components
- Smooth scroll animations using Framer Motion
- Interactive Career Tracks (Engineering & Business)
- Mentor Ecosystem visualizer using ReactFlow
- Embla Carousel Testimonials
- Fully Responsive Design across mobile, tablet, and desktop
- Pricing and comparison tables
- High-conversion Contact and Enrollment forms
- Dark/Light mode thematic elements

---

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- ReactFlow
- Embla Carousel
- Lucide Icons
- GSAP

### Deployment
- Firebase Hosting

## Installation

### Clone Repository

```bash
git clone https://github.com/siddharthg-7/rkithub

# Install Frontend Dependencies
cd rkithub
npm install
```
    
## Environment Variables

To run this project, you don't strictly need `.env` variables for the frontend, but you may need Firebase configs if expanding backend logic in the future:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## Run Locally

Clone the project

```bash
git clone https://github.com/siddharthg-7/rkithub
```

Go to the project directory

```bash
cd rkithub
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

## Deployment

To deploy this project to Firebase run:

```bash
npm run build
firebase deploy
```

## The application can be deployed using:

- Firebase Hosting
- Vercel 
- Netlify

## Component Reference

### Career Tracks Component

The `CareerTracks.tsx` component is highly dynamic and customizable.

| Prop/Data | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Unique identifier  |
| `title`   | `string` | **Required**. Track name         |
| `imageUrl`| `string` | **Required**. Tech stack logo URL|
| `skills`  | `array`  | **Required**. Array of string skills |

### Pricing Component

Manage different tier levels and their offerings directly in the `PricingSection.tsx` component data array.

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `name`    | `string` | **Required**. Plan name (e.g. Starter) |
| `price`   | `string` | **Required**. Monthly/One-time price |

### Usage/Examples

#### Student Workflow

```text
1. Land on the Home Page
2. View the Interactive Hero Section and Mentor Ecosystem
3. Explore Engineering or Business Tracks
4. Review Placement Statistics and Testimonials
5. Choose a Pricing Tier
6. Contact Counselors / Enroll
```

## Roadmap

- [x] Premium Landing Page UI
- [x] Framer Motion Animations
- [x] Interactive Career Tracks
- [x] Testimonial Carousel
- [x] Pricing Section with 4 Tiers
- [x] Firebase Deployment
- [ ] Student Authentication Portal
- [ ] Learning Management System (LMS) Integration
- [ ] Resume Builder Tool Integration
- [ ] Live Chatbot for Support

## Optimizations

- Implemented Framer Motion `whileInView` for smooth entrance animations, reducing layout jank.
- Used Vite for rapid HMR and optimized production builds.
- Leveraged ReactFlow for a beautiful node-based Mentor Ecosystem visual.
- Created reusable, isolated React components to ensure high maintainability.
- Added custom gradient masks and Aceternity UI effects for a modern "glass" aesthetic.
- Fully responsive styling utilizing Tailwind CSS grid and flex utilities.

## Lessons Learned

While building this project, we focused on:

- Delivering a premium SaaS look-and-feel using Tailwind CSS and custom SVG masking.
- Coordinating complex animations between GSAP (orbit animations) and Framer Motion (scroll reveals).
- Structuring a large, content-heavy landing page into highly modular components.
- Seamlessly integrating third-party libraries like Embla Carousel and ReactFlow without breaking aesthetic consistency.

### Challenges Faced

- Managing staggered animations across dynamic grids.
- Ensuring the 3D orbit GSAP animation was responsive on mobile devices.
- Keeping the bundle size small despite importing multiple animation and mapping libraries.

These challenges led to a much deeper understanding of performance profiling and modern React animation orchestration.

## Authors

- [@siddharthg-7](https://github.com/siddharthg-7)

## Feedback

If you have any feedback, suggestions, or feature requests regarding the RK IT HUB platform, feel free to open an issue or reach out through GitHub.

## Support

If you found this project useful, consider giving it a **STAR** on GitHub.

For support or collaboration opportunities, connect through GitHub or LinkedIn.
