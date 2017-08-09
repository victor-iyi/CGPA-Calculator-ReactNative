import React from 'react';
import {View, Text, Picker} from 'react-native';
import {styles} from '../styles';

export const GPAInputRow = (props) => {
  return (
    <View style={styles.gparow}>
      <Text style={styles.courseLabel}> Course 1 </Text>
      <Picker
        selectedValue="A"
        onValueChange={props.onValueChange}>
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C" value="C" />
        <Picker.Item label="D" value="D" />
        <Picker.Item label="E" value="E" />
        <Picker.Item label="F" value="F" />
      </Picker>
      
    </View>
  );
};

export default GPAInputRow;
