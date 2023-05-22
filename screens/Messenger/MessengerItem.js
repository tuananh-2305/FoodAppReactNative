import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors, fontSizes } from "../../contants";
import { windowWidth } from "../../utilies/Device";
export default function MessengerItem(props) {
  const { item, onPress } = props;
  return item.isSender ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {item.showUrl ? (
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "cover",
            borderRadius: 20,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: item.url,
          }}
        />
      ) : (
        <View
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
            marginStart: 10,
          }}
        />
      )}
      <View
        style={{
          flexDirection: "row",
          width: windowWidth * 0.7,
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h6,
              paddingVertical: 7,
              paddingHorizontal: 10,
              backgroundColor: colors.message,
              borderRadius: 10,
              lineHeight: 18,
            }}
          >
            {item.messenger}
          </Text>
        </View>
        <View style={{ width: 20 }}></View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: windowWidth * 0.7,
        }}
      >
        <View style={{ width: 40 }}></View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h6,
              paddingVertical: 5,
              paddingHorizontal: 7,
              backgroundColor: colors.message,
              borderRadius: 10,
            }}
          >
            {item.messenger}
          </Text>
        </View>
      </View>
      {item.showUrl ? (
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "cover",
            borderRadius: 20,
            marginHorizontal: 15,
          }}
          source={{
            uri: item.url,
          }}
        />
      ) : (
        <View
          style={{
            width: 40,
            height: 40,
            marginHorizontal: 15,
          }}
        />
      )}
    </TouchableOpacity>
  );
}
