import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        
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
});

export default styles;