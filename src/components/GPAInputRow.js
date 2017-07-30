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
          value={props.grade}
          autoCorrect={false}
          returnKeyType="next"
          spellCheck={false}
          maxLength={1}
          keyboardType="ascii-capable"
          autoCapitalize="characters"
          underlineColorAndroid="transparent"
          style={{textAlignVertical: 'bottom'}}
          onChangeText={props.onChangeText} />
      {/** Units */}
      <TextInput style={styles.gpaInput}
          maxLength={1}
          value={props.unit}
          returnKeyType="next"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          style={{textAlignVertical: 'bottom'}}
          onChangeText={props.onChangeText} />
        
      </View>
  );
};

export default GPAInputRow;