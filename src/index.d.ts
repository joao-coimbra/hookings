import { KeyDownOptions, KeyPress } from ".";

export function useKeyDown(
	keyPress: KeyPress,
	callback: () => void,
	options?: KeyDownOptions
): void;
