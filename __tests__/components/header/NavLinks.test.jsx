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
  beforeEach(() => {
    usePathname.mockReturnValue("/about"); // Set mock implementation before rendering
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("renders the correct navigation links with active link as a span and non-active links as <Link> with proper hrefs", () => {
    render(<NavLinks />);
    navLinks.forEach(({ label, href }) => {
      const activeLink = href === usePathname();
      if (activeLink) {
        const spanElement = screen.getByText(label);
        expect(spanElement).toBeInTheDocument();
      } else {
        const link = screen.getByRole("link", { name: new RegExp(label, "i") });
        expect(link).toHaveAttribute("href", href);
      }
    });
  });

  it("should apply correct custom class to the navigation list wrapper when passed as a prop", () => {
    const listClassName = "customer-list-class";

    const { rerender } = render(<NavLinks listClassName={listClassName} />);
    let ul = screen.getByRole("list");
    expect(ul).toHaveClass(listClassName);

    rerender(<NavLinks />);
    ul = screen.getByRole("list");
    expect(ul).not.toHaveClass(listClassName);
  });

  it("should apply aria-current attribute on the active link and ensures non-active links do not have aria-current", () => {
    render(<NavLinks />);

    navLinks.forEach(({ label, href }) => {
      const activeLink = href === usePathname();
      if (activeLink) {
        const spanElement = screen.getByText(label);
        expect(spanElement).toHaveAttribute("aria-current", "page");
      } else {
        const link = screen.getByRole("link", { name: new RegExp(label, "i") });
        expect(link).not.toHaveAttribute("aria-current");
      }
    });
  });
});
