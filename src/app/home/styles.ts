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
    backgroundColor: '#F9FBF9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#D93A4A',
    alignItems: 'center',
  },

    blurBackground: {
    backgroundColor: 'rgba(197, 196, 196, 0.25)',
    height: 300,
    borderRadius: 10,
  },
  modalContent: {
    width: '90%',
    marginTop: 40
  },
  modalTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10
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
  valueInputContainer:{
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  inOutContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 20
  },
  inButton: {
    borderWidth: 1,
    borderColor: '#1FA342',
    backgroundColor: '#1FA3420D',
    borderRadius: 8,
    height: 44,
    width: 173,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  outButton: {
    borderWidth: 1,
    borderColor: '#D93A4A',
    backgroundColor: '#D93A4A0D',
    borderRadius: 8,
    height: 44,
    width: 173,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inText: {
    color: '#1FA342',
    fontWeight: '700',
    fontSize: 14,
  },
  outText: {
    color: '#D93A4A',
    fontWeight: '700',
    fontSize: 14,
  },
  selectedButtonIn: {
  backgroundColor: '#1FA342', // ou outra cor destacada
  borderWidth: 1,
  borderColor: '#1FA342',
},
selectedButtonOut: {
  backgroundColor: '#d32c2cff', // ou outra cor destacada
  borderWidth: 1,
  borderColor: '#d32c2cff',
},
selectedText: {
  color: '#fff',
},
emptyContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F9FBF9',
    borderRadius: 10,
    height: 64,
    borderWidth: 1,
    borderColor: '#dcdddcff'
  },
  emptyIcon:{
    paddingRight: 10
  },
  emptyText: {
    color: '#676767',
    fontSize: 13,
    fontWeight: '400'
  }
})

export default styles