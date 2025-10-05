import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    onClick?: () => void
}

export function Button({title, onClick,...rest}: Props){
    return(
        <TouchableOpacity onPress={onClick} style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;