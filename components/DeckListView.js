import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import EmptyListView from './EmptyListView'
import DeckListItem from './DeckListItem'
import { getData } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckListView extends Component {
	static navigationOptions = {
	    header: null,
	    tabBarLabel: 'All decks',
	}

	componentDidMount() {
		getData().then(({decks}) => {
			this.props.dispatch(receiveDecks(decks))
		})
	}

	navigate = ({id, name}) => {
		this.props.navigation.navigate('Deck',{id, name})
	}

	render() {
		const { decks } = this.props
		return <View style={{flex: 1}}>
			{decks
				? <FlatList 
					data={decks}
					keyExtractor={(item) => item.id}
					renderItem={({item}) => 
						<DeckListItem key={item.id} id={item.id} 
							onPress={() => this.navigate({ id: item.id, name: item.name })}/>
					}/>
				: <EmptyListView/>
			}
		</View>
	}
}

function mapStateToProps({decks}) {
	const keys = Object.keys(decks)
	const list = []

	for (let i in keys) {
		list.push(decks[keys[i]])
	}
	if(list.length > 0) {
		return {decks: list}
	} else {
		return {decks: null}
	}
}

export default connect(mapStateToProps)(DeckListView)