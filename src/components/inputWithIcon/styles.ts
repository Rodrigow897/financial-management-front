import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        height: 52,
        width: 340,
        maxWidth: 340,
        backgroundColor: "#EFF0EF",
        borderRadius: 8,
        color: "#7b7c7bff",
        fontSize: 16,
        padding: 10,
        paddingRight: 40
    },
    inputContainer: {
        flexDirection: "row",
        position: "relative",
        width: "100%",  
  },
  iconOverlay:{
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -11 }], // centraliza vertical
    zIndex: 10, 
  }
});

export default styles;