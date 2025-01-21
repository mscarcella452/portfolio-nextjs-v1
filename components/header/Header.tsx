"use client";
import SiteHeader from "@/components/header/SiteHeader";
import Navbar from "@/components/header/Navbar";

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-primary dark:bg-secondary h-navbarHeight p-4 flex items-center justify-between'>
      <SiteHeader />
      <Navbar />
    </header>
  );
};

export default Header;
