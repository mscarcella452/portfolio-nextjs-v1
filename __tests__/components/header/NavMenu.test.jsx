import { render, screen } from "@testing-library/react";
import NavMenu from "@/components/header/NavMenu";

vi.mock("@/components/header/NavLinks", () => ({
  default: () => <div data-testid='mock-nav-links'>Mocked NavLinks</div>,
}));

describe("NavMenu", () => {
  it("should render the NavLinks Component", () => {
    render(<NavMenu />);
    const mockNavLinks = screen.getByTestId("mock-nav-links");
    expect(mockNavLinks).toBeInTheDocument();
  });
  it("should render the correct aria-labelledby ", () => {
    render(<NavMenu />);

    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toHaveAttribute("aria-labelledby", "navigation-menu");
  });

  it("should render with the correct aria-hidden and height based on the isOpen state", () => {
    const { rerender } = render(<NavMenu isOpen={true} />);

    let navMenu = screen.getByTestId("nav-menu");

    expect(navMenu).toHaveClass("h-navmenuHeight lg:h-[0]");
    expect(navMenu).toHaveAttribute("aria-hidden", "false");

    rerender(<NavMenu isOpen={false} />);

    navMenu = screen.getByTestId("nav-menu");

    expect(navMenu).toHaveClass("h-[0]");
    expect(navMenu).toHaveAttribute("aria-hidden", "true");
  });
});
