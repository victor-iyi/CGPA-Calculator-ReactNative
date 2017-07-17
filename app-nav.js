import { StackNavigator } from 'react-navigation';
const Screens = require('./src/screens')

export default StackNavigator({
  Home: { screen: Screens.HomeScreen },
  CGPA: { screen: Screens.CGPAScreen },
});
