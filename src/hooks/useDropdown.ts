import { useEffect, RefObject } from "react";

export function useDropdown(
	ref: RefObject<HTMLElement>,
	onClickOutside: () => void
) {
	useEffect(() => {
		/**
		 * Invoke Function onClick outside of element
		 */
		function handleClickOutside(this: Document, e: MouseEvent) {
			// Verifique se o evento possui uma propriedade `target` e se é uma instância de `Node`
			if (
				e.target instanceof Node &&
				ref.current &&
				!ref.current.contains(e.target)
			) {
				onClickOutside();
			}
		}

		// Bind
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// dispose
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, onClickOutside]);
}
