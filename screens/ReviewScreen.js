import React from 'react'
import { Linking, Platform, Text, ScrollView, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'

class ReviewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerTitle: 'Review Jobs',
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 },
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='favorite' size={30} color={tintColor} />
    },
    headerRight: <Button
      title='settings'
      onPress={() => navigation.navigate('setting')}
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0, 122, 255, 1)'
      />
  })
  renderLikedJobs () {
    return this.props.likedJobs.map(job => {
      const {
        company, formattedRelativeTime, url,
        latitude, longitude, jobtitle, jobkey
      } = job
      const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }
      return (
        <Card
          title={jobtitle}
          key={jobkey}
        >
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled
              scrollEnabled={false}
              pitchEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={{fontStyle: 'italic'}}>{company}</Text>
              <Text style={{fontStyle: 'italic'}}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title='Apply Now!'
              backgroundColor='#03a9f4'
              onPress={() => Linking.openURL(url)}
            />
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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps (state) {
  return {likedJobs: state.likes}
}

export default connect(mapStateToProps)(ReviewScreen)
