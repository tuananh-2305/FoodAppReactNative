import { View, Text } from "react-native";
import { colors, fontSizes } from "../contants";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function UIHeader(props) {
  const { title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon } =
    props;
  return (
    <View
      style={{
        height: 50,
        backgroundColor: colors.setting,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
      }}
    >
      {leftIcon != undefined ? (
        <Icon
          name={leftIcon}
          style={{ padding: 10 }}
          size={20}
          color={"white"}
          onPress={onPressLeftIcon}
        />
      ) : (
        <View style={{ width: 50, height: 50 }} />
      )}
      <Text
        style={{
          fontSize: fontSizes.h3,
          alignSelf: "center",
          lineHeight: 45,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      {rightIcon != undefined ? (
        <Icon
          name={rightIcon}
          style={{ padding: 10 }}
          size={18}
          color={"white"}
          onPress={onPressRightIcon}
        />
      ) : (
        <View style={{ width: 50, height: 50 }} />
      )}
    </View>
  );
}
