import { Text, View } from 'react-native';
import styles from './styles';

type props = {
    title: string
    subtitle: string
    id: string
}

export function Release({title, subtitle, ...rest}: props){
    return (
        <View style={styles.container} {...rest}> 
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default Release