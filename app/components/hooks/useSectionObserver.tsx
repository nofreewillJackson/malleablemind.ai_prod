import { useEffect } from 'react';

const useSectionObserver = (setActiveSection: (section: string) => void) => {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add `#` to the section ID to match the href format
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                root: null, // use viewport as root
                threshold: 0.3, // Trigger when 30% of the section is visible
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [setActiveSection]);
};

export default useSectionObserver;
