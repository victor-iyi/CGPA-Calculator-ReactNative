import React from 'react';
import { View, Text } from 'react-native';
import ButtonRow from './ButtonRow';
import { styles } from '../styles';

const PropmptLayout = (props) => {
  return(
    <View>
      <Text style={styles.input}>{props.result}</Text>
      <Text style={styles.prompt}>{props.prompt}</Text>
      <ButtonRow type="number" numButton={props.numButton} buttons={ [7, 8, 9] } />
      <ButtonRow type="number" numButton={props.numButton} buttons={ [4, 5, 6] } />
      <ButtonRow type="number" numButton={props.numButton} buttons={ [1, 2, 3] } />
      <ButtonRow type="control" numButton={props.numButton} controlButton={props.controlButton} buttons={ ['', 0, ''] } />
    </View>
  );
};

export default PropmptLayout;