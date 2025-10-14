import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type props = {
    id: string,
    name: string,
    category: string,
    value: number,
    onDelete: (id: string) => void;
}

export function Release({id, name, category, value, onDelete, ...rest}: props){
    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.value}>R$ {value}</Text>
            <TouchableOpacity onPress={() => onDelete(id)}>
                <MaterialIcons name='delete-outline' size={24} color='#ff0000ff' />
            </TouchableOpacity>
        </View>
    )
}

export default Release