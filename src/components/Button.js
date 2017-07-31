import React from 'react'; 
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform, Image } from 'react-native'; 
import { styles } from '../styles';

/**
 * Custom Button component
 * @param {title, onPress (optional: type, styles.button, styles.buttonText)} props 
 */
const Button = (props) => {
  props.type = props.type || 'default';
  if ( props.type === 'img' || props.type === 'image' )
    return ( // returns button with image background
      <TouchableOpacity 
          onPress={props.onPress}>
        <View style={props.button || styles.button}>
          <Image source={props.source} style={{ width: 95, height: 95 }}>
            <Text style={props.buttonText || styles.buttonText}>{props.title}</Text>
          </Image>
        </View>
      </TouchableOpacity>
    );
  else 
    return ( // returns default button
      <TouchableNativeFeedback
          onPress={props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style={props.button || styles.button}>
          <Text style={props.buttonText || styles.buttonText}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
};

export default Button; 