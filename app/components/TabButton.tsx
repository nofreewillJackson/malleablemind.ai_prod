// components/TabButton.tsx
import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const variants = {
    default: { width: 0 },
    active: { width: "100%" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab} className="relative flex-1 py-2 focus:outline-none">
            <p className={`text-center font-semibold ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-accent mt-1"
            ></motion.div>
        </button>
    );
};

export default TabButton;
