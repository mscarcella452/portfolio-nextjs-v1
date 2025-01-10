"use client";
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
};

function NavLinks({
  containerClassName,
  linkClassName,
  textColor = "text-primary-main",
  hoverColor = "text-[red]",
  activeColor = "text-[white]",
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
              className={clsx("transition-colors duration-300", linkClassName, {
                [activeColor]: activePage,
                [textColor]: !activePage,
                [`hover:${hoverColor}`]: !activePage,
              })}
              aria-label={`Go to ${label} page`}
              aria-current={activePage ? "page" : undefined}
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
