import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { Register, Login, Welcome, Messenger, Profile } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UITab from "./navigation/UITab";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={{ flex: 100 }}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UITab" component={UITab} />
        <Stack.Screen name="Messenger" component={Messenger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   top: {
//     marginTop: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
