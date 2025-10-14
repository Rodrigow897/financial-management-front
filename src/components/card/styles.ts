import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        height: 232,
        backgroundColor: '#0F0F0F',
        borderRadius: 12,
        justifyContent: 'center',
        width: '90%',
    },
    cardContent: {
        width: '90%',
        height: '85%',
        gap: 20,
        alignItems: 'stretch',
    },
    cardHeadBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
        cardHeader: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    cardTitle: {
        color: '#F9FBF9',
        fontSize: 18,
        fontWeight: '500',
       
    },
    cardYear: {
        color: '#A1A2A1',
        fontSize: 12,
        fontWeight: '700',
    },

    button: {
        width: '100%',
        backgroundColor: '#DC54DE0D',
        height: 48,
        borderWidth: 1,
        borderColor: '#DA4BDD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText:{
        color: '#DA4BDD',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },
    cardBody: {
        gap: 14    
    },
    cardBodyText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A1A2A1'
    },
    cardFooter: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    used: {
        flexDirection: 'column',
        gap: 7,
        alignItems: 'flex-start',
    },
    usedText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#A1A2A1'
    },
    usedNumber: {
        color: '#F9FBF9',
        fontSize: 14
    },
    limit: {
        flexDirection: 'column',
        gap: 7,
        alignItems: 'flex-end',
    },
    limitText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#A1A2A1', 
    },
    limitNumber:{
        color: '#F9FBF9',
        fontSize: 14
    },
    budgetValue: {
        fontSize: 22,
        color: '#F9FBF9',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8
    }
});

export default styles