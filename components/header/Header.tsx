import React from "react";
import Logo from "@/components/Logo";
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

const Header = ({}: Props) => {
  return (
    <header className='container text-white border-2 w-full py-2'>
      <div className='flex justify-between items-center '>
        <Link href='/'>
          <Logo />
        </Link>
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
      </div>
    </header>
  );
};

export default Header;
