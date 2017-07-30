import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

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
        <View style={styles.gparow}>
          <Text style={styles.gpaElement}>Course 1</Text>
          <Text style={styles.gpaElement}>B</Text>
          <Text style={styles.gpaElement}>2</Text>
        </View>
        <View style={styles.gparow}>
          <Text style={styles.gpaElement}>Course 2</Text>
          <Text style={styles.gpaElement}>A</Text>
          <Text style={styles.gpaElement}>3</Text>
        </View>
      </View>
    );
  }

}

export default CalculateGPA;