import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import { styles } from '../styles';

// render each button
const renderButton = (buttons) => {
  return
    buttons.map((title, index) => {
      return (
        <Button
          key={index}
          title={title}
          onPress={() => typeof title === 'number' ? this.props.nButton(title) : this.props.cButton(title)}
        />
      );
    });
};

// Button Row
const ButtonRow = ({buttons}) => {
  return (
    <View style={styles.buttonContainer}>
      { renderButton(buttons) }
    </View>
  );
};

export default ButtonRow;
