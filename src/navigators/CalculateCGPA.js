import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
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

  renderLevel () {
    let views = []
    for (let i = 0; i < this.params.sessions; i++) {
      let level = `${i + 1}00`;
      views.push(<LevelCard key={i} semesters={2} level={level} onChangeText={this._updateGPA} />);
    }
    return views;
  }

  _updateGPA (gpa) {

  }

  _calculate () {
    // calculates CGPA
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.renderLevel()}
        <Button raised icon={{ name: 'calculator', type: 'font-awesome' }} style={styles.calcButton} title="Calculate" onPress={this._calculate} />
      </ScrollView>
    );
  }

}

export default CalculateCGPA;