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
    const { rerender } = render(
      <ButtonLink href={hrefExample} variant={"primary"}>
        {buttonLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(/primaryButton/i);
    expect(link).not.toHaveClass(/secondaryButton/i);

    rerender(
      <ButtonLink href={hrefExample} variant={"secondary"}>
        {buttonLabel}
      </ButtonLink>
    );
    link = screen.getByRole("link");
    expect(link).toHaveClass(/secondaryButton/i);
    expect(link).not.toHaveClass(/primaryButton/i);

    rerender(<ButtonLink href={hrefExample}>{buttonLabel}</ButtonLink>);

    link = screen.getByRole("link");
    expect(link).not.toHaveClass(/secondaryButton/i);
    expect(link).not.toHaveClass(/primaryButton/i);
  });

  it("should apply the correct custom classname if it is passed as a prop", () => {
    const customClassName = "customClassName";
    render(
      <ButtonLink href={hrefExample} className={customClassName}>
        {buttonLabel}
      </ButtonLink>
    );

    let link = screen.getByRole("link");
    expect(link).toHaveClass(customClassName);
  });
});
