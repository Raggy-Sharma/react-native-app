import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GoalItemStyles from './GoalItem.styles'

const GoalItem = props => {
  return (
    <View style={GoalItemStyles.listItem}>
      <Text>{props.itemText}</Text>
    </View>
  );
};

export default GoalItem;
