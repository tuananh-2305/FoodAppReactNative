import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FoodList, Profile, Settings } from "../screens";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, fontSizes } from "../contants";
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.placeholder,
  tabBarActiveBackgroundColor: colors.setting,
  tabBarInactiveBackgroundColor: colors.setting,
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        style={{
          paddingTop: 5,
        }}
        name={
          route.name == "FoodList"
            ? "beer"
            : route.name == "Profile"
            ? "user"
            : route.name == "Settings"
            ? "cogs"
            : ""
        }
        size={23}
        color={focused ? colors.white : colors.placeholder}
      />
    );
  },
});
export default function UITab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={"FoodList"}
        component={FoodList}
        options={{
          tabBarLabel: "Foods",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
