import { KeyPress, KeyDownOptions } from "./index";

export function useKeyDown(
	keyPress: KeyPress,
	callback: () => void,
	options?: KeyDownOptions
): void;
