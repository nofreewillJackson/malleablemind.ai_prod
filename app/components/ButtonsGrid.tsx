// components/ButtonsGrid.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import OverlayWindow from "./OverlayWindow";
import { windowConfigurations, WindowContent } from "./WindowConfig";

const ButtonsGrid: React.FC = () => {
    const [selectedContents, setSelectedContents] = useState<WindowContent[] | null>(null);

    const handleButtonClick = (buttonName: string) => {
        const contents = windowConfigurations[buttonName];
        if (contents && contents.length > 0) {
            setSelectedContents(contents);
        }
    };

    const handleCloseOverlay = () => {
        setSelectedContents(null);
    };

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center bg-primary transition-opacity duration-500">
                {Object.keys(windowConfigurations).map((buttonName, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(buttonName)}
                        className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                    >
                        <Image
                            src={`/${buttonName}.svg`}
                            alt={` `}
                            fill
                            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                            src={`/${buttonName}_hover.svg`}
                            alt={` `}
                            fill
                            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </button>
                ))}
            </div>

            {/* Overlay Window */}
            {selectedContents && (
                <OverlayWindow contents={selectedContents} onClose={handleCloseOverlay} />
            )}
        </>
    );
};

export default ButtonsGrid;
