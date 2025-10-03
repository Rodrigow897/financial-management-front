import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: 52,
        borderRadius: 50,
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 }
    },
});

export default styles;