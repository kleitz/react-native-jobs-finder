import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { Notifications } from 'expo'
import { Alert } from 'react-native'

import registerForNotifications from './services/push_notifications'
import store from './store'
import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingScreen from './screens/SettingScreen'
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component {
  componentDidMount () {
    registerForNotifications()
    Notifications.addListener((notifications) => {
      const { data: {text}, origin } = notifications
      if (origin === 'received' && text) {
        Alert.alert(
          'new push notifications',
          text,
          [{ text: 'ok' }]
        )
      }
    })
  }
  render () {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              setting: { screen: SettingScreen }
            })
          }
        }, {
          swipeEnabled: false,
          animationEnabled: false,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: {
              fontSize: 12
            }
          }
        }
      )
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    })

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
