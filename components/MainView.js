import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckListView from './DeckListView'
import CreateDeckView from './CreateDeckView'
import { 
	createStackNavigator, 
	createMaterialTopTabNavigator, 
	createAppContainer,
	createSwitchNavigator 
} from 'react-navigation';

const DeckList = createStackNavigator({
 	screen: DeckListView,
})

DeckList.navigationOptions = {
 	tabBarLabel: 'My decks',
}

const CreateDeck = createStackNavigator({
 	screen: CreateDeckView,
})

DeckList.navigationOptions = {
 	tabBarLabel: 'New deck',
}

const MainView = createMaterialTopTabNavigator({
  Home: DeckListView,
  Create: CreateDeckView,
})

export default createAppContainer(MainView)