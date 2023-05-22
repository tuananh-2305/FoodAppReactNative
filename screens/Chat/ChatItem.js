import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors, fontSizes } from "../../contants";
export default function ChatItem(props) {
  const { user, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 75,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
      <View>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "cover",
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmOuyJgJGmzpRZTqa_eI9xvNcezIHVRkQvA&usqp=CAU",
          }}
        />
        {user.numberOfUnreadMessages > 0 && (
          <Text
            style={{
              backgroundColor: "red",
              position: "absolute",
              right: 7,
              fontSize: fontSizes.h6 * 0.8,
              borderRadius: 10,
              paddingHorizontal: user.numberOfUnreadMessages > 9 ? 2 : 4,
              color: "white",
            }}
          >
            {user.numberOfUnreadMessages}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: fontSizes.h5,
            fontWeight: "bold",
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.inactive,
            width: 220,
          }}
        >
          {user.message.length > 25
            ? user.message.slice(0, 25).concat(" .....")
            : user.message}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: fontSizes.h6,
            marginRight: 10,
          }}
        >
          4 minutes ago
        </Text>
      </View>
    </TouchableOpacity>
  );
}
