# Hookings - More Hooks for React with TypeScript

Hookings is a collection of custom hooks for React with TypeScript, designed to enhance your React development experience and make it more convenient to handle common scenarios.

## Installation

You can install the `hookings` package using npm or yarn:

```bash
npm install hookings
```

or

```bash
yarn add hookings
```

## Usage

### useKeyDown

A custom hook to capture the event of pressing a specific key combination.

```typescript
import { useKeyDown } from "hookings";

// Example usage:
useKeyDown("KeyJ", () => {
	console.log("You pressed the 'J' key!");
});
```

### useDebounce

A custom hook to create a debounce for function calls.

```typescript
import { useDebounce } from "hookings";

// Example usage:
useDebounce(() => {
	// Your function logic here
}, 500);
```

### useDropdown

A custom hook to handle click events outside of a given element.

```typescript
import { useRef } from "react";
import { useDropdown } from "hookings";

// Example usage:
const dropdownRef = useRef(null);
useDropdown(dropdownRef, () => {
	// Your logic to handle click outside of the element here
});
```

## Contributions

Contributions to `hookings` are always welcome! If you have any ideas for new hooks or improvements to existing ones, feel free to open an issue or submit a pull request on [GitHub](https://github.com/joao-coimbra/hookings).

## License

Hookings is open-source software licensed under the [MIT License](https://github.com/joao-coimbra/hookings/blob/main/LICENSE).

---

Thank you for using `hookings`! We hope these custom hooks help improve your React development experience. If you encounter any issues or have any questions, don't hesitate to reach out on [GitHub](https://github.com/joao-coimbra/hookings/issues). Happy coding! 🚀
