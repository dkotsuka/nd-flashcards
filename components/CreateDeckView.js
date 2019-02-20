import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Input, Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { mainblue } from '../utils/colors'
import { createDeck } from '../utils/api'
import { createDeckId } from '../utils/helpers'
import { addDeck } from '../actions'

class CreateDeckView extends Component {
	static navigationOptions = {
	    header: null,
	    tabBarLabel: 'New deck'
	 }
	 
	state = {
		title: "",
	}

	onChangeTitleInput = (e) => {
		const title = e.nativeEvent.text
		this.setState({title})
	}
	onSubmit = () => {

		if(this.state.title.length > 0) {
			const id = createDeckId()
			const name = this.state.title
			const newDeck = {[id]: {id, name, cardCounter: 0 }}

			createDeck(newDeck)
			.then(() => {
				this.props.dispatch(addDeck(newDeck))
				this.props.navigation.navigate('Deck',{id, name})
			})			
		} else {
			alert("Title is required to create a new deck!")
		}
		
		
	}
	render() {
		return (
			<Card title="CREATE NEW DECK" containerStyle={styles.container}>
				<Input
					label = "TITLE"
					maxLength={15}
					value={this.state.title}
					placeholder='Enter the deck name'
					containerStyle={styles.input}
					onChange={this.onChangeTitleInput}
				/>
				<Button
			        onPress={this.onSubmit} 
			        title="CREATE"
			        color={mainblue}/>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius:5
	},
	input: {
		marginTop: 5,
		marginBottom: 15
	},
	buttonContainer:{
		borderRadius:5,
		backgroundColor: mainblue
	},
	buttonText: {
		textAlign: 'center',
		lineHeight: 40,
		height: 40,
		color: 'white',
	}
})

export default connect()(CreateDeckView)