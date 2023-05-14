import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../contants";

export default function UIButton(props) {
  const { onPress, title, isSelected } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderColor: "#fff",
          borderWidth: 2,
          height: 45,
          borderRadius: 5,
          marginHorizontal: 15,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isSelected
            ? "#fff"
            : null || title === "LOGIN"
            ? "#e2e2e2"
            : null,
          flexDirection: "row",
        }}
      >
        {isSelected && (
          <AntDesign
            name="checkcircleo"
            style={{
              position: "absolute",
              left: 15,
              fontSize: 18,
              color: "#08a3ff",
            }}
          />
        )}
        <Text
          style={{
            textAlign: "center",
            color: isSelected ? colors.primary : "#333",
            fontWeight: 600,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
