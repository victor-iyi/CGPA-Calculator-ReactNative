import { StackNavigator, TabNavigator } from 'react-navigation';
import CGPAPrompt from './CGPAPrompt';
import GPAPrompt from './GPAPrompt';
import CGPA from './CGPA'; 

// Prompt tab
const Prompt = TabNavigator({
  GPAPrompt: { screen: GPAPrompt, },
  CGPAPrompt: { screen: CGPAPrompt, },
});

Prompt.navigationOptions = {
  title: 'CGPA Calculator',
};

export default StackNavigator({
  Prompt: {
    screen: Prompt,
  },
  CGPA: {
    screen: CGPA,
  },
});