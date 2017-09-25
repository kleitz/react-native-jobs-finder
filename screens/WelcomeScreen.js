import React from 'react'
import { AsyncStorage } from 'react-native'
import _ from 'lodash'
import { AppLoading } from 'expo'

import Slides from '../components/Slides'

const SLIDES_DATA = [
  { text: 'Welcome to React Native Jobs Finder App', color: '#f0aaaa' },
  { text: 'Use this app to get jobs', color: '#aaf0aa' },
  { text: 'Swipe your location, then swipe away', color: '#aaaaf0' }
]
class WelcomeScreen extends React.Component {
  state = { token: null }

  async componentWillMount () {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
      this.props.navigation.navigate('map')
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render () {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data={SLIDES_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen
