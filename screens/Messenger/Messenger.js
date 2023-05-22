import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { colors } from "../../contants";
import { UIHeader } from "../../components";
import { Icon } from "react-native-vector-icons/FontAwesome5";
import MessengerItem from "./MessengerItem";
export default function Messenger(props) {
  const chatHistory = [
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: true,
      isSender: true,
      messenger: "Hello",
      timestamp: 1641654238000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: true,
      messenger: "How are you ?",
      timestamp: 1641654298000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: true,
      messenger:
        "How about your work ?. nujdhsfuhduf dhuhu uhuh uhfudhufduhu hufhfd",
      timestamp: 1641654538000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: true,
      isSender: false,
      messenger: "Yes",
      timestamp: 1641654598000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: false,
      isSender: false,
      messenger: "I am fine",
      timestamp: 1641654598000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: true,
      isSender: true,
      messenger: "Let's go out",
      timestamp: 1641654778000,
    },
  ];
  const { user } = props.route.params;
  const { navigate, goBack } = props.navigation;
  return (
    <View style={{ flex: 1, top: 25 }}>
      <UIHeader
        title={user.name}
        leftIcon={"arrow-left"}
        rightIcon={"ellipsis-v"}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {
          alert("press right icon");
        }}
      />
      <FlatList
        style={{
          flex: 1,
          marginTop: 15,
        }}
        data={chatHistory}
        renderItem={({ item }) => (
          <MessengerItem
            onPress={() => {
              alert(`You press item's name: ${item.timestamp}`);
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
    </View>
  );
}
