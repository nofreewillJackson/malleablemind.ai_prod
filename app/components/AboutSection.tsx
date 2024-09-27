// components/AboutSection.tsx
"use client";
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel"; // Import the carousel component
import TabButton from "./TabButton";
import AboutCatSection from "./AboutCatSection"; // Import the new cat section

const ABOUT_CAROUSEL_IMAGES = [
    "/images/about1.png",
    "/images/about2.png",
    "/images/about3.png",
    "/images/about4.png",
];

const ABOUT_CAROUSEL_ALT_TEXTS = [
    "About Image 1",
    "About Image 2",
    "About Image 3",
    "About Image 4",
];

const CAT_CAROUSEL_IMAGES = [
    "/images/cat1.png",
    "/images/cat2.png",
    "/images/cat3.png",
];

const CAT_CAROUSEL_ALT_TEXTS = [
    "Whiskers lounging",
    "Whiskers playing with yarn",
    "Whiskers cuddling",
];

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-5">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection: React.FC = () => {
    const [currentView, setCurrentView] = useState<"about" | "cat">("about"); // "about" or "cat"
    const [tab, setTab] = useState<string>("skills"); // Initialize with default tab
    const [animateButton, setAnimateButton] = useState<boolean>(false); // State for button animation

    const handleToggle = () => {
        setAnimateButton(true);
        // After animation completes (500ms), toggle the view
        setTimeout(() => {
            setCurrentView(currentView === "about" ? "cat" : "about");
            setAnimateButton(false); // Reset button animation state
        }, 500); // Duration should match the CSS transition duration
    };

    const handleTabChange = (id: string) => {
        setTab(id);
    };

    // Define images and alt texts based on current view
    const carouselImages = currentView === "about" ? ABOUT_CAROUSEL_IMAGES : CAT_CAROUSEL_IMAGES;
    const carouselAltTexts = currentView === "about" ? ABOUT_CAROUSEL_ALT_TEXTS : CAT_CAROUSEL_ALT_TEXTS;

    return (
        <section className="relative text-white min-h-screen" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                {/* Image Carousel with Square Aspect Ratio */}
                <div className={`relative w-full aspect-square overflow-hidden rounded-md shadow-lg transition-all duration-500 ${animateButton ? "animate-fade-out" : "animate-fade-in"}`}>
                    <ImageCarousel
                        images={carouselImages}
                        altTexts={carouselAltTexts}
                        autoSlide={true}
                        slideInterval={7000} // 7 seconds
                        key={currentView} // Key to force re-render on view change
                    />
                </div>

                {/* About Text and Tabs */}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full min-h-[400px]">
                    {/* Header with Toggle Button */}
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            {currentView === "about" ? "About Me" : "About My Cat"}
                        </h2>
                        {/* Toggle Button */}
                        <button
                            onClick={handleToggle}
                            className={`ml-4 text-xl text-[#E3FAFC] hover:text-white transition-transform duration-500 px-4 py-2 ${
                                animateButton ? "animate-enlarge-slide" : ""
                            }`}
                            aria-pressed={currentView === "cat"}
                            aria-label={currentView === "about" ? "Show About My Cat" : "Show About Me"}
                        >
                            {currentView === "about" ? "My Cat" : "About Me"}
                        </button>
                    </div>

                    <div className={`content mt-4 ${currentView === "about" ? "animate-fade-in" : "animate-fade-in"}`}>
                        {currentView === "about" ? (
                            <>
                                <p className="text-base lg:text-lg">
                                    I am a full stack web developer with a passion for creating
                                    interactive and responsive web applications. I have experience
                                    working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                                    Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                                    looking to expand my knowledge and skill set. I am a team player and
                                    I am excited to work with others to create amazing applications.
                                </p>
                                {/* Tab Buttons */}
                                <div className="flex flex-row justify-start mt-8 space-x-4">
                                    {TAB_DATA.map((tabData) => (
                                        <TabButton
                                            key={tabData.id}
                                            selectTab={() => handleTabChange(tabData.id)}
                                            active={tab === tabData.id}
                                        >
                                            {tabData.title}
                                        </TabButton>
                                    ))}
                                </div>
                                {/* Tab Content */}
                                <div className="mt-8">
                                    {TAB_DATA.find((t) => t.id === tab)?.content}
                                </div>
                            </>
                        ) : (
                            <AboutCatSection />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
