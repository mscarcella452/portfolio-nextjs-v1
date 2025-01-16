"use client";
import Link from "next/link";
import { navLinks } from "@/config/siteConfig";
import { usePathname } from "next/navigation";

type NavLinksProps = React.HTMLAttributes<HTMLUListElement>;

function NavLinks({ ...rest }: NavLinksProps) {
  const currentRoute = usePathname();

  return (
    <ul {...rest}>
      {navLinks.map(({ label, href }, index) => {
        const activePage = currentRoute === href;

        return (
          <li key={index}>
            {activePage ? (
              <span
                className='text-primary-main font-medium'
                aria-current='page' // Indicate this is the active page
              >
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className='transition-colors duration-300 text-white hover:text-primary-dark'
                aria-label={`Go to ${label} page`}
              >
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
