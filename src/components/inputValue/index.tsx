import { MaterialIcons } from "@expo/vector-icons";
import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

type Props = TextInputProps &{
    icon?: keyof typeof MaterialIcons.glyphMap;
    name?: string
}



export function InputValue({icon, name,...rest}:Props){
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.nameOverlay}>{name}</Text>
            <MaterialIcons style={styles.iconOverlay} name={icon} size={24} color='#676767'/>
            <TextInput style={styles.input}
                secureTextEntry={false}
                placeholderTextColor={"#A1A2A1"}
                {...rest}
            ></TextInput>
        </View>
    );
} 

export default InputValue;