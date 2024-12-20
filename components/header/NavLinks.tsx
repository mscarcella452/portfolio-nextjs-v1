import Link from "next/link";
import { navLinks } from "@/config/siteConfig";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type LinkColorProp = `text-${string}`;

type NavLinksProps = {
  containerClassName?: string;
  linkClassName?: string;
  activeColor?: LinkColorProp;
  textColor?: LinkColorProp;
  hoverColor?: LinkColorProp;
  handleLinkClick?: () => void;
};

function NavLinks({
  containerClassName,
  linkClassName,
  textColor = "text-primary-main",
  hoverColor = "text-[red]",
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
                "transition-colors duration-300",
                linkClassName,
                activePage ? activeColor : `${textColor} hover:${hoverColor}`
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
