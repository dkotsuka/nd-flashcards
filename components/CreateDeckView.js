import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
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
	static navigationOptions = {
	    header: null,
	 }
	onChangeTitleInput = (e) => {
		const title = e.nativeEvent.text
		this.setState({title})
	}
	onSubmit = () => {
		
		const id = createDeckId()
		const newDeck = {[id]: {id: id, name: this.state.title }}

		this.props.dispatch(addDeck(newDeck))
		createDeck(newDeck)

		//TODO: redirect to individual view of new deck.
	}
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View style={styles.cardContainer}>
					<Text style={styles.header}>Create New Deck</Text>
					<Divider style={{ backgroundColor: 'gray', height: 1 }} />
					<Input
						label = "Title"
						maxLength={30}
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
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardContainer: {
		alignSelf: 'stretch',
		margin: 5,
		marginBottom: 30,
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