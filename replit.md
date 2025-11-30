# TuneEng LSRW Landing Page

## Overview
TuneEng LSRW is a powerful, student-friendly platform designed to help college students excel in corporate LSRW (Listening, Speaking, Reading, Writing) rounds through practice, precision, and performance. This React-based landing page showcases the platform's features and offerings.

## Project Structure
```
frontend/           # React frontend application
├── src/
│   ├── components/
│   │   ├── landing/    # Landing page components
│   │   │   ├── Hero.jsx         # Hero section with 3D LSRW dashboard
│   │   │   ├── Features.jsx     # LSRW skills, features, company practice
│   │   │   └── InfiniteCarousel.jsx  # Company logos carousel
│   │   └── ui/         # Reusable UI components (buttons, cards, etc.)
│   ├── hooks/          # Custom React hooks (3D tilt, magnetic)
│   ├── lib/            # Utility functions
│   ├── App.js          # Main application component with pricing
│   └── index.js        # Application entry point
├── public/             # Static assets
├── plugins/            # Custom webpack plugins
├── craco.config.js     # CRACO configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Dependencies
backend/            # Backend server (not currently in use)
tests/              # Test files
```

## Core Features Displayed
- **1000+ Curated Test Sets**: Structured LSRW packages
- **500 Guided Test Sets**: Step-by-step learning with model answers
- **AI-Powered Evaluation**: Multi-modal analysis (tone, pitch, intonation, accent, clarity)
- **Fluency Tracker**: Progress reports and skill improvements
- **Leaderboards & Streaks**: Gamification elements
- **Company-Specific Practice**: Role-specific questions for Tech, HR, Sales, Marketing

## 3D Dashboard Features
The interactive 3D dashboard displays:
- LSRW skill scores (Listening, Speaking, Reading, Writing)
- Daily practice streak tracker
- AI feedback status
- Recent activity log
- Fluency score badge

## Development
The frontend runs on port 5000 in development mode:
```bash
cd frontend && PORT=5000 HOST=0.0.0.0 npm start
```

## Technologies
- React 19
- Create React App with CRACO
- TailwindCSS
- Framer Motion & GSAP (animations)
- Radix UI (component primitives)
- Lucide React (icons)

## Recent Changes
- 2024-11-30: Updated landing page with TuneEng LSRW content
- 2024-11-30: Added interactive 3D dashboard with LSRW skill scores
- 2024-11-30: Added pricing section with Student, Standard, Institution plans
- 2024-11-30: Added LSRW skills section and features grid
- 2024-11-30: Added company-specific practice section

## Deployment
Configured as a static site deployment. The build command compiles the React app and outputs to `frontend/build`.
