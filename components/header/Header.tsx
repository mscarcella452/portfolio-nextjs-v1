"use client";
import SiteHeader from "@/components/header/SiteHeader";
import Navbar from "@/components/header/Navbar";

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-secondary-main h-navbarHeight p-4 flex items-center justify-between'>
      <SiteHeader />
      <Navbar />
    </header>
  );
};

export default Header;
