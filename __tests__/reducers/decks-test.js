import decks from '../../reducers/decks'
import { RECEIVE_DECK, ADD_DECK, DELETE_DECK, UPDATE_COUNTER } from '../../actions'

const deck01 = {
	d01: {
		id: 'd01',
		name: 'Deck 01',
		cardCounter: 0
	}
}

const deck02 = {
	d02: {
		id: 'd02',
		name: 'Deck 02',
		cardCounter: 0
	}
}

const state1 = {
	d01: {
		id: 'd01',
		name: 'Deck 01',
		cardCounter: 0
	}
}

const state1Updated = {
	d01: {
		id: 'd01',
		name: 'Deck 01',
		cardCounter: 5
	}
}

const state2 = {
	d01: {
		id: 'd01',
		name: 'Deck 01',
		cardCounter: 0
	},
	d02: {
		id: 'd02',
		name: 'Deck 02',
		cardCounter: 0
	}
}

describe('decks reducer', () => {
	it('has default value', () => {
		expect(decks(undefined, {
			type: 'none'
		})).toEqual({})
	})

	it('can receive decks', () => {
		expect(decks(undefined, {
			type: RECEIVE_DECK,
			data: deck01
		})).toEqual(state1)

		expect(decks(state1, {
			type: RECEIVE_DECK,
			data: deck02
		})).toEqual(state2)
	})

	it('can add new deck', () => {
		expect(decks(undefined, {
			type: ADD_DECK,
			deck: deck01
		})).toEqual(state1)

		expect(decks(state1, {
			type: ADD_DECK,
			deck: deck02
		})).toEqual(state2)
	})

	it('can delete selected deck', () => {
		expect(decks(state2, {
			type: DELETE_DECK,
			id: 'd02'
		})).toEqual(state1)
	})

	it('can update counter', () => {
		expect(decks(state1, {
			type: UPDATE_COUNTER,
			id: 'd01',
			counter: 5
		})).toEqual(state1Updated)
	})
})