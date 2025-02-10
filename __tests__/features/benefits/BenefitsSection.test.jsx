import { render, screen } from "@testing-library/react";
import BenefitsSection from "@/features/benefits/BenefitsSection";

vi.mock("@/features/benefits/AgitateBlock", () => ({
  default: vi.fn(() => (
    <div data-testid='mock-agitate-block'>Mock AgitateBlock</div>
  )),
}));

vi.mock("@/features/benefits/SolutionBlock", () => ({
  default: vi.fn(() => (
    <div data-testid='mock-solution-block'>Mock SolutionBlock</div>
  )),
}));

describe("BenefitsSection", () => {
  it('"should correctly render all children components"', () => {
    render(<BenefitsSection />);

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByTestId("mock-agitate-block")).toBeInTheDocument();
    expect(screen.getByTestId("mock-solution-block")).toBeInTheDocument();
  });
});
