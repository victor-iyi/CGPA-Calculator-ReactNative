import React, { Component } from 'react'
import { View, Button, TouchableHighlight, Text, Alert, TouchableNativeFeedback, Platform } from 'react-native'
import { styles } from '../../styles'

export default class ButtonRow extends Component {

  constructor(props) {
    super(props)
  }

  _onButtonPress() {
    Alert.alert('You just touched me!')
  }

  calcButtonRow() {
    return (
      this.props.buttons.map((title, index) => {
        // return <Button key={index}   style={styles.button}
        //                title={title} onPress={this._onButtonPress} />
        // return (
        //   <TouchableHighlight onPress={this._onButtonPress} underlayColor="white">
        //     <View style={styles.button}>
        //       <Text style={styles.buttonText}>TouchableHighlight</Text>
        //     </View>
        //   </TouchableHighlight>
        // )
        return (
          <TouchableNativeFeedback
           key={index}
           onPress={this._onPressButton}
           background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>{title}</Text>
         </View>
       </TouchableNativeFeedback>
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        { this.calcButtonRow() }
      </View>
    )
  }

}
