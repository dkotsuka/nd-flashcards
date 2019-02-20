import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { mainblue } from '../utils/colors'
import { handleAddQuestion } from '../actions'
import { createCardId } from '../utils/helpers'
import TextButton from './TextButton'

class NewQuestionView extends Component {
	static navigationOptions = ({ navigation }) => {
	    return {
	      	title: navigation.getParam('name', 'NEW QUESTION').toUpperCase(),
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
		question: "",
		answer: ""
	}
	onChangeQuestionInput = (e) => {
		const question = e.nativeEvent.text
		this.setState({question})
	}
	onChangeAnswerInput = (e) => {
		const answer = e.nativeEvent.text
		this.setState({answer})
	}
	onCancel = () => {
		this.props.navigation.goBack()
	}
	onSubmit = () => {
		const { question, answer } = this.state
		const { dispatch, deck } = this.props
		if(question.length > 0 && answer.length > 0){
			const counter = deck.cardCounter + 1
			handleAddQuestion(deck.id, counter, {
				id: createCardId(),
				question,
				answer,
			})(dispatch)

			this.props.navigation.goBack()				
		} else {
			alert("Question and answer are required.")
		}
	}
	render() {
		return (
			<Card title="ADD NEW QUESTION" containerStyle={styles.container}>
				<Input
					label = "Question"
					value={this.state.question}
					placeholder='Enter the new question'
					onChange={this.onChangeQuestionInput}
					containerStyle={styles.input}
				/>
				<Input
					label = "Answer"
					multiline = {true}
					numberOfLines = {4}
					value={this.state.answer}
					placeholder='Type the correct answer'
					onChange={this.onChangeAnswerInput}
					containerStyle={styles.input}
				/>
				<View style={styles.row}>
					<TextButton
						onPress={this.onCancel}
						containerStyle={[styles.button, styles.buttonOutline]}
						textStyle={styles.textOutline}
						text="CANCEL"/>
					<TextButton
						onPress={this.onSubmit}
						containerStyle={[styles.button, styles.buttonFill]}
						textStyle={styles.textFill}
						text="SAVE"/>
				</View>
			</Card>
		)
	}
}

function mapStateToProps({decks}, {navigation}) {
	const deckId = navigation.getParam('id', null)
	return {deck: decks[deckId]}
}

export default connect(mapStateToProps)(NewQuestionView)

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
	    elevation: 3,
	},
	input: {
		marginTop: 5,
		marginBottom: 15
	},
	row: {
		flexDirection: 'row',
	},
	button: {
		height: 48,
		justifyContent: 'center',
		marginTop: 5,
		flex: 1,
		margin: 5
	},
	textFill: {
		color: "white",
		textAlign: 'center',
	},
	buttonFill: {
		backgroundColor: mainblue,
		borderRadius:5,
	},
	textOutline: {
		color: mainblue,
		textAlign: 'center',
	},
	buttonOutline: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderRadius:5,
		borderColor: mainblue,
	}
})