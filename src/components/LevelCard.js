import React from 'react'; 
import { View, Text, TextInput } from 'react-native'; 
import { styles } from '../styles';

const LevelCard = (props) => {

    return (
      <View style={styles.levelCard}>
        <Text style={styles.levelTitle}> {props.level} LEVEL </Text>
        <View style={styles.semesterRow}>
          <Text style={styles.semester}> 1st Semester </Text>
          <TextInput style={styles.semesterInput}
              placeholder="1st Semester's GPA"
              onChangeText={props.firstSemester} />
        </View>
        <View style={styles.semesterRow}>
          <Text style={styles.semester}> 2nd Semester </Text>
          <TextInput style={styles.semesterInput}
              placeholder="2nd Semester's GPA"
              onChangeText={props.secondSemester} />
        </View>
      </View>
    );

};

export default LevelCard;