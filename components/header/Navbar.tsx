import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "@/components/header/HamburgerButton";
import NavLinks from "./NavLinks";
import Button from "@/components/Button";

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
        <Button className='btn-primary bg-[teal]'>Hire Me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
