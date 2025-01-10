import styles from "@styles/components/header.module.css";
import NavLinks from "./NavLinks";

// type NavMenuProps = {
//   handleCloseMenu: () => void;
// };

function NavMenu() {
  return (
    <div className={styles.navmenuWrapper}>
      <NavLinks
        containerClassName='flex flex-col gap-2 items-center align-center'
        // handleClick={handleCloseMenu}
      />
    </div>
  );
}

export default NavMenu;
