import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InfiniteCarousel() {
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
        const track = trackRef.current;
        if (!track || !track.children.length) return;
        
        const items = Array.from(track.children);
        const itemWidth = items[0].offsetWidth + 48;
        const totalWidth = itemWidth * (items.length / 2); // Half because we duplicate
        
        // Create smooth infinite scroll animation
        const tl = gsap.to(track, {
            x: `-=${totalWidth}`,
            duration: 30,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => {
                    const num = parseFloat(x);
                    return (num % totalWidth) + "px";
                })
            }
        });

        // Animate items on mount with stagger
        gsap.fromTo(items, 
            {
                opacity: 0,
                scale: 0.8,
                y: 20
            },
            {
                opacity: 0.4,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        // Hover effects for individual items
        items.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                gsap.to(item, {
                    scale: 1.15,
                    opacity: 1,
                    grayscale: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(item, {
                    scale: 1,
                    opacity: 0.4,
                    grayscale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Pause on container hover with smooth transition
        const container = containerRef.current;
        if (container) {
            container.addEventListener("mouseenter", () => {
                gsap.to(tl, {
                    timeScale: 0.3,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });

            container.addEventListener("mouseleave", () => {
                gsap.to(tl, {
                    timeScale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        }

        return () => {
            tl.kill();
        };
    }, []);

    const institutions = [
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL",
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL"
    ];

    return (
        <section className="py-12 border-y border-blue-100 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl mb-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider animate-fade-in">
                    Preparing students for top companies
                </p>
            </div>
            
            <div ref={containerRef} className="relative w-full overflow-hidden py-4">
                {/* Enhanced gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div ref={trackRef} className="flex gap-12 w-max px-12 items-center">
                    {institutions.map((name, i) => (
                        <div 
                            key={i} 
                            className="carousel-item flex items-center justify-center grayscale transition-all duration-300 cursor-default px-6 py-3 rounded-xl hover:bg-white/50 hover:shadow-md"
                        >
                            <span className="text-2xl font-bold font-sans text-slate-800 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
