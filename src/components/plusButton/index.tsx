import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

export function PlusButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialIcons name="add" size={30} color="#F9FBF9" />
        </TouchableOpacity>
    )
}