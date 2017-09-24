import React from 'react'
import { Dimensions, Text, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends React.Component {
  renderButton (index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title='Onwards'
          raised
          buttonStyle={{backgroundColor: '#0288d1'}}
          containerViewStyle={{marginTop: 15}}
          onPress={this.props.onComplete}
        />
      )
    }
  }
  renderSlides () {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderButton(index)}
        </View>
      )
    })
  }
  render () {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{flex: 1}}
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  }
}

export default Slides
