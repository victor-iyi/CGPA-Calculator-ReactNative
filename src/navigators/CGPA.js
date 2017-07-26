import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

class CGPA extends Component {

  static navigationOptions = {
    title: 'Calculate CGPA',
  };

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text> CalcCGPA screen {params.semesters} </Text>
      </View>
    );
  }

}

export default CGPA;