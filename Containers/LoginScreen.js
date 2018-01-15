import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Login Screen</Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Go to Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Go to Forgot Password
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Pretend we logged in
        </Text>
        <Image
          style={{width: 30, height: 30}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
      </View>
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
  linky: {
    fontWeight: 'bold',
    color: '#4C3E54',
    paddingTop: 10
  }
})