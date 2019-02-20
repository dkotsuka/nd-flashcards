import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions'

function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...action.questions
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.deckId]: {
					...state[action.deckId],
					[action.question.id]: action.question
				}
			}
		default:
			return state
	}
}

export default questions