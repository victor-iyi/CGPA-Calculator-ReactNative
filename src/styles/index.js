import { StyleSheet } from 'react-native';

const color = require('./_partials/_colors');
const componetnts = require('./_partials/_components');

const prompt = require('./_prompt');
const calc_gpa = require('./_calc_gpa');

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
  
});