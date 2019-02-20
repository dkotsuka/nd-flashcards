import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckListView from './DeckListView'
import CreateDeckView from './CreateDeckView'
import { 
	createMaterialTopTabNavigator, 
	createAppContainer,
	createSwitchNavigator 
} from 'react-navigation'
import { mainblue } from '../utils/colors'

const MainView = createMaterialTopTabNavigator({
	DeckListView,
	CreateDeckView,
},{
	tabBarOptions: {
		activeTintColor : mainblue,
		inactiveTintColor: mainblue,
		tabStyle: {
			borderTopWidth: 2,
			borderBottomWidth: 2,
			borderColor: mainblue,

		},
		style:{
			backgroundColor: 'white'
		},
		indicatorStyle:{
			borderColor: mainblue,
			borderWidth: 3,
		}
	}
})

MainView.navigationOptions = {
	title: "FLASH CARDS",
	headerStyle: {
      backgroundColor: mainblue,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
	
}

export default MainView