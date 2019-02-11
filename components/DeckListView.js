import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import EmptyListView from './EmptyListView'
import { getData } from '../utils/api'
import { receiveData } from '../actions'

class DeckListView extends Component {
	static navigationOptions = {
	    header: null,
	}

	componentDidMount() {
		getData().then((res) => {
			if(!res['undefined']){
				this.props.dispatch(receiveData(res))
			}
		})
	}

	render() {
		return <View style={{flex: 1}}>
			{this.props.decks
				? this.props.decks.map((deck) => {
					return <Text key={deck.id}>{deck.name}</Text>
				})
				: <EmptyListView/>
			}
		</View>
	}
}

function mapStateToProps(state) {
	const keys = Object.keys(state)
	const list = []

	for (let i in keys) {
		list.push(state[keys[i]])
	}

	if(list.length > 0) {
		return {decks: list}
	} else {
		return {decks: null}
	}
}

export default connect(mapStateToProps)(DeckListView)