import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './Redux'

import ReduxNavigation from './Navigation/ReduxNavigation'

const store = createStore()


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Text</Text>
          <ReduxNavigation />
        </View>
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
})