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
        onChangeText={props.updateGrade}
        // value={props.grade}
        style={styles.gpaInput} />
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        returnKeyType="next"
        maxLength={1}
        onChangeText={props.updateUnit}
        // value={props.unit}
        style={styles.gpaInput} />
        
    </View>
  );
};

export default GPAInputRow;
