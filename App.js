import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import MainView from './components/MainView'
import { blue } from './utils/colors'
import AppNavigator from './components/AppNavigator'
import middleware from './middleware'

export default class App extends Component {
  render() {
    const store = createStore(reducer, middleware)
    return (
      <Provider store={store}>
        <View style={{height: StatusBar.currentHeight, backgroundColor: blue}}/>
        <AppNavigator />
      </Provider>
    )
  }
}
