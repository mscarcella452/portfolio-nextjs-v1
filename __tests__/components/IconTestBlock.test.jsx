import { render, screen } from "@testing-library/react";
import IconTextBlock from "@/components/IconTextBlock";

vi.mock("@/components/Icon", () => ({
  default: vi.fn(),
}));

describe("IconTextBlock", () => {
  const mockContent = {
    title: "Test Title",
    description: "Test Description",
  };
  it("should correctly render the IconTestBlock", () => {
    render(<IconTextBlock content={mockContent} />);

    expect(screen.getByText(mockContent.title)).toBeInTheDocument();
    expect(screen.getByText(mockContent.description)).toBeInTheDocument();
  });
  it("should apply correct className if it is passed as a prop", () => {
    const customClass = "custom-class";
    render(<IconTextBlock content={mockContent} className={customClass} />);

    expect(screen.getByTestId("div-wrapper")).toHaveClass(customClass);
  });
});
