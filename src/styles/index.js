import { StyleSheet } from 'react-native';

const color = require('./_partials/_colors');
const componetnts = require('./_partials/_components');

const home = require('./_home');

export const styles = StyleSheet.create({
  // General Styling
  wrapper: {
    flex: 1,
    paddingTop: 23,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: color.white,
  },
  ...componetnts, // contains styling for custom components
  ...home, // contains home styling
  
});