import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 52,
        maxHeight: 52,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F9FBF9',
        borderWidth: 2,
        borderColor: '#EFF0EF',
    },
    name: {

    },
    category: {
        fontSize: 14,
        color: '#0F0F0F',
        fontWeight: '700'
    },
    value: {
        fontSize: 16,
        color: '#0F0F0F',
        fontWeight: '700',
        maxWidth: 80,
    },
    valueContainer:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'right'
    },
    date:{
        fontSize: 12,
        color: '#676767',
        fontWeight: '400'
    },
    left:{

    },
    right:{
        flexDirection: 'row',
        gap: 5,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
    },
});

export default styles;