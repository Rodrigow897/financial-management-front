import { FlatList } from "react-native";
import Month from "../month";
import { months } from "../utils/months";
import styles from "./styles";


type Props = {
    selected: string
    onChange: (category: string) => void
    ref: any;
    onScroll: (item: string, index: number) => void;
}


export function MonthList({selected, onChange, ref, onScroll}: Props) {
    return(
        <FlatList
            ref={ref}
            data={months}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <Month 
                    name={item.name}
                    isSelected={item.name === selected}
                    onPress={() => {
                        onChange(item.name);
                        onScroll(item.name, parseInt(item.id) - 1);
                    }}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
    />
    
    )
}
export default MonthList;