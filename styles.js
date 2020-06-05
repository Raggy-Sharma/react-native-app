import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: {
        paddingTop: 100,
        paddingRight: 25,
        paddingBottom: 50,
        paddingLeft: 25,
        height: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputBox: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    goalsContainer: {
        width: '100%',
        marginVertical: 20,
    },
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#efefef'
    }
});