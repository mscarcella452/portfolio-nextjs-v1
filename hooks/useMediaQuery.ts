import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches); // Set initial state based on the query

      // Listen for changes in media query match
      mediaQuery.addEventListener("change", handleChange);

      // Cleanup on component unmount or query change
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [query]); // Effect depends on the query string

  return matches; // Return whether the media query matches
};

export default useMediaQuery;
