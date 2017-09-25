import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions'

class SettingScreen extends React.Component {
  render () {
    return (
      <View>
        <Button
          title='Reset Liked Jobs'
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor='#f44336'
          onPress={this.props.clearLikedJobs}
        />
        <Button
          title='sign out'
          backgroundColor='rgba(0,0,0,0.8)'
          onPress={() => AsyncStorage.removeItem('fb_token')}
        />
      </View>
    )
  }
}

export default connect(null, { clearLikedJobs })(SettingScreen)
