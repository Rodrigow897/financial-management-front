
import { Pressable, PressableProps, Text } from 'react-native';
import styles from './styles';

type props = PressableProps & {
    name: string;
    isSelected?: boolean;
}

export function Month({name, isSelected, ...rest}: props){
    const color = isSelected ? '#DA4BDD' : '#A1A2A1';
    return (
        <Pressable style={styles.container} {...rest}> 
            <Text style={[styles.name, {color}]} >{name}</Text>
        </Pressable>
    )
}

export default Month