import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const buttonLabel = "press me";

  it("should render a button with the correct label", () => {
    render(<Button>{buttonLabel}</Button>);

    const button = screen.getByRole("button", { name: buttonLabel });
    expect(button).toBeInTheDocument();
  });
  it("should apply correct variant class if it is passed as a prop", () => {
    const variantClass = /primary-btn/i;

    const { rerender } = render(
      <Button variant={variantClass}>{buttonLabel}</Button>
    );

    let button = screen.getByRole("button");
    expect(button).toHaveClass(variantClass);

    rerender(<Button>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).not.toHaveClass(variantClass);
  });
  it("should apply correct size class if it is passed as a prop", () => {
    const smallBtnClass = /btn-sm/i;

    const { rerender } = render(
      <Button size={smallBtnClass}>{buttonLabel}</Button>
    );

    let button = screen.getByRole("button");
    expect(button).toHaveClass(smallBtnClass);

    rerender(<Button>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).not.toHaveClass(smallBtnClass);
  });

  it("should apply the correct custom classname if it is passed as a prop", () => {
    const customClassName = "customClassName";

    const { rerender } = render(
      <Button className={customClassName}>{buttonLabel}</Button>
    );

    let button = screen.getByRole("button");
    expect(button).toHaveClass(customClassName);

    rerender(<Button>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).not.toHaveClass(customClassName);
  });

  it("should apply the correct type attribute if a type prop is passed otherwise default to type 'button'", () => {
    const typeProp = "submit";

    const { rerender } = render(<Button type={typeProp}>{buttonLabel}</Button>);

    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", typeProp);

    rerender(<Button>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("should call onClick when the button is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when the disabled prop is passed", () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled(); // Checks if the button is disabled
  });

  it("should be disabled and unclickable when the disabled prop is passed", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const { rerender } = render(<Button disabled>Click Me</Button>);

    let button = screen.getByRole("button");
    expect(button).toBeDisabled(); // Checks if the button is disabled

    rerender(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    button = screen.getByRole("button");

    // Attempt to click the button
    await user.click(button);

    // Ensure that the onClick handler is not called when disabled
    expect(handleClick).not.toHaveBeenCalled();
  });
  it("should have focus styles when focused", async () => {
    const user = userEvent.setup();
    render(<Button>Click Me</Button>);

    const button = screen.getByRole("button");

    // Use userEvent to simulate Tab key press to focus the button
    await user.tab();

    expect(button).toHaveFocus(); // Checks if the button is focused
  });
});
