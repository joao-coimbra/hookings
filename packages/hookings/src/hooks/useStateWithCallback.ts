import * as React from "react";

// Define the type for the callback function that can be provided to setStateWithCallback
type CallbackFunction<T> = (state: T) => void;

// Define the type for the result returned by the useStateWithCallback hook
type UseStateWithCallbackResult<T> = [
	T,
	(newState: React.SetStateAction<T>, callback?: CallbackFunction<T>) => void
];

/**
 * Custom React hook for managing state with callback support after updates.
 *
 * @param {T} initialState - The initial state.
 * @returns {UseStateWithCallbackResult<T>} An array containing the current state and a function to update it with callback support.
 *
 * @example
 * // Using the useStateWithCallback hook to manage state with a callback
 * const [count, setCount] = useStateWithCallback(0);
 *
 * // Updating the state and invoking a callback
 * setCount(5, (newCount) => {
 *   console.log("The state has been updated to:", newCount);
 * });
 */
function useStateWithCallback<T>(
	initialState: T
): UseStateWithCallbackResult<T> {
	const [state, setState] = React.useState<T>(initialState);
	const callbackRef = React.useRef<CallbackFunction<T> | null>(null);

	React.useEffect(() => {
		if (callbackRef.current) {
			callbackRef.current(state);
			callbackRef.current = null;
		}
	}, [state]);

	const setStateWithCallback = (
		newState: React.SetStateAction<T>,
		callback?: CallbackFunction<T>
	): void => {
		setState(newState);
		if (typeof callback === "function") {
			callbackRef.current = callback;
		}
	};

	return [state, setStateWithCallback];
}

export { useStateWithCallback };
export type { CallbackFunction, UseStateWithCallbackResult };
