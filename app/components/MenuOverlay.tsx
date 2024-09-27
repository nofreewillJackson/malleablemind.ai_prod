import React from "react";
import NavLink from "./NavLink";

// Define the structure of each link
interface Link {
    path: string;
    title: string;
}

// Define the props for MenuOverlay
interface MenuOverlayProps {
    links: Link[]; // links is an array of Link objects
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
