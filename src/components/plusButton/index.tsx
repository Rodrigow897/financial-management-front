import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
    onOpen: () => void
}


export function PlusButton({onOpen}: Props) {
    return (
        <TouchableOpacity style={styles.container}
            onPress={onOpen}>
            <MaterialIcons name="add" size={30} color="#F9FBF9" />
        </TouchableOpacity>
    )
}

export default PlusButton;