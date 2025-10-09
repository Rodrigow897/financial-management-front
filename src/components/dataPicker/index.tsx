import { MaterialIcons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  Button,
  Platform,
  Pressable,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import styles from "./styles";

type Props = TextInputProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  placeholder?: string;
  style?: any;
  edit?: boolean,
  placholderColor?: string;
};

export function DataPicker({
  icon = "calendar-today",
  style,
  placeholder,
  editable,
  placeholderTextColor,
}: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
      if (selectedDate) setDate(selectedDate);
    } else {
      // iOS: apenas atualiza data temporária
      if (selectedDate) setTempDate(selectedDate);
    }
  };

  const confirmIOSDate = () => {
    setDate(tempDate);
    setShowPicker(false);
  };

  const showDatePicker = () => {
    if (Platform.OS === "ios") {
      setTempDate(date || new Date());
    }
    setShowPicker(true);
  };

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
      <Pressable onPress={showDatePicker}
        disabled={!editable}>
          
        <TextInput
          style={[styles.input, style]}
          value={date ? date.toLocaleDateString("pt-BR") : ""}
          placeholder={placeholder || "Selecione a data"}
          placeholderTextColor={placeholderTextColor || "#676767"}
          editable={editable}
          pointerEvents="none"
        />
      </Pressable>

      {showPicker && (
        <View style={styles.containerPicker}>
          {Platform.OS === "ios" && (
            <>
              <RNDateTimePicker
                value={tempDate}
                mode="date"
                display="default"
                onChange={onChange}
                style={{ backgroundColor: "black" }}
              />
              <View style={{ marginTop: 10 }}>
                <Button title="Confirmar" onPress={confirmIOSDate} />
              </View>
            </>
          )}

          {Platform.OS === "android" && (
            <RNDateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default DataPicker;
