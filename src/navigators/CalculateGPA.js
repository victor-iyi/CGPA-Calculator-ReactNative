import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { GPAInputRow } from '../components';
import { styles } from '../styles';

/**
 *************************************
 *        Naviagtor Component        *
 *************************************
 */
class CalulateGPA extends Component {

  constructor (props) {
    super(props);
    // component state
    this.state = {
      grades: [], // entered grades e.g ["A", "B", "C", ...., "D"];
      units: [], // entered units e.g [2,3,3,3,4,1,2,3,3];
    };
    // navigation params
    this.params = this.props.navigation.state.params;
    //
    this.GRADES = ['A', 'B', 'C', 'D', 'E', 'F'];
    this.UNITS = [0, 1, 2, 3, 4, 5, 6];
    this.grades = [];
    this.units = [];
    for (let i = 0; i < this.params.semesters; i++) {
      this.grades.push("A");
      this.units.push(0);
    }
    // bindings
    this._onGradeChange = this
      ._onGradeChange
      .bind(this);
    this._onUnitChange = this
      ._onUnitChange
      .bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Calulate GPA`, //`$ {navigation.state.params.var }`
    // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
  });

  _onGradeChange (index, action = 'inc') {
    let currVal = this.grades[index], // current value of the grade we are working with
      stateDex = this.GRADES.indexOf(currVal), // grade state index
      newDex = action === 'inc' ? stateDex + 1 : stateDex - 1; // index of new value to be incremented to
    if (newDex < this.GRADES.length && newDex > -1) {
      this.grades[index] = this.GRADES[newDex]; // set it to the next available grade
      this.setState((prev, props) => {
        return { grades: this.grades };
      });
    }
  }

  _onUnitChange (index, action = 'inc') {
    let currVal = this.units[index], // current value of the unit we are working with
      stateDex = this.UNITS.indexOf(currVal), // unit state index
      newDex = action === 'inc' ? stateDex + 1 : stateDex - 1; // index of new value to be incremented to
    if (newDex < this.UNITS.length && newDex > -1) {
      this.units[index] = this.UNITS[newDex]; // set it to the next available unit
      this.setState((prev, props) => {
        return { units: this.units };
      });
    }
  }
  
  _calculate () {
    // calculates the gpa
  }

  renderInputRow (number) {
    let views = [];
    for (let i = 1; i <= this.params.semesters; i++) {
      views.push(<GPAInputRow
        key={i}
        course={`Course ${i}`}
        gradeValue={this.grades[i - 1]}
        unitValue={this.units[i - 1]}
        onUnitIncrease={(v) => this._onUnitChange(i - 1, 'inc')}
        onUnitDecrease={(v) => this._onUnitChange(i - 1, 'dec')}
        onGradeIncrease={(v) => this._onGradeChange(i - 1, 'inc')}
        onGradeDecrease={(v) => this._onGradeChange(i - 1, 'dec')} />);
    }
    return views;
  }

  render () {
    return (
      <ScrollView style={[styles.container, styles.calcGPAContainer]}>
        <View>
          {this.renderInputRow()}
        </View>
        <Button raised icon={{ name: 'calculator', type: 'font-awesome' }} style={styles.calcButton} title="Calculate" onPress={this._calculate} />
      </ScrollView>
    );
  }

}

export default CalulateGPA;