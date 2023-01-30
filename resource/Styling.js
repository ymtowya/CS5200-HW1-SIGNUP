import { StyleSheet } from "react-native";


const myStyling = StyleSheet.create({
    myCardo: {
        justifyContent: 'center',
        marginTop: 40,
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: '#FFF8DC',
        elevation: 20,
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowOpacity: 10,
        borderRadius: 10
    },
    inputBox: {
        borderBottomWidth: 1,
        height: 40,
        margin: 5,
        padding: 12,
        minWidth: 160,
        backgroundColor: '#FFFAFA',
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold'
    },
    warningText: {
        color: 'red'
    },

});

export default myStyling;