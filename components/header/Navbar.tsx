"use client";

import React, { useCallback, useState, useEffect } from "react";
import HamburgerButton from "@/components/header/HamburgerButton";
import NavLinks from "@/components/header/NavLinks";
import NavMenu from "@/components/header/NavMenu";
import ButtonLink from "@/components/ButtonLink";
import useMediaQuery from "@/hooks/useMediaQuery";
import usePathChange from "@/hooks/usePathChange";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const pathChanged = usePathChange();

  // Memoize the toggleMenu function with useCallback
  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen && pathChanged) {
      setMenuOpen(false); // Close menu when path changes
    }
  }, [pathChanged, menuOpen]);

  useEffect(() => {
    if (isLgScreen && menuOpen) {
      setMenuOpen(false); // Close menu when screen size is Lg or larger
    }
  }, [isLgScreen, menuOpen]);

  return (
    <nav className='flex justify-between items-center' data-testid='navbar'>
      <HamburgerButton
        onClick={handleToggleMenu}
        isOpen={menuOpen}
        display='block lg:hidden'
      />
      <div className='hidden lg:flex items-center space-x-8'>
        <NavLinks className='flex space-x-8' data-testid='nav-links' />
        <ButtonLink href='/contact' variant='primary'>
          Hire Me
        </ButtonLink>
      </div>
      <NavMenu isOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
