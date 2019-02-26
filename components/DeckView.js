import React, {Component}  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { 
	createStackNavigator, 
} from 'react-navigation'
import { mainblue } from '../utils/colors'
import TextButton from './TextButton'
import { getData, removeDeck } from '../utils/api'
import { receiveQuestions, deleteDeck } from '../actions'

class DeckView extends Component {
	static navigationOptions = ({ navigation }) => {
	    return {
	      	title: navigation.getParam('name', 'Deck Details').toUpperCase(),
	      	headerStyle: {
		      	backgroundColor: mainblue,
		    },
		    headerTintColor: '#fff',
		    headerTitleStyle: {
		      	fontWeight: 'bold',
		  	},
	    }
	}
	componentDidMount() {
		const { deck, dispatch } = this.props
		getData().then(({questions}) => {
			dispatch(receiveQuestions(questions))
		}).catch((err) => console.log(err))
	}
	onPressDelete = () => {
		const { navigation, deck, dispatch } = this.props
		removeDeck(deck.id).then(() => {
			dispatch(deleteDeck(deck.id))
			navigation.navigate( "Main")
		}).catch((err) => console.log(err))
	}
	onPressAddQuestion = () => {
		const { navigation, deck } = this.props
		navigation.navigate( "NewQuestion", { id: deck.id, name: deck.name })
	}
	onPressStartQuiz = () => {
		const { navigation, deck } = this.props
		navigation.navigate( "Quiz", { deck })
	}
	render(){
		const {deck} = this.props
		return <Card title="INFO" containerStyle={styles.container}>
			{typeof deck === 'undefined' ? <Text >empty</Text> : (
				<View style={styles.row}>
					<View >
						<Text style={styles.labels}>NAME:</Text>
						<Text style={styles.labels}>CARDS:</Text>
					</View>
					<View>
						<Text style={styles.values}>{deck.name}</Text>
						<Text style={styles.values}>{deck.cardCounter}</Text>
					</View>
				</View>
			)}

			<TextButton
				onPress={this.onPressDelete}
				containerStyle={styles.button}
				textStyle={styles.deleteText}
				text={"DELETE DECK"}/>
			<TextButton
				onPress={this.onPressAddQuestion}
				containerStyle={[styles.button, styles.buttonOutline]}
				textStyle={styles.textOutline}
				text={"ADD QUESTION"}/>
			<TextButton
				onPress={this.onPressStartQuiz}
				containerStyle={[styles.button, styles.buttonFill]}
				textStyle={styles.textFill}
				text={"START QUIZ"}/> 
		</Card>
	}
}

function mapStateToProps({ decks }, {navigation}) {
	const id = navigation.getParam('id','noId')
	return {deck: decks[id]}
}

export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		elevation: 3
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15
	},
	labels: {
		fontWeight: 'bold'
	},
	values: {
		textAlign: 'right',
	},
	button: {
		height: 48,
		justifyContent: 'center',
		marginTop: 5
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
	},
	deleteText: {
		color: 'red',
		textAlign: 'center',
	}
})