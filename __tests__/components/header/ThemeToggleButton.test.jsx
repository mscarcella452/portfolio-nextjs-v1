import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggleButton from "@/components/header/ThemeToggleButton";
import useThemeToggle from "@/hooks/useThemeToggle";

vi.mock("@/hooks/useThemeToggle");

describe("ThemeToggleButton", () => {
  it("should render a button with a light mode icon when the theme is light", () => {
    useThemeToggle.mockReturnValueOnce({
      theme: "light",
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggleButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("light-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("dark-icon")).not.toBeInTheDocument();
  });
  it("should render a button with a dark mode icon when the theme is dark", () => {
    useThemeToggle.mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggleButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("dark-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("light-icon")).not.toBeInTheDocument();
  });
  it("should call toggleTheme when the button is clicked", async () => {
    const user = userEvent.setup();

    const toggleThemeMock = vi.fn();

    // Set the theme to light for this test
    useThemeToggle.mockReturnValueOnce({
      theme: "light",
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggleButton />);

    const button = screen.getByRole("button");

    expect(screen.getByTestId("light-icon")).toBeInTheDocument();

    await user.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
