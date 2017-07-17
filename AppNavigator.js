import { StackNavigator } from 'react-navigation';
const Screens = require('./src/components')

export default StackNavigator({
  Home: { screen: Screens.HomeScreen },
  CGPA: { screen: Screens.CalcCGPA },
});
