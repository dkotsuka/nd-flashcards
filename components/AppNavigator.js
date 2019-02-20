import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainView from './MainView'
import DeckView from './DeckView'
import NewQuestionView from './NewQuestionView'
import QuizView from './QuizView'
import ResultView from './ResultView'

export default createAppContainer(createStackNavigator(
	{
		Main: MainView,
		Deck: DeckView,
		NewQuestion: NewQuestionView,
		Quiz: QuizView,
		Result: ResultView
	},
	{
    	initialRouteName: "Main"
	}
)) 