import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

class CalculateCGPA extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Calculate CGPA',
  });
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text> CalcCGPA screen {params.sessions} </Text>
      </View>
    );
  }

}

export default CalculateCGPA;