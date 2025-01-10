"use client";
import { useCallback, useState, useEffect } from "react";
import styles from "@styles/components/header.module.css";
import clsx from "clsx";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname(); // Get the current pathname

  // Memoize the toggleMenu function with useCallback
  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  // Close the menu when the pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const headerHeight = {
    "h-navmenuHeight lg:h-navbarHeight": menuOpen,
    "h-navbarHeight": !menuOpen,
  };

  return (
    <header className={clsx(styles.header, headerHeight)}>
      <div className={styles.navbarWrapper}>
        <SiteHeader />
        <Navbar isOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
