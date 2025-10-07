import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  placeholder?: string;
  style?: any;
};

export function DataPicker({ icon = "calendar-today",style, placeholder }: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) setDate(selectedDate);
  };

  const showDatePicker = () => setShowPicker(true);

  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color="#676767"
          style={styles.iconOverlay}
        />
      )}
      <Pressable onPress={showDatePicker}>
        <TextInput
          style={[styles.input, style]}
          value={date ? date.toLocaleDateString("pt-BR") : ""}
          placeholder={placeholder || "Selecione a data"}
          placeholderTextColor="#A1A2A1"
          editable={false}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default DataPicker;