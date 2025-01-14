import { render, screen } from "@testing-library/react";
import HamburgerButton from "@/components/header/HamburgerButton";
import userEvent from "@testing-library/user-event";

describe("HamburgerButton", () => {
  it("should render a button element with the correct aria-expanded attribute based on isOpen state", () => {
    const { rerender } = render(<HamburgerButton isOpen={true} />);

    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "true");

    rerender(<HamburgerButton isOpen={false} />);

    button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
  it("should handle the display prop correctly by applying the expected display value", () => {
    const defaultDisplayClass = "block";
    const hiddenDisplayClass = "hidden";

    const { rerender } = render(
      <HamburgerButton display={hiddenDisplayClass} />
    );
    let button = screen.getByRole("button");
    expect(button).toHaveClass(hiddenDisplayClass);

    rerender(<HamburgerButton />);
    button = screen.getByRole("button");
    expect(button).toHaveClass(defaultDisplayClass);
  });

  it("renders the lines of the hamburger button with correct classes based on the Open state", () => {
    const { rerender, container } = render(<HamburgerButton isOpen={true} />);

    let lines = screen.getAllByTestId("hamburger-line");

    expect(lines[0]).toHaveClass("rotate-45");
    expect(lines[1]).toHaveClass("opacity-0");
    expect(lines[2]).toHaveClass("-rotate-45");

    rerender(<HamburgerButton isOpen={false} />);

    lines = screen.getAllByTestId("hamburger-line");

    expect(lines[0]).toHaveClass("-translate-y-1.5");
    expect(lines[1]).toHaveClass("opacity-100");
    expect(lines[2]).toHaveClass("translate-y-1.5");
  });

  it("should display the correct text for screen readers based on the Open state", () => {
    const { rerender } = render(<HamburgerButton isOpen={true} />);

    let srText = screen.getByRole("status");
    expect(srText).toHaveTextContent(/open/i);

    rerender(<HamburgerButton isOpen={false} />);

    srText = screen.getByRole("status");
    expect(srText).toHaveTextContent(/closed/i);
  });

  it("should call onClick when the button is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<HamburgerButton onClick={handleClick} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
