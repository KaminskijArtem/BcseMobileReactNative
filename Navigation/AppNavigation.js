import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Screen1 from '../Containers/Screen1'
import Screen2 from '../Containers/Screen2'
import Screen3 from '../Containers/Screen3'
import DrawerContainer from '../Containers/DrawerContainer'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }>Menu</Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'BcseMobileApp',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

const PrimaryNav = StackNavigator({
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'Main',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav