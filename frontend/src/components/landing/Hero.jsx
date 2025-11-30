import React, { useEffect, useRef } from 'react';
import { Button } from "../ui/button";
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { use3DTilt } from "../../hooks/use-3d-tilt";

export default function Hero() {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const { ref: cardRef, shineRef } = use3DTilt({ intensity: 10 });

  useEffect(() => {
    const tl = gsap.timeline();

    // Entrance Animation
    tl.fromTo(heroContentRef.current.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    tl.fromTo(cardRef.current,
      { y: 100, opacity: 0, rotateX: 20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "expo.out" },
      "-=0.8"
    );

    // Floating Background Elements
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    });

  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] floating-orb" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] floating-orb" style={{ animationDelay: '1s' }} />

      <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div ref={heroContentRef} className="max-w-2xl space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: Infinite AI Analytics v2.0
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Tune your engine <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              to perfection.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            The premium platform for engineering teams to visualize, analyze, and optimize performance with Stripe-like precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button size="lg" variant="premium" magnetic>
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" magnetic>
              <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>

        {/* 3D Visual Content */}
        <div className="relative perspective-1000 flex justify-center lg:justify-end" ref={containerRef}>
          <div 
            ref={cardRef}
            className="relative w-full max-w-[500px] aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 preserve-3d group"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Shine Effect */}
            <div ref={shineRef} className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/80 to-transparent opacity-0 z-50" />
            
            {/* Floating Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl -z-10" />
            
            {/* UI Mockup Layer 1 */}
            <div className="w-full h-full bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative transform translate-z-[20px]">
              <div className="h-12 border-b px-4 flex items-center gap-2 bg-slate-50/50">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                   <div className="w-1/3 h-24 rounded-lg bg-blue-50 animate-pulse" />
                   <div className="w-1/3 h-24 rounded-lg bg-slate-50 animate-pulse delay-100" />
                   <div className="w-1/3 h-24 rounded-lg bg-slate-50 animate-pulse delay-200" />
                </div>
                <div className="h-32 rounded-lg bg-slate-50 w-full mt-4" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 transform translate-z-[60px] animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">98</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Performance</p>
                        <p className="text-sm font-bold text-slate-900">Excellent</p>
                    </div>
                </div>
            </div>

            {/* Floating Chart */}
            <div className="absolute -left-8 bottom-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 transform translate-z-[40px] animate-float-delayed">
                 <div className="space-y-2">
                     <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="w-[70%] h-full bg-primary rounded-full" />
                     </div>
                     <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="w-[40%] h-full bg-blue-300 rounded-full" />
                     </div>
                 </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
