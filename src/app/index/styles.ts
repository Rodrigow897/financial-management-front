import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F9FBF9",
        paddingTop: 20,
    },
    header:{
        padding: 15
    },
    logo: {
        width: 380,
        height: 360
    },
    titleBox: {
        width: "100%",
        justifyContent: "flex-start",
        paddingLeft: 34,
        paddingTop: 30,
        gap: 10
    },
    title:{
        fontSize: 16,
        fontWeight: "700"
    },
    subtitle:{
        fontSize: 14,
        fontWeight: "400"
    },
    forms: {
        padding: 24,
        gap: 16,
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
});

export default styles;