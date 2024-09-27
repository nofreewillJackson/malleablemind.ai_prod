// components/OverlayWindow.tsx
import React, { useState, useEffect } from 'react';
import TabButton from './TabButton';
import { WindowContent } from './WindowConfig';

interface OverlayWindowProps {
    contents: WindowContent[];
    onClose: () => void;
}

const OverlayWindow: React.FC<OverlayWindowProps> = ({ contents, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [SvgComponent, setSvgComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        const loadSvgComponent = async () => {
            try {
                // Dynamically import the SVG component based on the svgName in contents[activeTab]
                const { default: ImportedSvg } = await import(`./svgrComponents/windows/${contents[activeTab].svgName}.svg`);
                setSvgComponent(() => ImportedSvg); // Set the dynamically imported component
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        loadSvgComponent();
    }, [activeTab, contents]);

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-transparent pointer-events-none">
            <div className={`relative bg-gray-200 ${isMaximized ? 'w-full h-full' : 'w-3/4 h-3/4 max-w-3xl'} p-0 shadow-lg windows95 pointer-events-auto`}>
                {/* Title Bar */}
                <div className="flex items-center justify-between bg-gray-800 text-white p-2 title-bar">
                    <span>{contents[activeTab].title}</span>
                    <div className="flex space-x-2">
                        <button className="w-4 h-4" onClick={() => setIsMaximized(false)} aria-label="Minimize"></button>
                        <button className="w-4 h-4" onClick={handleMaximize} aria-label="Maximize"></button>
                        <button className="w-4 h-4 bg-red-500" onClick={onClose} aria-label="Close"></button>
                    </div>
                </div>

                {/* Tab Navigation */}
                {contents.length > 1 && (
                    <div className="flex border-b border-gray-400">
                        {contents.map((content, index) => (
                            <TabButton key={index} active={activeTab === index} selectTab={() => setActiveTab(index)}>
                                {content.title}
                            </TabButton>
                        ))}
                    </div>
                )}

                {/* Content Area */}
                <div className="p-4 overflow-auto h-full">
                    {/* Dynamically loaded SVG */}
                    {SvgComponent ? <SvgComponent /> : <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default OverlayWindow;
