import React, {
  Component
} from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import {
  LevelCard
} from '../components';
import {
  styles
} from '../styles';

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
    this.gpas = [];
    for (let i = 0; i < this.params.semesters; i++)
      this.gpas.push(0.00);
    // bindings
    this._updateGPA = this._updateGPA.bind(this);
    this._calculate = this._calculate.bind(this);
  }

  static navigationOptions = ({
    navigation
  }) => ({
      title: `Calculate CGPA for ${navigation.state.params.semesters} semesters`, //`$ {navigation.state.params.var}`
      // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
    });


  _updateGPA (index, gpa) {
    // TODO: update GPA list
    console.log(`index = ${index} -> gpa = ${gpa}`);
  }

  _calculate () {
    // calculates CGPA
  }

  renderLevel () {
    const views = []
    const sessions = Math.ceil(this.params.semesters / 2);
    for (let i = 0; i < sessions; i++) {
      const level = `${i + 1}00`,
        semesters = i + 1 === sessions && this.params.semesters % 2 !== 0 ? 1 : 2;
      views.push(< LevelCard key={
        i
      }
        semesters={
          semesters
        }
        level={
          level
        }
        onChangeText={
          (sem, value) => {
            console.log('i', i, 'sem', sem);
            this._updateGPA(index, value);
          }
        }
      />);
    }
    return views;
  }

  render () {
    return (<ScrollView style={styles.container}>
      <View style={styles.calcCGPAContainer} >
        this.renderLevel() }
         <Button raised icon={{ name: 'calculator', type: 'font-awesome' }} style={styles.calcButton}
          title="Calculate" onPress={this._calculate}
        />
      </View>
    </ScrollView>
    );
  }

}

export default CalculateCGPA;