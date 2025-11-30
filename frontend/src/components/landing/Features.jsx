import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "../ui/card";
import { use3DTilt } from "../../hooks/use-3d-tilt";
import { Layers, Zap, BarChart3, Shield, Globe, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    const { ref, shineRef } = use3DTilt({ intensity: 15 });

    return (
        <div ref={ref} className="preserve-3d h-full">
            <Card className="h-full relative overflow-hidden border-slate-100 hover:border-blue-100 transition-colors bg-white group">
                <div ref={shineRef} className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-white/0 to-transparent opacity-0 z-20" />
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 ease-out transform-style-3d translate-z-[20px]">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 translate-z-[15px]">{title}</h3>
                    <p className="text-slate-500 leading-relaxed translate-z-[10px]">{description}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card-wrapper", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: Layers, title: "Layered Analytics", description: "Deep dive into your data with multi-dimensional views and real-time layering." },
        { icon: Zap, title: "Instant Sync", description: "Changes reflect instantly across all devices with our lightning-fast websocket engine." },
        { icon: BarChart3, title: "Predictive Trends", description: "AI-powered forecasting helps you stay ahead of the curve with 99% accuracy." },
        { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and SOC2 compliance keep your data safe and sound." },
        { icon: Globe, title: "Global Edge", description: "Deployed on 300+ edge nodes for lowest latency access from anywhere." },
        { icon: Smartphone, title: "Mobile First", description: "Full functionality on the go with our native-feel responsive mobile design." },
    ];

    return (
        <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Powerful features, <br/>
                        <span className="text-primary">zero complexity.</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Everything you need to manage your engineering team's performance, packed into a beautiful interface.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card-wrapper">
                            <FeatureCard {...feature} delay={idx * 0.1} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
