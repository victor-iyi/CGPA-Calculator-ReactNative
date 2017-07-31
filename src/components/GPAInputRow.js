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
          underlineColorAndroid="transparent"
          autoCapitalize="characters"
          returnKeyType="next"
          autoCorrect={false}
          spellCheck={false}
          maxLength={1}
          value={props.grade}
          onChangeText={props.onChangeText} />
      {/** Units */}
      <TextInput style={styles.gpaInput}
          maxLength={2}
          value={props.unit}
          returnKeyType="next"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={props.onChangeText} />
        
      </View>
  );
};

export default GPAInputRow;