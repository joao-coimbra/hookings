import * as React from "react";

// Define the toggle states
type Toggle = "on" | "off" | "toggle";

// Define the toggle functions based on the toggle states
type ToggleFunctions = Record<Toggle, () => void>;

// Define the type for the return value of the useBoolean hook
type UseBooleanResult = [boolean, ToggleFunctions];

/**
 * Custom React hook for managing a boolean state and providing functions to toggle it.
 *
 * @param {boolean} initialState - The initial state for the boolean value. Defaults to `false`.
 * @returns {UseBooleanResult} A tuple containing the current boolean state and an object with toggle functions.
 *
 * @example
 * // Using the useBoolean hook to manage a boolean state
 * const [isOn, toggleFunctions] = useBoolean();
 * console.log(isOn); // false
 * toggleFunctions.on(); // Sets the state to true
 * toggleFunctions.off(); // Sets the state to false
 * toggleFunctions.toggle(); // Toggles the state (from true to false or vice versa)
 */
function useBoolean(initialState: boolean = false): UseBooleanResult {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle: ToggleFunctions = {
    /**
     * Sets the state to `true`.
     */
    on() {
      setState(true);
    },

    /**
     * Sets the state to `false`.
     */
    off() {
      setState(false);
    },

    /**
     * Toggles the state (from `true` to `false` or vice versa).
     */
    toggle() {
      setState((prev) => !prev);
    },
  };

  return [state, toggle];
}

export { useBoolean };
export type { Toggle, ToggleFunctions, UseBooleanResult };
