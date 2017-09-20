import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import ReviewScreen from './screens/ReviewScreen'
import SettingScreen from './screens/SettingScreen'
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component {
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
          animationEnabled: false
        }
      )
      }
    })

    return (
      <MainNavigator />
    )
  }
}
