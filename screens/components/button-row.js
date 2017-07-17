import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Platform, Text, Alert } from 'react-native';
import { styles } from '../../styles'

export default class ButtonRow extends Component {

  _buttonPressed() {
    Alert.alert('Cool!')
  }

  renderButtons() {
    return this.props.buttons.map( (title, index) => {
      return (
        <TouchableNativeFeedback key={index}
         onPress={this._buttonPressed}
         background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    })
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        {this.renderButtons()}
      </View>
    )
  }

}
