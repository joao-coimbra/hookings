import { useEffect, DependencyList } from "react";

/**
 * Custom hook to create a debounce effect.
 *
 * @param func - The function to be called after the delay.
 * @param delay - The delay in milliseconds before calling the function.
 * @param args - The list of dependencies that trigger the effect.
 *
 * @example
 * // Example usage of useDebounce hook to debounce a search function with a 500ms delay.
 * useDebounce(searchFunction, 500, [searchText]);
 *
 * @example
 * // Example usage of useDebounce hook with no dependencies.
 * useDebounce(() => {
 *   console.log("Debounced function called!");
 * }, 300);
 */
export function useDebounce(
	func: () => void,
	delay: number,
	args: DependencyList = []
) {
	useEffect(() => {
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
