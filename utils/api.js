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

export function removeDeck(deckId) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((res) => JSON.parse(res))
		.then((data) => {
			data.decks = {
				...data.decks,
				[deckId] : undefined
			}
			delete data.decks[deckId]
			data.questions = {
				...data.questions,
				[deckId] : undefined
			}
			delete data.questions[deckId]
			return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
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