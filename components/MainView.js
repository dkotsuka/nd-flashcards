import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import DeckListView from './DeckListView'
import CreateDeckView from './CreateDeckView'
import { 
	createStackNavigator, 
	createMaterialTopTabNavigator, 
	createAppContainer,
	createSwitchNavigator 
} from 'react-navigation';

const DeckList = createStackNavigator({
 	screen: DeckListView },{
 	navigationOptions: {
 		tabBarLabel: 'All decks',
 	}
})

const CreateDeck = createStackNavigator({
 	screen: CreateDeckView },{
 	navigationOptions: {
 		tabBarLabel: 'New deck',
 	}
})

const MainView = createMaterialTopTabNavigator({
  DeckList,
  CreateDeck,
})

export default MainView