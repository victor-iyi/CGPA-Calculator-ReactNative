import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

const LevelCard = (props) => {

  if (props.semesters === 1) {

    return (<View style={styles.levelCard}>
      <Text style={styles.levelTitle}> {props.level} LEVEL </Text>
      <View style={styles.semesterRow}>
        <Text style={styles.semester}> 1st Semester </Text>
        <TextInput style={styles.semesterInput}
          maxLength={4}
          keyboardType="numeric"
          placeholder="1st Semester's GPA"
          onChangeText={(v) => props.onChangeText(v)} />
      </View>
    </View>);

  } else {

    return (
      <View style={styles.levelCard}>
        <Text style={styles.levelTitle}> {props.level} LEVEL </Text>
        <View style={styles.semesterRow}>
          <Text style={styles.semester}> 1st Semester </Text>
          <TextInput style={styles.semesterInput}
            maxLength={4}
            keyboardType="numeric"
            placeholder="1st Semester's GPA"
            onChangeText={(v) => props.onChangeText(v)} />
        </View>
        <View style={styles.semesterRow}>
          <Text style={styles.semester}> 2nd Semester </Text>
          <TextInput style={styles.semesterInput}
            keyboardType="numeric"
            maxLength={4}
            placeholder="2nd Semester's GPA"
            onChangeText={(v) => props.onChangeText(v)} />
        </View>
      </View>
    );

  }

};

export default LevelCard;