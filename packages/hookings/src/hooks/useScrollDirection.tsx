import * as React from "react";
import { useScrollAxis } from "./useScrollAxis";
import { usePrevious } from "./usePrevious";

// Define the type for the scroll direction
type ScrollDirection = -1 | 0 | 1;

/**
 * Custom React hook that tracks the scroll direction of the window.
 * Returns a value indicating the scroll direction: -1 for scrolling up,
 * 0 for no scroll, and 1 for scrolling down.
 *
 * @returns {ScrollDirection} The current scroll direction.
 *
 * @example
 * // Using the useScrollDirection hook
 * function ScrollInfo() {
 *   const scrollDirection = useScrollDirection();
 *
 *   return (
 *     <div>
 *       <p>Scroll Direction: {scrollDirection}</p>
 *     </div>
 *   );
 * }
 */
function useScrollDirection(): ScrollDirection {
  // State to hold the previous scroll position and the current scroll direction
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>(0);
  const { y } = useScrollAxis();
  const prevY = usePrevious(y);

  // Function to update the scroll direction state based on scroll

  // Set up the effect to handle scroll events
  React.useEffect(() => {
    if (y > prevY) {
      setScrollDirection(1);
    } else if (y < prevY) {
      setScrollDirection(-1);
    } else {
      setScrollDirection(0);
    }
  }, [y]);

  // Return the current scroll direction
  return scrollDirection;
}

export { useScrollDirection };
export type { ScrollDirection };
