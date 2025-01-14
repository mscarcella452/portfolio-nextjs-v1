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
  it("should apply correct variant classes based if a variant prop is passed", () => {
    const primaryBtnClass = /primary-btn/i;
    const secondaryBtnClass = /secondary-btn/i;

    const { rerender } = render(
      <Button variant={"primary"}>{buttonLabel}</Button>
    );

    let button = screen.getByRole("button");
    expect(button).toHaveClass(primaryBtnClass);
    expect(button).not.toHaveClass(secondaryBtnClass);

    rerender(<Button variant={"secondary"}>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).toHaveClass(secondaryBtnClass);
    expect(button).not.toHaveClass(primaryBtnClass);

    rerender(<Button>{buttonLabel}</Button>);

    button = screen.getByRole("button");
    expect(button).not.toHaveClass(primaryBtnClass);
    expect(button).not.toHaveClass(secondaryBtnClass);
  });

  it("should apply the correct custom classname if it is passed as a prop", () => {
    const customClassName = "customClassName";

    render(<Button className={customClassName}>{buttonLabel}</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(customClassName);
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
});
