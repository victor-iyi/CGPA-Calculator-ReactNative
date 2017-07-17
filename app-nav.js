import { StackNavigator } from 'react-navigation'
const Screens = require('./screens')

export default StackNavigator({
  Home: { screen: Screens.HomeScreen },
  CGPA: { screen: Screens.CGPAScreen },
})
