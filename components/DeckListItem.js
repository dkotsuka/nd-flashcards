import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { Divider } from 'react-native-elements'
import { connect } from 'react-redux'

class DeckListItem extends Component {
	render(){
		const {deck, onPress} = this.props
		return <TouchableOpacity onPress={onPress}>
			<Card title={deck.name.toUpperCase()} containerStyle={styles.container}>
				<Text style={styles.counter}>Current cards: {deck.cardCounter}</Text>
			</Card>
		</TouchableOpacity>
	}
	
}

function mapStateToProps({ decks }, {id}) {
	return {deck: decks[id]}
}

export default connect(mapStateToProps)(DeckListItem)

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
	},
	counter: {
		fontSize: 16,
		color: 'gray',
		textAlign: 'right'
	}
})