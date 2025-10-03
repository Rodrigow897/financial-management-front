import Release from "@/components/releaseOne";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";




type ReleaseType = {
    id: string;
    title: string;
    subtitle: string;
};

export function ReleasesList() {
    const [releases, setReleases] = useState<ReleaseType[]>([]);

    const addRelease = (title: string, subtitle: string) => {
        const newRelease: ReleaseType = {
            id: Date.now().toString(), // id automático
            title,
            subtitle,
        };
        setReleases([...releases, newRelease]);
    };

    const EmptyListMessage = () => (
        <View style={styles.emptyContainer}>
            <MaterialIcons style={styles.emptyIcon} name="sticky-note-2" size={30} color="#676767"/>
            <Text style={styles.emptyText}>Você ainda não registrou despesas ou receitas {"\n"} neste mês</Text>
        </View>
    );

    return (
        <>
            <FlatList
                data={releases}
                renderItem={({ item }) => (
                    <Release title={item.title} subtitle={item.subtitle} />
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={EmptyListMessage}
            />
        </>
    );
}

export default ReleasesList;
