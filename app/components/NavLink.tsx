// NavLink.tsx
import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
    return (
        <Link href={href} className={className}>
            {title}
        </Link>
    );
};

export default NavLink;
