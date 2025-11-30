import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "../ui/card";
import { use3DTilt } from "../../hooks/use-3d-tilt";
import { FileText, Headphones, Mic, BookOpen, PenTool, BarChart3, Trophy, Users, Video, Brain, Target, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description, color, delay }) => {
    const { ref, shineRef } = use3DTilt({ intensity: 15 });

    const colorClasses = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
        pink: "bg-pink-50 text-pink-600",
        cyan: "bg-cyan-50 text-cyan-600",
    };

    return (
        <div ref={ref} className="preserve-3d h-full">
            <Card className="h-full relative overflow-hidden border-slate-100 hover:border-blue-100 transition-colors bg-white group">
                <div ref={shineRef} className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-white/0 to-transparent opacity-0 z-20" />
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[color] || colorClasses.blue} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out transform-style-3d translate-z-[20px]`}>
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
    const lsrwRef = useRef(null);

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

            gsap.from(".lsrw-card", {
                scrollTrigger: {
                    trigger: lsrwRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: FileText, title: "1000+ Curated Test Sets", description: "Structured LSRW packages with 10 tasks each for Listening, Speaking, Reading, and Writing aligned with corporate formats.", color: "blue" },
        { icon: Headphones, title: "500 Guided Test Sets", description: "Step-by-step voice and text guidance with tips, model answers, and evaluation rubrics. Perfect for beginners.", color: "green" },
        { icon: Brain, title: "AI-Powered Evaluation", description: "Multi-modal AI analyzes tone, pitch, intonation, accent, clarity, and even body language for video responses.", color: "purple" },
        { icon: BarChart3, title: "Fluency Tracker", description: "Track your progress with detailed reports on pronunciation scores, fluency trends, and skill improvements.", color: "orange" },
        { icon: Trophy, title: "Leaderboards & Streaks", description: "Stay motivated with daily challenges, practice streaks, and compete with peers on leaderboards.", color: "pink" },
        { icon: Users, title: "Peer Review & Expert Sessions", description: "Learn from others with peer reviews and join webinars with HR managers and industry recruiters.", color: "cyan" },
    ];

    const lsrwSkills = [
        { icon: Headphones, title: "Listening", description: "Audio clips, fill-in-the-blanks, dictation exercises", color: "blue" },
        { icon: Mic, title: "Speaking", description: "Timed drills, voice recording with AI feedback", color: "green" },
        { icon: BookOpen, title: "Reading", description: "MCQs, inference tasks, vocabulary boosters", color: "purple" },
        { icon: PenTool, title: "Writing", description: "Email writing, essays, grammar correction", color: "orange" },
    ];

    return (
        <>
            <section id="skills" ref={lsrwRef} className="py-20 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Master All Four <span className="text-primary">LSRW Skills</span>
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Comprehensive practice modules with adaptive learning that increases difficulty as your skills improve.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
                        {lsrwSkills.map((skill, idx) => {
                            const colorClasses = {
                                blue: "border-blue-200 bg-blue-50/50 hover:bg-blue-50",
                                green: "border-green-200 bg-green-50/50 hover:bg-green-50",
                                purple: "border-purple-200 bg-purple-50/50 hover:bg-purple-50",
                                orange: "border-orange-200 bg-orange-50/50 hover:bg-orange-50",
                            };
                            const iconColors = {
                                blue: "text-blue-600 bg-blue-100",
                                green: "text-green-600 bg-green-100",
                                purple: "text-purple-600 bg-purple-100",
                                orange: "text-orange-600 bg-orange-100",
                            };
                            return (
                                <div key={idx} className={`lsrw-card p-6 rounded-2xl border-2 ${colorClasses[skill.color]} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                                    <div className={`w-12 h-12 rounded-xl ${iconColors[skill.color]} flex items-center justify-center mb-4`}>
                                        <skill.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">{skill.title}</h3>
                                    <p className="text-sm text-slate-500">{skill.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="features" ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Powerful features for <br/>
                            <span className="text-primary">interview success.</span>
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Everything you need to ace corporate LSRW rounds and land your dream job.
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

            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-bold">Company-Specific Practice</h3>
                                <p className="text-white/80 text-lg">
                                    Prepare for interviews at top companies with role-specific questions for Tech, HR, Sales, and Marketing positions.
                                </p>
                                <div className="flex flex-wrap gap-3 pt-4">
                                    {["Tech Roles", "HR Interview", "Sales", "Marketing"].map((role, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Target className="w-8 h-8 mx-auto mb-2" />
                                    <p className="font-bold text-2xl">100+</p>
                                    <p className="text-sm text-white/70">Companies</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Video className="w-8 h-8 mx-auto mb-2" />
                                    <p className="font-bold text-2xl">Expert</p>
                                    <p className="text-sm text-white/70">Webinars</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Zap className="w-8 h-8 mx-auto mb-2" />
                                    <p className="font-bold text-2xl">Quick</p>
                                    <p className="text-sm text-white/70">Revision</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Users className="w-8 h-8 mx-auto mb-2" />
                                    <p className="font-bold text-2xl">1:1</p>
                                    <p className="text-sm text-white/70">Counselling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
