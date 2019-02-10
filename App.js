import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import QuizView from './components/QuizView'
import MainView from './components/MainView'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
          <View style={styles.container}>
            <MainView />
          </View>
        </KeyboardAvoidingView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
