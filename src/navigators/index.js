import { StackNavigator, TabNavigator } from 'react-navigation';
import CGPAPrompt from './CGPAPrompt';
import GPAPrompt from './GPAPrompt';
import CalculateCGPA from './CalculateCGPA'; 
import CalculateGPA from './CalculateGPA'; 

// Prompt tab navigator
const Prompt = TabNavigator({
  GPAPrompt: { screen: GPAPrompt, },
  CGPAPrompt: { screen: CGPAPrompt, },
});

Prompt.navigationOptions = {
  title: 'CGPA Calculator',
};

/**
 * Main App Navigator
 */
export default StackNavigator({
  Prompt: {
    screen: Prompt,
  },
  CalculateCGPA: {
    screen: CalculateCGPA,
  },
  CalculateGPA: {
    screen: CalculateGPA,
  },
});