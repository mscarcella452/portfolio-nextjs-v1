import { render, screen } from "@testing-library/react";
import ButtonLink from "@/components/ButtonLink";

describe("ButtonLink", () => {
  const hrefExample = "https://example.com";
  const buttonLabel = "press me";

  it("should render a link with the correct label and href", () => {
    render(<ButtonLink href={hrefExample}>{buttonLabel}</ButtonLink>);

    const link = screen.getByRole("link", { name: buttonLabel });
    expect(link).toHaveAttribute("href", hrefExample);
  });
  it("should apply correct variant classes based if a variant prop is passed", () => {
    const primaryBtnClass = /primary-btn/i;
    const secondaryBtnClass = /secondary-btn/i;

    const { rerender } = render(
      <ButtonLink href={hrefExample} variant={"primary"}>
        {buttonLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(primaryBtnClass);
    expect(link).not.toHaveClass(secondaryBtnClass);

    rerender(
      <ButtonLink href={hrefExample} variant={"secondary"}>
        {buttonLabel}
      </ButtonLink>
    );
    link = screen.getByRole("link");
    expect(link).toHaveClass(secondaryBtnClass);
    expect(link).not.toHaveClass(primaryBtnClass);

    rerender(<ButtonLink href={hrefExample}>{buttonLabel}</ButtonLink>);

    link = screen.getByRole("link");
    expect(link).not.toHaveClass(primaryBtnClass);
    expect(link).not.toHaveClass(secondaryBtnClass);
  });

  it("should apply the correct custom classname if it is passed as a prop", () => {
    const customClassName = "customClassName";
    render(
      <ButtonLink
        href={hrefExample}
        className={customClassName}
        data-testid='button-link'
      >
        {buttonLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(customClassName);
  });
});
