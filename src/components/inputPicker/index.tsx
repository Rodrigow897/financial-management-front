import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import styles from "./styles";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  placeholder?: string;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: string[];
};

export function InputPicker({
  icon,
  placeholder,
  selectedValue,
  onValueChange,
  options,
}: Props) {
  return (
    <View style={styles.inputContainer}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.input}
        dropdownIconColor="transparent" // oculta o ícone padrão do Picker
      >
        <Picker.Item label={placeholder || "Selecione..."} value="" />
        {options.map((opt) => (
          <Picker.Item key={opt} label={opt} value={opt} />
        ))}
      </Picker>

      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color="#676767"
          style={styles.iconOverlay}
        />
      )}
    </View>
  );
}

export default InputPicker;
