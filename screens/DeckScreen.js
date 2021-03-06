import React from 'react'
import { Text, View, Platform } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { Button, Card, Icon } from 'react-native-elements'
import * as actions from '../actions'

import Swipe from '../components/Swipe'

class DeckScreen extends React.Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='description' size={30} color={tintColor} />
    }
  }

  renderCard (job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045
    }
    return (
      <Card
        title={job.jobtitle}
      >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            pitchEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}</Text>
      </Card>
    )
  }
  renderNoMoreCards = () => {
    return (
      <Card title='no more jobs'>
        <Button
          title='Back To Map'
          large
          icon={{ name: 'my-location' }}
          backgroundColor='#03a9f4'
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>

    )
  }
  render () {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp='jobkey'
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    )
  }
}
const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}
function mapStateToProps ({ jobs }) {
  return { jobs: jobs.results }
}

export default connect(mapStateToProps, actions)(DeckScreen)
