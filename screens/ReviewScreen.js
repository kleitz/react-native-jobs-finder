import React from 'react'
import { Platform, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 },
    headerRight: <Button
      title='settings'
      onPress={() => navigation.navigate('setting')}
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0, 122, 255, 1)'
      />
  })

  render () {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    )
  }
}

export default ReviewScreen
