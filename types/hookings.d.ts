import { KeyDownOptions, KeyPress } from "../src";

declare module "hookings" {
	// Adicione as definições de tipo do seu pacote aqui.
	// Por exemplo, você pode definir tipos para os hooks e interfaces relacionadas.
	// Exemplo:
	export function useKeyDown(
		keyPress: KeyPress,
		callback: () => void,
		options?: KeyDownOptions
	): void;
}
