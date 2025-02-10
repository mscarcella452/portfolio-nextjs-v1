import { render, screen } from "@testing-library/react";
import Icon from "@/components/Icon";

describe("Icon", () => {
  const mockIcon = () => <span data-testid='mock-icon' />;
  it("should render a icon", () => {
    render(<Icon IconComponent={mockIcon} />);

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should apply correct variant class if it is passed as a prop", () => {
    const variantClass = /secondary-icon/i;
    render(<Icon variant={variantClass} IconComponent={mockIcon} />);

    const iconWrapper = screen.getByTestId("icon-wrapper");

    expect(iconWrapper).toHaveClass(variantClass);
  });
  it("should apply correct size class if it is passed as a prop", () => {
    const sizeClass = /icon-md/i;
    render(<Icon size={sizeClass} IconComponent={mockIcon} />);

    const iconWrapper = screen.getByTestId("icon-wrapper");

    expect(iconWrapper).toHaveClass(sizeClass);
  });
  it("should apply correct className if it is passed as a prop", () => {
    render(<Icon className={"mockClassName"} IconComponent={mockIcon} />);

    const iconWrapper = screen.getByTestId("icon-wrapper");

    expect(iconWrapper).toHaveClass("mockClassName");
  });
});
