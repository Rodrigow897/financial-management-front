import { Text, View } from 'react-native';
import styles from './styles';

type props = {
    name: string,
    category: string,
    value: number
}

export function Release({name, category, value, ...rest}: props){
    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.value}>R$ {value}</Text>
        </View>
    )
}

export default Release