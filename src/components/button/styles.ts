import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        backgroundColor: "#DA4BDD",
        borderRadius: 8,
        color: "#F9FBF9",
        fontSize: 16,
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "700",
        color: "#F9FBF9"
    }
});

export default styles;