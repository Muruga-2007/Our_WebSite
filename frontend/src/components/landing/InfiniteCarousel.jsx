import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InfiniteCarousel() {
    const trackRef = useRef(null);
    
    useEffect(() => {
        const track = trackRef.current;
        const items = track.children;
        const itemWidth = items[0].offsetWidth + 48;
        const totalWidth = itemWidth * items.length;
        
        const tl = gsap.to(track, {
            x: `-=${totalWidth / 2}`,
            duration: 25,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
            }
        });

        track.addEventListener("mouseenter", () => tl.timeScale(0));
        track.addEventListener("mouseleave", () => tl.timeScale(1));

        return () => {
            tl.kill();
        }
    }, []);

    const institutions = [
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL",
        "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL"
    ];

    return (
        <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
            <div className="container px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Preparing students for top companies</p>
            </div>
            
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <div ref={trackRef} className="flex gap-12 w-max px-12 items-center">
                    {institutions.map((name, i) => (
                        <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-default">
                            <span className="text-2xl font-bold font-sans text-slate-800">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
