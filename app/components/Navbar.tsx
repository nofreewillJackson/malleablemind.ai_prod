"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import useSectionObserver from "./hooks/useSectionObserver";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(""); // Track active section

    useSectionObserver(setActiveSection);

    // Define classes for active and inactive buttons
    const inactiveClassName =
        "text-xl text-[#E3FAFC] hover:text-white transition duration-300 px-4 py-2 text-shadow-md hover:text-shadow-lg";

    const activeClassName =
        "text-xl text-white transition duration-300 px-4 py-2 text-shadow-3d transform translate-y-1";

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#00203F] via-[#003F66] to-[#005C99] shadow-lg">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link
                    href={"/"}
                    className="text-1xl md:text-2xl text-black-400 font-bold tracking-wider font-[VT323] text-faded"
                >
                    Wu, Jackson
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                    className={`relative ${
                                        activeSection === link.path ? activeClassName : inactiveClassName
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
