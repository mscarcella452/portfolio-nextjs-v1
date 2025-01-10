import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "@/components/header/HamburgerButton";
import NavLinks from "./NavLinks";
import ButtonLink from "@/components/ButtonLink";

type NavbarProps = {
  isOpen: boolean;
  showNavlinks?: boolean;
  handleToggleMenu: () => void;
};

const Navbar = ({ isOpen, handleToggleMenu }: NavbarProps) => {
  return (
    <nav className='flex justify-between items-center '>
      <HamburgerButton
        onClick={handleToggleMenu}
        isOpen={isOpen}
        display='block lg:hidden'
      />
      <div className='hidden lg:flex items-center space-x-8'>
        <NavLinks containerClassName='flex space-x-8' />
        <ButtonLink href='/contact' variant='primary'>
          Hire Me
        </ButtonLink>
      </div>
    </nav>
  );
};

export default Navbar;
