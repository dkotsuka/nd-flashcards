export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_DECK = 'ADD_ENTRY'

export function receiveData(data) {
	return {
		type: RECEIVE_DATA,
		data
	}
}

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck
	}
}