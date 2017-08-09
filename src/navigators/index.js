import { TabNavigator, StackNavigator } from 'react-navigation';
import GPAPrompt from './GPAPrompt';
import CGPAPrompt from './CGPAPrompt';
import CalculateGPA from './CalculateGPA';
import CalculateCGPA from './CalculateCGPA';

// Prompt tab navigator
const Prompt = TabNavigator({
  GPAPrompt: {
    screen: GPAPrompt
  },
  CGPAPrompt: {
    screen: CGPAPrompt
  }
});
// Prompt options
Prompt.navigationOptions = {
  title: 'CGPA Calculator'
};

/**
/**************************
 * Main App Navigator     *
 **************************
 */
export default StackNavigator({
  // Prompt Page
  Prompt: {
    screen: Prompt
  },
  // CalculateGPA Page
  CalculateGPA: {
    screen: CalculateGPA
  },
  // CalculateCGPA Page
  CalculateCGPA: {
    screen: CalculateCGPA
  }
});
