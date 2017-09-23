import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: <Button title='settings' onPress={() => navigation.navigate('setting')} />
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
