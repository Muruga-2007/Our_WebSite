# TuneEng Landing Page

## Overview
This is a React-based landing page for TuneEng, a premium platform for engineering teams to visualize, analyze, and optimize performance. The project uses Create React App with CRACO for configuration overrides, TailwindCSS for styling, and various UI components.

## Project Structure
```
frontend/           # React frontend application
├── src/
│   ├── components/
│   │   ├── landing/    # Landing page components (Hero, Features, Carousel)
│   │   └── ui/         # Reusable UI components (buttons, cards, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.js          # Main application component
│   └── index.js        # Application entry point
├── public/             # Static assets
├── plugins/            # Custom webpack plugins
├── craco.config.js     # CRACO configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Dependencies
backend/            # Backend server (not currently in use)
tests/              # Test files
```

## Recent Changes
- 2024-11-30: Configured for Replit environment with port 5000 and host 0.0.0.0
- 2024-11-30: Set up static deployment configuration

## Development
The frontend runs on port 5000 in development mode using:
```bash
cd frontend && PORT=5000 HOST=0.0.0.0 npm start
```

## Technologies
- React 19
- Create React App with CRACO
- TailwindCSS
- Framer Motion (animations)
- GSAP (animations)
- Radix UI (component primitives)
- Lucide React (icons)

## Deployment
Configured as a static site deployment. The build command compiles the React app and outputs to `frontend/build`.
