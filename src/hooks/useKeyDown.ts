import { useEffect } from "react";

// Define the types for specific keys

type AlphabeticKeys =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

type DigitKeys = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;

type FunctionKeys = `F${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;

type ControlKeys =
	| "Escape"
	| "PrintScreen"
	| "ScrollLock"
	| "Pause"
	| "Insert"
	| "Home"
	| "Delete"
	| "End"
	| "PageUp"
	| "PageDown";

type ArrowKeys = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

type ModifierKeys =
	| "Backspace"
	| "Tab"
	| "Enter"
	| "Shift"
	| "Control"
	| "Alt"
	| "Meta"
	| "CapsLock"
	| "Space";

// Union all the key types to create the type for KeyPress
export type KeyPress =
	| `Key${AlphabeticKeys}`
	| `Digit${DigitKeys}`
	| FunctionKeys
	| ControlKeys
	| ArrowKeys
	| ModifierKeys;

type ModifierKey = "ctrlKey" | "altKey" | "shiftKey";

export type KeyDownOptions = Partial<Record<ModifierKey, boolean>>;

/**
 * Custom hook to capture the event of pressing a specific key combination.
 *
 * @param keyPress - The key code to be captured.
 * @param callback - The callback function to be called when the key is pressed.
 * @param options - Additional options to modify the behavior of the hook.
 *
 * @example
 * // Example usage of useKeyDown hook to handle a specific key combination.
 * useKeyDown("KeyA", () => {
 *   console.log("A key is pressed!");
 * });
 *
 * @example
 * // Example usage of useKeyDown hook with options for modifier keys.
 * useKeyDown("KeyS", () => {
 *   console.log("Ctrl + Alt + S is pressed!");
 * }, { ctrlKey: true, altKey: true });
 */
export function useKeyDown(
	keyPress: KeyPress,
	callback: () => void,
	options: KeyDownOptions = {}
) {
	const { ctrlKey = false, altKey = false, shiftKey = false } = options;

	// The event handler for the key press
	const handler = (event: KeyboardEvent) => {
		if (event.code !== keyPress) return; // Check if the pressed key matches the desired key.

		// Check if the modifier keys match the provided configuration.
		if (
			ctrlKey === (event.ctrlKey || event.metaKey) &&
			altKey === event.altKey &&
			shiftKey === event.shiftKey
		) {
			event.preventDefault(); // Prevent the default behavior of the key, if it's a preventable event (e.g., prevent form submission).
			callback(); // Call the provided callback function when the key combination matches the expected configuration.
		}
	};

	useEffect(() => {
		// Add the event listener for the key press event.
		document.addEventListener("keydown", handler);

		return () => {
			// Remove the event listener when the component is unmounted to avoid memory leaks.
			document.removeEventListener("keydown", handler);
		};
	}, [keyPress, callback, options]);
}
