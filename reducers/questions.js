import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_DECK } from '../actions'

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

		case DELETE_DECK:
			const deletedFromState = Object.assign({}, state)
			delete deletedFromState[action.id]
			return deletedFromState

		default:
			return state
	}
}

export default questions