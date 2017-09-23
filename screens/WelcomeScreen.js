import React from 'react'
import { Text, View } from 'react-native'

import Slides from '../components/Slides'

const SLIDES_DATA = [
  { text: 'Welcome to React Native Jobs Finder App' },
  { text: 'Use this app to find jobs' },
  { text: 'Swipe your location, then swipe away' }
]
class WelcomeScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>WelcomeScreen</Text>
        <Slides data={SLIDES_DATA} />
      </View>
    )
  }
}

export default WelcomeScreen
