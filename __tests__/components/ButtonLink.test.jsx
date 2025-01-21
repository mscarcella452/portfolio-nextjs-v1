import { render, screen } from "@testing-library/react";
import ButtonLink from "@/components/ButtonLink";
import userEvent from "@testing-library/user-event";

describe("ButtonLink", () => {
  const hrefExample = "https://example.com";
  const buttonLinkLabel = "press me";

  it("should render a link with the correct label and href", () => {
    render(<ButtonLink href={hrefExample}>{buttonLinkLabel}</ButtonLink>);

    const link = screen.getByRole("link", { name: buttonLinkLabel });
    expect(link).toHaveAttribute("href", hrefExample);
  });
  it("should apply correct variant class if it is passed as a prop", () => {
    const variantClass = /primary-btn/i;

    const { rerender } = render(
      <ButtonLink variant={variantClass} href={hrefExample}>
        {buttonLinkLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(variantClass);

    rerender(<ButtonLink href={hrefExample}>{buttonLinkLabel}</ButtonLink>);

    link = screen.getByRole("link");
    expect(link).not.toHaveClass(variantClass);
  });
  it("should apply correct size class if it is passed as a prop", () => {
    const smallBtnClass = /btn-sm/i;

    const { rerender } = render(
      <ButtonLink size={smallBtnClass} href={hrefExample}>
        {buttonLinkLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(smallBtnClass);

    rerender(<ButtonLink href={hrefExample}>{buttonLinkLabel}</ButtonLink>);

    link = screen.getByRole("link");
    expect(link).not.toHaveClass(smallBtnClass);
  });

  it("should apply the correct custom classname if it is passed as a prop", () => {
    const customClassName = "customClassName";

    const { rerender } = render(
      <ButtonLink className={customClassName} href={hrefExample}>
        {buttonLinkLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(customClassName);

    rerender(<ButtonLink href={hrefExample}>{buttonLinkLabel}</ButtonLink>);

    link = screen.getByRole("link");
    expect(link).not.toHaveClass(customClassName);
  });
  it("should have focus styles when focused", async () => {
    const user = userEvent.setup();
    render(<ButtonLink href={hrefExample}>{buttonLinkLabel}</ButtonLink>);

    const link = screen.getByRole("link");

    // Use userEvent to simulate Tab key press to focus the link
    await user.tab();

    expect(link).toHaveFocus(); // Checks if the link is focused
  });
});
