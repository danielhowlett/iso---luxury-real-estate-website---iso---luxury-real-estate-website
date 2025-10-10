import { useEffect, useState } from "react";

export function useMotionSafe(): boolean {
  const [motionSafe, setMotionSafe] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionSafe(!query.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMotionSafe(!event.matches);
    };

    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return motionSafe;
}
