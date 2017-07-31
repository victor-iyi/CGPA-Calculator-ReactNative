import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

export const GPAInputRow = (props) => {
  return(
    <View style={styles.gparow}>
      {/** Courses */}
      <Text style={styles.gpaElement}>{props.course}</Text>
      {/** Grades */}
      <TextInput style={styles.gpaInput}
          maxLength={1}
          spellCheck={false}
          autoCorrect={false}
          returnKeyType="next"
          autoCapitalize="characters"
          keyboardType="ascii-capable"
          underlineColorAndroid="transparent"
          value={props.grade}
          onChangeText={props.onChangeText} />
      {/** Units */}
      <TextInput style={styles.gpaInput}
          maxLength={1}
          value={props.unit}
          returnKeyType="next"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={props.onChangeText} />
        
      </View>
  );
};

export default GPAInputRow;