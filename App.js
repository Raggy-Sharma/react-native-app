import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import GoalItem from './components/Goal-Item/GoalItem';
import GoalInput from './components/Goal-Input/GoalInput'

export default function App() {
  
  const [goalsList, setGoalsList] = useState([]);

  const onAddClicked = (goalText) => {
    setGoalsList(goalsList => [...goalsList, {id: goalsList.length.toString(), value:goalText}]);
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddPress={onAddClicked}/>
      <FlatList keyExtractor={(item, index) => item.id} data={goalsList} renderItem={itemData => <GoalItem itemText={itemData.item.value} />} style={styles.goalsContainer} />
    </View>
  );
}