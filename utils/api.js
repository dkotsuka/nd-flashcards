import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MY_REACT_NATIVE_FLASHCARDS'

export function fetchCalendarResults() {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then()
}

export function createDeck({key}) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
		[key]: {}
	}))
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

export function submitFlashCard({entry, key}) {
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
		[key]: entry
	}))
}

export function removeFlashCard(key) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((res)=> {
			const data = JSON.parse(res)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		})
}