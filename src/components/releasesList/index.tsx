import Release from "@/components/releaseOne";
import { FlatList } from "react-native";
import styles from "./styles";




type Props = {
    data: any[];
    onDelete: (id: string) => void;
    listEmpyComponent: any;

    }

export function ReleasesList({data, onDelete, listEmpyComponent}: Props) {

    return (
        <>
            <FlatList style={styles.list}
                data={data}
                renderItem={({ item }) => (
                    <Release
                    id={item.id}
                    name={item.name} 
                    date={item.date}
                    icon={item.icon}
                    category={item.category} 
                    value={item.value}
                    onDelete={onDelete}
                    />
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={listEmpyComponent}
            />
        </>
    );
}

export default ReleasesList;
