import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function EmptyListView(argument) {
	return <View style={styles.container}>
		<Text style={styles.text}>Your list is empty.</Text>
		<Text style={styles.text}>Why don't you create a new deck?</Text>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		color: 'gray'
	}
})