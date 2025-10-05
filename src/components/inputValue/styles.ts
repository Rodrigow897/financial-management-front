import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        height: 48,
        width: 173,
        backgroundColor: "#EFF0EF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E6E5',
        paddingLeft: 40,
        paddingTop: 15
        
    },
    inputContainer: {
        flexDirection: "row",
        position: "relative",
        gap: 10
    },
    nameOverlay:{
        position: "absolute",
        left: 12,
        top: "50%",
        transform: [{ translateY: -11 }], // centraliza vertical
        zIndex: 10,
        fontSize: 16,
        fontWeight: '700',
        color: '#494A49'
    },
    iconOverlay:{
        position: "absolute",
        left: 12,
        top: "50%",
        transform: [{ translateY: -11 }], // centraliza vertical
        zIndex: 10, 
  }
})

export default styles;