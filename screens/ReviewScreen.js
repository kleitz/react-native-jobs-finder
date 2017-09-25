import React from 'react'
import { Platform, Text, ScrollView, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux'

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
  renderLikedJobs () {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={{fontStyle: 'italic'}}>{job.company}</Text>
              <Text style={{fontStyle: 'italic'}}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      )
    })
  }
  render () {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps (state) {
  return {likedJobs: state.likes}
}

export default connect(mapStateToProps)(ReviewScreen)
