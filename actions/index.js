import { getData, submitQuestion } from '../utils/api'

export const RECEIVE_DECK = 'RECEIVE_DATA'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const UPDATE_COUNTER = 'UPDATE_COUNTER'
export const ADD_QUESTION = 'ADD_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveDecks(data) {
	return {
		type: RECEIVE_DECK,
		data
	}
}

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function deleteDeck(id) {
	return {
		type: DELETE_DECK,
		id
	}
}

export function updateCounter(id, counter) {
	return {
		type: UPDATE_COUNTER,
		id,
		counter
	}
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function addQuestion(deckId, question) {
	return {
		type: ADD_QUESTION,
		deckId,
		question
	}	
}

export function handleAddQuestion(deckId, counter, question) {
	return (dispatch) => {
		//submitQuestion(deckId, counter, question)
		dispatch(addQuestion(deckId, question))
		dispatch(updateCounter(deckId, counter))
	}
}

export function deleteQuestion(deckId, id) {
	return {
		type: DELETE_QUESTION,
		deckId,
		id
	}
}