import React from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import {styles} from '../styles';

// render each button
const renderButton = (props) => {

  const btn = [
    {
      type: "clear",
      img: require('../../img/btn-backspace.png')
    }, {
      type: "number",
      img: require('../../img/btn-numbers.png')
    }, {
      type: "go",
      img: require('../../img/btn-forward.png')
    }
  ];
  // renders number buttons
  if (props.type === 'number') {
    return props
      .buttons
      .map((title, index) => {
        return (
          <Button
            key={index}
            title={title}
            type='image'
            source={btn[1].img}
            onPress={() => props.numButton(title)} />
        );
      });
  } 
  else {  // renders the control button
    return props
      .buttons
      .map((title, index) => {
        return (
          <Button
            key={index}
            title={title}
            type='image'
            source={btn[index].img}
            onPress={() => index === 1 ? props.numButton(title) : props.controlButton(btn[index].type)} />
        );
      });
  }

}; // end renderButton

// Button Row
const ButtonRow = (props) => {
  return (
    <View style={styles.buttonRow}>
      {renderButton(props)}
    </View>
  );
};

export default ButtonRow;
