export function createDeckId() {
	const id = 'deck' + (new Date()).getTime().toString(16).slice(2)
	return id
}