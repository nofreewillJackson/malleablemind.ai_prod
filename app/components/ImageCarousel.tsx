"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";

interface ImageCarouselProps {
    images: string[]; // Array of image paths
    altTexts: string[]; // Array of alt texts for accessibility
    autoSlide?: boolean; // Optional prop to enable auto-sliding
    slideInterval?: number; // Interval in milliseconds
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
                                                         images,
                                                         altTexts,
                                                         autoSlide = true,
                                                         slideInterval = 1000, // Default to 5 seconds
                                                     }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (!autoSlide) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, slideInterval);

        return () => clearInterval(interval);
    }, [images.length, autoSlide, slideInterval]);

    return (
        <div className="relative w-full aspect-square overflow-hidden rounded-md shadow-lg">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={altTexts[index]}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                        priority={index === 0}
                    />
                </div>
            ))}
            {/* Arrow Buttons */}
            <button
                onClick={handlePrevClick}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
                aria-label="Previous slide"
            >
                <VscTriangleLeft size={24} />
            </button>
            <button
                onClick={handleNextClick}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
                aria-label="Next slide"
            >
                <VscTriangleRight size={24} />
            </button>
            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full focus:outline-none ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
