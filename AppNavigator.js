import { StackNavigator } from 'react-navigation';
const Screens = require('./src/components')

export default StackNavigator({
  Home: { screen: Screens.HomeScreen },
  CalcCGPA: { screen: Screens.CalcCGPA },
});
