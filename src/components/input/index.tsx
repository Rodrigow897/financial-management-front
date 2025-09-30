import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";


export function Input({...rest}: TextInputProps){
    return(
        <TextInput style={styles.input}
        placeholderTextColor={"#A1A2A1"}
        {...rest}
        ></TextInput>
    );
} 