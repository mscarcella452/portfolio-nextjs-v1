import { renderHook, act, waitFor } from "@testing-library/react";
import useThemeToggle from "@/hooks/useThemeToggle";
// test

global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};

global.matchMedia = vi.fn().mockImplementation(query => ({
  matches: query === "(prefers-color-scheme: dark)", // mocks the default system preference to be dark mode. so if nothing is set in storage then the mode will be dark mode
  media: query,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));

describe("useThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.className = ""; // Reset classes
  });

  afterAll(() => vi.clearAllMocks());

  it("should initialize with the saved theme in localStorage", () => {
    localStorage.getItem.mockReturnValue("dark");
    const { result } = renderHook(() => useThemeToggle());
    // Wait for the theme to be applied asynchronously

    expect(result.current.theme).toBe("dark");

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("should initialize with the system theme if no theme is saved", () => {
    localStorage.getItem.mockReturnValue(null);
    global.matchMedia.mockReturnValueOnce({ matches: true });

    const { result } = renderHook(() => useThemeToggle());
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("should toggle theme between light and dark", () => {
    const { result } = renderHook(() => useThemeToggle());
    expect(result.current.theme).toBe("dark");

    act(() => result.current.toggleTheme()); // Switch to light
    expect(result.current.theme).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");

    act(() => result.current.toggleTheme()); // Switch back to dark
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
  });
});
