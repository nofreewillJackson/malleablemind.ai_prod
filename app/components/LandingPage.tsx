// components/LandingPage.tsx
"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ButtonsGrid from './ButtonsGrid'; // Import the new component

// HeroSection Part
const HeroSection: React.FC = () => {
    return (
        <section className="flex justify-center my-12">
            <Image
                src="/Logo.svg"
                alt="Malleable Mind Logo"
                width={600}
                height={144}
                priority
            />
        </section>
    );
};

// DefinitionSection Part
const DefinitionSection: React.FC = () => {
    return (
        <div className="mb-12 text-left w-full max-w-xs sm:max-w-md mx-auto font-mono text-silverLake">
            <span className="font-bold">malleable</span> (mal-ee-uh-buhl) <br />
            <span>adj. A canvas for infinite possibilities, forever </span>
            <span
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent align-bottom animate-typing"
                style={{ width: '9ch' }}
            >
                unfolding...
            </span>
        </div>
    );
};

// Main LandingPage Component
const LandingPage: React.FC = () => {
    const [isScrolledPast, setIsScrolledPast] = useState(false);

    // Detect when scrolled past LandingPage
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about'); // Detect the about section
            const aboutTop = aboutSection ? aboutSection.offsetTop : 0;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= aboutTop) {
                setIsScrolledPast(true);
            } else {
                setIsScrolledPast(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="landingPage" className="relative min-h-screen bg-primary">
            <HeroSection />
            <DefinitionSection />
            {/* ButtonsGrid will be fixed at the bottom while on LandingPage, and absolute when scrolling past */}
            <div
                className={`${
                    isScrolledPast
                        ? 'absolute left-0 right-0 bottom-0'
                        : 'fixed left-0 right-0 bottom-0'
                }`}
            >
                <ButtonsGrid />
            </div>
        </section>
    );
};

export default LandingPage;
