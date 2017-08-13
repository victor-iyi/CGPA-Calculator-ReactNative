import React from 'react';
import { View, Text, Picker } from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import { Select, Option } from "react-native-chooser";
import InputStepper from './InputStepper';
import { styles } from '../styles';

export const GPAInputRow = (props) => {
  return (
    <View style={styles.gparow}>

      {/** Courses **/}
      <Text style={styles.courseLabel}> {props.course} </Text>

      {/** Grades **/}
      <InputStepper
        value={props.gradeValue}
        onIncrement={props.onGradeIncrease}
        onDecrement={props.onGradeDecrease}
      />

      {/** Units **/}
      <InputStepper
        value={props.unitValue}
        onIncrement={props.onUnitIncrease}
        onDecrement={props.onUnitDecrease}
      />

    </View>
  );
};

export default GPAInputRow;
