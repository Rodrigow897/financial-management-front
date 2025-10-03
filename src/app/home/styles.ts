import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#EFF0EF"
    },
    row: {
    marginTop: 2,
    height: 2,
    width: "100%",
    backgroundColor: "purple", // cor da linha
    borderRadius: 2,
  },
  counterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F9FBF9',
    borderRadius: 10,
    height: 50
  },
  counterTitle: {
    color: '#676767',
   fontSize: 10
  },
  counterNumber: {
    width: 30,
    height: 20,
    borderRadius: 30,
    backgroundColor: '#E5E6E5',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles