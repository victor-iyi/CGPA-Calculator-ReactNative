import React from 'react';
import { View, Text } from 'react-native';
import ButtonRow from './ButtonRow';
import { styles } from '../styles';

const NumberButtons = (props) => {
  return(
    <View>
      <Text style={styles.input}>{props.result}</Text>
      <Text style={styles.prompt}>{props.prompt}</Text>
      <ButtonRow controlButton={props.controlButton} clearButton={props.clearButton} buttons={ [7, 8, 9] } />
      <ButtonRow controlButton={props.controlButton} clearButton={props.clearButton} buttons={ [4, 5, 6] } />
      <ButtonRow controlButton={props.controlButton} clearButton={props.clearButton} buttons={ [1, 2, 3] } />
      <ButtonRow controlButton={props.controlButton} clearButton={props.clearButton} buttons={ ['<=', 0, '=>'] } />
    </View>
  );
};

export default NumberButtons;