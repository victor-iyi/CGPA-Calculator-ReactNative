import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../styles';

/**
 * Input stepper increases or decreases a value by 1 by default.
 * @param {object} props 
 */
const InputStepper = (props) => {

  return (
    <View style={styles.inputStepperContainer}>

      {/* Increment button (+) */}
      <TouchableOpacity
        onPress={props.onIncrement}>
        <View style={styles.inputStepperIncrease}>
          <Text style={styles.inputStepperControlText}>{ props.increaseValue || '–-' }</Text>
        </View>
      </TouchableOpacity>

      {/* Value (+) */}
      <Text style={styles.inputStepperValue}>{ props.value }</Text>

      {/* Decrement button (-) */}
      <TouchableOpacity
        onPress={props.onDecrement}>
        <View style={styles.inputStepperDecrease}>
          <Text style={styles.inputStepperControlText}>{ props.decreaseValue || '+' }</Text>
        </View>
      </TouchableOpacity>

    </View>
  );

};

export default InputStepper;