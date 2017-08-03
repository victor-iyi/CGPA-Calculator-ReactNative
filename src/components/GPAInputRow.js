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
        style={styles.gpaInput} />
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        returnKeyType="next"
        maxLength={1}
        onChangeText={props.updateUnit}
        style={styles.gpaInput} />
        
    </View>
  );
};

export default GPAInputRow;
