import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF0EF',
        alignItems: 'center',
    },
    header:{
        height: 136,
        paddingTop: 30,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 25,
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#F9FBF9'
    },
    titleText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0F0F0F'
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#676767'
    },
    form: {
        width: '90%',
        height: 200,
        backgroundColor: '#F9FBF9',
        marginTop: 25,
        alignItems: 'center',
    },
    formTitle: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 40,
        paddingTop: 10
    },
    formTitleText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#676767'
    },
    formInputs: {
        width: '90%',
        flexDirection: 'row',
        height: 50,
        gap: 10,
        marginTop: 20
    },
    
});

export default styles;