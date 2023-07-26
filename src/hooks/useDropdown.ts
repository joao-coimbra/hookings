import { useEffect, RefObject } from "react";

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
 *
 * @example
 * // Example usage of useDropdown hook with an HTML element reference and callback function.
 * const dropdownElement = document.getElementById("dropdown");
 * useDropdown(dropdownElement, () => {
 *   console.log("Dropdown clicked outside!");
 * });
 */
export function useDropdown(
	ref: RefObject<HTMLElement>,
	onClickOutside: () => void
) {
	useEffect(() => {
		/**
		 * Invoke the onClickOutside function when the user clicks outside of the element.
		 */
		function handleClickOutside(this: Document, e: MouseEvent) {
			// Check if the event has a `target` property and if it is an instance of `Node`
			if (
				e.target instanceof Node &&
				ref.current &&
				!ref.current.contains(e.target)
			) {
				onClickOutside();
			}
		}

		// Bind the event listener to the document for detecting clicks outside the dropdown
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Remove the event listener when the effect is unmounted to avoid memory leaks
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, onClickOutside]);
}
