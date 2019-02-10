import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, Divider } from 'react-native-elements'
import { purple } from '../utils/colors'

class NewQuestionView extends Component {
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
		//back to last view

	}
	onSubmit = () => {
		//save the question in the repective deck
	}
	render() {
		return <View style={styles.container}>
			<Text style={styles.header}>New Card</Text>
			<Divider style={{ backgroundColor: 'gray', height: 1 }} />
			<Input
				label = "Question"
				value={this.state.question}
				placeholder='Enter the new question'
				onChange={this.onChangeQuestionInput}
				containerStyle={styles.input}
			/>
			<Input
				label = "Answer"
				value={this.state.answer}
				placeholder='Type the correct answer'
				onChange={this.onChangeAnswerInput}
				containerStyle={styles.input}
			/>
			<View style={styles.row}>
				<Button title="Cancel" 
					containerStyle={[styles.button, {marginRight: 5}]}
					buttonStyle={{backgroundColor: 'gray'}}
					onPress={this.onCancel}/>
				<Button title="Save" 
					containerStyle={[styles.button, {marginLeft: 5}]}
					buttonStyle={{backgroundColor: purple}}
					onPress={this.onSubmit}/>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		margin: 15,
		padding: 15,
		borderRadius: 5,
	    elevation: 5,
	},
	header: {
		fontSize: 24,
		marginBottom: 10,
		color: 'gray',
		fontWeight: 'bold'

	},
	input: {
		marginTop: 5,
		marginBottom: 15
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	button: {
		flexGrow: 1,
	}
})

export default NewQuestionView