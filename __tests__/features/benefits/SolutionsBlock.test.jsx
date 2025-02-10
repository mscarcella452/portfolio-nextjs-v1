import { render, screen } from "@testing-library/react";
import SolutionBlock from "@/features/benefits/SolutionBlock";

vi.mock("@/components/IconTextBlock", () => ({
  default: vi.fn(({ content, IconComponent }) => (
    <div data-testid='mock-icon-text-block'>
      <IconComponent />
      {content.title}
      {content.description}
    </div>
  )),
}));

vi.mock("@/components/ButtonLink", () => ({
  default: () => <a data-testid='mock-button-link'>Mock ButtonLink</a>,
}));

const mockData = [
  {
    title: "Test Title 1",
    description: "Test Description 1",
    IconComponent: () => <svg />,
  },
  {
    title: "Test Title 2",
    description: "Test Description 2",
    IconComponent: () => <svg />,
  },
];

describe("SolutionsBlock", () => {
  it("should correctly render all children components", () => {
    render(<SolutionBlock data={mockData} />);

    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    expect(screen.getByTestId("mock-button-link")).toBeInTheDocument();

    const iconBlocks = screen.getAllByTestId("mock-icon-text-block");
    iconBlocks.forEach(iconBlock => expect(iconBlock).toBeInTheDocument());
    expect(iconBlocks).toHaveLength(mockData.length);
  });
  it("should pass the correct props to the IconTextBlocks", async () => {
    render(<SolutionBlock data={mockData} />);

    const IconTextBlocks = screen.getAllByTestId("mock-icon-text-block");

    IconTextBlocks.forEach((iconTextBlock, index) => {
      expect(iconTextBlock).toHaveTextContent(mockData[index].title);
      expect(iconTextBlock).toHaveTextContent(mockData[index].description);
      expect(iconTextBlock.querySelector("svg")).toBeInTheDocument();
    });
  });
});
