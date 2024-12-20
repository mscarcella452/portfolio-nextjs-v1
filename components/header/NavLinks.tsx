import Link from "next/link";
import { navLinks } from "@/config/siteConfig";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type LinkColorProp = `text-${string}`;

type NavLinksProps = {
  containerClassName?: string;
  linkClassName?: string;
  hoverColor?: LinkColorProp;
  activeColor?: LinkColorProp;
  handleLinkClick?: () => void;
};

function NavLinks({
  containerClassName,
  linkClassName,
  hoverColor = "text-[teal]",
  activeColor = "text-[white]",
  handleLinkClick,
}: NavLinksProps) {
  const currentRoute = usePathname();

  return (
    <ul className={containerClassName}>
      {navLinks.map(({ label, href }, index) => {
        const activePage = currentRoute === href;
        return (
          <li key={index}>
            <Link
              href={href}
              className={clsx(
                linkClassName,
                activePage && activeColor,
                `hover:${hoverColor}`
              )}
              aria-label={`Go to ${label} page`}
              aria-current={activePage ? "page" : undefined}
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
