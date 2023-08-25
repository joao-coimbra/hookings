import * as React from "react";

/**
 * Custom React hook that facilitates the creation of a dropdown component capable of closing
 * when the user clicks outside of it.
 *
 * @param {React.RefObject<HTMLElement>} ref - A reference to the element representing the dropdown.
 * @param {() => void} onClickOutside - A callback function invoked when a click occurs outside the dropdown.
 *
 * @example
 * // Usage example within a React component and useBoolean for managing open/closed state
 * function Dropdown() {
 *   // Initialize state using the useBoolean hook
 *   const [isOpen, { on: open, off: close, toggle }] = useBoolean();
 *
 *   const dropdownRef = React.useRef(null);
 *
 *   // Attach the useClickOutside hook to the dropdown reference, invoking 'close' on click outside
 *   useClickOutside(dropdownRef, close);
 *
 *   return (
 *     <div>
 *       <button onClick={toggle}>Toggle Dropdown</button>
 *       {isOpen && (
 *         <div
 *           ref={dropdownRef}
 *           style={{
 *             border: "1px solid black",
 *             padding: "10px",
 *             marginTop: "5px",
 *           }}
 *         >
 *           <p>Dropdown Content</p>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 *
 * // Example usage within the main application
 * function App() {
 *   return (
 *     <div>
 *       <h1>Click Outside Dropdown Example</h1>
 *       <Dropdown />
 *     </div>
 *   );
 * }
 *
 * export default App;
 */
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
): void {
  React.useEffect(() => {
    /**
     * Handler function that invokes the provided onClickOutside callback when the user clicks outside the element.
     *
     * @param {MouseEvent} event - The click event object.
     */
    function handleClickOutside(event: MouseEvent) {
      // Check if the event target is a Node and if the ref exists
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    // Bind the event listener to the document for detecting clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up by removing the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export { useClickOutside };
