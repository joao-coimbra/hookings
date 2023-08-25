import { useEffect } from "react";
import { useBoolean } from "./useBoolean";

// Define custom types for specific key groups

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

// Combine all key types to create the `KeyPress` type
type KeyPress =
  | `Key${AlphabeticKeys}`
  | `Digit${DigitKeys}`
  | FunctionKeys
  | ControlKeys
  | ArrowKeys
  | ModifierKeys;

type ModifierKey = "ctrlKey" | "altKey" | "shiftKey";

type KeyDownOptions = Partial<Record<ModifierKey, boolean>>;

/**
 * Custom React hook for capturing a specific key combination event.
 *
 * @param {KeyPress} keyPress - The key code of the combination to capture.
 * @param {() => void} callback - The callback function to execute when the key combination is detected.
 * @param {KeyDownOptions} options - Additional options to modify hook behavior, such as modifier keys.
 * @param {number} delay - Delay in milliseconds before allowing the handler to be triggered again.
 *
 * @example
 * // Using the useKeyDown hook to handle a specific key combination
 * useKeyDown("KeyA", () => {
 *   console.log("A key is pressed!");
 * });
 *
 * @example
 * // Using the useKeyDown hook with options for modifier keys
 * useKeyDown("KeyS", () => {
 *   console.log("Ctrl + Alt + S is pressed!");
 * }, { ctrlKey: true, altKey: true });
 */
function useKeyDown(
  keyPress: KeyPress,
  callback: () => void,
  options: KeyDownOptions = {},
  delay: number = 0
): void {
  const [isBlocked, { toggle: toggleBlock }] = useBoolean();
  const { ctrlKey = false, altKey = false, shiftKey = false } = options;

  // Event handler for the key press
  const handler = (event: KeyboardEvent) => {
    if (event.code !== keyPress) return; // Check if the pressed key matches the expected key.

    // Check if the modifier keys match the provided configuration and if execution is allowed.
    if (
      ctrlKey === (event.ctrlKey || event.metaKey) &&
      altKey === event.altKey &&
      shiftKey === event.shiftKey &&
      !isBlocked
    ) {
      event.preventDefault(); // Prevent the default key behavior if it's preventable (e.g., form submission).
      callback(); // Execute the provided callback when the key combination matches the expected configuration.
      toggleBlock();
      setTimeout(() => {
        toggleBlock();
      }, delay);
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

export { useKeyDown };
export type { KeyPress, ModifierKey, KeyDownOptions };
