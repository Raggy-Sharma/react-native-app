import { StyleSheet } from 'react-native';

export const GoalInputStyles = StyleSheet.create({
    goalInpModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    inputBox: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        width: '80%'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    modalBtn: { 
        marginHorizontal: 5, 
        flex: 1 
    }

})