import { render, screen } from "@testing-library/react";
import AgitateBlock from "@/features/benefits/AgitateBlock";

import userEvent from "@testing-library/user-event";

vi.mock("@/components/IconTextBlock", () => ({
  default: vi.fn(({ content, IconComponent }) => (
    <div data-testid='mock-icon-text-block'>
      <IconComponent />
      {content.title}
      {content.description}
    </div>
  )),
}));

const mockData = [
  {
    title: "Test Title 1",
    description: "Test Description 1",
    IconComponent: () => <svg />,
    image: { src: "https://example.com/image1.jpg", alt: "Alt 1" },
  },
  {
    title: "Test Title 2",
    description: "Test Description 2",
    IconComponent: () => <svg />,
    image: { src: "https://example.com/image2.jpg", alt: "Alt 2" },
  },
];

describe("AgitateBlock", () => {
  it("should render the heading, tab buttons, and displayed image", () => {
    render(<AgitateBlock data={mockData} />);

    // Verify heading is rendered
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();

    // Verify tab buttons are rendered
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(mockData.length);

    buttons.forEach(button => expect(button).toBeInTheDocument());

    // Verify displayed image is rendered
    const displayImage = screen.getByTestId("displayImage");
    expect(displayImage).toBeInTheDocument();
  });
  it("should highlight the correct initial tab button and display the correct image attributes", () => {
    render(<AgitateBlock data={mockData} />);

    const buttons = screen.getAllByRole("button");
    const displayImage = screen.getByTestId("displayImage");

    // Verify initial active tab button
    expect(buttons[0]).toHaveAttribute("aria-selected", "true");
    expect(buttons[1]).toHaveAttribute("aria-selected", "false");

    expect(displayImage).toHaveAttribute("alt", mockData[0].image.alt);
  });
  it("should update the active tab button and display the correct image when a tabButton is clicked", async () => {
    const user = userEvent.setup();

    render(<AgitateBlock data={mockData} />);

    const buttons = screen.getAllByRole("button");
    const displayImage = screen.getByTestId("displayImage");

    await user.click(buttons[1]);

    expect(buttons[1]).toHaveAttribute("aria-selected", "true");
    expect(buttons[0]).toHaveAttribute("aria-selected", "false");

    expect(displayImage).toHaveAttribute("alt", mockData[1].image.alt);
  });
  it("should pass the correct props to the IconTextBlocks", async () => {
    render(<AgitateBlock data={mockData} />);

    const IconTextBlocks = screen.getAllByTestId("mock-icon-text-block");

    IconTextBlocks.forEach((iconTextBlock, index) => {
      expect(iconTextBlock).toHaveTextContent(mockData[index].title);
      expect(iconTextBlock).toHaveTextContent(mockData[index].description);
      expect(iconTextBlock.querySelector("svg")).toBeInTheDocument();
    });
  });
});
