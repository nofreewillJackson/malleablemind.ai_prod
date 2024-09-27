// page.tsx
import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";  // New LandingPage component
import React from "react";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16">
                {/* pt-16 padding to offset the fixed navbar */}
                <LandingPage />
                <AboutSection />
                <ProjectsSection />
            </main>
        </div>
    );
};

export default Home;
