import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

type Props = TextInputProps &{
    icon?: keyof typeof MaterialIcons.glyphMap;
}


export function InputWithIcon({icon,...rest}: Props){
    return(
       <View style={styles.inputContainer}>
            {icon && <MaterialIcons name={icon} size={24} color="#676767" style={styles.iconOverlay}/>}
            <TextInput style={styles.input}
            secureTextEntry={false}
            placeholderTextColor={"#A1A2A1"}
            {...rest}
            ></TextInput>
        </View>
    );
} 

export default InputWithIcon;


