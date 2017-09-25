import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class SettingScreen extends React.Component {
  render () {
    return (
      <View>
        <Button
          title='sign out'
          onPress={() => AsyncStorage.removeItem('fb_token')}
        />
        <Text>SettingScreen</Text>
        <Text>SettingScreen</Text>
        <Text>SettingScreen</Text>
        <Text>SettingScreen</Text>
        <Text>SettingScreen</Text>
      </View>
    )
  }
}

export default SettingScreen
