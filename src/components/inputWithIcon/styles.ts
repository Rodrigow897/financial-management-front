import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        height: 52,
        width: '100%',
        backgroundColor: "#EFF0EF",
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E5E6E5',
    },
    inputContainer: {
        flexDirection: "row",
        position: "relative",
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