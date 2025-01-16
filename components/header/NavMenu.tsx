import clsx from "clsx";
import NavLinks from "@components/header/NavLinks";

type NavMenuProps = {
  isOpen: boolean;
};

function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <nav
      aria-hidden={!isOpen} // Mark the menu as hidden when not open
      aria-labelledby='navigation-menu' // Optional: Provide a label for context
      data-testid='nav-menu'
      className={clsx(
        "absolute top-navbarHeight left-0 right-0 w-[full] bg-secondary-main transition-all duration-300 ease-in-out flex flex-col items-center justify-center overflow-hidden",
        {
          "h-navmenuHeight lg:hidden": isOpen,
          "h-[0]": !isOpen,
        }
      )}
    >
      <NavLinks
        className='flex flex-col gap-2 items-center align-center'
        data-testid='nav-links-nav-menu'
      />
    </nav>
  );
}

export default NavMenu;
