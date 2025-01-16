import { renderHook } from "@testing-library/react";
import usePathChange from "@/hooks/usePathChange";
import { usePathname } from "next/navigation";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("usePathChange", () => {
  it("should return false when path stays the same", () => {
    vi.mocked(usePathname).mockReturnValue("/initial-path");
    const { result } = renderHook(() => usePathChange());

    expect(result.current).toBe(false);
  });
  it("should return true when the path changes", () => {
    // Initially mock the pathname to be "/initial-path"
    vi.mocked(usePathname).mockReturnValue("/initial-path");
    const { result, rerender } = renderHook(() => usePathChange());

    // Initially, the path has not changed, so it should return false
    expect(result.current).toBe(false);

    // Now mock the pathname to change to "/new-path"
    vi.mocked(usePathname).mockReturnValue("/new-path");

    rerender();

    // After the path change, the hook should return true
    expect(result.current).toBe(true);
  });
});
