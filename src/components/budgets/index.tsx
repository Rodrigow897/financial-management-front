import { FlatList } from "react-native";
import Budjet from "../budget";
import styles from "./styles";

type Props = {
  data: any[];
  onDelete: (id: string) => void;
}

export function BudgetList({data, onDelete}: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Budjet
          id={item.id}
          name={item.name}
          year={item.year}
          value={item.value}
          onDelete={onDelete}
        />
      )}
                
                  style={styles.container}
                  contentContainerStyle={{flexGrow: 1, gap: 10}}
                  showsVerticalScrollIndicator={true}
    />
  );
}

export default BudgetList;
