import React from 'react';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import InfiniteCarousel from './components/landing/InfiniteCarousel';
import { Button } from "./components/ui/button";
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">TuneEng</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Customers</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Enterprise</a>
          </nav>

          <div className="flex items-center gap-4">
             <Button variant="ghost" size="sm" className="hidden sm:flex">Log in</Button>
             <Button size="sm" className="rounded-full px-6" magnetic>Get Started</Button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <InfiniteCarousel />
        <Features />
        
        {/* Simple CTA Section */}
        <section className="py-24 bg-white relative">
          <div className="container px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Ready to tune your workflow?
              </h2>
              <p className="text-xl text-slate-500">
                Join 10,000+ engineering teams shipping faster with TuneEng.
              </p>
              <div className="flex justify-center pt-4">
                <Button size="lg" variant="premium" className="h-16 px-10 text-lg rounded-full" magnetic>
                  Start Building Now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
             <div className="font-bold text-slate-900 mb-4">Product</div>
             <ul className="space-y-2 text-slate-500">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Changelog</li>
             </ul>
          </div>
          <div>
             <div className="font-bold text-slate-900 mb-4">Company</div>
             <ul className="space-y-2 text-slate-500">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
             </ul>
          </div>
          <div>
             <div className="font-bold text-slate-900 mb-4">Resources</div>
             <ul className="space-y-2 text-slate-500">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Community</li>
                <li>Help Center</li>
             </ul>
          </div>
          <div>
             <div className="font-bold text-slate-900 mb-4">Legal</div>
             <ul className="space-y-2 text-slate-500">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
             </ul>
          </div>
        </div>
        <div className="container px-4 mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
           © 2024 TuneEng Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
