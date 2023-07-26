import { DependencyList, RefObject } from "react";
import { KeyPress, KeyDownOptions } from "../src/hooks/useKeyDown";

// Declaration of module for the "hookings" package
declare module "index" {
	/**
	 * Custom hook to capture the event of pressing a specific key.
	 *
	 * @param keyPress - The code of the key to be captured.
	 * @param callback - The callback function to be called when the key is pressed.
	 * @param options - Additional options to modify the behavior of the hook.
	 *
	 * @example
	 * // Example usage of useKeyDown hook to capture Enter key press and call a function.
	 * useKeyDown("Enter", () => {
	 *   console.log("Enter key pressed!");
	 * });
	 *
	 * @example
	 * // Example usage of useKeyDown hook with options to capture Ctrl + A key press.
	 * useKeyDown("KeyA", () => {
	 *   console.log("Ctrl + A key pressed!");
	 * }, { ctrlKey: true });
	 */
	export function useKeyDown(
		keyPress: KeyPress,
		callback: () => void,
		options?: KeyDownOptions
	): void;

	/**
	 * Custom hook to create a debounce for a function.
	 *
	 * @param func - The function to be called after the delay.
	 * @param delay - The delay in milliseconds before calling the function.
	 * @param args - The list of dependencies that trigger the effect.
	 *
	 * @example
	 * // Example usage of useDebounce hook to debounce a search function with a 500ms delay.
	 * useDebounce(searchFunction, 500, [searchText]);
	 */
	export function useDebounce(
		func: () => void,
		delay: number,
		args?: DependencyList
	): void;

	/**
	 * Custom hook to create a dropdown that closes when the user clicks outside of it.
	 *
	 * @param ref - The reference (ref) to the HTML element representing the dropdown.
	 * @param onClickOutside - The callback function to be called when the user clicks outside the dropdown.
	 *
	 * @example
	 * // Example usage of useDropdown hook to close a dropdown when clicked outside of it.
	 * const dropdownRef = useRef(null);
	 * useDropdown(dropdownRef, () => {
	 *   setIsDropdownOpen(false);
	 * });
	 */
	export function useDropdown(
		ref: RefObject<HTMLElement>,
		onClickOutside: () => void
	): void;
}
