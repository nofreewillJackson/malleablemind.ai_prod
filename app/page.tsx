// page.tsx
import type { NextPage } from 'next';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DefinitionSection from './components/DefinitionSection';
import ButtonsGrid from './components/ButtonsGrid';
import React from 'react';

const Home: NextPage = () => {
  return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-blue-400">
        <Navbar />
        <main className="flex-grow container mx-auto px-4">
          <HeroSection className="mt-12" /> {/* Pushing the HeroSection down */}
          <DefinitionSection />
          <ButtonsGrid />
        </main>
        {/* Optional: Add a Footer component */}
      </div>
  );
};

export default Home;