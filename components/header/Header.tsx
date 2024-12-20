"use client";
import { useCallback, useState } from "react";
import styles from "@styles/components/header.module.css";
import clsx from "clsx";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

import SiteHeader from "@/components/header/SiteHeader";
import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import NavMenu from "./NavMenu";

import Navbar from "@/components/header/Navbar";

const fullConfig = resolveConfig(tailwindConfig);

const breakpoint = fullConfig.theme?.screens?.lg || "lg";

interface Props {}

const Header = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(prev => !prev);
  // const closeMenu = () => menuOpen && setMenuOpen(false);
  // Memoize the toggleMenu function with useCallback
  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  // Memoize the closeMenu function with useCallback
  const handleCloseMenu = useCallback(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen]); // Close menu only if it's open

  const headerHeight = {
    "h-navmenuHeight lg:h-navbarHeight": menuOpen,
    "h-navbarHeight": !menuOpen,
  };

  return (
    <header className={clsx(styles.header, headerHeight)}>
      <div className={styles.navbarWrapper}>
        <SiteHeader onClick={handleCloseMenu} />
        <Navbar isOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
      </div>

      <NavMenu handleCloseMenu={handleCloseMenu} />
    </header>
  );
};

export default Header;
