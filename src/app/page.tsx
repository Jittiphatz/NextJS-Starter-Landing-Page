"use client";

import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import CallToActionSection from './Components/CallToActionSection';
import Footer from './Components/Footer';
import TestimonialsSection from './Components/TestimonialsSection';
import Lenis from 'lenis'
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        window.onload = function () {
            window.scrollTo(0, 0);
        };
    }, []);


    return (
        <div data-aos="fade-up" className="bg-gray-100">
            <meta property="og:image" content="/desktop.png" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nextjs-starter-landing-page.jittiphat.site" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <HeroSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <FeaturesSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <TestimonialsSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <CallToActionSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <Footer />
        </div>
    );
}