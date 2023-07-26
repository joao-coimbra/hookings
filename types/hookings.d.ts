declare module "hookings" {
	// Adicione as definições de tipo do seu pacote aqui.
	// Por exemplo, você pode definir tipos para os hooks e interfaces relacionadas.
	// Exemplo:
	export function useKeyDown(
		keyPress: string,
		callback: () => void,
		options?: { ctrlKey?: boolean; altKey?: boolean; shiftKey?: boolean }
	): void;
}
