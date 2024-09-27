// components/AboutCatSection.tsx
"use client";
import React from "react";

const AboutCatSection: React.FC = () => {
    return (
        <div className="text-white">
            {/* Cat About Text */}
            <div className="mt-4 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">Sadie</h2>
                <p className="text-base lg:text-lg">
                    Meet Sadie, my adorable cat who loves to cuddle and sit on my lap while we both go through the motions of life. She definitely helps me with my long programming marathons.
                </p>
                {/* Add more content if desired */}
            </div>
        </div>
    );
};

export default AboutCatSection;
