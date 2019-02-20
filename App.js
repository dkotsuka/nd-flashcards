import React, {Component} from 'react';
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
        <AppNavigator />
      </Provider>
    )
  }
}