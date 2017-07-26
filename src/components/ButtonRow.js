import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { styles } from '../styles';

// render each button
const renderButton = (props) => {
  return props.buttons.map((title, index) => {
    return (
      <Button
        key={index}
        title={title}
        onPress={() => typeof title === 'number' ? props.clearButton(title) : props.controlButton(title)}
      />
    );
  });
};

// Button Row
const ButtonRow = (props) => {
  return (
    <View style={styles.buttonContainer}>
      { renderButton(props) }
    </View>
  );
};

export default ButtonRow;
