import { KeyDownOptions, KeyPress } from "../src";

// Adicione as definições de tipo do seu pacote aqui.
// Por exemplo, você pode definir tipos para os hooks e interfaces relacionadas.

// Exporte as definições de tipo como um módulo para que seja corretamente importado.
declare module "hookings" {
	export function useKeyDown(
		keyPress: KeyPress,
		callback: () => void,
		options?: KeyDownOptions
	): void;
}
