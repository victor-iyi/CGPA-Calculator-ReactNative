import { StackNavigator } from 'react-native';
import Home from './Home'; 
import CGPA from './CGPA'; 

export default StackNavigator({
  Home: { 
    screen: Home,
  },
  CGPA: {
    screen: CGPA,
  },
});