import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
      counter: 1,
      grades: [],
      units: []
    };
    // navigation params
    this.params = this.props.navigation.state.params;
    // bindings
    this._updateGrade = this
      ._updateGrade
      .bind(this);
    this._updateUnit = this
      ._updateUnit
      .bind(this);
  }

  static navigationOptions = ({navigation}) => ({
    title: `Calulate GPA`, //`$ {navigation.state.params.var }`
    // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
  });

  _updateGrade() {}

  _updateUnit() {}

  renderInputRow(number) {
    let views = [];
    for (let i = 1; i <= this.params.semesters; i++) {
      views.push(<GPAInputRow
        course={`Course ${i}`}
        grade={this.state.grades[i]}
        unit={this.state.units[i]}/>);
    }
    return views;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gparow}>
          <Text style={styles.gpaHeading}>COURSES</Text>
          <Text style={styles.gpaHeading}>GRADES</Text>
          <Text style={styles.gpaHeading}>UNITS</Text>
        </View>
        <View>
          {this.renderInputRow()}
        </View>
      </View>
    );
  }

}

export default CalulateGPA;