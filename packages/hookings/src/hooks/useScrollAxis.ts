import * as React from "react";

// Define the type for the scroll axis
type Axis = {
  x: number;
  y: number;
};

// Default values for the scroll axis
const DEFAULT_AXIS = {
  x: 0,
  y: 0,
};

/**
 * Custom React hook that tracks the scroll position of the window along the x and y axes.
 * Returns an object containing the x and y scroll positions.
 *
 * @returns {Axis} The object with the x and y scroll positions.
 *
 * @example
 * // Using the useScrollAxis hook
 * function ScrollInfo() {
 *   const scrollAxis = useScrollAxis();
 *
 *   return (
 *     <div>
 *       <p>ScrollX: {scrollAxis.x}</p>
 *       <p>ScrollY: {scrollAxis.y}</p>
 *     </div>
 *   );
 * }
 */
function useScrollAxis(): Axis {
  // Check if the code is running in a browser environment
  const isClient = typeof window === "object";

  // State to hold the current scroll axis
  const [axis, setAxis] = React.useState<Axis>(DEFAULT_AXIS);

  // Function to update the axis state based on scroll
  const handleScroll = () => {
    setAxis({ x: window.scrollX, y: window.scrollY });
  };

  // Set up the effect to handle scroll events
  React.useEffect(() => {
    if (isClient) {
      // Set initial scroll position
      setAxis({ x: window.scrollX, y: window.scrollY });

      // Add event listener to track scroll
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);

  // Return the current scroll axis
  return axis;
}

export { useScrollAxis };
export type { Axis };
