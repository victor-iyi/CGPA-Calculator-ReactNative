import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements'; 
import {GPAInputRow} from '../components';
import {styles} from '../styles';

/**
 *************************************
 *        Naviagtor Component        *
 *************************************
 */
class CalulateGPA extends Component {

  constructor(props) {
    super(props);
    // component state
    this.state = {
      grades: [], // entered grades e.g ["A", "B", "C", ...., "D"];
      units: [] // entered units e.g [2,3,3,3,4,1,2,3,3];
    };
    // navigation params
    this.params = this.props.navigation.state.params;
    // bindings
    this._onGradeChange = this
      ._onGradeChange
      .bind(this);
    this._onUnitChange = this
      ._onUnitChange
      .bind(this);
  }

  static navigationOptions = ({navigation}) => ({
    title: `Calulate GPA`, //`$ {navigation.state.params.var }`
    // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
  });

  _onGradeChange(value, index) {
    this.setState((prev, props) => {
      return {
        grades: [
          ...prev.grades,
          value
        ]
      };
    });
  }

  _onUnitChange(value, index) {
    this.setState((prev, props) => {
      return {
        units: [
          ...prev.units,
          value
        ]
      };
    });
  }

  _calculate() {
    // calculates the gpa
  }

  renderInputRow(number) {
    let views = [];
    for (let i = 1; i <= this.params.semesters; i++) {
      views.push(<GPAInputRow
        key={i}
        course={`Course ${i}`}
        onUnitChange={this._onUnitChange}
        onGradeChange={this._onGradeChange}/>);
    }
    return views;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      {/* 
       * 
        <View style={styles.gparow}>
          <Text style={styles.gpaHeading}>COURSES</Text>
          <Text style={styles.gpaHeading}>GRADES</Text>
          <Text style={styles.gpaHeading}>UNITS</Text>
        </View>
       */}
      
        <View>
          {this.renderInputRow()}
        </View>
        <View>
          <Button raised icon={{name: 'calculator', type: 'font-awesome'}}title="Calculate" onPress={this._calculate} />
        </View>
      </ScrollView>
    );
  }

}

export default CalulateGPA;