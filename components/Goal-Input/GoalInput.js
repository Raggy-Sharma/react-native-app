import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { GoalInputStyles } from './goalInput.styles'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const enteredGoalHandler = (inptText) => {
        setEnteredGoal(inptText)
    }

    return (
        <View style={GoalInputStyles.inputContainer}>
            <TextInput placeholder='Enter Text' style={GoalInputStyles.inputBox} onChangeText={enteredGoalHandler} value={enteredGoal} />
            <Button title='Add'  onPress={() => props.onAddPress(enteredGoal)}/>
        </View>
    )
}

export default GoalInput;