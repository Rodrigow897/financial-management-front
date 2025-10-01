import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        header: {
        flexDirection: "row",
        width: "100%",
        height: "15%",
        paddingTop: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#F9FBF9"
    },
    Image: {
        height: 48,
        width: 48,
        borderRadius: 50
    },
    titleBox: {
        paddingRight: 40
    },
    title:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#0F0F0F"
    },
    subtitle: {
        fontSize: 14,
        color: "#676767"
    }
});

export default styles