import { RECEIVE_DATA, ADD_DECK } from '../actions'

function reducer(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DATA:
			return {
				...state,
				...action.data
			}
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		default:
			return state
	}
}

export default reducer