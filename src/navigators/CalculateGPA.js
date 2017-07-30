import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { GPAInputRow } from '../components';

class CalculateGPA extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Calculate GPA',
  });
  
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <View style={styles.gparow}>
          <Text style={styles.gpaHeading}>COURSES</Text>
          <Text style={styles.gpaHeading}>GRADES</Text>
          <Text style={styles.gpaHeading}>UNITS</Text>
        </View>
        <GPAInputRow course="Course 1" grade="A" unit={3} />        
        <GPAInputRow course="Course 2" grade="B" unit={3} />        
        <GPAInputRow course="Course 3" grade="B" unit={3} />        
        <GPAInputRow course="Course 4" grade="A" unit={4} />        
        <GPAInputRow course="Course 5" grade="C" unit={2} />        
        <GPAInputRow course="Course 6" grade="A" unit={2} />
      </View>
    );
  }

}

export default CalculateGPA;