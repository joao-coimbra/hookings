import { useBoolean } from "./useBoolean";
import { useDebounce } from "./useDebounce";

type useClipboardReturn = {
  copied: boolean;
  copyToClipboard: (text: string) => void;
};

/**
 * Custom hook for interacting with the clipboard.
 *
 * @param {number} [delay=1500] - The delay in milliseconds before resetting the "copied" state after copying.
 * @returns {useClipboardReturn} An object with `copied` state indicating whether copying was successful and a function `copyToClipboard` to copy text to the clipboard.
 *
 * @example
 * // Using the useClipboard hook to copy text to the clipboard
 * const { copied, copyToClipboard } = useClipboard();
 * copyToClipboard('Hello, clipboard!');
 * console.log('Text copied:', copied);
 */
function useClipboard(delay: number = 1500): useClipboardReturn {
  const [copied, setCopied] = useBoolean();

  useDebounce(setCopied.off, delay, [copied]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(setCopied.on)
      .catch((error) => console.error("Failed to copy to clipboard:", error));
  };

  return { copied, copyToClipboard };
}

export { useClipboard };
export type { useClipboardReturn };
