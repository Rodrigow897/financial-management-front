import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type Props = {
  id: string;
  name: string;
  year: string;
  value: number;
  onDelete: (id: string) => void;
};

export default function Budget({ id, name, year, value, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialIcons name='calendar-month' size={24} color='#676767' />
        <Text style={{ fontWeight: '700', fontSize: 16 }}>{name}</Text>
        <Text>{year}</Text>
      </View>

      <View style={styles.right}>
        <Text style={{ fontWeight: '500', fontSize: 15 }}>R$</Text>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>
          {value.toFixed(2)}
        </Text>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <MaterialIcons name='delete-outline' size={24} color='#ff0000ff' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
