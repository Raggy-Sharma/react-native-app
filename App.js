import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import GoalItem from './components/Goal-Item/GoalItem';
import GoalInput from './components/Goal-Input/GoalInput'

export default function App() {

  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false)


  /* 
    * Function to be called from GoalInput Comp on the press of "Add" button 
    * onAddpress is an event which will be called inside the GoalInput comp for the onPress event of the Button
  */
  const onAddClicked = (goalText) => {
    if (goalText) {
      setGoalsList(goalsList => [...goalsList, { id: goalsList.length.toString(), value: goalText }]);
      setShowModal(false)
    }
  }

  const deleteGoal = (goalId) => {
    setGoalsList(goalsList => {
      return goalsList.filter(goal => goal.id !== goalId)
    })
  }

  const closeGoalModal = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setShowModal(true)} />
      <GoalInput onAddPress={onAddClicked} isAddMode={showModal} onCancel={closeGoalModal}/>
      <FlatList keyExtractor={(item, index) => item.id} data={goalsList} renderItem={itemData => <GoalItem goalitem={itemData.item} onGoalLngPress={deleteGoal} />} style={styles.goalsContainer} />
    </View>
  );
}