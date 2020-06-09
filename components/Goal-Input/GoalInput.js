import React, { useState } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import { GoalInputStyles } from './goalInput.styles'


/* * */
const GoalInput = props => {

    /*  
        * onAddpress is the custom event in App.js which is sent as props to be triggered on the onPress event
        * the onAddpress taeks an arg "enteredGoal" which can be accessed in two waus
            -> onPress={() => props.onAddPress(enteredGoal)}
            -> onPress={props.onAddPress.bind(this, enteredGoal)}
    */
    const [enteredGoal, setEnteredGoal] = useState('');
    const enteredGoalHandler = (inptText) => {
        setEnteredGoal(inptText)
    }

    const AddGoalHandler = () => {
        props.onAddPress(enteredGoal);
        setEnteredGoal('');
    }

    const closeModal = () => {
        setEnteredGoal('');
        props.onCancel();
    }

    return (
        <Modal style={GoalInputStyles.goalInpModal} visible={props.isAddMode} animationType='slide'>
            <View style={GoalInputStyles.inputContainer}>
                <TextInput placeholder='Enter Text' style={GoalInputStyles.inputBox} onChangeText={enteredGoalHandler} value={enteredGoal} />
                <View style={GoalInputStyles.btnContainer}>
                    <View style={GoalInputStyles.modalBtn}><Button title='Add' onPress={AddGoalHandler} /></View>
                    <View style={GoalInputStyles.modalBtn}><Button title='Cancel' color="#f00" onPress={closeModal}/></View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;