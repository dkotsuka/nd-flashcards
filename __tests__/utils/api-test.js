import { AsyncStorage } from 'react-native'
import MockAsyncStorage from 'mock-async-storage'
import React from 'react';

import { getData, createDeck, removeDeck, submitQuestion } from '../../utils/api'

jest.mock('react-native', () => {
    let items = {};

    return {
        AsyncStorage: {
            setItem: jest.fn((key, value) => {
                items[key] =  value
                return Promise.resolve(JSON.stringify(value));
            }),
            mergeItem: jest.fn((key, value) => {
            	const state = items[key]
            	const mValue = JSON.parse(value)
            	const newState = JSON.stringify(Object.assign({}, mValue)) 
            	items[key] = newState
            	return Promise.resolve()
            }),
            getItem: jest.fn((key, value) => {
                return Promise.resolve(items[key]);
            })
        }
    }
})

const deckOne = {
	deck01: {
		id: 'deck01',
		name: 'Deck 01',
		cardCounter: 0
	}
}

const deckTwo = {
	deck02: {
		id: 'deck02',
		name: 'Deck 02',
		cardCounter: 0
	}
}

const question1 = {
	id: 'quest01',
	question: 'Question 1?',
	answer: 'Answer for the question 1.'
}

describe('Api functions are working', () => {
	it('can load initial data', async () => {
		getData().then((data) => {
			expect(data).toBe(undefined)
		})
	})

	it('can save deck', async () => {
		const expected = {
			decks: deckOne
		}
		await createDeck(deckOne)
		getData().then((data) => {
			expect(data).toEqual(expected)
		})
	})

	it('can remove deck', async () => {
		const expected = {
			decks: deckTwo,
			questions: {}
		}
		await createDeck(deckOne)
		await createDeck(deckTwo)
		await removeDeck(deckOne)
		getData().then((data) => {
			expect(data).toEqual(expected)
		})
	})

	it('can submit question', async () => {
		const expected = {
			decks: {
				deck01: {
					cardCounter: 1
				}
			},
			questions: {
				deck01: { quest01: question1 }
			}
		}
		await createDeck(deckOne)
		await submitQuestion(deckOne.deck01.id, 1, question1)
		getData().then((data) => {
			expect(data).toEqual(expected)
		})
	})
})