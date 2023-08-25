<h1 align="center">Hookings</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/hookings">
    <img alt="npm version" src="https://badge.fury.io/js/hookings.svg">
  </a>
  <a href="https://github.com/joao-coimbra/hookings/blob/main/LICENSE">
    <img alt="MIT license" src="https://img.shields.io/npm/l/hookings">
  </a>
</p>

<p align="center">🎣 A collection of custom React hooks to simplify and enhance your React development experience.</p>

## Installation 🚀

You can install `hookings` using npm:

```bash
npm install hookings
```

or

```bash
yarn add hookings
```

## Features 🌟

- Easy-to-use and well-documented hooks for common React use-cases.
- Highly customizable options to adapt the hooks to your needs.
- A growing collection of useful and versatile hooks.

# Available Hooks 🎣

1. `useBoolean`: A hook to manage a boolean state and provide functions to toggle it.
1. `useKeyDown`: A hook to capture the event of pressing a specific keyboard key with customizable options for modifier keys.
1. `useDebounce`: A hook to create a debounce effect that delays the execution of a function until a certain amount of time has passed without additional calls.
1. `useInterval`: A hook to execute a function repeatedly at regular intervals.
1. `useDropdown`: A hook to handle the behavior of a dropdown menu and detect clicks outside of the dropdown to close it.
1. `useAsync`: A hook to simplify the management of asynchronous operations, handling loading, error, and result states.

> Note: More hooks are in development and will be added to the collection soon! 🚧

## Usage 📝

### useKeyDown

Here's a quick example of how to use the `useKeyDown` hook:

```jsx
import { useKeyDown } from "hookings";

const MyComponent = () => {
  // Call this function when the 'Ctrl + Enter' keys are pressed
  const handleKeyPress = () => {
    // Your logic here...
  };

  useKeyDown("KeyEnter", handleKeyPress, { ctrlKey: true });

  // Rest of your component code...
};
```

For more detailed examples and usage instructions, please check the [documentation](https://hookings.vercel.app/docs).

## Contributions 🤝

Contributions to `hookings` are always welcome! If you have any ideas for new hooks or improvements to existing ones, feel free to open an issue or submit a pull request on [GitHub](https://github.com/joao-coimbra/hookings).

## License 📄

Hookings is open-source software licensed under the [MIT License](https://github.com/joao-coimbra/hookings/blob/main/LICENSE).

## Conclusion 🎉

Thank you for using **Hookings**! We hope these custom hooks help improve your React development experience. If you encounter any issues or have any questions, don't hesitate to reach out on [Github](https://github.com/joao-coimbra/hookings/issues). Happy coding! 🚀
