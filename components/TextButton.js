import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

export default function TextButton(props) {
	return (
		<TouchableNativeFeedback
			onPress={props.onPress}
			background={TouchableNativeFeedback.SelectableBackground()}>
			<View style={props.containerStyle}>
				<Text style={props.textStyle}>{props.text}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}