import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type props = {
    id: string,
    name?: string,
    category: string,
    value: number,
    date: string,
    icon: keyof typeof MaterialIcons.glyphMap,
    onDelete: (id: string) => void;
    color?: string;
}

export function Release({id, name, category, value, date, icon, color, onDelete, ...rest}: props){
    return (
        <View style={styles.container} {...rest}>
            <View style={styles.left}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.right}>
                <Text>R$ </Text>
                <View style={styles.valueContainer}>
                <Text style={styles.value}>{value.toFixed(2)}</Text>
                <MaterialIcons name={icon}  color={icon=== 'arrow-drop-up' ? color='#1FA342' : color='#D93A4A'} size={24}/>
                </View>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <MaterialIcons name='delete-outline' size={24} color='#ff0000ff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Release