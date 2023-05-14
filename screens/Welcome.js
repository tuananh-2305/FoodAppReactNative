import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { icons, fontSizes } from "../contants";

import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import images from "./../contants/images";
import { UIButton } from "../components";
export default function Welcome(props) {
  const [buttonType, setButtonType] = useState([
    { name: "Influencer", isSelected: true },
    { name: "Business", isSelected: false },
    { name: "Individual", isSelected: false },
  ]);
  const { navigation, router } = props;
  const { navigate, goBack } = navigation;
  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ flex: 20 }}>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            marginTop: 25,
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={icons.fire}
            style={{ width: 25, height: 25, marginEnd: 10 }}
          />
          <Text>YOUR COMPANY</Text>
          <View style={{ flex: 1 }}></View>
          <AntDesign
            name="questioncircleo"
            style={{ fontSize: 20, justifyContent: "flex-end" }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ marginBottom: 7, fontSize: fontSizes.h5 }}>Welcome</Text>
        <Text
          style={{ marginBottom: 7, fontWeight: 700, fontSize: fontSizes.h3 }}
        >
          YOURCOMPANY.CO!
        </Text>
        <Text style={{ marginBottom: 7, fontSize: fontSizes.h5 }}>
          Please select your account type
        </Text>
      </View>
      <View style={{ flex: 40 }}>
        {buttonType.map((buttonItem, index) => {
          return (
            <UIButton
              onPress={() => {
                setButtonType(
                  buttonType.map((newButton) => {
                    return {
                      ...newButton,
                      isSelected: newButton.name == buttonItem.name,
                    };
                  })
                );
              }}
              title={buttonItem.name}
              isSelected={buttonItem.isSelected}
              key={index}
            />
          );
        })}
      </View>
      <View style={{ flex: 20 }}>
        <UIButton title="LOGIN" onPress={() => navigate("Login")} />
        <Text
          style={{
            textAlign: "center",
            fontSize: fontSizes.h4,
            color: "white",
          }}
        >
          Want to register new Account?
        </Text>
        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: fontSizes.h4,
              color: "white",
              textDecorationLine: "underline",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
