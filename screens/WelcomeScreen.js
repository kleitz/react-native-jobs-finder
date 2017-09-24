import React from 'react'

import Slides from '../components/Slides'

const SLIDES_DATA = [
  { text: 'Welcome to React Native Jobs Finder App', color: '#f0aaaa' },
  { text: 'Use this app to get jobs', color: '#aaf0aa' },
  { text: 'Swipe your location, then swipe away', color: '#aaaaf0' }
]
class WelcomeScreen extends React.Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render () {
    return (
      <Slides data={SLIDES_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen
