import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    right:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
});

export default styles;