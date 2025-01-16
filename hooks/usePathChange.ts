import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const usePathChange = (): boolean => {
  const pathname = usePathname();
  const prevPath = useRef(pathname); // Ref to store previous path

  const pathChanged = prevPath.current !== pathname; // Compare current and previous paths

  useEffect(() => {
    if (pathChanged) {
      prevPath.current = pathname; // Update the previous path only when it changes
    }
  }, [pathname, pathChanged]);

  // Return true if the path has changed
  return pathChanged;
};

export default usePathChange;
