import { renderHook, act } from "@testing-library/react";
import useMediaQuery from "@/hooks/useMediaQuery";

describe("useMediaQuery", () => {
  beforeAll(() => {
    // Mock the matchMedia globally for all tests
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockImplementation(query => ({
        matches: window.innerWidth <= parseInt(query.match(/\d+/)[0]),

        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))
    );
  });

  afterAll(() => {
    vi.restoreAllMocks(); // Restore all global mocks after tests
  });

  it("should return true when the media query matches", () => {
    vi.stubGlobal("innerWidth", 550); // Set window.innerWidth to 550
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(true);
  });

  it("should return false when the media query does not match", () => {
    vi.stubGlobal("innerWidth", 1024); // Set window.innerWidth to 1024
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(false);
  });
  it("should update the state when the media query changes", () => {
    // Mock matchMedia with dynamic `matches` and a change event handler
    let matches = false; // Initial media query match state (not matched)

    // Create a mock object to simulate the behavior of matchMedia
    const mediaQueryMock = {
      matches, // This holds the current match state (whether the media query matches or not)
      media: "", // Media query string, which is not used in our test
      addEventListener: vi.fn((event, callback) => {
        // Function to simulate adding event listeners
        if (event === "change") {
          // We only care about "change" events
          mediaQueryMock.onChange = callback; // Store the callback to be triggered on change
        }
      }),
      removeEventListener: vi.fn(), // Function to simulate removing event listeners (not used in this test)
      dispatchEvent: event => {
        // Custom function to simulate dispatching an event
        if (mediaQueryMock.onChange) {
          // If the change event listener exists
          mediaQueryMock.onChange(event); // Trigger the change event listener
        }
      },
    };

    // set innerWidth initial state to 1024 so its outside our 768 breakpoint match
    vi.stubGlobal("innerWidth", 1024);

    // Replace the global `window.matchMedia` function with our mock
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => mediaQueryMock), // Make matchMedia return our mock
    });

    // Render the hook to test its behavior
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    // Initial check: The state should be false because `initial innerWidth` of 1024px > 768px
    expect(result.current).toBe(false);

    // Simulate the media query **matching** (e.g., window resized to 550px, matching the condition)
    act(() => {
      matches = true; // Set the match state to true
      mediaQueryMock.matches = true; // Update the mock to reflect the match
      mediaQueryMock.dispatchEvent({ matches: true }); // Simulate dispatching the change event
    });

    // After the event, the state should now be true (media query matches)
    expect(result.current).toBe(true);

    // Simulate the media query **unmatching** (e.g., window resized back to 1024px, no longer matching the condition)
    act(() => {
      matches = false; // Set the match state back to false
      mediaQueryMock.matches = false; // Update the mock to reflect no match
      mediaQueryMock.dispatchEvent({ matches: false }); // Dispatch the change event again
    });

    // After the event, the state should now be false (media query no longer matches)
    expect(result.current).toBe(false);
  });
});
