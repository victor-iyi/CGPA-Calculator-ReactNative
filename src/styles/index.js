import { StyleSheet } from 'react-native';

import color from './_partials/_colors';
import component from './_partials/_components';

import prompt from './_prompt';
import calc_gpa from './_calc_gpa';
import calc_cgpa from './_calc_cgpa';

/**
 ******************************************
 *        Application's StyleSheet        *
 ******************************************
 */
export const styles = StyleSheet.create({
  // General Styling
  wrapper: {
    flex: 1,
    paddingTop: 23,
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: color.white,
  },
  ...componetnts, // contains styling for custom components
  ...prompt, // contains prompt styling
  ...calc_gpa, // contains calc_gpa styling
  ...calc_cgpa, // contains calc_cgpa styling
  
});