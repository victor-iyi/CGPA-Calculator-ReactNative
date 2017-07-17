import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../../styles';

export default class ButtonRow extends Component {

  constructor(props) {
    super(props);
  }


  calcButtonRow() {
    return (
      this.props.buttons.map((title, index) => {
        return (
          <TouchableNativeFeedback
           key={index}
           onPress={() => typeof title === 'number' ? this.props.nButton(title) : this.props.cButton(title)}
           background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>{title}</Text>
           </View>
         </TouchableNativeFeedback>
       );
      })
    );
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        { this.calcButtonRow() }
      </View>
    );
  }

}
