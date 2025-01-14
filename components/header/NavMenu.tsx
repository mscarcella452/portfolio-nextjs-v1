// import styles from "@styles/components/header.module.css";
import clsx from "clsx";
import NavLinks from "./NavLinks";

type NavMenuProps = {
  isOpen: boolean;
};

function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <div
      role='navigation'
      aria-hidden={!isOpen} // Mark the menu as hidden when not open
      aria-labelledby='navigation-menu' // Optional: Provide a label for context
      className={clsx(
        "absolute top-navbarHeight left-0 right-0 w-[full] bg-secondary-main transition-all duration-300 ease-in-out flex flex-col items-center justify-center overflow-hidden",
        {
          "h-navmenuHeight lg:h-[0]": isOpen,
          "h-[0]": !isOpen,
        }
      )}
    >
      <NavLinks listClassName='flex flex-col gap-2 items-center align-center lg:hidden' />
    </div>
  );
}

export default NavMenu;
