import { render, screen } from "@testing-library/react";
import NavLinks from "@/components/header/NavLinks";
import { navLinks } from "@/config/siteConfig";
import { usePathname } from "next/navigation";

vi.mock("@/config/siteConfig", () => ({
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("NavLinks", () => {
  const currentRoute = "/about";
  beforeEach(() => {
    usePathname.mockReturnValue(currentRoute); // Set mock implementation before rendering
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should render all navigation links with correct label and href", () => {
    render(<NavLinks />);
    navLinks.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      expect(link).toHaveAttribute("href", href);
    });
  });
  it("should apply correct custom classes to the container and links", () => {
    const containerClassName = "customer-container-class";
    const linkClassName = "custom-link-class";

    render(
      <NavLinks
        containerClassName={containerClassName}
        linkClassName={linkClassName}
      />
    );
    const link = screen.getByRole("list");
    expect(link).toHaveClass(containerClassName);

    navLinks.forEach(({ label }) => {
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      expect(link).toHaveClass(linkClassName);
    });
  });
  it("should apply correct color classes to active and non-active links", () => {
    const activeColor = "text-[white]";
    const textColor = "text-primary-main";
    const hoverColor = "text-[red]";

    render(<NavLinks activeColor={activeColor} textColor={textColor} />);

    navLinks.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      const activeLink = href === usePathname();
      if (activeLink) {
        expect(link).toHaveClass(activeColor);
        expect(link).not.toHaveClass(textColor);
        expect(link).not.toHaveClass(`hover:${hoverColor}`);
      } else {
        expect(link).toHaveClass(textColor);
        expect(link).toHaveClass(`hover:${hoverColor}`);
        expect(link).not.toHaveClass(activeColor);
      }
    });
  });

  it("should apply aria-current attribute to the active link", () => {
    render(<NavLinks />);

    navLinks.forEach(({ label, href }) => {
      const activeLink = href === usePathname();
      const link = screen.getByRole("link", { name: new RegExp(label, "i") });
      if (activeLink) {
        expect(link).toHaveAttribute("aria-current", "page");
      } else {
        expect(link).not.toHaveAttribute("aria-current");
      }
    });
  });
});
