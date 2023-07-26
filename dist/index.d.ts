type AlphabeticKeys = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
type DigitKeys = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
type FunctionKeys = `F${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;
type ControlKeys = "Escape" | "PrintScreen" | "ScrollLock" | "Pause" | "Insert" | "Home" | "Delete" | "End" | "PageUp" | "PageDown";
type ArrowKeys = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";
type ModifierKeys = "Backspace" | "Tab" | "Enter" | "Shift" | "Control" | "Alt" | "Meta" | "CapsLock" | "Space";
export type KeyPress = `Key${AlphabeticKeys}` | `Digit${DigitKeys}` | FunctionKeys | ControlKeys | ArrowKeys | ModifierKeys;
type ModifierKey = "ctrlKey" | "altKey" | "shiftKey";
export type KeyDownOptions = Partial<Record<ModifierKey, boolean>>;
export declare function useKeyDown(keyPress: KeyPress, // O código da tecla que será capturada
callback: () => void, // A função de callback que será chamada quando a tecla for pressionada
options?: KeyDownOptions): void;
export {};
