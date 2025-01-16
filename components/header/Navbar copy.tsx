import { useCallback, useState, useEffect } from "react";
import HamburgerButton from "@/components/header/HamburgerButton";
import NavLinks from "@/components/header/NavLinks";
import NavMenu from "@/components/header/NavMenu";
import ButtonLink from "@/components/ButtonLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Current pathname from Next.js
  const [previousPath, setPreviousPath] = useState<string>(pathname || "");
  const [menuOpen, setMenuOpen] = useState(false);

  // Memoize the toggleMenu function with useCallback
  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen && previousPath !== pathname) {
      setMenuOpen(false);
    }
    setPreviousPath(pathname);
  }, [pathname, menuOpen]);

  return (
    <nav className='flex justify-between items-center' data-testid='navbar'>
      <HamburgerButton
        onClick={handleToggleMenu}
        isOpen={menuOpen}
        display='block lg:hidden'
      />
      <div className='hidden lg:flex items-center space-x-8'>
        <NavLinks listClassName='flex space-x-8' />
        <ButtonLink href='/contact' variant='primary'>
          Hire Me
        </ButtonLink>
      </div>
      <NavMenu isOpen={menuOpen} />
    </nav>
  );
};

export default Navbar;
