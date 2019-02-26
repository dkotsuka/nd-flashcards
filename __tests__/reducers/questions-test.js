import questions from '../../reducers/questions'
import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_DECK } from '../../actions'

const deckId = 'deck01'

const testQuestion1 = {
	id: 'question01',
	question: 'my 1st question',
	answer: 'my 1st answer'
}

const testQuestion2 = {
	id: 'question02',
	question: 'my 2st question',
	answer: 'my 2st answer'
}

const state1 = {
	deck01: {
		question01: {
			id: 'question01',
			question: 'my 1st question',
			answer: 'my 1st answer'
		}
	}
}

const state2 = {
	deck01: {
		question01: {
			id: 'question01',
			question: 'my 1st question',
			answer: 'my 1st answer'
		},
		question02: {
			id: 'question02',
			question: 'my 2st question',
			answer: 'my 2st answer'
		}
	}
}

describe('questions reducer', () => {
	it('has empty default value', () => {
		expect(questions(undefined, {type: 'none'})).toEqual({})
	})

	it('can receive questions', () => {
		expect(questions(undefined, {
			type: RECEIVE_QUESTIONS,
			questions: state2
		})).toEqual(state2)
	})

	it('can add a question', () => {
		expect(questions(undefined, {
			type: ADD_QUESTION,
			question: testQuestion1,
			deckId
		})).toEqual(state1)
	})

	it('can add a second question', () => {
		expect(questions( state1, {
			type: ADD_QUESTION,
			question: testQuestion2,
			deckId
		})).toEqual(state2)
	})

	it('can delete a selected question', () => {
		expect(questions(state2, {
			type: DELETE_DECK,
			id: 'deck01'
		})).toEqual({})
	})
})