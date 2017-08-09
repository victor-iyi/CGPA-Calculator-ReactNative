import React from 'react';
import { View, Text, Picker } from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import { Select, Option } from "react-native-chooser";
import { styles } from '../styles';

export const GPAInputRow = (props) => {
  return (
    <View style={styles.gparow}>

      <Text style={styles.courseLabel}> {props.course} </Text>

      {/* 
       * 
      <Select
        onSelect={props.onGradeChange}
        defaultText="Grade"
        style={styles.gpaGrade}
        backdropStyle={{ backgroundColor: "#d3d5d6" }}
        optionListStyle={{ backgroundColor: "#F5FCFF" }}>
        <Option value={{ label: "A", weight:5 }}>A</Option>
        <Option value={{ label: "B", weight:4 }}>B</Option>
        <Option value={{ label: "C", weight:3 }}>C</Option>
        <Option value={{ label: "D", weight:2 }}>D</Option>
        <Option value={{ label: "E", weight:1 }}>E</Option>
        <Option value={{ label: "F", weight:0 }}>F</Option>
      </Select>
       */}

      <UIStepper
        minimumValue={0}
        maximumValue={5}
        displayValue={true}
        tintColor="#0a0a0a"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        borderWidth={.5}
        fontSize={20}
        height={30}
        width={100}
        overrideTintColor={true}
        onValueChange={props.onGradeChange}
      />
      <UIStepper
        minimumValue={0}
        displayValue={true}
        tintColor="#0a0a0a"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        borderWidth={.5}
        fontSize={20}
        height={30}
        width={100}
        overrideTintColor={true}
        onValueChange={props.onUnitChange}
      />

    </View>
  );
};

export default GPAInputRow;
