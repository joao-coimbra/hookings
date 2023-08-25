import * as React from "react";

// Define the type for the async state
type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

/**
 * Custom React hook to simplify the management of asynchronous operations, handling loading, error, and result states.
 *
 * @param {() => Promise<T>} asyncFunction - The asynchronous function to be executed.
 * @returns {AsyncState<T>} An object containing the data, loading state, and error state of the asynchronous operation.
 *
 * @example
 * // Using the useAsync hook to fetch user data
 * function ComponentWithAsync() {
 *   const fetchUserData = async () => {
 *     const response = await fetch("https://api.example.com/user");
 *     return response.json();
 *   };
 *
 *   const { data, loading, error } = useAsync(fetchUserData);
 *
 *   if (loading) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   if (error) {
 *     return <div>An error occurred: {error.message}</div>;
 *   }
 *
 *   return <div>User: {data.name}</div>;
 * }
 */
function useAsync<T>(asyncFunction: () => Promise<T>): AsyncState<T> {
  const [asyncState, setAsyncState] = React.useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    let isMounted = true;

    asyncFunction()
      .then((data) => {
        if (isMounted) {
          setAsyncState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setAsyncState({ data: null, loading: false, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [asyncFunction]);

  return asyncState;
}

export { useAsync };
export type { AsyncState };
