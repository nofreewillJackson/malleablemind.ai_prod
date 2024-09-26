"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
];

const HamburgerIcon = () => (
    <svg
        className="h-6 w-6 text-blue-100 hover:text-blue-400 transition ease-in-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        className="h-6 w-6 text-blue-100 hover:text-blue-400 transition ease-in-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#00203F] via-[#003F66] to-[#005C99] shadow-lg">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link
                    href={"/"}
                    className="text-1xl md:text-2xl text-black-400 font-bold tracking-wider font-[VT323] text-faded"

                >
                    Wu, Jackson
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-blue-400 text-blue-100 hover:text-white hover:border-white"
                        >
                            <HamburgerIcon />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-blue-400 text-blue-100 hover:text-white hover:border-white"
                        >
                            <CloseIcon />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                    className="text-xl text-[#E3FAFC] hover:text-white transition ease-in-out duration-300"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
