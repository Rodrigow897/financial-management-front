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
  releasesContainer: {
    height: '50%',
    maxHeight: '50%',
    width: '90%',
  },
  counterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F9FBF9',
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#dcdddcff'
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
  },
   modal: {
    flex: 1,
    padding: 40,
    backgroundColor: '#F9FBF9',
    borderRadius: 20
  },
    blurBackground: {
    flex: 1,
    
  },
  modalContent: {
    
  },
  modalTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  modalTitleText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#0F0F0F'
  },
  modalInputs: {
    gap:10,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
})

export default styles