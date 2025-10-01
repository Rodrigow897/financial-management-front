import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
    title: string
    subtitle: string
    source: any
}
export function Perfil({title, subtitle, source, ...rest}: Props){
    return(
        <View style={styles.header}>
            <Image style={styles.Image} source={source}/>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>OLÁ, {title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity {...rest}><MaterialIcons name="logout" size={24} color="black" /></TouchableOpacity>
            </View>
    );
}