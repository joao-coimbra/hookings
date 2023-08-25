import * as React from "react";

/**
 * Custom React hook that returns the previous value of a provided variable or state.
 * Useful for tracking the previous value of a changing variable without using a state.
 *
 * @template T - The type of the value being tracked.
 * @param {T} value - The value to be tracked and stored as the previous value.
 * @returns {T} The previous value of the provided variable or state.
 *
 * @example
 * // Tracking previous value of a changing variable
 * const CounterComponent = () => {
 *   const [count, setCount] = React.useState(0);
 *   const previousCount = usePrevious(count);
 *
 *   return (
 *     <div>
 *       <p>Current Count: {count}</p>
 *       <p>Previous Count: {previousCount}</p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * }
 *
 * // Tracking previous state in a component
 * const ToggleComponent = () => {
 *   const [isOn, { toggle }] = useBoolean(false);
 *   const wasOn = usePrevious(isOn);
 *
 *   return (
 *     <div>
 *       <p>Is On: {isOn ? "Yes" : "No"}</p>
 *       <p>Was On: {wasOn ? "Yes" : "No"}</p>
 *       <button onClick={toggle}>Toggle</button>
 *     </div>
 *   );
 * }
 */
function usePrevious<T>(value: T): T {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef<T>(value);

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export { usePrevious };
