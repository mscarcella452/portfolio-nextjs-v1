import React from "react";
import Link from "next/link";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <nav className=''>
      <ul className='flex space-x-8'>
        {navLinks.map(({ label, href }, index) => (
          <li key={index}>
            <Link href={href} className='hover:text-gray-300'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
