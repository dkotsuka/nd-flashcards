import { RECEIVE_DECK, ADD_DECK, DELETE_DECK, UPDATE_COUNTER } from '../actions'

function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECK:
			return {
				...state,
				...action.data
			}
			
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}

		case DELETE_DECK:
			const deletedFromState = Object.assign({}, state)
			delete deletedFromState[action.id]
			return deletedFromState

		case UPDATE_COUNTER:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					cardCounter: action.counter
				}
			}
		default:
			return state
	}
}

export default decks