import { View, Text, FlatList } from "react-native";
import { UIHeader } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { fontSizes, colors } from "../../contants";
import ChatItem from "./ChatItem";
export default function Chat(props) {
  const user = [
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "Tuan Anh",
      message: "Hello, How are you?",
      numberOfUnreadMessages: 1,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "David",
      message: "I fine ",
      numberOfUnreadMessages: 0,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "Bo",
      numberOfUnreadMessages: 2,
      message:
        "How about your work ?. How about your work ?. How about your work ?. nujdhsfuhduf dhuhu uhuh uhfudhufduhu hufhf",
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      name: "Messi",
      numberOfUnreadMessages: 3,
      message: "Yes",
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      name: "John Stone",
      message: "Hello",
      numberOfUnreadMessages: 1,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "Maguire",
      message: "No",
      numberOfUnreadMessages: 0,
    },
  ];

  const { navigation, router } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={{ top: 25 }}>
      <UIHeader
        title={"Notifications"}
        rightIcon={"search"}
        onPressLeftIcon={() => {
          alert("press left icon");
        }}
        onPressRightIcon={() => {
          alert("press right icon");
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingStart: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: fontSizes.h6,
            marginStart: 10,
          }}
        >
          6 unread messages
        </Text>
        <Icon
          name={"search"}
          style={{ padding: 15 }}
          size={15}
          color={"black"}
          onPress={() => {
            alert("You pressed Delete");
          }}
        />
      </View>
      {
        <FlatList
          data={user}
          renderItem={({ item }) => {
            return (
              <ChatItem
                key={user.name}
                user={item}
                onPress={() => {
                  // alert(`You press item's ${item.name}`);
                  navigate("Messenger", { user: item });
                }}
              />
            );
          }}
          keyExtractor={(user) => user.name}
        />
      }
    </View>
  );
}
