
import { Pressable, PressableProps, Text, View } from 'react-native';
import styles from './styles';

type props = PressableProps & {
    name: string;
    isSelected?: boolean;
}

export function Month({name, isSelected, ...rest}: props){
    const color = isSelected ? '#DA4BDD' : '#2e2f2eff';
    return (
        <Pressable style={styles.container} {...rest}> 
            <Text style={[styles.name, {color}]} >{name}</Text>
            {isSelected && <View style={styles.line} />}
        </Pressable>
    )
}

export default Month