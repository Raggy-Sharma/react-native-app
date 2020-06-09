import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GoalItemStyles from './GoalItem.styles'

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onGoalLngPress.bind(this, props.goalitem.id)}>
      <View style={GoalItemStyles.listItem}>
        <Text>{props.goalitem.value}</Text>
      </View>
    </TouchableOpacity>

  );
};

export default GoalItem;
