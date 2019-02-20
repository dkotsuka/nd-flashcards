import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import TextButton from './TextButton'

import { connect } from 'react-redux'
import { mainblue } from '../utils/colors'

class QuizView extends Component {
	static navigationOptions = ({ navigation }) => {
	    return {
	      	title: navigation.getParam('name', 'QUIZ').toUpperCase(),
	      	headerStyle: {
		      	backgroundColor: mainblue,
		    },
		    headerTintColor: '#fff',
		    headerTitleStyle: {
		      	fontWeight: 'bold',
		  	},
	    }
	}
	state = {
		toggle: "question",
		score: 0,
		current: 0,
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	toggleView = () => {
		if(this.state.toggle === "question"){
			this.setState({
				toggle: "answer"
			})
		} else {
			this.setState({
				toggle: "question"
			})
		}
	}
	toNextQuestion() {
		const { questions, navigation } = this.props
		const { current, score } = this.state
		const deck = navigation.getParam("deck", null)
		if(questions.length - 1 > current) {
			this.setState({ current: current + 1, toggle: "question" })
		} else {
			navigation.navigate('Result', { deck, score, length: questions.length })
		}
	}
	onWrongPressed = () => {
		this.toNextQuestion()
	}
	onCorrectPressed = () => {
		const { score } = this.state
		this.setState({ score: score + 1 }, this.toNextQuestion)
	}
	render() {
		const { toggle, current } = this.state
		const { questions } = this.props

		const counter = ` - ${current + 1}/${questions.length} `

		return <Card title={toggle.toUpperCase() + counter} containerStyle={styles.card}>
			<Text style={styles.question}>
				{toggle === "question" 
				? questions[current].question
				: questions[current].answer}
			</Text>
			<TextButton 
				onPress={this.toggleView}
				containerStyle={styles.toggleButton}
				textStyle={styles.toggleButtonText}
				text={toggle === "question" 
				? "Show the answer." 
				: "Show the question."}/>
			<View style={styles.row}>
				<TextButton 
				onPress={this.onWrongPressed}
				containerStyle={styles.wrongButton}
				textStyle={styles.wrongButtonText}
				text="WRONG"/>
				<TextButton 
				onPress={this.onCorrectPressed}
				containerStyle={styles.correctButton}
				textStyle={styles.correctButtonText}
				text="CORRECT"/>
			</View>

		</Card>
	}
}

function mapStateToProps({ questions }, {navigation}) {
	const deck = navigation.getParam("deck", null)
	const list = []
	for (let key in questions[deck.id]) {
		list.push(questions[deck.id][key])
	}
	return {questions: list}
}

export default connect(mapStateToProps)(QuizView)


const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		elevation: 3
	},
	question: {
		fontSize: 18,
		textAlign: 'center'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 40
	},
	toggleButton: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: 20
	},
	toggleButtonText: {
		textAlign: 'center',
		fontSize: 16,
		color: mainblue
	},
	wrongButton: {
		height: 42,
		borderColor: mainblue,
		borderWidth: 3,
		borderRadius: 5,
		justifyContent: 'center',
		flexGrow: 1,
		marginRight: 5
	},
	wrongButtonText: {
		fontSize: 18,
		color: mainblue,
		textAlign: 'center'
	},
	correctButton: {
		height: 42,
		borderRadius: 5,
		justifyContent: 'center',
		backgroundColor: mainblue,
		flexGrow: 1,
		marginLeft: 5
	},
	correctButtonText: {
		fontSize: 18,
		color: "white",
		textAlign: 'center'
	}
})