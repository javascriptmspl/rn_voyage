import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from "react-native";
import { RegularText } from "./MyText";

type InputProps = {
  placeholder: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  title?: string;
};
const Input = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
  title,
}: InputProps) => {
  return (
    <View style={[{ width: "100%" }, inputWrapperStyle, { marginTop: 15 }]}>
      <Text
        style={{
          marginBottom: -5,
          marginLeft: 3,
          color: "black",
          fontWeight: "500",
          fontSize: 17,
        }}
      >
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        style={[
          {
            borderBottomColor: "lightgray",
            borderBottomWidth: 2,
            marginBottom: 5,
            color: "gray",
            fontSize: 14,
            borderRadius: 5,
            height: 45,
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input;
