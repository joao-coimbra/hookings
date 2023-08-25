import * as React from "react";
import type { DependencyList } from "react";

/**
 * Custom React hook that creates a debounce effect for delaying the execution of a function.
 *
 * @param {() => void} func - The function to be called after the delay.
 * @param {number} delay - The delay in milliseconds before calling the function.
 * @param {DependencyList} args - The list of dependencies that trigger the effect.
 *
 * @example
 * // Debounce a search function with a 500ms delay after typing stops.
 * useDebounce(searchFunction, 500, [searchText]);
 *
 * @example
 * // Example usage of useDebounce hook with no dependencies.
 * useDebounce(() => {
 *   console.log("Debounced function called!");
 * }, 300);
 */
function useDebounce(
  func: () => void,
  delay: number,
  args: DependencyList = []
): void {
  React.useEffect(() => {
    // Set a timeout that will call the function after the specified delay
    const timeoutId = setTimeout(() => {
      func();
    }, delay);

    // Return a cleanup function to cancel the timeout if the effect is unmounted or the dependencies change
    return () => {
      clearTimeout(timeoutId); // Clear the timeout to prevent calls to the function after the component is unmounted.
    };
  }, args);
}

export { useDebounce };
