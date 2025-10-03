import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, } from "react-native";
import styles from "./styles";


type Props = {
    name: string
    year: number
    used: number
    limit: number
}

export function Card({name, year, used, limit}: Props){
    return(
        <View style={styles.card}>
            
            <View style={styles.cardContent}>

                <View style={styles.cardHeadBox}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>{name}</Text>
                        <Text style={styles.cardYear}>  / {year}</Text>
                    </View>

                    <TouchableOpacity>
                                <MaterialIcons name="settings" size={24} color="#F9FBF9"/>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.cardBody}>
                        <Text style={styles.cardBodyText}>Orçamento disponivel</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Definir orçamento</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardFooter}>
                        <View style={styles.used}>
                            <Text style={styles.usedText}>Usado</Text>
                            <Text style={styles.usedNumber}>R$ {used.toFixed(2)}</Text>
                        </View>

                        <View style={styles.limit}>
                            <Text style={styles.limitText}>Limite</Text>
                            <Text style={styles.limitNumber}>R$ {limit.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}

export default Card;