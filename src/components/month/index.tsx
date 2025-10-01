
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, PressableProps, Text } from 'react-native';
import styles from './styles';

type props = PressableProps & {
    name: string;
    isSelected?: boolean;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Month({name, icon, isSelected, ...rest}: props){
    const color = isSelected ? '#DA4BDD' : '#A1A2A1';
    return (
        <Pressable style={styles.container} {...rest}> 
            <MaterialIcons name={icon} size={16} color={color} />
            <Text style={[styles.name, {color}]} >{name}</Text>
        </Pressable>
    )
}

export default Month