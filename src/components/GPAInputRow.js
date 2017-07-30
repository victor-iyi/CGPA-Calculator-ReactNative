import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export const GPAInputRow = (props) => {
  return(
    <View style={styles.gparow}>
        <Text style={styles.gpaElement}>{props.course}</Text>
        <Text style={styles.gpaElement}>{props.grade}</Text>
        <Text style={styles.gpaElement}>{props.unit}</Text>
      </View>
  );
};

export default GPAInputRow;