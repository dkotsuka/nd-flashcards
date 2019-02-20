import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MY_REACT_NATIVE_FLASHCARDS'

export function getData() {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then(res => JSON.parse(res))
}

export function createDeck(deck) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(
		{decks: deck}
	))
}

export function removeDeck(key) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((res)=> {
			const data = JSON.parse(res)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		})
}

export function submitQuestion(deckId, counter, question) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
		decks: {
			[deckId]: {cardCounter: counter}
		},
		questions: {
			[deckId]: { [question.id]: question }
		}
	}))
}

export function removeQuestion(key) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((res)=> {
			const data = JSON.parse(res)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		})
}