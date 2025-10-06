import { FlatList } from "react-native";
import Month from "../month";
import { months } from "../utils/months";
import styles from "./styles";


type Props = {
    selected: string
    onChange: (category: string) => void
}


export function MonthList({selected, onChange}: Props) {
    return(
        <FlatList 
            data={months}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <Month 
                    name={item.name}
                    isSelected={item.name === selected}
                    onPress={() => onChange(item.name)}/>  
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
    />
    
    )
}
export default MonthList;