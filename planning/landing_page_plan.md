# TuneEng Landing Page Plan

## 1. Executive Summary

**Goal**: Create a high-performance, cinematic, and immersive landing page for TuneEng that showcases its AI-powered communication and interview preparation platform. The design must feel premium, futuristic, and deeply interactive.

## 2. Technology Stack

This stack is chosen for maximum performance and visual impact.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | SEO optimization, server-side rendering, and performance. |
| **Styling** | **TailwindCSS** | Rapid, utility-first styling with custom config for themes. |
| **3D Graphics** | **Three.js (via React Three Fiber)** | Heroes cinematic intro, 3D interactive elements. |
| **Scroll Logic** | **Lenis** | buttery smooth scrolling experience (crucial for premium feel). |
| **Scroll Animation** | **GSAP (ScrollTrigger)** | Complex timeline animations tied to scroll position. |
| **Micro-interactions** | **Framer Motion** | Button hovers, modal transitions, mounting/unmounting animations. |
| **State Management** | **Zustand** | Lightweight state for UI interactions (e.g., menu open, 3D scene state). |

---

## 3. Cinematic & Animation Strategy

### A. Core Animation Pillars

1. **Smoothness (Lenis)**: The entire page will have momentum-based scrolling, making every movement feel weighted and luxurious.
2. **Depth (Three.js)**: A continuous 3D background or floating elements that react to scroll and mouse movement, tying sections together.
3. **Timing (GSAP)**: Elements won't just "appear"; they will stagger in, reveal from masks, or assemble themselves as the user scrolls.
4. **Feedback (Framer Motion)**: Every clickable element will have a magnetic or physics-based response.

### B. The "Cinematic Intro"

* **Concept**: A dark void that explodes into particles forming the TuneEng logo or a representation of a sound wave/neural network.
* **Execution**:
  * **Load**: Screen is black. A loading bar (thin line) fills up.
  * **Action**: Camera flies through a 3D digital tunnel (representing neural pathways).
  * **Landing**: The camera stabilizes, and the Hero Text "Master the Art of Communication" fades in with a slow bloom effect.
  * **Tech**: Three.js for the world, GSAP for the camera path animation.

---

## 4. Site Structure & Content Flow

### I. Hero Section (The "Hook")

* **Visual**: Full-screen 3D interactive canvas. A stylized, glowing "voice visualization" orb that reacts to the user's mouse.
* **Content**:
  * Headline: "Speak with Confidence. Interview with Impact."
  * Sub-headline: "AI-Powered Communication Coaching for the Future of Work."
  * CTA Buttons: "Start Free Assessment" (Magnetic Glow) & "Watch Demo" (Outline).
* **Interaction**: Mouse movement shifts the 3D camera perspective slightly (parallax).

### II. The Problem & Solution (Scroll Storytelling)

* **Visual**: As user scrolls, the 3D orb morphs into a structured grid (representing data/learning).
* **Content**: "Traditional learning is static. TuneEng is dynamic."
* **Animation**:
  * Text splits and reveals line-by-line using GSAP SplitText.
  * Comparison cards (Old Way vs. TuneEng) slide in from sides with heavy blur-to-sharp transition.

### III. Core Modules (Horizontal Scroll / Pinning)

* **Technique**: Section pins (locks) in place while horizontal cards scroll through.
* **Modules**:
    1. **LSRW Training**: Listening, Speaking, Reading, Writing. *Visual: animated waveforms.*
    2. **AI Interviewer**: Real-time feedback on tone & body language. *Visual: 3D face mesh scanning effect.*
    3. **Situational Labs**: Real-world roleplay scenarios. *Visual: Isometric office environment.*
    4. **Gamification**: Leaderboards & badges. *Visual: Floating 3D trophies/coins.*

### IV. AI Technology Showcase (Interactive Deep Dive)

* **Visual**: A "Glassmorphism" dashboard floating in 3D space.
* **Interaction**: User hovers over specific analytics (Pitch, Tone, Speed), and the dashboard highlights that metric with a glow.
* **Tech**: Framer Motion for the tooltips and glow effects.

### V. Student Journey (Timeline)

* **Visual**: A vertical line that draws itself as you scroll. Nodes light up as they pass the center of the screen.
* **Steps**:
    1. Pre-test Assessment
    2. Custom Learning Path
    3. Weekly Challenges
    4. Mock Interviews
    5. Dream Job Success
* **Animation**: SVG path drawing (GSAP DrawSVG).

### VI. Social Proof & Community

* **Visual**: A "wall of excellence" – infinite marquee of student success stories and company logos (placed students).
* **Animation**: Continuous slow scroll, pause on hover.

### VII. Footer (The "Mic Drop")

* **Visual**: Large, bold typography "Ready to Tune Your English?"
* **Background**: subtle return of the Hero 3D particles.
* **Links**: About, Plans, Contact, Socials.

---

## 5. Implementation Roadmap (Phased)

1. **Phase 1: Setup & Core 3D**: Initialize Next.js, configure Lenis + Tailwind. Build the React Three Fiber scene for the Hero.
2. **Phase 2: Layout & Content**: Build the static sections with placeholder text.
3. **Phase 3: GSAP Choreography**: Implement ScrollTrigger for all section transitions and horizontal scrolls.
4. **Phase 4: Polish**: Add Framer Motion micro-interactions, optimize 3D assets, ensure mobile responsiveness.

---

## 6. Planning Checklist

*Based on initial requirements.*

* [x] Research TuneEng documentation
* [x] Create planning directory
* [x] Create detailed landing page plan (landing_page_plan.md)
  * [x] Define high-level structure
  * [x] Detail tech stack (Lenis, GSAP, Framer Motion, Three.js)
  * [x] Describe cinematic animation flow
