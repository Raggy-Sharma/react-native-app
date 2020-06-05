import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';
import { styles } from './styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const enteredGoalHandler = (inptText) => {
    setEnteredGoal(inptText)
  }

  const onAddClicked = () => {
    setGoalsList(goalsList => [...goalsList, enteredGoal]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter Text' style={styles.inputBox} onChangeText={enteredGoalHandler} value={enteredGoal}/>
        <Button title='Add' onPress={onAddClicked}/>
      </View>
      <ScrollView style={styles.goalsContainer}>
        {goalsList.map((goal, i) => <View style={styles.listItem} key={i}><Text>{i+1}. {goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}