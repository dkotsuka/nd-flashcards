import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import TextButton from './TextButton'

import { mainblue } from '../utils/colors'

class ResultView extends Component {
	static navigationOptions = ({ navigation }) => {
	    return {
	      	title: navigation.getParam('name', 'Results').toUpperCase(),
	      	headerStyle: {
		      	backgroundColor: mainblue,
		    },
		    headerTintColor: '#fff',
		    headerTitleStyle: {
		      	fontWeight: 'bold',
		  	},
	    }
	}
	onPressRestart = () => {
		const { navigation } = this.props
		const deck = navigation.getParam('deck', null)
		navigation.push('Quiz', { deck })
	}
	onPressBackToList = () => {
		this.props.navigation.navigate('Main')
	}
	render(){
		const { navigation } = this.props
		const deck = navigation.getParam('deck', null)
		const score = navigation.getParam('score', null)
		const length = navigation.getParam('length', null)

		return <Card title="FINAL SCORE" containerStyle={styles.card}>
			<Text style={styles.info}>DECK: {deck.name.toUpperCase()}</Text>
			<Text style={styles.info}>CARDS: {deck.cardCounter}</Text>
			<Text style={[styles.score, styles.scorePercent]}>{
				`${Math.floor( score / length * 100 )}%`
			}</Text>
			<Text style={[styles.score, styles.scoreCounter]}>{`${score} of ${length}`}</Text>
			<TextButton 
				onPress={this.onPressRestart}
				containerStyle={styles.restartButton}
				textStyle={styles.restartButtonText}
				text="RESTART"/>
			<TextButton 
				onPress={this.onPressBackToList}
				containerStyle={styles.backButton}
				textStyle={styles.backButtonText}
				text="TO MAIN"/>
		</Card>
	}
}

export default ResultView

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		elevation: 3
	},
	info: {
		textTransform: 'uppercase'
	},
	score: {
		textAlign: 'center'
	},
	scorePercent: {
		fontSize: 60
	},
	scoreCounter: {
		fontSize: 18,
	},
	restartButton: {
		height: 42,
		borderColor: mainblue,
		borderWidth: 3,
		borderRadius: 5,
		justifyContent: 'center',
		marginTop: 10,
	},
	restartButtonText: {
		fontSize: 18,
		color: mainblue,
		textAlign: 'center'
	},
	backButton: {
		height: 42,
		borderRadius: 5,
		justifyContent: 'center',
		backgroundColor: mainblue,
		marginTop: 5,
	},
	backButtonText: {
		fontSize: 18,
		color: "white",
		textAlign: 'center'
	}
})