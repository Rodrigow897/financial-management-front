import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    height: 52,
    width: "100%",
    backgroundColor: "#EFF0EF",
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E6E5",
    color: "#333",
  },
  iconOverlay: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -12 }], // centraliza verticalmente
    zIndex: 10,
  },
});

export default styles;
