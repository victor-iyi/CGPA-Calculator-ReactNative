import React from 'react';
import { View, Text, Picker } from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import Dropdown from 'react-native-dropdown-android';
import { styles } from '../styles';

export const GPAInputRow = (props) => {
  return (
    <View style={styles.gparow}>
      <Text style={styles.courseLabel}> {props.course} </Text>
      <Dropdown
        style={{ height: 20, width: 200 }}
        values={['--Choose--', 'one', 2, 3.5, { four: 4 }, [5, 6, 7], false]}
        selected={1} onChange={(data) => { console.log(data); }} />
      <UIStepper
        minimumValue={0}
        displayValue={true}
        tintColor="#0a0a0a"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        overrideTintColor={true}
        onValueChange={props.onUnitChange}
      />
    </View>
  );
};

export default GPAInputRow;
