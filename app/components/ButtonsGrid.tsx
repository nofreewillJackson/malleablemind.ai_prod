// components/ButtonsGrid.tsx
import Image from 'next/image';
import React from 'react';

interface Button {
    href: string;
    image: string;
}

const ButtonsGrid: React.FC = () => {
    const buttons: Button[] = [
        { href: 'https://malleablemind.ai/j-garden', image: 'button1', hoverImage: 'button1_hover' },
        { href: 'https://draw.malleablemind.ai/', image: 'button2' },
        { href: 'https://malleablemind.ai/bot', image: 'button2' },
        { href: 'https://malleablemind.ai/404', image: 'button2' },
    ];

    return (
        <section className="my-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
                {buttons.map((button, index) => (
                    <a
                        key={index}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                    >
                        <Image
                            src={`/${button.image}.svg`}
                            alt="Button"
                            fill
                            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                            src={`/${button.image}_hover.svg`}
                            alt="Button Hover"
                            fill
                            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ButtonsGrid;
