import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../styles';

export const GPAInputRow = (props) => {
  return (
    <View style={styles.gparow}>
      {/** Courses */}
      <Text style={styles.gpaElement}>{props.course}</Text>
      {/** Grades */}
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize="characters"
        returnKeyType="next"
        spellCheck={false}
        maxLength={1}
        value={props.grade}
        style={styles.gpaInput}
        onChangeText={props.onChangeText} /> 
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        returnKeyType="next"
        maxLength={2}
        value={props.unit}
        style={styles.gpaInput}
        onChangeText={props.onChangeText} />
        
    </View>
  );
};

export default GPAInputRow;
