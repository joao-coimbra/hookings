function waitForElement(elementId: string): Promise<HTMLElement> {
	return new Promise((resolve) => {
		if (document.getElementById(elementId)) {
			return resolve(document.getElementById(elementId) as HTMLElement);
		}

		const observer = new MutationObserver(() => {
			if (document.getElementById(elementId)) {
				observer.disconnect();
				return resolve(
					document.getElementById(elementId) as HTMLElement
				);
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}

export { waitForElement };
