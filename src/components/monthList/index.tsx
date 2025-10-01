import { FlatList } from "react-native";
import Month from "../month";
import styles from "./styles";


type Props = {
    selected: string
    onChange: (category: string) => void
}


export function MonthList({selected, onChange}: Props) {
    return(
        <FlatList 
            data={[
                {name: "Janeiro", id: "1"},
                {name: "Fevereiro", id: "2"},
                {name: "Março", id: "3"},
                {name: "Abril", id: "4"},
                {name: "Maio", id: "5"},
                {name: "Junho", id: "6"},
                {name: "Julho", id: "7"},
                {name: "Agosto", id: "8"},
                {name: "Setembro", id: "9"},
                {name: "Outubro", id: "10"},
                {name: "Novembro", id: "11"},
                {name: "Dezembro", id: "12"},]}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <Month 
                    name={item.name}
                    isSelected={item.name === selected}
                    onPress={() => onChange(item.name)} icon={"filter"}/>  
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
    />
    
    )
}