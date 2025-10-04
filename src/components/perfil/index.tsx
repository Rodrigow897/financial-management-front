import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
    title: string
    subtitle: string
    source: any
    backLogin?: () => void
}
export function Perfil({title, subtitle, source, backLogin, ...rest}: Props){
    return(
        <View style={styles.header}>
            <Image style={styles.Image} source={source}/>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Olá, {title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity onPress={backLogin} {...rest}><MaterialIcons name="logout" size={24} color="black" /></TouchableOpacity>
            </View>
    );
}