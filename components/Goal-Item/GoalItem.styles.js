import { StyleSheet } from 'react-native';

const GoalItemStyles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        // backgroundColor: '#a3d1ad',
        shadowColor: "#98f5ad",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    }
})

export default GoalItemStyles;