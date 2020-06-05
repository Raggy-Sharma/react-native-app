import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import GoalItem from './components/Goal-Item/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const enteredGoalHandler = (inptText) => {
    setEnteredGoal(inptText)
  }

  const onAddClicked = () => {
    setGoalsList(goalsList => [...goalsList, {id: goalsList.length.toString(), value:enteredGoal}]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter Text' style={styles.inputBox} onChangeText={enteredGoalHandler} value={enteredGoal} />
        <Button title='Add' onPress={onAddClicked} />
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={goalsList} renderItem={itemData => <GoalItem itemText={itemData.item.value} />} style={styles.goalsContainer} />
    </View>
  );
}