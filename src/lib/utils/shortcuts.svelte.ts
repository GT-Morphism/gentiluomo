import { goto } from "$app/navigation";
import { i18n } from "$lib/i18n";

export type ShortcutConfig = {
	firstKey: string;
	secondKey: string;
	href: string;
};

export default function defineShortcuts(shortcuts: ShortcutConfig[]) {
	let isAwaitingSecondKey = $state(false);
	let lastKeyTime = 0;
	let currentFirstKey = "";

	function handleKeydown(event: KeyboardEvent) {
		if (
			document.activeElement?.tagName.toLowerCase() === "input" ||
			document.activeElement?.tagName.toLowerCase() === "textarea"
		) {
			return;
		}

		const currentTime = Date.now();
		const pressedKey = event.key.toLowerCase();

		if (!isAwaitingSecondKey) {
			const matchingShortcut = shortcuts.find(
				(s) => s.firstKey.toLowerCase() === pressedKey,
			);
			if (matchingShortcut) {
				isAwaitingSecondKey = true;
				lastKeyTime = currentTime;
				currentFirstKey = pressedKey;
				event.preventDefault();
				return;
			}
		} else {
			if (currentTime - lastKeyTime <= 800) {
				const matchedShortcut = shortcuts.find(
					(s) =>
						s.firstKey.toLowerCase() === currentFirstKey &&
						s.secondKey.toLowerCase() === pressedKey,
				);
				if (matchedShortcut) {
					event.preventDefault();
					goto(i18n.resolveRoute(matchedShortcut.href));
				}
			}
			isAwaitingSecondKey = false;
			currentFirstKey = "";
		}
	}

	function mount() {
		document.addEventListener("keydown", handleKeydown);
	}

	function unmount() {
		document.removeEventListener("keydown", handleKeydown);
	}

	return {
		mount,
		unmount,
	};
}
