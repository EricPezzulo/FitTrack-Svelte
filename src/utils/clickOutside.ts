export function clickOutside(node: HTMLElement) {
	const handleClick = (event: Event) => {
		const targetNode = event.target as Node;

		if (node && !node.contains(targetNode) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
