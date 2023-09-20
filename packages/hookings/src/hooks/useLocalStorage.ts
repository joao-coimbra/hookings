import * as React from "react";

// Define the type for the return value of the useLocalStorage hook
type UseLocalStorageResult<T> = [T, (value: T | ((prevValue: T) => T)) => void];

/**
 * Custom React hook for managing a value in localStorage and providing a function to update it.
 *
 * @param {string} key - The key to use for storing the value in localStorage.
 * @param {T} initialValue - The initial value for the localStorage key.
 * @returns {UseLocalStorageResult} A tuple containing the current value and a function to update it.
 *
 * @example
 * // Using the useLocalStorage hook to manage a value in localStorage
 * const [name, setName] = useLocalStorage<string>("user_name", "John");
 * console.log(name); // Value retrieved from localStorage or the initial value "John"
 * setName("Alice"); // Updates the value in localStorage to "Alice"
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageResult<T> {
  // Get initial value from localStorage if it exists
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to hold the current value
  const [value, setValue] = React.useState<T>(initial);

  // Update localStorage when the value changes
  const updateValue = (newValue: T | ((prevValue: T) => T)) => {
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;
    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [value, updateValue];
}

export { useLocalStorage };
export type { UseLocalStorageResult };
