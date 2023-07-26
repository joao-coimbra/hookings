import { useKeyDown } from "./hooks/useKeyDown";
import { useDebounce } from "./hooks/useDebounce";
import { useDropdown } from "./hooks/useDropdown";
/**
 * Exporting custom hooks from the package.
 *
 * @module index
 *
 * @example
 * // Example usage of useKeyDown hook to handle a specific key combination.
 * import { useKeyDown } from 'hookings';
 *
 * useKeyDown("KeyA", () => {
 *   console.log("A key is pressed!");
 * });
 *
 * @example
 * // Example usage of useDebounce hook to debounce a function.
 * import { useDebounce } from 'hookings';
 *
 * useDebounce(() => {
 *   console.log("Function debounced!");
 * }, 500);
 *
 * @example
 * // Example usage of useDropdown hook to handle click outside of an element.
 * import { useDropdown } from 'hookings';
 *
 * const dropdownRef = useRef(null);
 *
 * useDropdown(dropdownRef, () => {
 *   console.log("Clicked outside of dropdown!");
 * });
 */
export { useKeyDown, useDebounce, useDropdown };
