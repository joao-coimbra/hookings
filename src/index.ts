import {useEffect} from 'react'

type AlphabeticKeys =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

type DigitKeys = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;

type FunctionKeys = `F${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;

type ControlKeys =
	| "Escape"
	| "PrintScreen"
	| "ScrollLock"
	| "Pause"
	| "Insert"
	| "Home"
	| "Delete"
	| "End"
	| "PageUp"
	| "PageDown";

type ArrowKeys = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

type ModifierKeys =
	| "Backspace"
	| "Tab"
	| "Enter"
	| "Shift"
	| "Control"
	| "Alt"
	| "Meta"
	| "CapsLock"
	| "Space";

export type KeyPress =
	| `Key${AlphabeticKeys}`
	| `Digit${DigitKeys}`
	| FunctionKeys
	| ControlKeys
	| ArrowKeys
	| ModifierKeys;

type ModifierKey = "ctrlKey" | "altKey" | "shiftKey";

export type KeyDownOptions = Partial<Record<ModifierKey, boolean>>;

// Hook personalizado para capturar o evento de pressionar uma tecla específica
export function useKeyDown(
	keyPress: KeyPress, // O código da tecla que será capturada
	callback: () => void, // A função de callback que será chamada quando a tecla for pressionada
	options: KeyDownOptions = {} // Opções adicionais para modificar o comportamento do hook
) {
	const { ctrlKey = false, altKey = false, shiftKey = false } = options;

	// O manipulador do evento de pressionar a tecla
	const handler = (event: KeyboardEvent) => {
		if (event.code !== keyPress) return; // Verifica se a tecla pressionada corresponde à tecla desejada.

		if (
			ctrlKey === (event.ctrlKey || event.metaKey) && // Verifica se a tecla CTRL (ou CMD em Mac) corresponde à configuração fornecida.
			altKey === event.altKey && // Verifica se a tecla ALT corresponde à configuração fornecida.
			shiftKey === event.shiftKey // Verifica se a tecla SHIFT corresponde à configuração fornecida.
		) {
			event.preventDefault(); // Impede o comportamento padrão da tecla, caso seja um evento passível de prevenção (por exemplo, evitar que um formulário seja enviado).
			callback(); // Chama a função de callback fornecida quando a combinação de teclas corresponder à configuração esperada.
		}
	};

	useEffect(() => {
		// Adiciona o evento de escuta para o evento de pressionar uma tecla
		document.addEventListener("keydown", handler);

		return () => {
			document.removeEventListener("keydown", handler); // Remove o evento de escuta quando o componente é desmontado para evitar vazamentos de memória.
		};
	}, [keyPress, callback, options]);
}
