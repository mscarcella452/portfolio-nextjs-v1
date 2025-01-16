import { render, screen } from "@testing-library/react";
import Header from "@/components/header/Header";

describe("Header", () => {
  it("should correctly render the header and its child components", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("site-header")).toBeInTheDocument();
  });
});
