import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { purple } from '../utils/colors'
import { createDeck } from '../utils/api'
import { createDeckId } from '../utils/helpers'
import { addDeck } from '../actions'

class CreateDeckView extends Component {
	state = {
		title: "",
	}
	onChangeTitleInput = (e) => {
		const title = e.nativeEvent.text
		this.setState({title})
	}
	onSubmit = () => {
		
		const id = createDeckId()
		const newDeck = {[id]: {name: this.state.title}}

		this.props.dispatch(addDeck(newDeck))
		createDeck(newDeck)

		//TODO: redirect to individual view of new deck.
	}
	render() {
		return <View style={styles.container}>
			<Text style={styles.header}>New Deck</Text>
			<Divider style={{ backgroundColor: 'gray', height: 1 }} />
			<Input
				label = "Title"
				value={this.state.title}
				placeholder='Enter the deck name'
				containerStyle={styles.input}
				onChange={this.onChangeTitleInput}
			/>
			<Button title="CREATE NEW DECK" 
				containerStyle={[styles.button]}
				buttonStyle={{backgroundColor: purple}}
				onPress={this.onSubmit}/>
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

export default connect()(CreateDeckView)