"use client";
import SiteHeader from "@/components/header/SiteHeader";
import Navbar from "@/components/header/Navbar";

const Header = () => {
  return (
    <header className='site-header bg-neutral-light dark:bg-neutral-dark flex items-center justify-between'>
      <SiteHeader />
      <Navbar />
    </header>
  );
};

export default Header;
