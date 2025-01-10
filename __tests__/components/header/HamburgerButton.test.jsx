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
    const { rerender } = render(<HamburgerButton isOpen={true} />);

    let topLine = screen.getByLabelText(/top/i);
    let middleLine = screen.getByLabelText(/middle/i);
    let bottomLine = screen.getByLabelText(/bottom/i);

    expect(topLine).toHaveClass("rotate-45");
    expect(middleLine).toHaveClass("opacity-0");
    expect(bottomLine).toHaveClass("-rotate-45");

    rerender(<HamburgerButton isOpen={false} />);

    expect(topLine).toHaveClass("-translate-y-1.5");
    expect(middleLine).toHaveClass("opacity-100");
    expect(bottomLine).toHaveClass("translate-y-1.5");
  });

  it("should display the correct text for screen readers based on the Open state", () => {
    const { rerender } = render(<HamburgerButton isOpen={true} />);

    let srText = screen.getByText(/close/i);
    expect(srText).toBeInTheDocument();

    rerender(<HamburgerButton isOpen={false} />);

    srText = screen.getByText(/open/i);
    expect(srText).toBeInTheDocument();
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
