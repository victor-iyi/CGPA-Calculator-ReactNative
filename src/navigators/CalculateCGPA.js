import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LevelCard } from '../components';
import { styles } from '../styles';

/**
 *************************************
 *        Navigator Component        *
 *************************************
 */
class CalculateCGPA extends Component {

  constructor (props) {
    super(props);
    // component state
    this.state = {};
    // navigation params
    this.params = this.props.navigation.state.params;
    // bindings
    //this.meth = this.meth.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `CalculateCGPA Page`, //`$ {navigation.state.params.var }`
    // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
  });

  render () {
    return (
      <View style={styles.container}>
        <LevelCard level="100" firstSemester={null} secondSemester={null} />
        <LevelCard level="200" firstSemester={null} secondSemester={null} />
      </View>
    );
  }

}

export default CalculateCGPA;