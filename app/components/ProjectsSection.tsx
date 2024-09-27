// components/ProjectsSection.tsx
const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-600 text-white">
            <div className="max-w-2xl px-4">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg">
                    Here are some of my recent projects.
                </p>
                {/* Add project cards or listings here */}
            </div>
        </section>
    );
};

export default ProjectsSection;
