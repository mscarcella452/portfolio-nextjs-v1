import { render, screen } from "@testing-library/react";
import Navbar from "@/components/header/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import usePathChange from "@/hooks/usePathChange";
import userEvent from "@testing-library/user-event";

vi.mock("@/hooks/usePathChange", () => ({
  default: vi.fn(),
}));
vi.mock("@/hooks/useMediaQuery", () => ({
  default: vi.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    // Default mock implementations
    vi.mocked(useMediaQuery).mockReturnValue(false); // Simulate a small screen by default
    vi.mocked(usePathChange).mockImplementation(() => false); // Simulate path not having changed by default
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("correctly renders child components: (HamburgerButton, NavLinks, button-link, NavMenu)", () => {
    render(<Navbar />);
    expect(screen.getByTestId("nav-links")).toBeInTheDocument();
    expect(screen.getByTestId("hamburger-btn")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /hire me/i })).toBeInTheDocument();
    expect(screen.getByTestId("nav-menu")).toBeInTheDocument();
  });

  it("should have navMenu closed initially", () => {
    render(<Navbar />);
    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toHaveClass("h-[0]"); // or the equivalent class for a closed menu
  });

  it("should toggle navMenu height when the hamburger button is clicked", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    const hamburgerButton = screen.getByTestId("hamburger-btn");
    const navMenu = screen.getByTestId("nav-menu");

    // Initially, navMenu should have height 0
    expect(navMenu).toHaveClass("h-[0]");

    // Click to open the menu, should change to the height class (like h-[some-value] or h-auto)
    await user.click(hamburgerButton);
    expect(navMenu).not.toHaveClass("h-[0]");

    // Click again to close the menu
    await user.click(hamburgerButton);
    expect(navMenu).toHaveClass("h-[0]");
  });

  it("should close the open navMenu when the usePathChange returns true", async () => {
    const user = userEvent.setup();

    const { rerender } = render(<Navbar />);

    const hamburgerButton = screen.getByTestId("hamburger-btn");
    const navMenu = screen.getByTestId("nav-menu");

    // Open the menu
    await user.click(hamburgerButton);
    expect(navMenu).not.toHaveClass("h-[0]");

    // Simulate path change
    vi.mocked(usePathChange).mockImplementation(() => true);
    rerender(<Navbar />);

    // Ensure menu is closed
    expect(navMenu).toHaveClass("h-[0]");
  });

  it("should close the open navMenu when the useMediaQuery returns true", async () => {
    const user = userEvent.setup();

    const { rerender } = render(<Navbar />);

    const hamburgerButton = screen.getByTestId("hamburger-btn");
    const navMenu = screen.getByTestId("nav-menu");

    // Open the menu
    await user.click(hamburgerButton);
    expect(navMenu).not.toHaveClass("h-[0]");

    // Simulate large screen (menu should close)
    vi.mocked(useMediaQuery).mockImplementation(() => true);
    rerender(<Navbar />);

    // Ensure menu is closed
    expect(navMenu).toHaveClass("h-[0]");
  });
});
