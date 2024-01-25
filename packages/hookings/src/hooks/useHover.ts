import React, { useEffect } from "react";
import { useBoolean } from "./useBoolean";

/**
 * Custom React hook to track the hover state of an element.
 *
 * @param {React.RefObject<T>} ref - A ref to the element to track hover events on.
 * @returns {boolean} True if the element is currently being hovered over, false otherwise.
 *
 * @example
 * function MyComponent() {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const isHovering = useHover(ref);
 *
 *   return (
 *     <div ref={ref} style={{ backgroundColor: isHovering ? 'yellow' : 'blue' }}>
 *       Hover over me!
 *     </div>
 *   );
 * }
 */
function useHover<T extends HTMLElement>(ref: React.RefObject<T>): boolean {
  // Use a custom hook to manage boolean state for hovering
  const [isHovering, setIsHovering] = useBoolean();

  // Use effect to attach and remove event listeners
  useEffect(() => {
    // Add event listeners for mouseenter and mouseleave
    ref.current?.addEventListener("mouseenter", setIsHovering.on); // Set isHovering to true on mouseenter
    ref.current?.addEventListener("mouseleave", setIsHovering.off); // Set isHovering to false on mouseleave

    // Cleanup function to remove event listeners on unmount
    return () => {
      ref.current?.removeEventListener("mouseenter", setIsHovering.on);
      ref.current?.removeEventListener("mouseleave", setIsHovering.off);
    };
  }, [ref]); // Only re-run the effect if the ref changes

  return isHovering;
}

export { useHover };
