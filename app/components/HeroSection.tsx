// components/HeroSection.tsx
import Image from 'next/image';
import React from 'react';

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

export default HeroSection;
