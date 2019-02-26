import {
	RECEIVE_DECK, ADD_DECK, DELETE_DECK, UPDATE_COUNTER,
	ADD_QUESTION, DELETE_QUESTION, RECEIVE_QUESTIONS,
	receiveDecks, addDeck, deleteDeck, updateCounter,
	receiveQuestions, addQuestion, deleteQuestion, handleAddQuestion
} from '../../actions'

describe('deck actions', () => {
	const testData = {
	deck01: {
		id: 'deck01',
		name: 'Deck 01',
		cardCounter: 0
	}
}
	it('has an action to receive decks', () => {
		const expectedAction = {
			type: RECEIVE_DECK,
			data: testData
		}
		expect(receiveDecks(testData)).toEqual(expectedAction)
	})

	it('has an action to add deck', () => {
		const expectedAction = {
			type: ADD_DECK,
			deck: testData['deck01']
		}
		expect(addDeck(testData['deck01'])).toEqual(expectedAction)
	})

	it('has an action to delete deck', () => {
		const expectedAction = {
			type: DELETE_DECK,
			id: testData['deck01'].id
		}
		expect(deleteDeck(testData['deck01'].id)).toEqual(expectedAction)
	})

	it('has an action to delete deck', () => {
		const expectedAction = {
			type: UPDATE_COUNTER,
			id: testData['deck01'].id,
			counter: 10
		}
		expect(updateCounter(testData['deck01'].id, 10)).toEqual(expectedAction)
	})
})

describe('question actions', () => {
	const testData = {
		deck01: {
			card01: {
				id: 'card01',
				question: 'Question 01?',
				answer: 'Answer for the question 01.'
			}
		}
	}
	it('has an action to receive question', () => {
		const expectedAction = {
			type: RECEIVE_QUESTIONS,
			questions: testData.deck01.card01
		} 
		expect(receiveQuestions(testData.deck01.card01)).toEqual(expectedAction)
	})

	it('has an action to add question', () => {
		const expectedAction = {
			type: ADD_QUESTION,
			deckId: 'deck01',
			question: testData.deck01.card01
		} 
		expect(addQuestion('deck01', testData.deck01.card01)).toEqual(expectedAction)
	})

	it('has an action to delete question', () => {
		const expectedAction = {
			type: DELETE_QUESTION,
			deckId: 'deck01',
			id: testData.deck01.card01.id
		} 
		expect(deleteQuestion('deck01', testData.deck01.card01.id)).toEqual(expectedAction)
	})

	it('handle actions for question add', () => {
		const actionsHandler = []
		function dispatch(callback) {
			actionsHandler.push(callback.type)
		}
		const actionsDispatched = handleAddQuestion("deck01", 10, testData.deck01.card01)(dispatch)
		expect(actionsHandler).toEqual([ADD_QUESTION, UPDATE_COUNTER])
	})
})