import { useEffect, DependencyList } from "react";

// Hook personalizado para criar um debounce
export function useDebounce(
	func: () => void, // A função que será chamada após o atraso
	delay: number, // O atraso em milissegundos antes de chamar a função
	args: DependencyList = [] // A lista de dependências que acionam o efeito
) {
	useEffect(() => {
		// Define um timeout que chamará a função após o atraso especificado
		const timeoutId = setTimeout(() => {
			func();
		}, delay);

		// Retorna uma função de limpeza para cancelar o timeout caso o efeito seja desmontado ou as dependências mudem
		return () => {
			clearTimeout(timeoutId); // Limpa o timeout para evitar chamadas à função após o componente ser desmontado.
		};
	}, args);
}